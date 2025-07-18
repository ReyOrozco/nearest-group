"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"
import { WhatsappButton } from "@/app/components/whatsapp-button"

export default function TextilIndustryPage() {
  const { t, language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Gestión especializada de mercancía delicada con control de temperatura y humedad",
          "Trazabilidad completa en toda la cadena logística con actualizaciones en tiempo real",
          "Distribución omnicanal para entrega en tiendas físicas y e-commerce",
          "Gestión de temporadas y colecciones con almacenamiento flexible",
          "Servicios de valor añadido: etiquetado, empaquetado y preparación para punto de venta",
          "Soluciones de logística inversa para devoluciones y reciclaje textil",
          "Transporte multimodal optimizado para reducir tiempos y costos",
          "Cumplimiento de normativas internacionales y certificaciones del sector textil",
        ]
      : [
          "Specialized management of delicate merchandise with temperature and humidity control",
          "Complete traceability throughout the logistics chain with real-time updates",
          "Omnichannel distribution for delivery to physical stores and e-commerce",
          "Season and collection management with flexible storage",
          "Value-added services: labeling, packaging, and preparation for point of sale",
          "Reverse logistics solutions for returns and textile recycling",
          "Optimized multimodal transport to reduce time and costs",
          "Compliance with international regulations and textile sector certifications",
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("ropaTextil")}</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Ofrecemos soluciones logísticas integrales para la industria textil y de la moda, adaptadas a las exigencias de un sector dinámico donde la puntualidad y el cuidado del producto son fundamentales. Nuestros servicios especializados cubren desde el transporte internacional de materias primas hasta la distribución final al consumidor."
                      : "We offer comprehensive logistics solutions for the textile and fashion industry, adapted to the demands of a dynamic sector where punctuality and product care are essential. Our specialized services cover everything from international transport of raw materials to final distribution to the consumer."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={language === "es" ? "Logística para Industria Textil" : "Logistics for Textile Industry"}
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
                    ? "Desarrollamos estrategias logísticas específicas para el sector textil, atendiendo a las particularidades de cada cliente y garantizando la eficiencia en toda la cadena de suministro."
                    : "We develop specific logistics strategies for the textile sector, attending to the particularities of each client and guaranteeing efficiency throughout the supply chain."}
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
                    ? "Contacte con nuestro equipo especializado para diseñar una solución logística a medida para su empresa textil o de moda."
                    : "Contact our specialized team to design a tailored logistics solution for your textile or fashion company."}
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
