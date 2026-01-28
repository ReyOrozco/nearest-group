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
      name: "Luis Herrera",
      company: "Grupo Automotriz del Norte",
      text: "Nearest Group nos dio visibilidad total de nuestras rutas. Hoy tomamos decisiones con datos, no con suposiciones.",
      textEn:
        "Nearest Group gave us full visibility into our routes. Today we make decisions with data, not assumptions.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/luis-herrera.jpg.png",
    },
    {
      name: "Ana Martínez",
      company: "Farmacéutica Vitalis",
      text: "La trazabilidad y el control de temperatura fueron clave para nosotros. Cumplen lo que prometen.",
      textEn:
        "Traceability and temperature control were key for us. They deliver exactly what they promise.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/ana-martinez.png",
    },
    {
      name: "Jorge Salinas",
      company: "Distribuciones del Bajío",
      text: "Redujimos incidencias y reclamos en menos de tres meses. La diferencia es operativa, no solo comercial.",
      textEn:
        "We reduced incidents and claims in less than three months. The difference is operational, not just commercial.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/jorge-salinas.png",
    },
    {
      name: "Fernanda López",
      company: "Retail Express MX",
      text: "Nearest Group entiende el ritmo del retail. Puntualidad, control y comunicación clara.",
      textEn:
        "Nearest Group understands the pace of retail. Punctuality, control, and clear communication.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Mar%C3%ADa%20Gonz%C3%A1lez.jpg",
    },
    {
      name: "Miguel Torres",
      company: "Manufacturas Industriales Atlas",
      text: "Integramos sus servicios sin frenar la operación. Eso no es común en logística.",
      textEn:
        "We integrated their services without stopping operations. That’s not common in logistics.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/fernanda-lopez.png",
    },
    {
      name: "Patricia Ríos",
      company: "Agroexportadora del Pacífico",
      text: "El seguimiento en tiempo real nos dio tranquilidad con nuestros clientes internacionales.",
      textEn:
        "Real-time tracking gave us peace of mind with our international clients.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/patricia-rios.png",
    },
    {
      name: "Daniel Navarro",
      company: "ElectroParts México",
      text: "Manejo de carga sensible impecable. Menos mermas, más confianza.",
      textEn:
        "Flawless handling of sensitive cargo. Less waste, more trust.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/daniel-navarro.png",
    },
    {
      name: "Claudia Méndez",
      company: "Consumo Masivo del Centro",
      text: "Pasamos de apagar incendios a planear estratégicamente. Eso lo cambió todo.",
      textEn:
        "We went from firefighting to strategic planning. That changed everything.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/claudia-mendez.png",
    },
    {
      name: "Ricardo Peña",
      company: "Logística Frontera Segura",
      text: "Cruces más ordenados y menos sorpresas. La información llega antes que los problemas.",
      textEn:
        "More organized border crossings and fewer surprises. Information arrives before problems.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Ricardo%20Pe%C3%B1a.jpg",
    },
    {
      name: "Sofía Castillo",
      company: "E-commerce Supply Co.",
      text: "Escalamos operaciones sin perder control. Justo lo que necesitábamos para crecer.",
      textEn:
        "We scaled operations without losing control. Exactly what we needed to grow.",
      image:
        "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Mar%C3%ADa%20Gonz%C3%A1lez.jpg",
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
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("clientReviews")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            {t("successStories")}
          </p>
        </div>

        {/* Review Card */}
        <div className="mx-auto max-w-6xl py-12">
          <Card className="border-none bg-muted/50 shadow-none">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Imagen rectangular */}
                <img
                  alt={reviews[currentReview].name}
                  src={reviews[currentReview].image || "/placeholder.svg"}
                  className="w-28 rounded-lg object-cover shrink-0 h-[256]"
                />

                {/* Texto */}
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary/50" />

                  <p className="text-xl font-medium leading-relaxed md:text-2xl">
                    {language === "es"
                      ? reviews[currentReview].text
                      : reviews[currentReview].textEn}
                  </p>

                  <div>
                    <p className="font-semibold">
                      {reviews[currentReview].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentReview].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="mt-6 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              aria-label={t("anteriorResena")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              aria-label={t("siguienteResena")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
