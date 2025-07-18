"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-toggle"
import { CheckCircle, Circle } from "lucide-react"

interface ShipmentEvent {
  id: string
  title: string
  date: string
  time: string
  completed: boolean
  current: boolean
}

export function ShipmentTimeline() {
  const { t, language } = useLanguage()
  const [progress, setProgress] = useState(0)

  // Datos de ejemplo para la línea de tiempo
  const shipmentEvents: ShipmentEvent[] = [
    {
      id: "request",
      title: language === "es" ? "Solicitud Creada" : "Request Created",
      date: "12/04/2025",
      time: "09:15",
      completed: true,
      current: false,
    },
    {
      id: "loading",
      title: language === "es" ? "Cita de Carga" : "Loading Appointment",
      date: "15/04/2025",
      time: "08:00",
      completed: true,
      current: false,
    },
    {
      id: "origin",
      title: language === "es" ? "Llegada a Origen" : "Arrival at Origin",
      date: "15/04/2025",
      time: "07:45",
      completed: true,
      current: false,
    },
    {
      id: "departure",
      title: language === "es" ? "Salida de Origen" : "Departure from Origin",
      date: "15/04/2025",
      time: "10:30",
      completed: true,
      current: false,
    },
    {
      id: "transit",
      title: language === "es" ? "En Tránsito" : "In Transit",
      date: "",
      time: "",
      completed: false,
      current: true,
    },
    {
      id: "destination",
      title: language === "es" ? "Llegada a Destino" : "Arrival at Destination",
      date: "17/04/2025",
      time: "14:30",
      completed: false,
      current: false,
    },
  ]

  // Animar el progreso cuando el componente se monta
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(65)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {language === "es" ? "Progreso del Embarque" : "Shipment Progress"}
      </h2>

      {/* Barra de progreso */}
      <div className="relative mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{language === "es" ? "Origen" : "Origin"}</span>
          <span className="text-sm font-medium text-center">{progress}%</span>
          <span className="text-sm font-medium">{language === "es" ? "Destino" : "Destination"}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Línea de tiempo */}
      <h3 className="text-xl font-semibold mb-4">{language === "es" ? "Línea de Tiempo" : "Timeline"}</h3>
      <div className="space-y-6">
        {shipmentEvents.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Línea conectora */}
            {index < shipmentEvents.length - 1 && (
              <div
                className={`absolute left-3.5 top-6 w-0.5 h-full ${event.completed ? "bg-primary" : "bg-gray-200"}`}
              ></div>
            )}

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {event.completed ? (
                  <CheckCircle className="h-7 w-7 text-primary" />
                ) : event.current ? (
                  <Circle className="h-7 w-7 text-primary animate-pulse" />
                ) : (
                  <Circle className="h-7 w-7 text-gray-300" />
                )}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h4 className={`text-lg font-medium ${event.current ? "text-primary" : ""}`}>{event.title}</h4>
                  {event.current && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {language === "es" ? "Actual" : "Current"}
                    </span>
                  )}
                </div>
                {event.date && event.time && (
                  <p className="text-sm text-gray-500">
                    {event.date} {event.time}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
