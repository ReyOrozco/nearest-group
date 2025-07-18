"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, Upload, Camera, MapPin } from "lucide-react"

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
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Tipos para las actualizaciones de embarques
type ShipmentStatus = "En Tránsito" | "Entregado" | "Programado" | "Retrasado" | "Cancelado"

interface Shipment {
  id: string
  client: string
  origin: string
  destination: string
  date: string
  estimatedDelivery: string
  location: string
  eta: string
  status: ShipmentStatus
  lastUpdate: string
}

// Datos de ejemplo
const shipmentsData: Shipment[] = [
  {
    id: "NG-123456789",
    client: "Acme Inc.",
    origin: "CDMX",
    destination: "Monterrey",
    date: "15/04/2025",
    estimatedDelivery: "17/04/2025",
    location: "Saltillo, Coahuila",
    eta: "17/04/2025 14:30",
    status: "En Tránsito",
    lastUpdate: "16/04/2025 10:15",
  },
  {
    id: "NG-123456788",
    client: "TechCorp",
    origin: "Guadalajara",
    destination: "CDMX",
    date: "16/04/2025",
    estimatedDelivery: "18/04/2025",
    location: "Guadalajara, Jalisco",
    eta: "18/04/2025 12:00",
    status: "Programado",
    lastUpdate: "16/04/2025 08:30",
  },
  {
    id: "NG-123456787",
    client: "Global Traders",
    origin: "CDMX",
    destination: "Cancún",
    date: "14/04/2025",
    estimatedDelivery: "16/04/2025",
    location: "Puebla, Puebla",
    eta: "17/04/2025 10:00",
    status: "Retrasado",
    lastUpdate: "15/04/2025 18:45",
  },
  {
    id: "NG-123456786",
    client: "Distribuciones XYZ",
    origin: "Monterrey",
    destination: "CDMX",
    date: "13/04/2025",
    estimatedDelivery: "15/04/2025",
    location: "CDMX",
    eta: "15/04/2025 16:30",
    status: "Entregado",
    lastUpdate: "15/04/2025 16:30",
  },
]

export default function ShipmentUpdatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
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

    return matchesSearch && matchesStatus
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
        <h1 className="text-2xl font-bold">Actualizaciones de Embarques</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Subir Actualización Masiva
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
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Embarques Activos</CardTitle>
          <CardDescription>{filteredShipments.length} embarques encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b bg-muted/50 p-4 font-medium">
              <div className="col-span-1">ID</div>
              <div className="col-span-1">Cliente</div>
              <div className="col-span-1">Origen - Destino</div>
              <div className="col-span-1">Ubicación Actual</div>
              <div className="col-span-1">ETA</div>
              <div className="col-span-1">Estado</div>
              <div className="col-span-1 text-right">Acciones</div>
            </div>
            {filteredShipments.map((shipment) => (
              <div key={shipment.id} className="grid grid-cols-7 border-b p-4">
                <div className="col-span-1 font-medium">{shipment.id}</div>
                <div className="col-span-1">{shipment.client}</div>
                <div className="col-span-1">
                  {shipment.origin} → {shipment.destination}
                </div>
                <div className="col-span-1">{shipment.location}</div>
                <div className="col-span-1">{shipment.eta}</div>
                <div className="col-span-1">
                  <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedShipment(shipment)
                      setIsUpdateDialogOpen(true)
                    }}
                  >
                    Actualizar
                  </Button>
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
                <Label>Evidencia Fotográfica</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Subir Foto
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Camera className="mr-2 h-4 w-4" />
                      Tomar Foto
                    </Button>
                  </div>
                  <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Arrastra y suelta fotos aquí</p>
                      <p className="text-xs text-muted-foreground">o usa los botones de arriba</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Ubicación GPS</Label>
                <div className="flex h-40 items-center justify-center rounded-md border">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Mapa de ubicación</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Obtener Ubicación Actual
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsUpdateDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsUpdateDialogOpen(false)}>Enviar Actualización</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
