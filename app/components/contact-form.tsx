"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-xl overflow-hidden">
        {/* LEFT COLUMN - CONTACT INFO */}
        <div className="bg-[#38b6ff] text-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Información de Contacto</h2>
          
          <div className="space-y-10">
            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white/20 border border-white/30">
                  <Phone className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white/90">Teléfono</h4>
                <p className="mt-1 text-white font-medium">+52 55 1234 5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white/20 border border-white/30">
                  <Mail className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white/90">Email</h4>
                <p className="mt-1 text-white font-medium">contacto@nearestgroup.com</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white/20 border border-white/30">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white/90">Oficina Principal</h4>
                <p className="mt-2 text-white text-sm leading-relaxed">
                  Calle 8 #30 Int. 1<br/>
                  Ampliación Progreso Nacional<br/>
                  C.P. 07650, Ciudad de México
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-white/20 border border-white/30">
                  <Clock className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white/90">Horario de Atención</h4>
                <p className="mt-2 text-white text-sm">
                  Lunes - Viernes: 8:00 AM - 6:00 PM<br/>
                  Sábado: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80 mb-3 font-semibold">Información Adicional</p>
              <p className="text-sm text-white mb-2">contacto@nearestgroup.com</p>
              <p className="text-sm text-white mb-2">www.nearestgroup.com</p>
              <p className="text-sm text-white font-semibold">Centro de monitoreo: 24/7</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="p-8 md:p-12 lg:p-14 flex flex-col">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Envíanos un mensaje</h3>
            <p className="text-gray-600 text-lg">Te responderemos en menos de 24 horas</p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-base">¡Éxito!</div>
                <div className="text-sm">{t("mensajeEnviado")}</div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-base">Error</div>
                <div className="text-sm">{t("errorEnvio")}</div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-gray-800">{t("nombreCompleto")}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                  className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-semibold text-gray-800">{t("empresa")}</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Mi Empresa S.A."
                  className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-800">{t("correoElectronico")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@ejemplo.com"
                  className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-800">{t("telefono")}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+52 123 456 7890"
                  className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-semibold text-gray-800">{t("tipoServicio")}</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
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
                <Label htmlFor="origin" className="text-sm font-semibold text-gray-800">{t("origen")}</Label>
                <Input
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="Ciudad de Origen"
                  className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-semibold text-gray-800">{t("destino")}</Label>
              <Input
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Ciudad de Destino"
                className="h-11 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-800">{t("mensaje")}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("detallesAdicionales")}
                className="min-h-[120px] border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-bold text-base rounded-lg transition-colors" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> {t("enviando")}
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
