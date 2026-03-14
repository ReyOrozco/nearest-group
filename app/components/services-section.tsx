"use client"

import Link from "next/link"
import { Truck, Plane, Ship, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-toggle"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      title: "Logística Terrestre",
      description: "Transporte terrestre confiable con amplia cobertura nacional e internacional.",
      icon: Truck,
      href: "/services/terrestrial",
    },
    {
      title: "Logística Aérea",
      description: "Envíos urgentes y especiales con máxima agilidad y precisión global.",
      icon: Plane,
      href: "/services/air",
    },
    {
      title: "Logística Marítima",
      description: "Soluciones marítimas para grandes volúmenes con opción económica.",
      icon: Ship,
      href: "/services/maritime",
    },
    {
      title: "Almacenamiento",
      description: "Infraestructura moderna con servicios integrales de distribución.",
      icon: Warehouse,
      href: "/services/storage",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("serviciosTitle") || "Nuestros Servicios"}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("serviciosDesc") || "Soluciones logísticas integrales adaptadas a tus necesidades"}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg hover:border-primary"
              >
                <div className="flex flex-col space-y-4">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Ver más →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
