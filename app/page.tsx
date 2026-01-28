"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  CheckCircle,
  Globe,
  MapPin,
  Package,
  Plane,
  Ship,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "./components/site-header"
import { NewsSection } from "./components/news-section"
import { ClientReviews } from "./components/client-reviews"
import { OurClients } from "./components/our-clients"
import { SpecializedIndustries } from "./components/specialized-industries"
import { useLanguage } from "./components/language-toggle"
import { WhatsappButton } from "./components/whatsapp-button"
import { FloatingVideoButton } from "./components/floating-video-button"

export default function Home() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      origin: formData.get("origin"),
      destination: formData.get("destination"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Mensaje enviado correctamente")
        e.currentTarget.reset()
      } else {
        alert("Error al enviar el mensaje")
      }
    } catch {
      alert("Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

     {/* HERO */}
      <section id="hero" className="relative w-full bg-[#F5F7FA]">
        {/* Contenedor con proporción exacta de la imagen */}
        <div className="relative w-full aspect-[16/9] max-h-[80vh] overflow-hidden">
          <img
            src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/Portada_2026.jpg"
            alt="Soluciones logísticas"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Overlay lateral para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"></div>

          {/* Contenido */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container max-w-6xl grid md:grid-cols-2">
              <div>
                <h1 className="mb-6 text-4xl md:text-5xl font-extrabold text-[#00B5F5] drop-shadow-lg">
                  {t("heroTitle")}
                </h1>

                <p className="mb-10 max-w-md text-lg md:text-xl text-white drop-shadow-md">
                  {t("heroSubtitle")}
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#00B5F5] hover:bg-[#00A3DD] text-white shadow-lg"
                >
                  <Link href="/#contact">
                    {t("solicitarCotizacion")} →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-12 md:py-24">
        <div className="container max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              {t("quienesSomosTitle")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("quienesSomosDesc")}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* MISIÓN */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("mision")}</h3>
              </div>
              <p className="text-muted-foreground">
                {t("misionDesc")}
              </p>
            </div>

            {/* VISIÓN */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Globe className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("vision")}</h3>
              </div>
               <p className="text-muted-foreground text-justify leading-relaxed">
                  {t("misionDesc")}
                </p>
            </div>

            {/* VALORES */}
              <div className="flex flex-col items-center space-y-6">
                {/* Encabezado con icono */}
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-6 w-6" />
                  <h3 className="text-xl font-bold text-center">
                    {t("valores")}
                  </h3>
                </div>

                {/* Contenido en 2 columnas centradas */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-muted-foreground text-center">
                  {/* Columna 1 */}
                  <span>{t("compromiso")}</span>
                  <span>{t("trabajoEquipo")}</span>

                  <span>{t("puntualidad")}</span>
                  <span>{t("transparencia")}</span>

                  <span>{t("innovacion")}</span>
                  <span>{t("excelenciaOperativa")}</span>

                  <span>{t("responsabilidad")}</span>
                </div>
              </div>
          </div>
        </div>
      </section>

      <OurClients />
      <SpecializedIndustries />
      <ClientReviews />
      <NewsSection />

      <FloatingVideoButton />
      <WhatsappButton />
    </div>
  )
}
