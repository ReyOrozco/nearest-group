"use client"

import Link from "next/link"
import { ArrowUpRight, Bell, Clock, FileText, Package, Truck, Users, Warehouse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/app/components/language-toggle"

export default function AdminDashboardPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("solicitudesPendientes")}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 desde ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("embarquesActivos")}</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 desde la semana pasada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("clientesActivos")}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">+2 este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("contratosVigentes")}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 este mes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>{t("solicitudesRecientes")}</CardTitle>
            <CardDescription>{t("ultimasSolicitudes")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "REQ-001",
                  client: "Acme Inc.",
                  service: "Terrestre FTL",
                  origin: "CDMX",
                  destination: "Monterrey",
                  date: "15/04/2025",
                  status: "Pendiente",
                },
                {
                  id: "REQ-002",
                  client: "TechCorp",
                  service: "Aéreo Priority",
                  origin: "Miami",
                  destination: "CDMX",
                  date: "14/04/2025",
                  status: "En Proceso",
                },
                {
                  id: "REQ-003",
                  client: "Global Traders",
                  service: "Marítimo FCL",
                  origin: "Shanghai",
                  destination: "Veracruz",
                  date: "13/04/2025",
                  status: "Cotizado",
                },
                {
                  id: "REQ-004",
                  client: "Distribuciones XYZ",
                  service: "Almacenamiento",
                  origin: "N/A",
                  destination: "N/A",
                  date: "12/04/2025",
                  status: "Pendiente",
                },
              ].map((req) => (
                <div key={req.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">
                      {req.id} - {req.client}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {req.service} • {req.origin} → {req.destination}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{req.date}</span>
                    </div>
                    <div
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        req.status === "Pendiente"
                          ? "bg-yellow-100 text-yellow-800"
                          : req.status === "En Proceso"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {req.status}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/admin/requests">{t("verTodasSolicitudes")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>{t("actividadReciente")}</CardTitle>
            <CardDescription>{t("ultimasAcciones")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: t("solicitudAprobada"),
                  user: "Carlos Méndez",
                  time: "Hace 10 minutos",
                  icon: <FileText className="h-4 w-4 text-green-500" />,
                },
                {
                  action: t("embarqueActualizado"),
                  user: "María González",
                  time: "Hace 25 minutos",
                  icon: <Truck className="h-4 w-4 text-blue-500" />,
                },
                {
                  action: t("clienteNuevo"),
                  user: "Juan Pérez",
                  time: "Hace 1 hora",
                  icon: <Users className="h-4 w-4 text-purple-500" />,
                },
                {
                  action: t("contratoActualizado"),
                  user: "Ana Rodríguez",
                  time: "Hace 2 horas",
                  icon: <FileText className="h-4 w-4 text-orange-500" />,
                },
                {
                  action: t("noticiaPublicada"),
                  user: "Roberto Sánchez",
                  time: "Hace 3 horas",
                  icon: <Bell className="h-4 w-4 text-red-500" />,
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-full border p-2">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{t("distribucionServicios")}</CardTitle>
            <CardDescription>{t("serviciosActivos")}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm font-medium">{t("logisticaTerrestre")}</p>
                <p className="text-xl font-bold">45%</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <Package className="h-10 w-10 text-blue-500" />
                </div>
                <p className="text-sm font-medium">{t("logisticaAerea")}</p>
                <p className="text-xl font-bold">25%</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Truck className="h-10 w-10 text-green-500" />
                </div>
                <p className="text-sm font-medium">{t("logisticaMaritima")}</p>
                <p className="text-xl font-bold">20%</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                  <Warehouse className="h-10 w-10 text-yellow-500" />
                </div>
                <p className="text-sm font-medium">{t("almacenamiento")}</p>
                <p className="text-xl font-bold">10%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("solicitudesAprobar")}</CardTitle>
            <CardDescription>{t("solicitudesPendientesAprobacion")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ACC-001", name: "Empresa ABC", email: "contacto@abc.com", date: "15/04/2025" },
                { id: "ACC-002", name: "Distribuidora XYZ", email: "info@xyz.com", date: "14/04/2025" },
                { id: "ACC-003", name: "Importaciones 123", email: "ventas@imp123.com", date: "13/04/2025" },
              ].map((req) => (
                <div key={req.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">{req.name}</p>
                    <p className="text-xs text-muted-foreground">{req.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      {t("rechazar")}
                    </Button>
                    <Button size="sm">{t("aprobar")}</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("rendimientoSistema")}</CardTitle>
            <CardDescription>{t("metricasRendimiento")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{t("solicitudesProcesadas")}</p>
                  <p className="text-sm font-medium">85%</p>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-[85%] rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{t("tiempoRespuesta")}</p>
                  <p className="text-sm font-medium">92%</p>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{t("satisfaccionCliente")}</p>
                  <p className="text-sm font-medium">78%</p>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{t("cumplimientoEntregas")}</p>
                  <p className="text-sm font-medium">94%</p>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full w-[94%] rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
