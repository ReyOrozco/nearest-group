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
      <section
        id="hero"
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
        style={{
          backgroundImage:
            "url(https://crepkozegpevqpyh.public.blob.vercel-storage.com/Portada_01%20%281%29.webp)",
        }}
      >
        <div className="container relative z-10 grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mb-8 max-w-md text-white/90">
              {t("heroSubtitle")}
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">
                {t("solicitarCotizacion")} →
              </Link>
            </Button>
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
              <p className="text-muted-foreground">
                {t("visionDesc")}
              </p>
            </div>

            {/* VALORES – versión humana */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("valores")}</h3>
              </div>

              <p className="text-sm text-muted-foreground">
                Así es como trabajamos todos los días, con nuestros clientes y entre nosotros.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "compromiso",
                  "puntualidad",
                  "innovacion",
                  "responsabilidad",
                  "trabajoEquipo",
                  "transparencia",
                  "excelenciaOperativa",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t(key)}</span>
                  </div>
                ))}
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
