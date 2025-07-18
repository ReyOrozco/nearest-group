"use client"

import type React from "react"

import { useState } from "react"
import { Search, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-toggle"

// Datos de muestra para simular un envío
const sampleShipment = {
  trackingNumber: "NG-12345678",
  status: "En tránsito",
  origin: "Ciudad de México, MX",
  destination: "Monterrey, MX",
  estimatedDelivery: "2023-05-15",
  lastUpdate: "2023-05-10 14:30",
  carrier: "Nearest Express",
  events: [
    { date: "2023-05-10 14:30", location: "Querétaro, MX", description: "En tránsito" },
    { date: "2023-05-09 10:15", location: "Ciudad de México, MX", description: "Salió del centro de distribución" },
    { date: "2023-05-08 16:45", location: "Ciudad de México, MX", description: "Procesado en centro de distribución" },
    { date: "2023-05-08 09:30", location: "Ciudad de México, MX", description: "Recibido en centro de distribución" },
    { date: "2023-05-07 18:20", location: "Ciudad de México, MX", description: "Envío creado" },
  ],
}

// Traducciones para el componente
const trackingTranslations = {
  es: {
    title: "Rastrear Envío",
    description: "Ingrese su número de rastreo para ver el estado de su envío",
    placeholder: "Ingrese número de rastreo",
    button: "Rastrear",
    notFound: "No se encontró información para el número de rastreo proporcionado",
    shipmentDetails: "Detalles del Envío",
    trackingNumber: "Número de Rastreo",
    status: "Estado",
    origin: "Origen",
    destination: "Destino",
    estimatedDelivery: "Entrega Estimada",
    lastUpdate: "Última Actualización",
    carrier: "Transportista",
    shipmentHistory: "Historial del Envío",
    date: "Fecha",
    location: "Ubicación",
    description: "Descripción",
  },
  en: {
    title: "Track Shipment",
    description: "Enter your tracking number to see the status of your shipment",
    placeholder: "Enter tracking number",
    button: "Track",
    notFound: "No information found for the provided tracking number",
    shipmentDetails: "Shipment Details",
    trackingNumber: "Tracking Number",
    status: "Status",
    origin: "Origin",
    destination: "Destination",
    estimatedDelivery: "Estimated Delivery",
    lastUpdate: "Last Update",
    carrier: "Carrier",
    shipmentHistory: "Shipment History",
    date: "Date",
    location: "Location",
    description: "Description",
  },
}

export function TrackShipmentSample() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<typeof sampleShipment | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { currentLanguage } = useLanguage()

  // Función para traducir
  const t = (key: string): string => {
    const lang = currentLanguage as keyof typeof trackingTranslations
    const translationKey = key as keyof typeof trackingTranslations.es

    return trackingTranslations[lang]?.[translationKey] || key
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulamos una búsqueda con un retraso
    setTimeout(() => {
      if (trackingNumber.trim() === "NG-12345678") {
        setShipment(sampleShipment)
      } else {
        setError(t("notFound"))
        setShipment(null)
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <div className="flex-1">
              <Input
                placeholder={t("placeholder")}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">Ejemplo: NG-12345678</p>
            </div>
            <Button type="submit" disabled={isLoading || !trackingNumber.trim()}>
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t("button")}
                </span>
              ) : (
                <span className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  {t("button")}
                </span>
              )}
            </Button>
          </form>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {shipment && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t("shipmentDetails")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("trackingNumber")}:</span>
                    <span className="font-medium">{shipment.trackingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("status")}:</span>
                    <span className="font-medium flex items-center">
                      <Truck className="mr-1 h-4 w-4 text-primary" />
                      {shipment.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("carrier")}:</span>
                    <span className="font-medium">{shipment.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("lastUpdate")}:</span>
                    <span className="font-medium">{shipment.lastUpdate}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("origin")}:</span>
                    <span className="font-medium">{shipment.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("destination")}:</span>
                    <span className="font-medium">{shipment.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("estimatedDelivery")}:</span>
                    <span className="font-medium">{shipment.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">{t("shipmentHistory")}</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
                <div className="space-y-6">
                  {shipment.events.map((event, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                        {index === 0 ? (
                          <div className="w-4 h-4 rounded-full bg-primary"></div>
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium">{event.description}</div>
                        <div className="text-sm text-muted-foreground">{event.location}</div>
                        <div className="text-xs text-muted-foreground">{event.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Nearest Group © {new Date().getFullYear()}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
