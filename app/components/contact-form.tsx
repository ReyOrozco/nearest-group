"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "./language-toggle"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react"

export function ContactForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* LEFT SIDE INFO */}
          <div className="relative bg-gradient-to-br from-[#38b6ff] to-[#1e90ff] text-white p-12 flex flex-col justify-center">

            <h2 className="text-4xl font-bold mb-10">
              Hablemos de tu Negocio
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-white/90">+52 81 1075 9409</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/90">luis.parra@nearestgroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1" />
                <div>
                  <p className="font-semibold">Oficina</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Monterrey Nuevo León<br />
                    Miguel Hidalgo y Costilla 2404, Obispado, 64060 Monterrey, N.L.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 mt-1" />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-white/90 text-sm">
                    Lunes - Viernes<br />
                    8:00 AM — 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-12">

            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Envíanos un mensaje
            </h3>

            <p className="text-gray-500 mb-8">
              Nuestro equipo responderá lo antes posible.
            </p>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                <p className="text-sm text-green-800">
                  Tu mensaje fue enviado correctamente.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-1" />
                <p className="text-sm text-red-800">
                  Ocurrió un error. Intenta nuevamente.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <Label>Nombre</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label>Empresa</Label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Mi Empresa"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="correo@empresa.com"
                  />
                </div>

                <div>
                  <Label>Teléfono</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 81 0000 0000"
                  />
                </div>

              </div>

              <div>
                <Label>Mensaje</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  className="min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-gray-900 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </Button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}