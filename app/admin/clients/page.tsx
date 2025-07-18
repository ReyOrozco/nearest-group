"use client"

import { useState } from "react"
import { Building, Edit, MoreHorizontal, Plus, Search, Trash, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

// Tipos para los clientes
type ClientStatus = "Activo" | "Inactivo" | "Pendiente"

interface Client {
  id: string
  name: string
  contactName: string
  email: string
  phone: string
  address: string
  status: ClientStatus
  type: string
  registrationDate: string
  notes?: string
}

// Datos de ejemplo
const clientsData: Client[] = [
  {
    id: "CLI-001",
    name: "Acme Inc.",
    contactName: "Juan Pérez",
    email: "juan.perez@acme.com",
    phone: "+52 55 1234 5678",
    address: "Av. Reforma 123, CDMX",
    status: "Activo",
    type: "Corporativo",
    registrationDate: "01/01/2025",
    notes: "Cliente corporativo con múltiples servicios contratados.",
  },
  {
    id: "CLI-002",
    name: "TechCorp",
    contactName: "María González",
    email: "maria.gonzalez@techcorp.com",
    phone: "+52 55 8765 4321",
    address: "Av. Insurgentes 456, CDMX",
    status: "Activo",
    type: "Corporativo",
    registrationDate: "15/01/2025",
    notes: "Cliente con alto volumen de importaciones desde EE.UU.",
  },
  {
    id: "CLI-003",
    name: "Global Traders",
    contactName: "Roberto Sánchez",
    email: "roberto.sanchez@globaltraders.com",
    phone: "+52 81 1234 5678",
    address: "Av. Constitución 789, Monterrey",
    status: "Activo",
    type: "Corporativo",
    registrationDate: "01/02/2025",
    notes: "Cliente con operaciones internacionales en Asia y Europa.",
  },
  {
    id: "CLI-004",
    name: "Distribuciones XYZ",
    contactName: "Ana Rodríguez",
    email: "ana.rodriguez@xyz.com",
    phone: "+52 33 9876 5432",
    address: "Av. Patria 321, Guadalajara",
    status: "Inactivo",
    type: "PYME",
    registrationDate: "15/02/2025",
    notes: "Cliente con operaciones suspendidas temporalmente.",
  },
  {
    id: "CLI-005",
    name: "Manufacturas ABC",
    contactName: "Carlos Méndez",
    email: "carlos.mendez@abc.com",
    phone: "+52 55 2345 6789",
    address: "Calle Industrial 456, CDMX",
    status: "Activo",
    type: "Corporativo",
    registrationDate: "01/03/2025",
    notes: "Cliente del sector manufacturero con envíos regulares.",
  },
  {
    id: "CLI-006",
    name: "Importadora 123",
    contactName: "Laura Torres",
    email: "laura.torres@imp123.com",
    phone: "+52 81 3456 7890",
    address: "Blvd. Díaz Ordaz 789, Monterrey",
    status: "Pendiente",
    type: "PYME",
    registrationDate: "15/03/2025",
    notes: "Cliente en proceso de validación de documentos.",
  },
  {
    id: "CLI-007",
    name: "Exportadora 456",
    contactName: "Fernando López",
    email: "fernando.lopez@exp456.com",
    phone: "+52 33 4567 8901",
    address: "Av. López Mateos 123, Guadalajara",
    status: "Activo",
    type: "PYME",
    registrationDate: "01/04/2025",
    notes: "Cliente especializado en exportaciones a Centroamérica.",
  },
  {
    id: "CLI-008",
    name: "Logística Internacional",
    contactName: "Patricia Vázquez",
    email: "patricia.vazquez@logint.com",
    phone: "+52 55 5678 9012",
    address: "Av. Universidad 456, CDMX",
    status: "Activo",
    type: "Corporativo",
    registrationDate: "15/04/2025",
    notes: "Cliente con operaciones globales y alto volumen.",
  },
]

// Datos de ejemplo para solicitudes de acceso
const accessRequestsData = [
  {
    id: "ACC-001",
    name: "Empresa ABC",
    contactName: "Luis Hernández",
    email: "luis.hernandez@abc.com",
    phone: "+52 55 6789 0123",
    date: "15/04/2025",
    status: "Pendiente",
  },
  {
    id: "ACC-002",
    name: "Distribuidora XYZ",
    contactName: "Sofía Ramírez",
    email: "sofia.ramirez@xyz.com",
    phone: "+52 81 7890 1234",
    date: "14/04/2025",
    status: "Pendiente",
  },
  {
    id: "ACC-003",
    name: "Importaciones 123",
    contactName: "Miguel Ángel Torres",
    email: "miguel.torres@imp123.com",
    phone: "+52 33 8901 2345",
    date: "13/04/2025",
    status: "Pendiente",
  },
]

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState("clients")

  // Filtrar clientes
  const filteredClients = clientsData.filter((client) => {
    const matchesSearch =
      client.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesType = typeFilter === "all" || client.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: ClientStatus) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "Inactivo":
        return "bg-red-100 text-red-800"
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Clientes</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
              <DialogDescription>Complete el formulario para crear un nuevo cliente.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre de la Empresa</Label>
                <Input id="name" placeholder="Nombre de la empresa" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="contactName">Nombre de Contacto</Label>
                  <Input id="contactName" placeholder="Nombre completo" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Tipo de Cliente</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporativo">Corporativo</SelectItem>
                      <SelectItem value="pyme">PYME</SelectItem>
                      <SelectItem value="gobierno">Gobierno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="correo@empresa.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+52 (123) 456-7890" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Dirección completa" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Información adicional sobre el cliente" />
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

      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="access-requests">Solicitudes de Acceso</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por ID, nombre, contacto, email..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="Activo">Activo</SelectItem>
                <SelectItem value="Inactivo">Inactivo</SelectItem>
                <SelectItem value="Pendiente">Pendiente</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="Corporativo">Corporativo</SelectItem>
                <SelectItem value="PYME">PYME</SelectItem>
                <SelectItem value="Gobierno">Gobierno</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Todos los Clientes</CardTitle>
              <CardDescription>{filteredClients.length} clientes encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-1">Nombre</div>
                  <div className="col-span-1">Contacto</div>
                  <div className="col-span-1">Email</div>
                  <div className="col-span-1">Teléfono</div>
                  <div className="col-span-1">Estado</div>
                  <div className="col-span-1 text-right">Acciones</div>
                </div>
                {filteredClients.map((client) => (
                  <div key={client.id} className="grid grid-cols-7 border-b p-4 items-center">
                    <div className="col-span-1 font-medium truncate pr-2">{client.id}</div>
                    <div className="col-span-1 truncate pr-2">{client.name}</div>
                    <div className="col-span-1 truncate pr-2">{client.contactName}</div>
                    <div className="col-span-1 truncate pr-2">{client.email}</div>
                    <div className="col-span-1 truncate pr-2">{client.phone}</div>
                    <div className="col-span-1">
                      <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
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
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Ver embarques</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                          <DropdownMenuItem>Gestionar usuarios</DropdownMenuItem>
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
                {filteredClients.length === 0 && (
                  <div className="flex h-24 items-center justify-center">
                    <p className="text-muted-foreground">No se encontraron clientes</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="access-requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Solicitudes de Acceso Pendientes</CardTitle>
              <CardDescription>{accessRequestsData.length} solicitudes pendientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessRequestsData.map((request) => (
                  <div key={request.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{request.name}</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <User className="h-3.5 w-3.5" />
                            <span>{request.contactName}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{request.email}</div>
                        </div>
                        <p className="text-xs text-muted-foreground">Solicitado el {request.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        Rechazar
                      </Button>
                      <Button size="sm">Aprobar</Button>
                    </div>
                  </div>
                ))}
                {accessRequestsData.length === 0 && (
                  <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                    <p className="text-muted-foreground">No hay solicitudes pendientes</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
