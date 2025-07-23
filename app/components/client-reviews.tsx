"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-toggle"

export function ClientReviews() {
  const { t, language } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Carlos Rodríguez",
      company: "Textiles Modernos S.A.",
      text: "Nearest Group ha transformado nuestra cadena de suministro. Su atención al detalle y capacidad de respuesta son excepcionales.",
      textEn:
        "Nearest Group has transformed our supply chain. Their attention to detail and responsiveness are exceptional.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Iconos/lo%20que%20dicen%20nuestros%20clientes/Carlos%20Rodr%C3%ADguez.jpg",
    },
    {
      name: "María González",
      company: "Alimentos Frescos Inc.",
      text: "Desde que trabajamos con Nearest Group, nuestros tiempos de entrega se han reducido en un 40%. Un socio logístico confiable.",
      textEn:
        "Since working with Nearest Group, our delivery times have been reduced by 40%. A reliable logistics partner.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Iconos/lo%20que%20dicen%20nuestros%20clientes/Mar%C3%ADa%20Gonz%C3%A1lez.jpg",
    },
    {
      name: "Roberto Sánchez",
      company: "Electrónica Avanzada",
      text: "La capacidad de Nearest Group para manejar envíos delicados de componentes electrónicos ha sido fundamental para nuestro crecimiento.",
      textEn:
        "Nearest Group's ability to handle delicate shipments of electronic components has been essential for our growth.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Iconos/lo%20que%20dicen%20nuestros%20clientes/Roberto.png",
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("clientReviews")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("successStories")}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card className="border-none bg-muted/50 shadow-none">
            <CardContent className="p-6 sm:p-10">
              <div className="flex flex-col items-center space-y-4">
                <Quote className="h-12 w-12 text-primary/50" />
                <p className="text-center text-xl font-medium leading-relaxed md:text-2xl">
                  {language === "es" ? reviews[currentReview].text : reviews[currentReview].textEn}
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    alt={reviews[currentReview].name}
                    className="h-12 w-12 rounded-full object-cover"
                    src={reviews[currentReview].image || "/placeholder.svg?height=48&width=48"}
                  />
                  <div className="text-left">
                    <p className="font-semibold">{reviews[currentReview].name}</p>
                    <p className="text-sm text-muted-foreground">{reviews[currentReview].company}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-center space-x-4">
            <Button variant="outline" size="icon" onClick={prevReview} aria-label={t("anteriorResena")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextReview} aria-label={t("siguienteResena")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
