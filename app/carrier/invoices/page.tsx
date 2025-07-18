"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, MoreHorizontal, Upload, Download, DollarSign, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Tipos para las facturas
type InvoiceStatus = "Pendiente" | "Pagada" | "Rechazada" | "En Revisión"

interface Invoice {
  id: string
  shipmentId: string
  client: string
  date: string
  dueDate: string
  amount: number
  status: InvoiceStatus
  notes?: string
}

// Datos de ejemplo
const invoicesData: Invoice[] = [
  {
    id: "FAC-001",
    shipmentId: "NG-123456780",
    client: "Acme Inc.",
    date: "01/04/2025",
    dueDate: "01/05/2025",
    amount: 15230.0,
    status: "Pendiente",
  },
  {
    id: "FAC-002",
    shipmentId: "NG-123456781",
    client: "TechCorp",
    date: "05/04/2025",
    dueDate: "05/05/2025",
    amount: 18450.0,
    status: "Pendiente",
  },
  {
    id: "FAC-003",
    shipmentId: "NG-123456782",
    client: "Global Traders",
    date: "10/04/2025",
    dueDate: "10/05/2025",
    amount: 11550.0,
    status: "Pagada",
    notes: "Pago recibido el 20/04/2025",
  },
  {
    id: "FAC-004",
    shipmentId: "NG-123456783",
    client: "Distribuciones XYZ",
    date: "15/04/2025",
    dueDate: "15/05/2025",
    amount: 9870.0,
    status: "En Revisión",
    notes: "Pendiente de verificación de documentos",
  },
  {
    id: "FAC-005",
    shipmentId: "NG-123456784",
    client: "Manufacturas ABC",
    date: "20/04/2025",
    dueDate: "20/05/2025",
    amount: 22340.0,
    status: "Rechazada",
    notes: "Falta documentación de entrega",
  },
]

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // Filtrar facturas
  const filteredInvoices = invoicesData.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.shipmentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "Pagada":
        return "bg-green-100 text-green-800"
      case "Rechazada":
        return "bg-red-100 text-red-800"
      case "En Revisión":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Calcular totales
  const totalPending = filteredInvoices
    .filter((invoice) => invoice.status === "Pendiente")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  const totalPaid = filteredInvoices
    .filter((invoice) => invoice.status === "Pagada")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Facturación</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Subir Factura
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Subir Nueva Factura</DialogTitle>
              <DialogDescription>Complete el formulario para subir una nueva factura</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="shipmentId">ID de Embarque</Label>
                <Select>
                  <SelectTrigger id="shipmentId">
                    <SelectValue placeholder="Seleccionar embarque" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NG-123456789">NG-123456789</SelectItem>
                    <SelectItem value="NG-123456788">NG-123456788</SelectItem>
                    <SelectItem value="NG-123456787">NG-123456787</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="invoiceNumber">Número de Factura</Label>
                  <Input id="invoiceNumber" placeholder="FAC-XXX" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Monto</Label>
                  <Input id="amount" type="number" placeholder="0.00" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Fecha de Emisión</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
                  <Input id="dueDate" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Información adicional sobre la factura" />
              </div>
              <div className="grid gap-2">
                <Label>Archivo de Factura</Label>
                <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                  <div className="text-center">
                    <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Arrastra y suelta tu factura aquí</p>
                    <p className="text-xs text-muted-foreground">o</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Seleccionar Archivo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>Subir Factura</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pendiente</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPending.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {filteredInvoices.filter((i) => i.status === "Pendiente").length} facturas pendientes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pagado</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPaid.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {filteredInvoices.filter((i) => i.status === "Pagada").length} facturas pagadas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Vencimiento</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">01/05/2025</div>
            <p className="text-xs text-muted-foreground">FAC-001 - $15,230.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio de Pago</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 días</div>
            <p className="text-xs text-muted-foreground">Últimos 3 meses</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por ID, embarque, cliente..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-10 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filtros</span>
                <ChevronDown className="h-3.5 w-3.5" />
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
                      <SelectItem value="Pendiente">Pendiente</SelectItem>
                      <SelectItem value="Pagada">Pagada</SelectItem>
                      <SelectItem value="Rechazada">Rechazada</SelectItem>
                      <SelectItem value="En Revisión">En Revisión</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todas las Facturas</CardTitle>
          <CardDescription>{filteredInvoices.length} facturas encontradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b bg-muted/50 p-4 font-medium">
              <div className="col-span-1">ID Factura</div>
              <div className="col-span-1">Embarque</div>
              <div className="col-span-1">Cliente</div>
              <div className="col-span-1">Fecha</div>
              <div className="col-span-1">Vencimiento</div>
              <div className="col-span-1">Monto</div>
              <div className="col-span-1">Estado</div>
            </div>
            {filteredInvoices.map((invoice) => (
              <div key={invoice.id} className="grid grid-cols-7 border-b p-4">
                <div className="col-span-1 font-medium">{invoice.id}</div>
                <div className="col-span-1">{invoice.shipmentId}</div>
                <div className="col-span-1">{invoice.client}</div>
                <div className="col-span-1">{invoice.date}</div>
                <div className="col-span-1">{invoice.dueDate}</div>
                <div className="col-span-1">${invoice.amount.toFixed(2)}</div>
                <div className="col-span-1 flex items-center justify-between">
                  <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Acciones</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar PDF
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Enviar recordatorio</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
            {filteredInvoices.length === 0 && (
              <div className="flex h-24 items-center justify-center">
                <p className="text-muted-foreground">No se encontraron facturas</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
