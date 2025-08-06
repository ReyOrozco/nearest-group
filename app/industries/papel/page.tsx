"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"
import { WhatsappButton } from "@/app/components/whatsapp-button"

export default function PaperIndustryPage() {
  const { t, language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Manejo cuidadoso de papel, cartón y productos derivados",
          "Almacenamiento con control de humedad y temperatura",
          "Transporte especializado para rollos y pallets de papel",
          "Optimización de rutas para distribución nacional",
          "Control de inventarios en tiempo real",
          "Empaque y embalaje personalizado según especificaciones",
          "Procesos eficientes de cross-docking para entrega rápida",
          "Integración con sistemas ERP para trazabilidad",
        ]
      : [
          "Careful handling of paper, cardboard, and related products",
          "Humidity and temperature-controlled storage",
          "Specialized transport for paper rolls and pallets",
          "Optimized routing for national distribution",
          "Real-time inventory control",
          "Custom packing and packaging based on specs",
          "Efficient cross-docking for fast delivery",
          "ERP system integration for traceability",
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {language === "es" ? "Industria del Papel" : "Paper Industry"}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Brindamos soluciones logísticas especializadas para la industria del papel, garantizando el manejo óptimo de productos sensibles como rollos, hojas y cartón, desde la manufactura hasta el cliente final."
                      : "We provide specialized logistics solutions for the paper industry, ensuring optimal handling of sensitive products like rolls, sheets, and cardboard from manufacturing to final delivery."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={language === "es" ? "Logística para la industria del papel" : "Logistics for the paper industry"}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/papel-industria-banner.jpeg"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {language === "es" ? "Beneficios para la Industria del Papel" : "Benefits for the Paper Industry"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Diseñamos soluciones específicas para mantener la integridad de los productos de papel en toda la cadena logística."
                    : "We design specific solutions to maintain the integrity of paper products throughout the logistics chain."}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("necesitas Solucion")}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Contáctenos para diseñar una solución logística adaptada a su operación en la industria del papel."
                    : "Contact us to design a logistics solution tailored to your paper industry operation."}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90">{t("solicitar Informacion")}</Button>
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
