"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  Download,
  FileText,
  Home,
  LogOut,
  Package,
  PieChart,
  Plus,
  Settings,
  Truck,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MetricsPage() {
  const [timeRange, setTimeRange] = useState("month")

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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Estado de Cuenta
              </Link>
              <Link
                href="/portal/dashboard/metrics"
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
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
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Métricas e Indicadores</h1>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="h-8 w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Seleccionar período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
                <SelectItem value="quarter">Último trimestre</SelectItem>
                <SelectItem value="year">Último año</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
              <span className="sr-only">Descargar reporte</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Configuración</span>
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio de Tránsito</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 días</div>
                <p className="text-xs text-muted-foreground">-0.3 días desde el período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Entregas a Tiempo</CardTitle>
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
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">+2% desde el período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Costo Promedio por Envío</CardTitle>
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245</div>
                <p className="text-xs text-muted-foreground">-$120 desde el período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Embarques</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 desde el período anterior</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="servicios" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="servicios">Servicios</TabsTrigger>
              <TabsTrigger value="rutas">Rutas</TabsTrigger>
              <TabsTrigger value="tiempos">Tiempos</TabsTrigger>
              <TabsTrigger value="costos">Costos</TabsTrigger>
            </TabsList>
            <TabsContent value="servicios" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Tipo de Servicio</CardTitle>
                    <CardDescription>Porcentaje de uso por tipo de servicio logístico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-primary"></div>
                            <p className="text-sm font-medium">Terrestre FTL</p>
                          </div>
                          <p className="text-sm font-medium">45%</p>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                            <p className="text-sm font-medium">Terrestre LTL</p>
                          </div>
                          <p className="text-sm font-medium">25%</p>
                        </div>
                        <Progress value={25} className="h-2 bg-blue-100">
                          <div className="h-full bg-blue-500" style={{ width: "25%" }}></div>
                        </Progress>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                            <p className="text-sm font-medium">Aéreo</p>
                          </div>
                          <p className="text-sm font-medium">20%</p>
                        </div>
                        <Progress value={20} className="h-2 bg-amber-100">
                          <div className="h-full bg-amber-500" style={{ width: "20%" }}></div>
                        </Progress>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                            <p className="text-sm font-medium">Marítimo</p>
                          </div>
                          <p className="text-sm font-medium">10%</p>
                        </div>
                        <Progress value={10} className="h-2 bg-green-100">
                          <div className="h-full bg-green-500" style={{ width: "10%" }}></div>
                        </Progress>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tendencia de Servicios</CardTitle>
                    <CardDescription>Evolución del uso de servicios en el tiempo</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="mx-auto h-16 w-16 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Gráfico de tendencia de servicios</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="rutas" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Rutas Más Frecuentes</CardTitle>
                    <CardDescription>Distribución de embarques por ruta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">CDMX - Monterrey</p>
                          <p className="text-sm font-medium">30%</p>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">CDMX - Guadalajara</p>
                          <p className="text-sm font-medium">25%</p>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Miami - CDMX</p>
                          <p className="text-sm font-medium">15%</p>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Shanghai - Veracruz</p>
                          <p className="text-sm font-medium">10%</p>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Otras rutas</p>
                          <p className="text-sm font-medium">20%</p>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mapa de Rutas</CardTitle>
                    <CardDescription>Visualización geográfica de rutas frecuentes</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="mx-auto h-16 w-16 text-muted-foreground"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <p className="mt-2 text-sm text-muted-foreground">Mapa de rutas frecuentes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tiempos" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Tiempos de Entrega</CardTitle>
                    <CardDescription>Análisis de tiempos de entrega por servicio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Entregas a tiempo</p>
                          <p className="text-sm font-medium">94%</p>
                        </div>
                        <Progress value={94} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Retrasos menores</p>
                          <p className="text-sm font-medium">4%</p>
                        </div>
                        <Progress value={4} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Retrasos significativos</p>
                          <p className="text-sm font-medium">2%</p>
                        </div>
                        <Progress value={2} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tiempo Promedio por Servicio</CardTitle>
                    <CardDescription>Días promedio por tipo de servicio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Terrestre FTL</p>
                          <p className="text-sm font-medium">2.3 días</p>
                        </div>
                        <Progress value={23} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Terrestre LTL</p>
                          <p className="text-sm font-medium">3.1 días</p>
                        </div>
                        <Progress value={31} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Aéreo Priority</p>
                          <p className="text-sm font-medium">1.2 días</p>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Aéreo Economy</p>
                          <p className="text-sm font-medium">2.5 días</p>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Marítimo</p>
                          <p className="text-sm font-medium">28.5 días</p>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="costos" className="space-y-4 pt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Costo Promedio por Servicio</CardTitle>
                    <CardDescription>Análisis de costos por tipo de servicio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Terrestre FTL</p>
                          <p className="text-sm font-medium">$4,250</p>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Terrestre LTL</p>
                          <p className="text-sm font-medium">$2,800</p>
                        </div>
                        <Progress value={56} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Aéreo Priority</p>
                          <p className="text-sm font-medium">$3,100</p>
                        </div>
                        <Progress value={62} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Aéreo Economy</p>
                          <p className="text-sm font-medium">$2,400</p>
                        </div>
                        <Progress value={48} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Marítimo FCL</p>
                          <p className="text-sm font-medium">$5,000</p>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tendencia de Costos</CardTitle>
                    <CardDescription>Evolución de costos en el tiempo</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="mx-auto h-16 w-16 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Gráfico de tendencia de costos</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
