"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDownToLine,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  FileSpreadsheet,
  FileText,
  Filter,
  Home,
  LogOut,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function AccountPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const invoices = [
    {
      id: "F-2025-0123",
      service: "Terrestre FTL CDMX-MTY",
      date: "01/04/2025",
      dueDate: "15/05/2025",
      amount: 4500.0,
      status: "Pendiente",
      tracking: "NG-123456789",
    },
    {
      id: "F-2025-0124",
      service: "Terrestre LTL GDL-CDMX",
      date: "05/04/2025",
      dueDate: "20/05/2025",
      amount: 3200.0,
      status: "Pendiente",
      tracking: "NG-123456788",
    },
    {
      id: "F-2025-0125",
      service: "Aéreo Priority MIA-CDMX",
      date: "10/04/2025",
      dueDate: "25/05/2025",
      amount: 2750.0,
      status: "Pendiente",
      tracking: "NG-123456787",
    },
    {
      id: "F-2025-0126",
      service: "Marítimo FCL SHA-VER",
      date: "15/04/2025",
      dueDate: "01/06/2025",
      amount: 2000.0,
      status: "Pendiente",
      tracking: "NG-123456786",
    },
    {
      id: "F-2025-0120",
      service: "Terrestre FTL CDMX-CUN",
      date: "15/03/2025",
      dueDate: "15/04/2025",
      amount: 4200.0,
      status: "Pagado",
      tracking: "NG-123456785",
      paymentDate: "10/04/2025",
      paymentRef: "REF-98765",
    },
    {
      id: "F-2025-0119",
      service: "Terrestre LTL CDMX-MER",
      date: "10/03/2025",
      dueDate: "10/04/2025",
      amount: 2800.0,
      status: "Pagado",
      tracking: "NG-123456782",
      paymentDate: "05/04/2025",
      paymentRef: "REF-98764",
    },
    {
      id: "F-2025-0118",
      service: "Aéreo Economy LAX-CDMX",
      date: "05/03/2025",
      dueDate: "05/04/2025",
      amount: 3100.0,
      status: "Pagado",
      tracking: "NG-123456783",
      paymentDate: "01/04/2025",
      paymentRef: "REF-98763",
    },
    {
      id: "F-2025-0117",
      service: "Terrestre FTL CDMX-TIJ",
      date: "01/03/2025",
      dueDate: "01/04/2025",
      amount: 5200.0,
      status: "Pagado",
      tracking: "NG-123456784",
      paymentDate: "28/03/2025",
      paymentRef: "REF-98762",
    },
  ]

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.tracking.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || invoice.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesDate = dateFilter === "all"
    // Aquí se podrían agregar más filtros por fecha si es necesario

    return matchesSearch && matchesStatus && matchesDate
  })

  const pendingInvoices = filteredInvoices.filter((invoice) => invoice.status === "Pendiente")
  const paidInvoices = filteredInvoices.filter((invoice) => invoice.status === "Pagado")

  const totalPending = pendingInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalPaid = paidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)

  const exportToExcel = () => {
    alert("Exportando a Excel...")
    // Aquí iría la lógica para exportar a Excel
  }

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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Truck className="h-4 w-4" />
                Embarques
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">8</Badge>
              </Link>
              <Link
                href="/portal/dashboard/account"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
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
                  placeholder="Buscar por ID, servicio, tracking..."
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
              <h1 className="text-2xl font-bold tracking-tight">Estado de Cuenta</h1>
              <p className="text-muted-foreground">Gestione sus facturas y pagos</p>
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
                          <SelectItem value="pendiente">Pendiente</SelectItem>
                          <SelectItem value="pagado">Pagado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Período</h4>
                      <Select value={dateFilter} onValueChange={setDateFilter}>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Seleccionar período" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="current">Mes actual</SelectItem>
                          <SelectItem value="last">Mes anterior</SelectItem>
                          <SelectItem value="quarter">Último trimestre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button size="sm" className="h-8" onClick={exportToExcel}>
                <FileSpreadsheet className="mr-2 h-3.5 w-3.5" />
                Exportar a Excel
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pendiente</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalPending.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">{pendingInvoices.length} facturas pendientes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pagado (Mes)</CardTitle>
                <Check className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalPaid.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">{paidInvoices.length} facturas pagadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Próximo Vencimiento</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15/05/2025</div>
                <p className="text-xs text-muted-foreground">F-2025-0123 por $4,500.00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crédito Disponible</CardTitle>
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
                <div className="text-2xl font-bold">$50,000.00</div>
                <p className="text-xs text-muted-foreground">Límite de crédito: $100,000.00</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="pendientes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pendientes">Facturas Pendientes</TabsTrigger>
              <TabsTrigger value="pagadas">Facturas Pagadas</TabsTrigger>
            </TabsList>
            <TabsContent value="pendientes" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Facturas Pendientes de Pago</CardTitle>
                  <CardDescription>{pendingInvoices.length} facturas encontradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Factura</TableHead>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Tracking</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Vencimiento</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingInvoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>{invoice.service}</TableCell>
                          <TableCell>{invoice.tracking}</TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{invoice.dueDate}</TableCell>
                          <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-amber-500 text-amber-500">
                              {invoice.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <ArrowDownToLine className="mr-2 h-4 w-4" />
                              Descargar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pagadas" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Facturas Pagadas</CardTitle>
                  <CardDescription>{paidInvoices.length} facturas encontradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Factura</TableHead>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Tracking</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Fecha de Pago</TableHead>
                        <TableHead>Referencia</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paidInvoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>{invoice.service}</TableCell>
                          <TableCell>{invoice.tracking}</TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{invoice.paymentDate}</TableCell>
                          <TableCell>{invoice.paymentRef}</TableCell>
                          <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <ArrowDownToLine className="mr-2 h-4 w-4" />
                              Descargar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
