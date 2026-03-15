"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2, Phone, Mail, MapPin, Clock } from "lucide-react"

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
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="md:col-span-2 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-8">{t("enviarSolicitud")}</h3>
          
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-300">Teléfono</h4>
                <p className="mt-1 text-white font-medium">+52 55 1234 5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-300">Email</h4>
                <p className="mt-1 text-white font-medium">contacto@nearestgroup.com</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-300">Oficina Principal</h4>
                <p className="mt-1 text-white text-sm leading-relaxed">
                  Calle 8 #30 Int. 1<br/>
                  Ampliación Progreso Nacional<br/>
                  C.P. 07650, Ciudad de México
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-300">Horario de Atención</h4>
                <p className="mt-1 text-white text-sm">
                  Lunes - Viernes: 8:00 AM - 6:00 PM<br/>
                  Sábado: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3 font-semibold">Información Adicional</p>
              <p className="text-sm text-blue-300 mb-2">contacto@nearestgroup.com</p>
              <p className="text-sm text-blue-300 mb-2">www.nearestgroup.com</p>
              <p className="text-sm text-green-400 font-semibold">Centro de monitoreo: 24/7</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="md:col-span-3 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Envíanos un mensaje</h3>
          <p className="text-gray-600 mb-6">Te responderemos en menos de 24 horas</p>
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">¡Éxito!</div>
              <div className="text-sm">{t("mensajeEnviado")}</div>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Error</div>
              <div className="text-sm">{t("errorEnvio")}</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">{t("nombreCompleto")}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Juan Pérez"
                className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">{t("empresa")}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Mi Empresa S.A."
                className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">{t("correoElectronico")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="juan@ejemplo.com"
                className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">{t("telefono")}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+52 123 456 7890"
                className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium text-gray-700">{t("tipoServicio")}</Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">{t("seleccioneServicio")}</option>
                <option value="terrestrial">{t("logisticaTerrestre")}</option>
                <option value="air">{t("logisticaAerea")}</option>
                <option value="maritime">{t("logisticaMaritima")}</option>
                <option value="storage">{t("almacenamiento")}</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="origin" className="text-sm font-medium text-gray-700">{t("origen")}</Label>
              <Input
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="Ciudad de Origen"
                className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-medium text-gray-700">{t("destino")}</Label>
            <Input
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Ciudad de Destino"
              className="h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">{t("mensaje")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t("detallesAdicionales")}
              className="min-h-[100px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full h-11 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("enviando")}
              </>
            ) : (
              t("enviar")
            )}
          </Button>
        </form>
        </div>
      </div>
    </div>
  )
}
