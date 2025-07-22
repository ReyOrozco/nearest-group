"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/app/components/site-header"
import { useLanguage } from "@/app/components/language-toggle"

export default function ElectronicsIndustryPage() {
  const { language } = useLanguage()

  const benefits =
    language === "es"
      ? [
          "Gestión de riesgos para carga de alto valor agregado.",
          "Visibilidad en línea en tiempo real.",
          "Conectividad con tecnologías de la información.",
          "Monitoreo y seguimiento interno y externo.",
          "Mayor flexibilidad y capacidad de respuesta.",
          "Pólizas de seguro robustas.",
          "Sistema de gestión de entrega vía web, móvil y EDI.",
          "Control de números de serie.",
          "Distribución con grandes redes mayoristas, centros comerciales y minoristas.",
        ]
      : [
          "Risk management for high-value cargo.",
          "Real-time online visibility.",
          "Connectivity with information technologies.",
          "Internal and external monitoring and tracking.",
          "Greater flexibility and responsiveness.",
          "Comprehensive insurance coverage.",
          "Delivery management system via web, mobile, and EDI.",
          "Serial number control.",
          "Distribution through large wholesale networks, malls, and retailers.",
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
                    {language === "es" ? "Volver a Industrias" : "Back to Industries"}
                  </Link>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {language === "es" ? "Industria Electrónica" : "Electronics Industry"}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {language === "es"
                      ? "Ofrecemos soluciones logísticas para la industria electrónica, garantizando seguridad, trazabilidad y eficiencia en la gestión de productos de alto valor."
                      : "We provide logistics solutions for the electronics industry, ensuring security, traceability, and efficiency in handling high-value products."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt={language === "es" ? "Logística para la industria electrónica" : "Logistics for electronics industry"}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/images/electronica.jpg" // Asegúrate de agregar esta imagen en /public/images
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
                    ? "Beneficios para la industria electrónica"
                    : "Benefits for the electronics industry"}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "es"
                    ? "Nuestras soluciones logísticas aseguran el transporte eficiente y seguro de productos electrónicos, adaptándonos a los más altos estándares del sector."
                    : "Our logistics solutions ensure efficient and safe transportation of electronic products, meeting the highest industry standards."}
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
                    ? "Contacta a nuestro equipo para diseñar una solución logística adaptada a las necesidades específicas de tu negocio."
                    : "Contact our team to design a logistics solution tailored to your business needs."}
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
    </div>
  )
}
