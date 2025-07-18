"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, CheckCircle, AlertTriangle, DollarSign } from "lucide-react"
import { useLanguage } from "@/app/components/language-toggle"

export default function CarrierDashboardPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("dashboardProveedor")}</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Transportes XYZ</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("embarquesActivos")}</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 desde la semana pasada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("entregasTiempo")}</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">+2% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("facturasPendientes")}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">3 facturas por cobrar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("documentosPendientes")}</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">{t("requierenAtencion")}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="shipments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="shipments">{t("embarquesRecientes")}</TabsTrigger>
          <TabsTrigger value="invoices">{t("facturacion")}</TabsTrigger>
          <TabsTrigger value="compliance">{t("compliance")}</TabsTrigger>
        </TabsList>
        <TabsContent value="shipments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("embarquesActivos")}</CardTitle>
              <CardDescription>{t("embarquesTransito")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Lista de embarques activos */}
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b bg-muted/50 p-3 font-medium">
                  <div className="col-span-1">{t("id")}</div>
                  <div className="col-span-1">{t("origenDestino")}</div>
                  <div className="col-span-1">{t("fecha")}</div>
                  <div className="col-span-1">{t("estado")}</div>
                  <div className="col-span-1">{t("proximaActualizacion")}</div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">NG-123456789</div>
                  <div className="col-span-1">CDMX → Monterrey</div>
                  <div className="col-span-1">15/04/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {t("enTransito")}
                    </span>
                  </div>
                  <div className="col-span-1 text-sm text-muted-foreground">Hoy, 18:00</div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">NG-123456788</div>
                  <div className="col-span-1">Guadalajara → CDMX</div>
                  <div className="col-span-1">16/04/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {t("programado")}
                    </span>
                  </div>
                  <div className="col-span-1 text-sm text-muted-foreground">Mañana, 08:00</div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">NG-123456787</div>
                  <div className="col-span-1">CDMX → Cancún</div>
                  <div className="col-span-1">14/04/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      {t("retrasado")}
                    </span>
                  </div>
                  <div className="col-span-1 text-sm text-muted-foreground">{t("urgente")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("facturasPendientes")}</CardTitle>
              <CardDescription>{t("facturasPendientesPago")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Lista de facturas */}
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b bg-muted/50 p-3 font-medium">
                  <div className="col-span-1">{t("factura")}</div>
                  <div className="col-span-1">{t("embarque")}</div>
                  <div className="col-span-1">{t("fecha")}</div>
                  <div className="col-span-1">{t("monto")}</div>
                  <div className="col-span-1">{t("estado")}</div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">FAC-001</div>
                  <div className="col-span-1">NG-123456780</div>
                  <div className="col-span-1">01/04/2025</div>
                  <div className="col-span-1">$15,230.00</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {t("pendiente")}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">FAC-002</div>
                  <div className="col-span-1">NG-123456781</div>
                  <div className="col-span-1">05/04/2025</div>
                  <div className="col-span-1">$18,450.00</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {t("pendiente")}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-5 border-b p-3">
                  <div className="col-span-1 font-medium">FAC-003</div>
                  <div className="col-span-1">NG-123456782</div>
                  <div className="col-span-1">10/04/2025</div>
                  <div className="col-span-1">$11,550.00</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {t("pagada")}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("documentosCompliance")}</CardTitle>
              <CardDescription>{t("estadoDocumentos")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Lista de documentos */}
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b bg-muted/50 p-3 font-medium">
                  <div className="col-span-1">{t("documento")}</div>
                  <div className="col-span-1">{t("fechaVencimiento")}</div>
                  <div className="col-span-1">{t("estado")}</div>
                  <div className="col-span-1">{t("accion")}</div>
                </div>
                <div className="grid grid-cols-4 border-b p-3">
                  <div className="col-span-1 font-medium">{t("seguroResponsabilidad")}</div>
                  <div className="col-span-1">31/12/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {t("vigente")}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <button className="text-sm text-primary hover:underline">{t("ver")}</button>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-b p-3">
                  <div className="col-span-1 font-medium">{t("licenciaOperacion")}</div>
                  <div className="col-span-1">15/05/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {t("porVencer")}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <button className="text-sm text-primary hover:underline">{t("renovar")}</button>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-b p-3">
                  <div className="col-span-1 font-medium">{t("certificadoSeguridad")}</div>
                  <div className="col-span-1">01/03/2025</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      {t("vencido")}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <button className="text-sm text-primary hover:underline">{t("actualizar")}</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
