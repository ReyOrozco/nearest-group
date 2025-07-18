"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"
import { WhatsappButton } from "@/app/components/whatsapp-button"

export default function AutomotiveIndustryPage() {
  const { t, language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Logística Just-in-Time y Just-in-Sequence para líneas de producción",
          "Gestión de inventario sincronizada con la demanda de producción",
          "Transporte especializado para componentes automotrices y vehículos",
          "Soluciones de embalaje específicas para piezas de alta precisión",
          "Sistemas de trazabilidad avanzados para cumplir requisitos OEM",
          "Almacenamiento especializado para componentes sensibles",
          "Servicios de secuenciación y pre-montaje para líneas de producción",
          "Gestión logística de repuestos y servicio postventa",
        ]
      : [
          "Just-in-Time and Just-in-Sequence logistics for production lines",
          "Inventory management synchronized with production demand",
          "Specialized transport for automotive components and vehicles",
          "Specific packaging solutions for high-precision parts",
          "Advanced traceability systems to meet OEM requirements",
          "Specialized storage for sensitive components",
          "Sequencing and pre-assembly services for production lines",
          "Logistics management of spare parts and after-sales service",
        ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-muted/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Link href="/#industries" className="inline-flex items-center text-primary hover:underline mb-2">
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    {t("volverIndustrias")}
                  </Link>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("automotriz")}</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Ofrecemos soluciones logísticas de alta precisión para la industria automotriz, donde la puntualidad y fiabilidad son críticas. Nuestra experiencia abarca desde la gestión de la cadena de suministro para fabricantes de automóviles hasta la distribución de componentes y repuestos, aplicando metodologías Just-in-Time y Just-in-Sequence."
                      : "We offer high-precision logistics solutions for the automotive industry, where punctuality and reliability are critical. Our experience ranges from supply chain management for automobile manufacturers to the distribution of components and spare parts, applying Just-in-Time and Just-in-Sequence methodologies."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={language === "es" ? "Logística para Industria Automotriz" : "Logistics for Automotive Industry"}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=620&width=1100"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("beneficiosIndustriaTextil")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Nuestro enfoque en la industria automotriz se centra en la precisión, eficiencia y confiabilidad, garantizando que cada componente llegue a su destino en el momento exacto y en perfectas condiciones."
                    : "Our approach in the automotive industry focuses on precision, efficiency, and reliability, ensuring that each component reaches its destination at the exact time and in perfect condition."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("necesitaSolucion")}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Contacte con nuestros especialistas para desarrollar una solución logística que optimice su cadena de suministro automotriz."
                    : "Contact our specialists to develop a logistics solution that optimizes your automotive supply chain."}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90">{t("solicitarInformacion")}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsappButton />
    </div>
  )
}
