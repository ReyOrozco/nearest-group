"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  ChevronDown,
  Download,
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const documents = [
    {
      id: "DOC-001",
      name: "Factura NG-123456789",
      type: "Factura",
      format: "PDF",
      size: "245 KB",
      date: "15/04/2025",
      shipment: "NG-123456789",
    },
    {
      id: "DOC-002",
      name: "CFDI NG-123456789",
      type: "CFDI",
      format: "XML",
      size: "32 KB",
      date: "15/04/2025",
      shipment: "NG-123456789",
    },
    {
      id: "DOC-003",
      name: "Evidencia de Entrega NG-123456788",
      type: "Evidencia",
      format: "PDF",
      size: "1.2 MB",
      date: "12/04/2025",
      shipment: "NG-123456788",
    },
    {
      id: "DOC-004",
      name: "Factura NG-123456788",
      type: "Factura",
      format: "PDF",
      size: "238 KB",
      date: "10/04/2025",
      shipment: "NG-123456788",
    },
    {
      id: "DOC-005",
      name: "CFDI NG-123456788",
      type: "CFDI",
      format: "XML",
      size: "30 KB",
      date: "10/04/2025",
      shipment: "NG-123456788",
    },
    {
      id: "DOC-006",
      name: "Pedimento NG-123456786",
      type: "Pedimento",
      format: "PDF",
      size: "450 KB",
      date: "05/04/2025",
      shipment: "NG-123456786",
    },
    {
      id: "DOC-007",
      name: "Factura NG-123456786",
      type: "Factura",
      format: "PDF",
      size: "256 KB",
      date: "01/04/2025",
      shipment: "NG-123456786",
    },
    {
      id: "DOC-008",
      name: "Carta Porte NG-123456785",
      type: "Carta Porte",
      format: "PDF",
      size: "320 KB",
      date: "07/04/2025",
      shipment: "NG-123456785",
    },
  ]

  const filteredDocuments = documents.filter((document) => {
    const matchesSearch =
      document.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      document.shipment.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || document.type.toLowerCase() === typeFilter.toLowerCase()

    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "recent" &&
        new Date(document.date.split("/").reverse().join("-")) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))

    return matchesSearch && matchesType && matchesDate
  })

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
                href="/portal/dashboard/documents"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Documentos
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
                  placeholder="Buscar por nombre, ID de embarque..."
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
              <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
              <p className="text-muted-foreground">
                Gestione y descargue todos los documentos relacionados con sus embarques
              </p>
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
                      <h4 className="font-medium leading-none">Tipo</h4>
                      <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="factura">Factura</SelectItem>
                          <SelectItem value="cfdi">CFDI</SelectItem>
                          <SelectItem value="evidencia">Evidencia</SelectItem>
                          <SelectItem value="pedimento">Pedimento</SelectItem>
                          <SelectItem value="carta porte">Carta Porte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Fecha</h4>
                      <Select value={dateFilter} onValueChange={setDateFilter}>
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Seleccionar fecha" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="recent">Últimos 7 días</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button size="sm" className="h-8">
                <Plus className="mr-2 h-3.5 w-3.5" />
                Subir Documento
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Todos los Documentos</CardTitle>
              <CardDescription>{filteredDocuments.length} documentos encontrados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Formato</TableHead>
                    <TableHead>Tamaño</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Embarque</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDocuments.map((document) => (
                    <TableRow key={document.id}>
                      <TableCell className="font-medium">{document.name}</TableCell>
                      <TableCell>{document.type}</TableCell>
                      <TableCell>{document.format}</TableCell>
                      <TableCell>{document.size}</TableCell>
                      <TableCell>{document.date}</TableCell>
                      <TableCell>
                        <Link
                          href={`/portal/dashboard/shipments?id=${document.shipment}`}
                          className="text-primary hover:underline"
                        >
                          {document.shipment}
                        </Link>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Descargar</span>
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
    </div>
  )
}
