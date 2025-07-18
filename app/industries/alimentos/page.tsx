"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"
import { WhatsappButton } from "@/app/components/whatsapp-button"

export default function FoodIndustryPage() {
  const { t, language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Gestión integral de la cadena de frío para productos perecederos",
          "Trazabilidad completa con certificaciones de inocuidad alimentaria",
          "Almacenamiento con control de temperatura multi-ambiente",
          "Transporte especializado con equipos de refrigeración monitoreados",
          "Distribución capilar a supermercados, hoteles y restaurantes",
          "Gestión eficiente de fechas de caducidad y rotación de inventario",
          "Cumplimiento de normativas HACCP, ISO 22000 y otras certificaciones alimentarias",
          "Soluciones logísticas para productos frescos, congelados y secos",
        ]
      : [
          "Comprehensive cold chain management for perishable products",
          "Complete traceability with food safety certifications",
          "Storage with multi-environment temperature control",
          "Specialized transport with monitored refrigeration equipment",
          "Capillary distribution to supermarkets, hotels, and restaurants",
          "Efficient management of expiration dates and inventory rotation",
          "Compliance with HACCP, ISO 22000, and other food certifications",
          "Logistics solutions for fresh, frozen, and dry products",
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
                    {t("alimentosBebidas")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Desarrollamos soluciones logísticas especializadas para la industria alimentaria, garantizando la seguridad alimentaria y preservando la calidad de los productos perecederos en toda la cadena de suministro. Nuestros sistemas aseguran la temperatura controlada y la trazabilidad total desde el origen hasta el consumidor final."
                      : "We develop specialized logistics solutions for the food industry, guaranteeing food safety and preserving the quality of perishable products throughout the supply chain. Our systems ensure controlled temperature and total traceability from origin to end consumer."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={language === "es" ? "Logística para Alimentos y Bebidas" : "Logistics for Food and Beverages"}
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
                    ? "Nuestros servicios logísticos especializados para alimentos y bebidas están diseñados para garantizar la frescura, calidad y seguridad de los productos durante todo el proceso de distribución."
                    : "Our specialized logistics services for food and beverages are designed to guarantee the freshness, quality, and safety of products throughout the distribution process."}
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
                    ? "Contacte con nuestro equipo para diseñar una solución logística adaptada a las necesidades específicas de sus productos alimentarios."
                    : "Contact our team to design a logistics solution adapted to the specific needs of your food products."}
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
