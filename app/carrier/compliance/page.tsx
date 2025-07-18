"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, Upload, FileText, AlertTriangle, CheckCircle, Clock } from "lucide-react"

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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"

// Tipos para los documentos de compliance
type DocumentStatus = "Vigente" | "Por Vencer" | "Vencido" | "En Revisión"

interface ComplianceDocument {
  id: string
  name: string
  type: string
  expirationDate: string
  status: DocumentStatus
  uploadDate: string
  notes?: string
}

// Datos de ejemplo
const documentsData: ComplianceDocument[] = [
  {
    id: "DOC-001",
    name: "Seguro de Responsabilidad Civil",
    type: "Seguro",
    expirationDate: "31/12/2025",
    status: "Vigente",
    uploadDate: "01/01/2025",
  },
  {
    id: "DOC-002",
    name: "Licencia de Operación",
    type: "Licencia",
    expirationDate: "15/05/2025",
    status: "Por Vencer",
    uploadDate: "15/05/2024",
    notes: "Renovar antes del 01/05/2025",
  },
  {
    id: "DOC-003",
    name: "Certificado de Seguridad",
    type: "Certificado",
    expirationDate: "01/03/2025",
    status: "Vencido",
    uploadDate: "01/03/2024",
    notes: "Requiere renovación inmediata",
  },
  {
    id: "DOC-004",
    name: "Permiso de Transporte Internacional",
    type: "Permiso",
    expirationDate: "30/06/2025",
    status: "Vigente",
    uploadDate: "30/06/2024",
  },
  {
    id: "DOC-005",
    name: "Certificado Ambiental",
    type: "Certificado",
    expirationDate: "15/08/2025",
    status: "Vigente",
    uploadDate: "15/08/2024",
  },
  {
    id: "DOC-006",
    name: "Registro de Operador",
    type: "Registro",
    expirationDate: "01/04/2025",
    status: "En Revisión",
    uploadDate: "25/03/2025",
    notes: "Pendiente de aprobación",
  },
]

export default function CompliancePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)

  // Filtrar documentos
  const filteredDocuments = documentsData.filter((document) => {
    const matchesSearch =
      document.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      document.type.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || document.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Función para obtener el color de la etiqueta de estado
  const getStatusColor = (status: DocumentStatus) => {
    switch (status) {
      case "Vigente":
        return "bg-green-100 text-green-800"
      case "Por Vencer":
        return "bg-yellow-100 text-yellow-800"
      case "Vencido":
        return "bg-red-100 text-red-800"
      case "En Revisión":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Función para obtener el icono de estado
  const getStatusIcon = (status: DocumentStatus) => {
    switch (status) {
      case "Vigente":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "Por Vencer":
        return <Clock className="h-5 w-5 text-yellow-600" />
      case "Vencido":
        return <AlertTriangle className="h-5 w-5 text-red-600" />
      case "En Revisión":
        return <FileText className="h-5 w-5 text-blue-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  // Calcular estadísticas
  const totalDocuments = filteredDocuments.length
  const validDocuments = filteredDocuments.filter((doc) => doc.status === "Vigente").length
  const expiringDocuments = filteredDocuments.filter((doc) => doc.status === "Por Vencer").length
  const expiredDocuments = filteredDocuments.filter((doc) => doc.status === "Vencido").length
  const compliancePercentage = totalDocuments > 0 ? Math.round((validDocuments / totalDocuments) * 100) : 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Compliance</h1>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Subir Documento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Subir Nuevo Documento</DialogTitle>
              <DialogDescription>Complete el formulario para subir un nuevo documento de compliance</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="documentName">Nombre del Documento</Label>
                <Input id="documentName" placeholder="Nombre del documento" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="documentType">Tipo de Documento</Label>
                  <Select>
                    <SelectTrigger id="documentType">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seguro">Seguro</SelectItem>
                      <SelectItem value="licencia">Licencia</SelectItem>
                      <SelectItem value="certificado">Certificado</SelectItem>
                      <SelectItem value="permiso">Permiso</SelectItem>
                      <SelectItem value="registro">Registro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expirationDate">Fecha de Vencimiento</Label>
                  <Input id="expirationDate" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Información adicional sobre el documento" />
              </div>
              <div className="grid gap-2">
                <Label>Archivo</Label>
                <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                  <div className="text-center">
                    <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Arrastra y suelta tu documento aquí</p>
                    <p className="text-xs text-muted-foreground">o</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Seleccionar Archivo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsUploadDialogOpen(false)}>Subir Documento</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado de Compliance</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{compliancePercentage}% Completo</span>
                <span className="text-sm text-muted-foreground">
                  {validDocuments}/{totalDocuments} documentos
                </span>
              </div>
              <Progress value={compliancePercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documentos Vigentes</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{validDocuments}</div>
            <p className="text-xs text-muted-foreground">Documentos al día</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Por Vencer</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiringDocuments}</div>
            <p className="text-xs text-muted-foreground">Documentos por renovar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vencidos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiredDocuments}</div>
            <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar documentos..."
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
                      <SelectItem value="Vigente">Vigente</SelectItem>
                      <SelectItem value="Por Vencer">Por Vencer</SelectItem>
                      <SelectItem value="Vencido">Vencido</SelectItem>
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
          <CardTitle>Documentos de Compliance</CardTitle>
          <CardDescription>{filteredDocuments.length} documentos encontrados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDocuments.map((document) => (
              <div key={document.id} className="flex items-start justify-between rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">{getStatusIcon(document.status)}</div>
                  <div>
                    <h3 className="font-medium">{document.name}</h3>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Tipo: {document.type}</span>
                        <Badge className={getStatusColor(document.status)}>{document.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Vence: {document.expirationDate} | Subido: {document.uploadDate}
                      </p>
                      {document.notes && <p className="text-sm text-muted-foreground">Notas: {document.notes}</p>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                  <Button variant="outline" size="sm">
                    Renovar
                  </Button>
                </div>
              </div>
            ))}
            {filteredDocuments.length === 0 && (
              <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                <p className="text-muted-foreground">No se encontraron documentos</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
