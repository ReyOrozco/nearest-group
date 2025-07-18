"use client"

import { useState } from "react"
import { Calendar, Download, FileText, BarChart, PieChart, TrendingUp, Filter, ChevronDown, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("shipments")
  const [dateRange, setDateRange] = useState("month")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Informes y Estadísticas</h1>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="h-10 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filtros</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[300px] p-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Tipo de Informe</h4>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shipments">Embarques</SelectItem>
                      <SelectItem value="clients">Clientes</SelectItem>
                      <SelectItem value="revenue">Ingresos</SelectItem>
                      <SelectItem value="services">Servicios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Período</h4>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Última semana</SelectItem>
                      <SelectItem value="month">Último mes</SelectItem>
                      <SelectItem value="quarter">Último trimestre</SelectItem>
                      <SelectItem value="year">Último año</SelectItem>
                      <SelectItem value="custom">Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {dateRange === "custom" && (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Fecha Inicio</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">Fecha Fin</Label>
                      <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                  </div>
                )}
                <Button>Aplicar Filtros</Button>
              </div>
            </PopoverContent>
          </Popover>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Embarques</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12% respecto al período anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234,567</div>
            <p className="text-xs text-muted-foreground">+8.2% respecto al período anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+5 nuevos este período</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Entrega</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">+0.5% respecto al período anterior</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="charts">
        <TabsList>
          <TabsTrigger value="charts">Gráficos</TabsTrigger>
          <TabsTrigger value="table">Tabla</TabsTrigger>
        </TabsList>
        <TabsContent value="charts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Distribución de Embarques por Servicio</CardTitle>
              <CardDescription>
                Último{" "}
                {dateRange === "week"
                  ? "semana"
                  : dateRange === "month"
                    ? "mes"
                    : dateRange === "quarter"
                      ? "trimestre"
                      : "año"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[350px] w-full flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center">
                  <PieChart className="mx-auto h-16 w-16 text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Gráfico de distribución por servicio</p>
                  <p className="text-xs text-muted-foreground">
                    (En un entorno de producción, aquí se mostraría un gráfico real con datos)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Embarques por Mes</CardTitle>
                <CardDescription>Tendencia de los últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <BarChart className="mx-auto h-16 w-16 text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Gráfico de barras mensual</p>
                    <p className="text-xs text-muted-foreground">
                      (En un entorno de producción, aquí se mostraría un gráfico real con datos)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ingresos por Servicio</CardTitle>
                <CardDescription>Comparativa de ingresos por tipo de servicio</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <TrendingUp className="mx-auto h-16 w-16 text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Gráfico de líneas de ingresos</p>
                    <p className="text-xs text-muted-foreground">
                      (En un entorno de producción, aquí se mostraría un gráfico real con datos)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Datos Detallados</CardTitle>
              <CardDescription>
                Información detallada de{" "}
                {reportType === "shipments"
                  ? "embarques"
                  : reportType === "clients"
                    ? "clientes"
                    : reportType === "revenue"
                      ? "ingresos"
                      : "servicios"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-1">Fecha</div>
                  <div className="col-span-1">Cliente</div>
                  <div className="col-span-1">Servicio</div>
                  <div className="col-span-1">Estado</div>
                  <div className="col-span-1 text-right">Valor</div>
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="grid grid-cols-6 border-b p-4">
                    <div className="col-span-1 font-medium">REP-{1000 + index}</div>
                    <div className="col-span-1">15/04/2025</div>
                    <div className="col-span-1">Cliente Ejemplo</div>
                    <div className="col-span-1">Terrestre</div>
                    <div className="col-span-1">Completado</div>
                    <div className="col-span-1 text-right">$12,345.00</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Informes Programados</CardTitle>
          <CardDescription>Informes configurados para generación automática</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <h3 className="font-medium">Informe Mensual de Embarques</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Generado el 1 de cada mes</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Último
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <h3 className="font-medium">Informe Trimestral de Ingresos</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Generado el último día de cada trimestre</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Último
                </Button>
              </div>
            </div>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Programar Nuevo Informe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
