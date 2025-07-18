"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  ChevronDown,
  FileText,
  Filter,
  Home,
  LogOut,
  MapPin,
  Package,
  Plus,
  Search,
  Settings,
  Truck,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ShipmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [serviceFilter, setServiceFilter] = useState("all")
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)
  const [showShipmentDetails, setShowShipmentDetails] = useState(false)

  const shipments = [
    {
      id: "NG-123456789",
      origin: "CDMX",
      destination: "Monterrey",
      service: "Terrestre FTL",
      status: "En Tránsito",
      date: "15/04/2025",
      estimatedDelivery: "17/04/2025",
      location: "Saltillo, Coahuila",
      eta: "17/04/2025 14:30",
      progress: 65,
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
      origin: "Guadalajara",
      destination: "CDMX",
      service: "Terrestre LTL",
      status: "Entregado",
      date: "10/04/2025",
      estimatedDelivery: "12/04/2025",
      location: "CDMX",
      eta: "12/04/2025 15:45",
      progress: 100,
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
      origin: "Miami",
      destination: "CDMX",
      service: "Aéreo Priority",
      status: "En Tránsito",
      date: "14/04/2025",
      estimatedDelivery: "16/04/2025",
      location: "En vuelo MIA-MEX",
      eta: "16/04/2025 08:15",
      progress: 50,
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
      origin: "Shanghai",
      destination: "Veracruz",
      service: "Marítimo FCL",
      status: "En Tránsito",
      date: "01/04/2025",
      estimatedDelivery: "30/04/2025",
      location: "Océano Pacífico",
      eta: "30/04/2025 10:00",
      progress: 35,
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
      origin: "CDMX",
      destination: "Cancún",
      service: "Terrestre FTL",
      status: "Entregado",
      date: "05/04/2025",
      estimatedDelivery: "07/04/2025",
      location: "Cancún, Q. Roo",
      eta: "07/04/2025 12:30",
      progress: 100,
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
      origin: "CDMX",
      destination: "Tijuana",
      service: "Terrestre FTL",
      status: "Programado",
      date: "20/04/2025",
      estimatedDelivery: "23/04/2025",
      location: "CDMX",
      eta: "23/04/2025 18:00",
      progress: 10,
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
      origin: "Los Angeles",
      destination: "CDMX",
      service: "Aéreo Economy",
      status: "En Tránsito",
      date: "12/04/2025",
      estimatedDelivery: "15/04/2025",
      location: "En vuelo LAX-MEX",
      eta: "15/04/2025 10:30",
      progress: 60,
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
      origin: "CDMX",
      destination: "Mérida",
      service: "Terrestre LTL",
      status: "Entregado",
      date: "02/04/2025",
      estimatedDelivery: "05/04/2025",
      location: "Mérida, Yucatán",
      eta: "05/04/2025 11:15",
      progress: 100,
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

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.service.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && shipment.status !== "Entregado") ||
      shipment.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesService =
      serviceFilter === "all" || shipment.service.toLowerCase().includes(serviceFilter.toLowerCase())

    return matchesSearch && matchesStatus && matchesService
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Entregado":
        return <Badge className="bg-green-500">Entregado</Badge>
      case "En Tránsito":
        return <Badge className="bg-amber-500">En Tránsito</Badge>
      case "Programado":
        return <Badge className="bg-blue-500">Programado</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const handleViewShipment = (id: string) => {
    setSelectedShipment(id)
    setShowShipmentDetails(true)
  }

  const selectedShipmentData = shipments.find((s) => s.id === selectedShipment)

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Package className="h-6 w-6" />
              <span>Nearest Group</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/portal/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Inicio
              </Link>
              <Link
                href="/portal/dashboard/shipments"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Truck className="h-4 w-4" />
                Embarques
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">8</Badge>
              </Link>
              <Link
                href="/portal/dashboard/account"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Estado de Cuenta
              </Link>
              <Link
                href="/portal/dashboard/metrics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BarChart3 className="h-4 w-4" />
                Métricas
              </Link>
              <Link
                href="/portal/dashboard/request"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Plus className="h-4 w-4" />
                Solicitar Servicio
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <div className="flex items-center gap-2 rounded-lg border p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">Acme Inc.</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Cerrar sesión</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[60px] items-center gap-4 border-b bg-background px-6">
          <Link href="#" className="lg:hidden">
            <Package className="h-6 w-6" />
            <span className="sr-only">Inicio</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por ID, origen, destino..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Configuración</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Embarques</h1>
              <p className="text-muted-foreground">Gestione y rastree todos sus envíos en tiempo real</p>
            </div>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filtrar</span>
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
                          <SelectItem value="active">Activos</SelectItem>
                          <SelectItem value="en tránsito">En Tránsito</SelectItem>
                          <SelectItem value="entregado">Entregado</SelectItem>
                          <SelectItem value="programado">Programado</SelectItem>
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
                          <SelectItem value="terrestre">Terrestre</SelectItem>
                          <SelectItem value="aéreo">Aéreo</SelectItem>
                          <SelectItem value="marítimo">Marítimo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button size="sm" className="h-8">
                <Plus className="mr-2 h-3.5 w-3.5" />
                Nuevo Embarque
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Todos los Embarques</CardTitle>
              <CardDescription>{filteredShipments.length} embarques encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tracking</TableHead>
                    <TableHead>Origen</TableHead>
                    <TableHead>Destino</TableHead>
                    <TableHead>Servicio</TableHead>
                    <TableHead>Ubicación Actual</TableHead>
                    <TableHead>ETA</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Progreso</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {shipment.origin}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {shipment.destination}
                        </div>
                      </TableCell>
                      <TableCell>{shipment.service}</TableCell>
                      <TableCell>{shipment.location}</TableCell>
                      <TableCell>{shipment.eta}</TableCell>
                      <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                      <TableCell>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-full">
                                <Progress value={shipment.progress} className="h-2" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{shipment.progress}% completado</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleViewShipment(shipment.id)}>
                          Ver detalles
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Modal de detalles del embarque */}
      <Dialog open={showShipmentDetails} onOpenChange={setShowShipmentDetails}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Detalles del Embarque {selectedShipment}</DialogTitle>
            <DialogDescription>Información detallada y seguimiento del embarque</DialogDescription>
          </DialogHeader>
          {selectedShipmentData && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Información General</h3>
                  <div className="mt-2 grid gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">ID:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Origen:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Destino:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Servicio:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Estado:</span>
                      <Badge className={selectedShipmentData.status === "Entregado" ? "bg-green-500" : "bg-amber-500"}>
                        {selectedShipmentData.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Ubicación Actual:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">ETA:</span>
                      <span className="text-sm font-medium">{selectedShipmentData.eta}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Mapa de Ubicación</h3>
                  <div className="mt-2 flex h-[200px] items-center justify-center rounded-md border bg-muted">
                    <MapPin className="h-8 w-8 text-muted-foreground" />
                    <span className="ml-2 text-sm text-muted-foreground">Mapa de ubicación</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Progreso del Embarque</h3>
                <div className="mt-2">
                  <Progress value={selectedShipmentData.progress} className="h-2" />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>Origen</span>
                    <span>{selectedShipmentData.progress}%</span>
                    <span>Destino</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Línea de Tiempo</h3>
                <div className="mt-4 space-y-4">
                  {selectedShipmentData.timeline.map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`mt-0.5 h-4 w-4 rounded-full ${event.completed ? "bg-green-500" : "border border-muted-foreground bg-background"}`}
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
