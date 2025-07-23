"use client"

import { useEffect, useState, useRef } from "react"
import { Building2, Truck, Users, Warehouse, Globe, BarChart3 } from "lucide-react"
import { useLanguage } from "./language-toggle"

export function OurCapacity() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Estado para los contadores
  const [counts, setCounts] = useState({
    crossDocks: 0,
    colaboradores: 0,
    almacenamiento: 0,
    viajes: 0,
    paises: 0,
    flota: 0,
  })

  // Valores finales para los contadores
  const finalCounts = {
    crossDocks: 120,
    colaboradores: 1200,
    almacenamiento: 40000,
    viajes: 1.3,
    paises: 30,
    flota: 2000,
  }

  // Configurar el Intersection Observer nativo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Efecto para animar los contadores cuando la sección está en vista
  useEffect(() => {
    if (isInView) {
      const duration = 2000 // duración de la animación en ms
      const interval = 20 // intervalo de actualización en ms
      const steps = duration / interval

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep += 1
        const progress = Math.min(currentStep / steps, 1)

        setCounts({
          crossDocks: Math.floor(progress * finalCounts.crossDocks),
          colaboradores: Math.floor(progress * finalCounts.colaboradores),
          almacenamiento: Math.floor(progress * finalCounts.almacenamiento),
          viajes: Number.parseFloat((progress * finalCounts.viajes).toFixed(1)),
          paises: Math.floor(progress * finalCounts.paises),
          flota: Math.floor(progress * finalCounts.flota),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  return (
    <section id="capacity" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#38b6ff] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("capacidadTitle")}</h2>
            <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("descripcionCapacidad")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <Warehouse className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.almacenamiento.toLocaleString()}</p>
            <h3 className="text-xl font-bold">{t("almacenamientoTitle")}</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.colaboradores.toLocaleString()}</p>
            <h3 className="text-xl font-bold">{t("colaboradoresTitle")}</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.flota.toLocaleString()}</p>
            <h3 className="text-xl font-bold">{t("flotaTitle")}</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.crossDocks}</p>
            <h3 className="text-xl font-bold">{t("crossDocksTitle")}</h3>
            <p className="text-sm text-white/80">{t("operacionesSemanales")}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.viajes}M</p>
            <h3 className="text-xl font-bold">{t("viajesTitle")}</h3>
            <p className="text-sm text-white/80">{t("enviosCompletados")}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-white/10 p-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <p className="text-3xl font-bold">+{counts.paises}</p>
            <h3 className="text-xl font-bold">{t("paisesTitle")}</h3>
            <p className="text-sm text-white/80">{t("coberturaGlobalText")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
