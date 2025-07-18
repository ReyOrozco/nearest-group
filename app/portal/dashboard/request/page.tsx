"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Check,
  FileText,
  Home,
  LogOut,
  Package,
  Plane,
  Plus,
  Settings,
  Ship,
  Truck,
  User,
  Warehouse,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RequestServicePage() {
  const [serviceType, setServiceType] = useState("terrestrial")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
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
                href="/portal/dashboard/documents"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
                className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
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
            <h1 className="text-lg font-semibold">Solicitar Nuevo Servicio</h1>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Configuración</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="mx-auto w-full max-w-3xl">
            {isSuccess && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-100 p-4 text-green-800">
                <Check className="h-5 w-5" />
                <p>
                  Su solicitud ha sido enviada con éxito. Un ejecutivo se pondrá en contacto con usted a la brevedad.
                </p>
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Formulario de Solicitud de Servicio</CardTitle>
                <CardDescription>Complete el formulario para solicitar un nuevo servicio logístico</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Tipo de Servicio</h3>
                      <p className="text-sm text-muted-foreground">
                        Seleccione el tipo de servicio logístico que necesita
                      </p>
                    </div>

                    <RadioGroup
                      defaultValue="terrestrial"
                      className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-4"
                      value={serviceType}
                      onValueChange={setServiceType}
                    >
                      <div>
                        <RadioGroupItem value="terrestrial" id="terrestrial" className="peer sr-only" />
                        <Label
                          htmlFor="terrestrial"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Truck className="mb-3 h-6 w-6" />
                          Terrestre
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="air" id="air" className="peer sr-only" />
                        <Label
                          htmlFor="air"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Plane className="mb-3 h-6 w-6" />
                          Aéreo
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="maritime" id="maritime" className="peer sr-only" />
                        <Label
                          htmlFor="maritime"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Ship className="mb-3 h-6 w-6" />
                          Marítimo
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="storage" id="storage" className="peer sr-only" />
                        <Label
                          htmlFor="storage"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Warehouse className="mb-3 h-6 w-6" />
                          Almacenamiento
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Tabs defaultValue="details" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="details">Detalles del Servicio</TabsTrigger>
                      <TabsTrigger value="cargo">Información de Carga</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="space-y-4 pt-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="origin">Origen</Label>
                          <Input id="origin" placeholder="Ciudad, País" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destino</Label>
                          <Input id="destination" placeholder="Ciudad, País" required />
                        </div>
                      </div>

                      {serviceType === "terrestrial" && (
                        <div className="space-y-2">
                          <Label htmlFor="vehicle-type">Tipo de Unidad</Label>
                          <Select defaultValue="ftl">
                            <SelectTrigger id="vehicle-type">
                              <SelectValue placeholder="Seleccione tipo de unidad" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ftl">Carga Completa (FTL)</SelectItem>
                              <SelectItem value="ltl">Carga Parcial (LTL)</SelectItem>
                              <SelectItem value="transfer">Transfer</SelectItem>
                              <SelectItem value="last-mile">Última Milla</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {serviceType === "air" && (
                        <div className="space-y-2">
                          <Label htmlFor="air-service">Servicio Aéreo</Label>
                          <Select defaultValue="priority">
                            <SelectTrigger id="air-service">
                              <SelectValue placeholder="Seleccione servicio aéreo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="priority">Priority</SelectItem>
                              <SelectItem value="economy">Economy</SelectItem>
                              <SelectItem value="charter">Charter</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {serviceType === "maritime" && (
                        <div className="space-y-2">
                          <Label htmlFor="maritime-service">Servicio Marítimo</Label>
                          <Select defaultValue="fcl">
                            <SelectTrigger id="maritime-service">
                              <SelectValue placeholder="Seleccione servicio marítimo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fcl">Full Container Load (FCL)</SelectItem>
                              <SelectItem value="lcl">Less Container Load (LCL)</SelectItem>
                              <SelectItem value="multimodal">Multimodal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {serviceType === "storage" && (
                        <div className="space-y-2">
                          <Label htmlFor="storage-service">Servicio de Almacenamiento</Label>
                          <Select defaultValue="warehouse">
                            <SelectTrigger id="storage-service">
                              <SelectValue placeholder="Seleccione servicio de almacenamiento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="warehouse">Almacén Fiscal</SelectItem>
                              <SelectItem value="cross-docking">Cross-docking</SelectItem>
                              <SelectItem value="fulfillment">Fulfillment</SelectItem>
                              <SelectItem value="inventory">Gestión de Inventario</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="pickup-date">Fecha de Recolección</Label>
                          <div className="flex">
                            <Input id="pickup-date" type="date" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pickup-time">Hora de Recolección</Label>
                          <Input id="pickup-time" type="time" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stops">Paradas Intermedias</Label>
                        <Textarea
                          id="stops"
                          placeholder="Indique si requiere paradas intermedias (Ciudad, dirección)"
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="cargo" className="space-y-4 pt-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="cargo-type">Tipo de Carga</Label>
                          <Select defaultValue="general">
                            <SelectTrigger id="cargo-type">
                              <SelectValue placeholder="Seleccione tipo de carga" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">Carga General</SelectItem>
                              <SelectItem value="perishable">Perecederos</SelectItem>
                              <SelectItem value="dangerous">Mercancía Peligrosa</SelectItem>
                              <SelectItem value="fragile">Frágil</SelectItem>
                              <SelectItem value="oversized">Sobredimensionada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="packaging">Tipo de Embalaje</Label>
                          <Select defaultValue="pallet">
                            <SelectTrigger id="packaging">
                              <SelectValue placeholder="Seleccione tipo de embalaje" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pallet">Pallets</SelectItem>
                              <SelectItem value="box">Cajas</SelectItem>
                              <SelectItem value="container">Contenedor</SelectItem>
                              <SelectItem value="bulk">Granel</SelectItem>
                              <SelectItem value="other">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Peso (kg)</Label>
                          <Input id="weight" type="number" placeholder="0.00" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volume">Volumen (m³)</Label>
                          <Input id="volume" type="number" placeholder="0.00" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pieces">Número de Piezas</Label>
                          <Input id="pieces" type="number" placeholder="0" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensiones (cm)</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Input id="length" placeholder="Largo" />
                          <Input id="width" placeholder="Ancho" />
                          <Input id="height" placeholder="Alto" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="value">Valor Declarado (USD)</Label>
                        <Input id="value" type="number" placeholder="0.00" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="special-requirements">Requerimientos Especiales</Label>
                        <Textarea
                          id="special-requirements"
                          placeholder="Indique cualquier requerimiento especial para su carga"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-2">
                    <Label htmlFor="additional-comments">Comentarios Adicionales</Label>
                    <Textarea
                      id="additional-comments"
                      placeholder="Información adicional relevante para su solicitud"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
