"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Download, Filter, MoreHorizontal, Plus, Search, Trash } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Tipos para las solicitudes
type RequestStatus = "Pendiente" | "En Proceso" | "Cotizado" | "Aprobado" | "Rechazado" | "Completado"
type ServiceType = "Terrestre" | "Aéreo" | "Marítimo" | "Almacenamiento"

interface Request {
  id: string
  client: string
  service: ServiceType
  subservice?: string
  origin?: string
  destination?: string
  date: string
  status: RequestStatus
  priority: "Alta" | "Media" | "Baja"
  assignedTo?: string
}

// Datos de ejemplo
const requestsData: Request[] = [
  {
    id: "REQ-001",
    client: "Acme Inc.",
    service: "Terrestre",
    subservice: "FTL",
    origin: "CDMX",
    destination: "Monterrey",
    date: "15/04/2025",
    status: "Pendiente",
    priority: "Alta",
    assignedTo: "Carlos Méndez",
  },
  {
    id: "REQ-002",
    client: "TechCorp",
    service: "Aéreo",
    subservice: "Priority",
    origin: "Miami",
    destination: "CDMX",
    date: "14/04/2025",
    status: "En Proceso",
    priority: "Alta",
    assignedTo: "María González",
  },
  {
    id: "REQ-003",
    client: "Global Traders",
    service: "Marítimo",
    subservice: "FCL",
    origin: "Shanghai",
    destination: "Veracruz",
    date: "13/04/2025",
    status: "Cotizado",
    priority: "Media",
    assignedTo: "Juan Pérez",
  },
  {
    id: "REQ-004",
    client: "Distribuciones XYZ",
    service: "Almacenamiento",
    subservice: "Almacén Fiscal",
    date: "12/04/2025",
    status: "Pendiente",
    priority: "Baja",
  },
  {
    id: "REQ-005",
    client: "Manufacturas ABC",
    service: "Terrestre",
    subservice: "LTL",
    origin: "Guadalajara",
    destination: "CDMX",
    date: "11/04/2025",
    status: "Aprobado",
    priority: "Media",
    assignedTo: "Ana Rodríguez",
  },
  {
    id: "REQ-006",
    client: "Importadora 123",
    service: "Aéreo",
    subservice: "Economy",
    origin: "Los Angeles",
    destination: "CDMX",
    date: "10/04/2025",
    status: "Completado",
    priority: "Media",
    assignedTo: "Roberto Sánchez",
  },
  {
    id: "REQ-007",
    client: "Exportadora 456",
    service: "Marítimo",
    subservice: "LCL",
    origin: "CDMX",
    destination: "Rotterdam",
    date: "09/04/2025",
    status: "En Proceso",
    priority: "Alta",
    assignedTo: "Luis Hernández",
  },
  {
    id: "REQ-008",
    client: "Logística Internacional",
    service: "Terrestre",
    subservice: "Transfer",
    origin: "Laredo",
    destination: "CDMX",
    date: "08/04/2025",
    status: "Pendiente",
    priority: "Alta",
  },
  {
    id: "REQ-009",
    client: "Comercializadora MNO",
    service: "Almacenamiento",
    subservice: "Cross-docking",
    date: "07/04/2025",
    status: "Rechazado",
    priority: "Baja",
    assignedTo: "Patricia Vázquez",
  },
  {
    id: "REQ-010",
    client: "Distribuidora PQR",
    service: "Aéreo",
    subservice: "Charter",
    origin: "Frankfurt",
    destination: "CDMX",
    date: "06/04/2025",
    status: "Cotizado",
    priority: "Media",
    assignedTo: "Fernando Torres",
  },
]

export default function RequestsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [serviceFilter, setServiceFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [currentTab, setCurrentTab] = useState("kanban")

  // Filtrar solicitudes
  const filteredRequests = requestsData.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (request.origin && request.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (request.destination && request.destination.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesService = serviceFilter === "all" || request.service === serviceFilter
    const matchesPriority = priorityFilter === "all" || request.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesService && matchesPriority
  })

  // Agrupar solicitudes por estado para la vista Kanban
  const groupedRequests = {
    Pendiente: filteredRequests.filter((r) => r.status === "Pendiente"),
    "En Proceso": filteredRequests.filter((r) => r.status === "En Proceso"),
    Cotizado: filteredRequests.filter((r) => r.status === "Cotizado"),
    Aprobado: filteredRequests.filter((r) => r.status === "Aprobado"),
    Completado: filteredRequests.filter((r) => r.status === "Completado"),
    Rechazado: filteredRequests.filter((r) => r.status === "Rechazado"),
  }

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "En Proceso":
        return "bg-blue-100 text-blue-800"
      case "Cotizado":
        return "bg-purple-100 text-purple-800"
      case "Aprobado":
        return "bg-green-100 text-green-800"
      case "Completado":
        return "bg-gray-100 text-gray-800"
      case "Rechazado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Función para obtener el color de la etiqueta de prioridad
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Media":
        return "bg-orange-100 text-orange-800"
      case "Baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Solicitudes</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Solicitud
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por ID, cliente, origen, destino..."
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
                      <SelectItem value="En Proceso">En Proceso</SelectItem>
                      <SelectItem value="Cotizado">Cotizado</SelectItem>
                      <SelectItem value="Aprobado">Aprobado</SelectItem>
                      <SelectItem value="Completado">Completado</SelectItem>
                      <SelectItem value="Rechazado">Rechazado</SelectItem>
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
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Prioridad</h4>
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Seleccionar prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="Alta">Alta</SelectItem>
                      <SelectItem value="Media">Media</SelectItem>
                      <SelectItem value="Baja">Baja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
            <TabsTrigger value="list">Lista</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban" className="mt-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {Object.entries(groupedRequests).map(([status, requests]) => (
                <Card key={status} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-medium">{status}</CardTitle>
                    <CardDescription>{requests.length} solicitudes</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2 p-4">
                      {requests.map((request) => (
                        <div
                          key={request.id}
                          className="rounded-md border bg-card p-3 shadow-sm transition-all hover:shadow"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium">{request.id}</span>
                            <Badge variant="outline" className={getPriorityColor(request.priority)}>
                              {request.priority}
                            </Badge>
                          </div>
                          <h3 className="mt-1 text-sm font-medium">{request.client}</h3>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">
                              {request.service}
                            </Badge>
                            {request.subservice && (
                              <Badge variant="outline" className="text-xs">
                                {request.subservice}
                              </Badge>
                            )}
                          </div>
                          {(request.origin || request.destination) && (
                            <p className="mt-2 text-xs text-muted-foreground">
                              {request.origin} → {request.destination}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{request.date}</span>
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
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Asignar</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                                <DropdownMenuItem>Exportar PDF</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                      {requests.length === 0 && (
                        <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                          <p className="text-sm text-muted-foreground">No hay solicitudes</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Todas las Solicitudes</CardTitle>
                <CardDescription>{filteredRequests.length} solicitudes encontradas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-8 border-b bg-muted/50 p-4 font-medium">
                    <div className="col-span-1 flex items-center">
                      <Button variant="ghost" className="p-0 hover:bg-transparent">
                        <span>ID</span>
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="col-span-1">Cliente</div>
                    <div className="col-span-1">Servicio</div>
                    <div className="col-span-2">Origen - Destino</div>
                    <div className="col-span-1">Fecha</div>
                    <div className="col-span-1">Estado</div>
                    <div className="col-span-1 text-right">Acciones</div>
                  </div>
                  {filteredRequests.map((request) => (
                    <div key={request.id} className="grid grid-cols-8 border-b p-4">
                      <div className="col-span-1 font-medium">{request.id}</div>
                      <div className="col-span-1">{request.client}</div>
                      <div className="col-span-1">
                        {request.service}
                        {request.subservice && (
                          <span className="text-xs text-muted-foreground"> ({request.subservice})</span>
                        )}
                      </div>
                      <div className="col-span-2">
                        {request.origin && request.destination ? `${request.origin} → ${request.destination}` : "N/A"}
                      </div>
                      <div className="col-span-1">{request.date}</div>
                      <div className="col-span-1">
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
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
                            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Asignar</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Exportar PDF
                            </DropdownMenuItem>
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
                  {filteredRequests.length === 0 && (
                    <div className="flex h-24 items-center justify-center">
                      <p className="text-muted-foreground">No se encontraron solicitudes</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
