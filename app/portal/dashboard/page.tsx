"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Box,
  Clock,
  FileText,
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)
  const [showShipmentDetails, setShowShipmentDetails] = useState(false)

  const shipments = [
    {
      id: "NG-123456789",
      origin: "CDMX",
      destination: "Monterrey",
      service: "Terrestre FTL",
      status: "En Tránsito",
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
  ]

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
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Inicio
              </Link>
              <Link
                href="/portal/dashboard/shipments"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                  placeholder="Buscar embarques..."
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Embarques Activos</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Entregas a Tiempo</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">+2% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Facturas Pendientes</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Servicios Completados</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-7">
              <CardHeader>
                <CardTitle>Embarques Recientes</CardTitle>
                <CardDescription>Seguimiento de sus últimos envíos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tracking</TableHead>
                      <TableHead>Origen - Destino</TableHead>
                      <TableHead>Servicio</TableHead>
                      <TableHead>Ubicación Actual</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Progreso</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shipments.map((shipment) => (
                      <TableRow key={shipment.id}>
                        <TableCell className="font-medium">{shipment.id}</TableCell>
                        <TableCell>
                          {shipment.origin} - {shipment.destination}
                        </TableCell>
                        <TableCell>{shipment.service}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            {shipment.location}
                          </div>
                        </TableCell>
                        <TableCell>{shipment.eta}</TableCell>
                        <TableCell>
                          <Badge className={shipment.status === "Entregado" ? "bg-green-500" : "bg-amber-500"}>
                            {shipment.status}
                          </Badge>
                        </TableCell>
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
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/portal/dashboard/shipments" className="w-full">
                    Ver todos los embarques
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Métricas de Servicio</CardTitle>
                <CardDescription>Análisis de sus servicios logísticos</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Tabs defaultValue="servicios" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="servicios">Servicios</TabsTrigger>
                    <TabsTrigger value="rutas">Rutas</TabsTrigger>
                    <TabsTrigger value="tiempos">Tiempos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="servicios" className="space-y-4">
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Terrestre FTL</p>
                          <p className="text-sm text-muted-foreground">45% de los servicios</p>
                        </div>
                        <div className="font-medium">45%</div>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Terrestre LTL</p>
                          <p className="text-sm text-muted-foreground">25% de los servicios</p>
                        </div>
                        <div className="font-medium">25%</div>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Aéreo</p>
                          <p className="text-sm text-muted-foreground">20% de los servicios</p>
                        </div>
                        <div className="font-medium">20%</div>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Marítimo</p>
                          <p className="text-sm text-muted-foreground">10% de los servicios</p>
                        </div>
                        <div className="font-medium">10%</div>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </TabsContent>
                  <TabsContent value="rutas" className="space-y-4">
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">CDMX - Monterrey</p>
                          <p className="text-sm text-muted-foreground">30% de las rutas</p>
                        </div>
                        <div className="font-medium">30%</div>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">CDMX - Guadalajara</p>
                          <p className="text-sm text-muted-foreground">25% de las rutas</p>
                        </div>
                        <div className="font-medium">25%</div>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Miami - CDMX</p>
                          <p className="text-sm text-muted-foreground">15% de las rutas</p>
                        </div>
                        <div className="font-medium">15%</div>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Otras rutas</p>
                          <p className="text-sm text-muted-foreground">30% de las rutas</p>
                        </div>
                        <div className="font-medium">30%</div>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </TabsContent>
                  <TabsContent value="tiempos" className="space-y-4">
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Entregas a tiempo</p>
                          <p className="text-sm text-muted-foreground">94% de los envíos</p>
                        </div>
                        <div className="font-medium">94%</div>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Retrasos menores</p>
                          <p className="text-sm text-muted-foreground">4% de los envíos</p>
                        </div>
                        <div className="font-medium">4%</div>
                      </div>
                      <Progress value={4} className="h-2" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Retrasos significativos</p>
                          <p className="text-sm text-muted-foreground">2% de los envíos</p>
                        </div>
                        <div className="font-medium">2%</div>
                      </div>
                      <Progress value={2} className="h-2" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/portal/dashboard/metrics" className="w-full">
                    Ver métricas detalladas
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Facturas Pendientes</CardTitle>
                <CardDescription>Estado de sus cuentas por pagar</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Factura</TableHead>
                      <TableHead>Monto</TableHead>
                      <TableHead>Vencimiento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">F-2025-0123</TableCell>
                      <TableCell>$4,500.00</TableCell>
                      <TableCell>15/05/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">F-2025-0124</TableCell>
                      <TableCell>$3,200.00</TableCell>
                      <TableCell>20/05/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">F-2025-0125</TableCell>
                      <TableCell>$2,750.00</TableCell>
                      <TableCell>25/05/2025</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">F-2025-0126</TableCell>
                      <TableCell>$2,000.00</TableCell>
                      <TableCell>01/06/2025</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/portal/dashboard/account" className="w-full">
                    Ver todas las facturas
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <Card>
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Solicitar Nuevo Servicio</CardTitle>
                  <CardDescription>Cree una nueva solicitud de servicio logístico</CardDescription>
                </div>
                <Button className="ml-auto">
                  <Link href="/portal/dashboard/request" className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuevo Servicio
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <div className="grid gap-2 text-center">
                    <Box className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="grid gap-1">
                      <h3 className="text-base font-medium">Solicite un nuevo servicio logístico</h3>
                      <p className="text-sm text-muted-foreground">
                        Cree una solicitud para terrestre, aéreo, marítimo o almacenamiento
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
