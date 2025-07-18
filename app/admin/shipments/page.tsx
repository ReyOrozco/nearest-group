"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"

import { DialogDescription } from "@/components/ui/dialog"

import { DialogTitle } from "@/components/ui/dialog"

import { DialogHeader } from "@/components/ui/dialog"

import { DialogContent } from "@/components/ui/dialog"

import { Dialog } from "@/components/ui/dialog"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Download, Edit, Filter, MapPin, MoreHorizontal, Plus, Search } from "lucide-react"

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

// Tipos para los embarques
type ShipmentStatus = "En Tránsito" | "Entregado" | "Programado" | "Retrasado" | "Cancelado"
type ServiceType = "Terrestre" | "Aéreo" | "Marítimo" | "Almacenamiento"

interface Shipment {
  id: string
  client: string
  service: ServiceType
  subservice?: string
  origin: string
  destination: string
  date: string
  estimatedDelivery: string
  location: string
  eta: string
  status: ShipmentStatus
  progress: number
  assignedTo?: string
  timeline: {
    status: string
    date: string
    completed: boolean
  }[]
}

// Datos de ejemplo
const shipmentsData: Shipment[] = [
  {
    id: "NG-123456789",
    client: "Acme Inc.",
    service: "Terrestre",
    subservice: "FTL",
    origin: "CDMX",
    destination: "Monterrey",
    date: "15/04/2025",
    estimatedDelivery: "17/04/2025",
    location: "Saltillo, Coahuila",
    eta: "17/04/2025 14:30",
    status: "En Tránsito",
    progress: 65,
    assignedTo: "Carlos Méndez",
    timeline: [
      { status: "Solicitud Creada", date: "12/04/2025 09:15", completed: true },
      { status: "Cita de Carga", date: "15/04/2025 08:00", completed: true },
      { status: "Llegada a Origen", date: "15/04/2025 07:45", completed: true },
      { status: "Salida de Origen", date: "15/04/2025 10:30", completed: true },
      { status: "En Tránsito", date: "Actual", completed: true },
      { status: "Llegada a Destino", date: "17/04/2025 14:30", completed: false },
      { status: "Entrega Completada", date: "17/04/2025 16:00", completed: false },
    ],
  },
  {
    id: "NG-123456788",
    client: "TechCorp",
    service: "Terrestre",
    subservice: "LTL",
    origin: "Guadalajara",
    destination: "CDMX",
    date: "10/04/2025",
    estimatedDelivery: "12/04/2025",
    location: "CDMX",
    eta: "12/04/2025 15:45",
    status: "Entregado",
    progress: 100,
    assignedTo: "María González",
    timeline: [
      { status: "Solicitud Creada", date: "08/04/2025 11:20", completed: true },
      { status: "Cita de Carga", date: "10/04/2025 09:00", completed: true },
      { status: "Llegada a Origen", date: "10/04/2025 08:50", completed: true },
      { status: "Salida de Origen", date: "10/04/2025 11:15", completed: true },
      { status: "En Tránsito", date: "11/04/2025", completed: true },
      { status: "Llegada a Destino", date: "12/04/2025 15:30", completed: true },
      { status: "Entrega Completada", date: "12/04/2025 15:45", completed: true },
    ],
  },
  {
    id: "NG-123456787",
    client: "Global Traders",
    service: "Aéreo",
    subservice: "Priority",
    origin: "Miami",
    destination: "CDMX",
    date: "14/04/2025",
    estimatedDelivery: "16/04/2025",
    location: "En vuelo MIA-MEX",
    eta: "16/04/2025 08:15",
    status: "En Tránsito",
    progress: 50,
    assignedTo: "Juan Pérez",
    timeline: [
      { status: "Solicitud Creada", date: "13/04/2025 14:30", completed: true },
      { status: "Cita de Carga", date: "14/04/2025 10:00", completed: true },
      { status: "Llegada a Origen", date: "14/04/2025 09:45", completed: true },
      { status: "Salida de Origen", date: "14/04/2025 16:20", completed: true },
      { status: "En Tránsito", date: "Actual", completed: true },
      { status: "Llegada a Destino", date: "16/04/2025 08:15", completed: false },
      { status: "Entrega Completada", date: "16/04/2025 11:00", completed: false },
    ],
  },
  {
    id: "NG-123456786",
    client: "Distribuciones XYZ",
    service: "Marítimo",
    subservice: "FCL",
    origin: "Shanghai",
    destination: "Veracruz",
    date: "01/04/2025",
    estimatedDelivery: "30/04/2025",
    location: "Océano Pacífico",
    eta: "30/04/2025 10:00",
    status: "En Tránsito",
    progress: 35,
    assignedTo: "Ana Rodríguez",
    timeline: [
      { status: "Solicitud Creada", date: "25/03/2025 08:00", completed: true },
      { status: "Cita de Carga", date: "01/04/2025 09:00", completed: true },
      { status: "Llegada a Origen", date: "01/04/2025 08:30", completed: true },
      { status: "Salida de Origen", date: "01/04/2025 14:00", completed: true },
      { status: "En Tránsito", date: "Actual", completed: true },
      { status: "Llegada a Destino", date: "30/04/2025 10:00", completed: false },
      { status: "Entrega Completada", date: "30/04/2025 16:00", completed: false },
    ],
  },
  {
    id: "NG-123456785",
    client: "Manufacturas ABC",
    service: "Terrestre",
    subservice: "FTL",
    origin: "CDMX",
    destination: "Cancún",
    date: "05/04/2025",
    estimatedDelivery: "07/04/2025",
    location: "Cancún, Q. Roo",
    eta: "07/04/2025 12:30",
    status: "Entregado",
    progress: 100,
    assignedTo: "Roberto Sánchez",
    timeline: [
      { status: "Solicitud Creada", date: "03/04/2025 10:15", completed: true },
      { status: "Cita de Carga", date: "05/04/2025 08:00", completed: true },
      { status: "Llegada a Origen", date: "05/04/2025 07:50", completed: true },
      { status: "Salida de Origen", date: "05/04/2025 10:30", completed: true },
      { status: "En Tránsito", date: "06/04/2025", completed: true },
      { status: "Llegada a Destino", date: "07/04/2025 12:15", completed: true },
      { status: "Entrega Completada", date: "07/04/2025 12:30", completed: true },
    ],
  },
  {
    id: "NG-123456784",
    client: "Importadora 123",
    service: "Terrestre",
    subservice: "FTL",
    origin: "CDMX",
    destination: "Tijuana",
    date: "20/04/2025",
    estimatedDelivery: "23/04/2025",
    location: "CDMX",
    eta: "23/04/2025 18:00",
    status: "Programado",
    progress: 10,
    assignedTo: "Luis Hernández",
    timeline: [
      { status: "Solicitud Creada", date: "15/04/2025 14:20", completed: true },
      { status: "Cita de Carga", date: "20/04/2025 08:00", completed: false },
      { status: "Llegada a Origen", date: "Pendiente", completed: false },
      { status: "Salida de Origen", date: "Pendiente", completed: false },
      { status: "En Tránsito", date: "Pendiente", completed: false },
      { status: "Llegada a Destino", date: "Pendiente", completed: false },
      { status: "Entrega Completada", date: "Pendiente", completed: false },
    ],
  },
  {
    id: "NG-123456783",
    client: "Exportadora 456",
    service: "Aéreo",
    subservice: "Economy",
    origin: "Los Angeles",
    destination: "CDMX",
    date: "12/04/2025",
    estimatedDelivery: "15/04/2025",
    location: "En vuelo LAX-MEX",
    eta: "15/04/2025 10:30",
    status: "En Tránsito",
    progress: 60,
    assignedTo: "Patricia Vázquez",
    timeline: [
      { status: "Solicitud Creada", date: "10/04/2025 09:30", completed: true },
      { status: "Cita de Carga", date: "12/04/2025 07:00", completed: true },
      { status: "Llegada a Origen", date: "12/04/2025 06:45", completed: true },
      { status: "Salida de Origen", date: "12/04/2025 14:20", completed: true },
      { status: "En Tránsito", date: "Actual", completed: true },
      { status: "Llegada a Destino", date: "15/04/2025 10:30", completed: false },
      { status: "Entrega Completada", date: "15/04/2025 14:00", completed: false },
    ],
  },
  {
    id: "NG-123456782",
    client: "Logística Internacional",
    service: "Terrestre",
    subservice: "LTL",
    origin: "CDMX",
    destination: "Mérida",
    date: "02/04/2025",
    estimatedDelivery: "05/04/2025",
    location: "Mérida, Yucatán",
    eta: "05/04/2025 11:15",
    status: "Entregado",
    progress: 100,
    assignedTo: "Fernando Torres",
    timeline: [
      { status: "Solicitud Creada", date: "31/03/2025 15:45", completed: true },
      { status: "Cita de Carga", date: "02/04/2025 08:30", completed: true },
      { status: "Llegada a Origen", date: "02/04/2025 08:15", completed: true },
      { status: "Salida de Origen", date: "02/04/2025 11:00", completed: true },
      { status: "En Tránsito", date: "03/04/2025", completed: true },
      { status: "Llegada a Destino", date: "05/04/2025 10:45", completed: true },
      { status: "Entrega Completada", date: "05/04/2025 11:15", completed: true },
    ],
  },
]

export default function ShipmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [serviceFilter, setServiceFilter] = useState<string>("all")
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null)
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  // Filtrar embarques
  const filteredShipments = shipmentsData.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || shipment.status === statusFilter
    const matchesService = serviceFilter === "all" || shipment.service === serviceFilter

    return matchesSearch && matchesStatus && matchesService
  })

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: ShipmentStatus) => {
    switch (status) {
      case "En Tránsito":
        return "bg-blue-100 text-blue-800"
      case "Entregado":
        return "bg-green-100 text-green-800"
      case "Programado":
        return "bg-purple-100 text-purple-800"
      case "Retrasado":
        return "bg-red-100 text-red-800"
      case "Cancelado":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Embarques</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Embarque
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
                      <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                      <SelectItem value="Entregado">Entregado</SelectItem>
                      <SelectItem value="Programado">Programado</SelectItem>
                      <SelectItem value="Retrasado">Retrasado</SelectItem>
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
        <Tabs defaultValue="list" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="list">Lista</TabsTrigger>
            <TabsTrigger value="map">Mapa</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Todos los Embarques</CardTitle>
                <CardDescription>{filteredShipments.length} embarques encontrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-9 border-b bg-muted/50 p-4 font-medium">
                    <div className="col-span-1 flex items-center">
                      <Button variant="ghost" className="p-0 hover:bg-transparent">
                        <span>ID</span>
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="col-span-1">Cliente</div>
                    <div className="col-span-1">Servicio</div>
                    <div className="col-span-2">Origen - Destino</div>
                    <div className="col-span-1">Ubicación</div>
                    <div className="col-span-1">ETA</div>
                    <div className="col-span-1">Estado</div>
                    <div className="col-span-1 text-right">Acciones</div>
                  </div>
                  {filteredShipments.map((shipment) => (
                    <div key={shipment.id} className="grid grid-cols-9 border-b p-4">
                      <div className="col-span-1 font-medium">{shipment.id}</div>
                      <div className="col-span-1">{shipment.client}</div>
                      <div className="col-span-1">
                        {shipment.service}
                        {shipment.subservice && (
                          <span className="text-xs text-muted-foreground"> ({shipment.subservice})</span>
                        )}
                      </div>
                      <div className="col-span-2">
                        {shipment.origin} → {shipment.destination}
                      </div>
                      <div className="col-span-1">{shipment.location}</div>
                      <div className="col-span-1">{shipment.eta}</div>
                      <div className="col-span-1">
                        <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
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
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedShipment(shipment)
                                setIsUpdateDialogOpen(true)
                              }}
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Actualizar estado
                            </DropdownMenuItem>
                            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Exportar PDF
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Asignar operador</DropdownMenuItem>
                            <DropdownMenuItem>Notificar al cliente</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                  {filteredShipments.length === 0 && (
                    <div className="flex h-24 items-center justify-center">
                      <p className="text-muted-foreground">No se encontraron embarques</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Mapa de Embarques</CardTitle>
                <CardDescription>Visualización geográfica de embarques activos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[500px] items-center justify-center rounded-md border bg-muted/20">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Mapa de embarques en tiempo real</p>
                    <p className="text-xs text-muted-foreground">
                      (En un entorno de producción, aquí se integraría un mapa interactivo con la ubicación de los
                      embarques)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Diálogo para actualizar estado de embarque */}
      {selectedShipment && (
        <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Actualizar Estado del Embarque</DialogTitle>
              <DialogDescription>
                Embarque {selectedShipment.id} - {selectedShipment.client}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="status">Estado Actual</Label>
                <Select defaultValue={selectedShipment.status}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Seleccionar estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Programado">Programado</SelectItem>
                    <SelectItem value="En Tránsito">En Tránsito</SelectItem>
                    <SelectItem value="Retrasado">Retrasado</SelectItem>
                    <SelectItem value="Entregado">Entregado</SelectItem>
                    <SelectItem value="Cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Ubicación Actual</Label>
                <Input id="location" defaultValue={selectedShipment.location} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="eta">ETA (Fecha y Hora Estimada de Llegada)</Label>
                <Input id="eta" defaultValue={selectedShipment.eta} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notas de Actualización</Label>
                <Textarea id="notes" placeholder="Información adicional sobre la actualización" />
              </div>
              <div className="grid gap-2">
                <Label>Línea de Tiempo</Label>
                <div className="space-y-4">
                  {selectedShipment.timeline.map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`mt-0.5 h-4 w-4 rounded-full ${
                          event.completed ? "bg-green-500" : "border border-muted-foreground bg-background"
                        }`}
                      ></div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">{event.status}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsUpdateDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsUpdateDialogOpen(false)}>Guardar Cambios</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
