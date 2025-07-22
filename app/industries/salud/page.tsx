"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"
import { WhatsappButton } from "@/app/components/whatsapp-button"

export default function HealthIndustryPage() {
  const { t, language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Cadena de frío garantizada con monitoreo constante de temperatura.",
          "Sistemas de seguimiento en tiempo real para medicamentos y dispositivos médicos.",
          "Almacenamiento especializado con control de humedad y temperatura.",
          "Distribución urgente para medicamentos críticos y emergencias.",
          "Cumplimiento de normativas sanitarias internacionales (GMP, GDP).",
          "Manejo seguro de productos farmacéuticos con trazabilidad completa.",
          "Transporte especializado para equipos médicos sensibles.",
          "Sistemas de serialización y control anti-falsificación.",
          "Logística inversa para productos sanitarios y gestión de residuos médicos.",
          "Soluciones de distribución a hospitales, farmacias y centros de salud.",
        ]
      : [
          "Guaranteed cold chain with constant temperature monitoring.",
          "Real-time tracking systems for medicines and medical devices.",
          "Specialized storage with humidity and temperature control.",
          "Urgent distribution for critical medications and emergencies.",
          "Compliance with international health regulations (GMP, GDP).",
          "Safe handling of pharmaceutical products with complete traceability.",
          "Specialized transport for sensitive medical equipment.",
          "Serialization systems and anti-counterfeiting control.",
          "Reverse logistics for healthcare products and medical waste management.",
          "Distribution solutions to hospitals, pharmacies, and health centers.",
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
                    {language === "es" ? "Salud y Cuidado Personal" : "Health and Personal Care"}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Proporcionamos servicios logísticos especializados para el sector salud y cuidado personal, con estricto cumplimiento normativo y máxima seguridad. Garantizamos la integridad de productos farmacéuticos, dispositivos médicos y productos de cuidado personal en toda la cadena de distribución."
                      : "We provide specialized logistics services for the health and personal care sector, ensuring strict regulatory compliance and maximum security. Our solutions guarantee the integrity of pharmaceutical products, medical devices, and personal care products throughout the distribution chain."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={
                    language === "es"
                      ? "Logística para Salud y Cuidado Personal"
                      : "Logistics for Health and Personal Care"
                  }
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/images/salud.jpg" // Asegúrate de poner esta imagen en /public/images
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
                  {language === "es"
                    ? "Beneficios para el sector salud y cuidado personal"
                    : "Benefits for the health and personal care sector"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Entendemos los requisitos específicos del sector sanitario y farmacéutico, ofreciendo soluciones que aseguran la calidad e integridad de los productos desde el origen hasta el punto de entrega."
                    : "We understand the specific requirements of the healthcare and pharmaceutical sector, offering solutions that ensure quality and integrity from origin to delivery."}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {language === "es" ? "¿Necesitas una solución personalizada?" : "Need a custom solution?"}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Contacta a nuestros especialistas en logística sanitaria para diseñar estrategias que optimicen tu cadena de suministro."
                    : "Contact our healthcare logistics specialists to design strategies that optimize your supply chain."}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    {language === "es" ? "Solicitar información" : "Request Information"}
                  </Button>
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
