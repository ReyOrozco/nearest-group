"use client"

import { useState } from "react"
import { Calendar, Download, Edit, FileText, Grid, List, MoreHorizontal, Plus, Search, Trash } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Tipos para los contratos
type ContractStatus = "Activo" | "Pendiente" | "Vencido" | "Cancelado"
type ServiceType = "Terrestre" | "Aéreo" | "Marítimo" | "Almacenamiento"

interface Contract {
  id: string
  client: string
  provider?: string
  service: ServiceType
  subservice?: string
  route?: string
  startDate: string
  endDate: string
  status: ContractStatus
  value: number
  currency: string
  description?: string
}

// Datos de ejemplo
const contractsData: Contract[] = [
  {
    id: "CONT-001",
    client: "Acme Inc.",
    provider: "Transportes XYZ",
    service: "Terrestre",
    subservice: "FTL",
    route: "CDMX - Monterrey",
    startDate: "01/01/2025",
    endDate: "31/12/2025",
    status: "Activo",
    value: 250000,
    currency: "MXN",
    description: "Contrato anual para servicios de transporte terrestre FTL en la ruta CDMX - Monterrey.",
  },
  {
    id: "CONT-002",
    client: "TechCorp",
    provider: "Aero Express",
    service: "Aéreo",
    subservice: "Priority",
    route: "Miami - CDMX",
    startDate: "15/02/2025",
    endDate: "14/02/2026",
    status: "Activo",
    value: 180000,
    currency: "USD",
    description: "Contrato anual para servicios de transporte aéreo priority en la ruta Miami - CDMX.",
  },
  {
    id: "CONT-003",
    client: "Global Traders",
    provider: "Maritime Logistics",
    service: "Marítimo",
    subservice: "FCL",
    route: "Shanghai - Veracruz",
    startDate: "01/03/2025",
    endDate: "28/02/2026",
    status: "Activo",
    value: 320000,
    currency: "USD",
    description: "Contrato anual para servicios de transporte marítimo FCL en la ruta Shanghai - Veracruz.",
  },
  {
    id: "CONT-004",
    client: "Distribuciones XYZ",
    provider: "Almacenes Seguros",
    service: "Almacenamiento",
    subservice: "Almacén Fiscal",
    startDate: "01/04/2025",
    endDate: "31/03/2026",
    status: "Pendiente",
    value: 120000,
    currency: "MXN",
    description: "Contrato anual para servicios de almacenamiento fiscal.",
  },
  {
    id: "CONT-005",
    client: "Manufacturas ABC",
    provider: "Transportes Rápidos",
    service: "Terrestre",
    subservice: "LTL",
    route: "Guadalajara - CDMX",
    startDate: "15/01/2025",
    endDate: "14/01/2026",
    status: "Activo",
    value: 180000,
    currency: "MXN",
    description: "Contrato anual para servicios de transporte terrestre LTL en la ruta Guadalajara - CDMX.",
  },
  {
    id: "CONT-006",
    client: "Importadora 123",
    provider: "Aero Cargo",
    service: "Aéreo",
    subservice: "Economy",
    route: "Los Angeles - CDMX",
    startDate: "01/12/2024",
    endDate: "30/11/2025",
    status: "Vencido",
    value: 150000,
    currency: "USD",
    description: "Contrato anual para servicios de transporte aéreo economy en la ruta Los Angeles - CDMX.",
  },
  {
    id: "CONT-007",
    client: "Exportadora 456",
    provider: "Ocean Freight",
    service: "Marítimo",
    subservice: "LCL",
    route: "CDMX - Rotterdam",
    startDate: "15/03/2025",
    endDate: "14/03/2026",
    status: "Activo",
    value: 200000,
    currency: "EUR",
    description: "Contrato anual para servicios de transporte marítimo LCL en la ruta CDMX - Rotterdam.",
  },
  {
    id: "CONT-008",
    client: "Logística Internacional",
    provider: "Border Express",
    service: "Terrestre",
    subservice: "Transfer",
    route: "Laredo - CDMX",
    startDate: "01/02/2025",
    endDate: "31/01/2026",
    status: "Activo",
    value: 220000,
    currency: "USD",
    description: "Contrato anual para servicios de transporte terrestre transfer en la ruta Laredo - CDMX.",
  },
  {
    id: "CONT-009",
    client: "Comercializadora MNO",
    provider: "Almacenes Modernos",
    service: "Almacenamiento",
    subservice: "Cross-docking",
    startDate: "01/01/2024",
    endDate: "31/12/2024",
    status: "Vencido",
    value: 100000,
    currency: "MXN",
    description: "Contrato anual para servicios de cross-docking.",
  },
  {
    id: "CONT-010",
    client: "Distribuidora PQR",
    provider: "Air Freight Solutions",
    service: "Aéreo",
    subservice: "Charter",
    route: "Frankfurt - CDMX",
    startDate: "15/04/2025",
    endDate: "14/04/2026",
    status: "Pendiente",
    value: 400000,
    currency: "EUR",
    description: "Contrato anual para servicios de transporte aéreo charter en la ruta Frankfurt - CDMX.",
  },
]

function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [serviceFilter, setServiceFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  // Filtrar contratos
  const filteredContracts = contractsData.filter((contract) => {
    const matchesSearch =
      contract.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contract.provider && contract.provider.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (contract.route && contract.route.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = statusFilter === "all" || contract.status === statusFilter
    const matchesService = serviceFilter === "all" || contract.service === serviceFilter

    return matchesSearch && matchesStatus && matchesService
  })

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: ContractStatus) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "Vencido":
        return "bg-red-100 text-red-800"
      case "Cancelado":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Función para formatear moneda
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat("es-MX", { style: "currency", currency }).format(value)
  }

  // Renderizar la vista de lista
  const renderListView = () => (
    <Card>
      <CardHeader>
        <CardTitle>Todos los Contratos</CardTitle>
        <CardDescription>{filteredContracts.length} contratos encontrados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-8 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-1">ID</div>
            <div className="col-span-1">Cliente</div>
            <div className="col-span-1">Servicio</div>
            <div className="col-span-1">Ruta</div>
            <div className="col-span-1">Vigencia</div>
            <div className="col-span-1">Valor</div>
            <div className="col-span-1">Estado</div>
            <div className="col-span-1 text-right">Acciones</div>
          </div>
          {filteredContracts.map((contract) => (
            <div key={contract.id} className="grid grid-cols-8 border-b p-4">
              <div className="col-span-1 font-medium">{contract.id}</div>
              <div className="col-span-1">{contract.client}</div>
              <div className="col-span-1">
                {contract.service}
                {contract.subservice && <span className="text-xs text-muted-foreground"> ({contract.subservice})</span>}
              </div>
              <div className="col-span-1">{contract.route || "N/A"}</div>
              <div className="col-span-1">
                {contract.startDate} - {contract.endDate}
              </div>
              <div className="col-span-1">{formatCurrency(contract.value, contract.currency)}</div>
              <div className="col-span-1">
                <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
              </div>
              <div className="col-span-1 flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Acciones</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Renovar</DropdownMenuItem>
                    <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
          {filteredContracts.length === 0 && (
            <div className="flex h-24 items-center justify-center">
              <p className="text-muted-foreground">No se encontraron contratos</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

  // Renderizar la vista de tarjetas
  const renderGridView = () => (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredContracts.map((contract) => (
          <Card key={contract.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Acciones</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Renovar</DropdownMenuItem>
                    <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle className="text-lg">{contract.id}</CardTitle>
              <CardDescription>{contract.client}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium">Servicio</p>
                    <p className="text-sm text-muted-foreground">
                      {contract.service} {contract.subservice && `(${contract.subservice})`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Proveedor</p>
                    <p className="text-sm text-muted-foreground">{contract.provider || "N/A"}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Ruta</p>
                  <p className="text-sm text-muted-foreground">{contract.route || "N/A"}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium">Valor</p>
                    <p className="text-sm text-muted-foreground">{formatCurrency(contract.value, contract.currency)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vigencia</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {contract.startDate} - {contract.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredContracts.length === 0 && (
        <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
          <p className="text-muted-foreground">No se encontraron contratos</p>
        </div>
      )}
    </div>
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Contratos</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Contrato</DialogTitle>
              <DialogDescription>Complete el formulario para crear un nuevo contrato.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Select>
                    <SelectTrigger id="client">
                      <SelectValue placeholder="Seleccionar cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme">Acme Inc.</SelectItem>
                      <SelectItem value="techcorp">TechCorp</SelectItem>
                      <SelectItem value="global">Global Traders</SelectItem>
                      <SelectItem value="xyz">Distribuciones XYZ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="provider">Proveedor</Label>
                  <Select>
                    <SelectTrigger id="provider">
                      <SelectValue placeholder="Seleccionar proveedor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transportes">Transportes XYZ</SelectItem>
                      <SelectItem value="aero">Aero Express</SelectItem>
                      <SelectItem value="maritime">Maritime Logistics</SelectItem>
                      <SelectItem value="almacenes">Almacenes Seguros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="service">Servicio</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Seleccionar servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terrestre">Terrestre</SelectItem>
                      <SelectItem value="aereo">Aéreo</SelectItem>
                      <SelectItem value="maritimo">Marítimo</SelectItem>
                      <SelectItem value="almacenamiento">Almacenamiento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subservice">Subservicio</Label>
                  <Select>
                    <SelectTrigger id="subservice">
                      <SelectValue placeholder="Seleccionar subservicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ftl">FTL</SelectItem>
                      <SelectItem value="ltl">LTL</SelectItem>
                      <SelectItem value="priority">Priority</SelectItem>
                      <SelectItem value="fcl">FCL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="route">Ruta</Label>
                <Input id="route" placeholder="Origen - Destino" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Fecha de Inicio</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endDate">Fecha de Fin</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="value">Valor</Label>
                  <Input id="value" type="number" placeholder="0.00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="currency">Moneda</Label>
                  <Select defaultValue="MXN">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Seleccionar moneda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MXN">MXN</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Descripción del contrato" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button>Guardar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por ID, cliente, proveedor, ruta..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-10 gap-1">
                <FileText className="h-3.5 w-3.5" />
                <span>Filtros</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[200px] p-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Estado</h4>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="Activo">Activo</SelectItem>
                      <SelectItem value="Pendiente">Pendiente</SelectItem>
                      <SelectItem value="Vencido">Vencido</SelectItem>
                      <SelectItem value="Cancelado">Cancelado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Servicio</h4>
                  <Select value={serviceFilter} onValueChange={setServiceFilter}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Seleccionar servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="Terrestre">Terrestre</SelectItem>
                      <SelectItem value="Aéreo">Aéreo</SelectItem>
                      <SelectItem value="Marítimo">Marítimo</SelectItem>
                      <SelectItem value="Almacenamiento">Almacenamiento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4 mr-1" />
              Lista
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4 mr-1" />
              Tarjetas
            </Button>
          </div>
        </div>
      </div>

      {viewMode === "list" ? renderListView() : renderGridView()}
    </div>
  )
}

export default function Page() {
  return <ContractsPage />
}
