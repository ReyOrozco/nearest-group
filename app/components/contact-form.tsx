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
        {/* LEFT COLUMN - CONTENT & DESCRIPTION */}
        <div className="bg-white text-gray-900 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Soluciones logísticas integrales para tu negocio</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ofrecemos servicios de logística terrestre, aérea, marítima y almacenamiento con cobertura nacional e internacional
          </p>
          <Button className="w-full md:w-auto h-12 bg-[#38b6ff] hover:bg-[#2a9dd9] text-white font-semibold rounded-lg">
            Solicitar Cotización →
          </Button>
        </div>

        {/* RIGHT COLUMN - CONTACT INFO */}
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
      </div>
    </div>
  )
}
