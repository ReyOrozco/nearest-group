"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    origin: "",
    destination: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          origin: "",
          destination: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>{t("enviarSolicitud")}</CardTitle>
        <CardDescription>{t("stayUpToDate")}</CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-green-50 text-green-800 border border-green-200 rounded flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">¡Éxito!</div>
              <div className="text-sm">{t("mensajeEnviado")}</div>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-red-50 text-red-800 border border-red-200 rounded flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Error</div>
              <div className="text-sm">{t("errorEnvio")}</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("nombreCompleto")}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Juan Pérez"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">{t("empresa")}</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Mi Empresa S.A."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("correoElectronico")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="juan@ejemplo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t("telefono")}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+52 123 456 7890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">{t("tipoServicio")}</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">{t("seleccioneServicio")}</option>
              <option value="terrestrial">{t("logisticaTerrestre")}</option>
              <option value="air">{t("logisticaAerea")}</option>
              <option value="maritime">{t("logisticaMaritima")}</option>
              <option value="storage">{t("almacenamiento")}</option>
              <option value="other">Otro</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="origin">{t("origen")}</Label>
              <Input
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="Ciudad de Origen"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">{t("destino")}</Label>
              <Input
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Ciudad de Destino"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("mensaje")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t("detallesAdicionales")}
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("enviando")}
              </>
            ) : (
              t("enviar")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
