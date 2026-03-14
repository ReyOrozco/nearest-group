"use client"

import { BarChart3, Clock, Shield, Zap } from "lucide-react"
import { useLanguage } from "./language-toggle"

export function ValueAddedSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Zap,
      title: "Rapidez",
      description: "Entregas rápidas y eficientes con los mejores tiempos del mercado.",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Protección completa de tu carga con seguimiento 24/7 y coberturas.",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimiento garantizado de fechas de entrega sin compromisos.",
    },
    {
      icon: BarChart3,
      title: "Optimización",
      description: "Reducción de costos logísticos mediante rutas y procesos optimizados.",
    },
  ]

  return (
    <section id="value" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("valorAgregadoTitle") || "Nuestro Valor Agregado"}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("valorAgregadoDesc") || "Lo que nos diferencia en el mercado logístico"}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg hover:border-primary group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col space-y-4">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
