"use client"

import { useLanguage } from "@/app/components/language-toggle"
import { Heart, Clock, Zap, Shield, Users, Eye, Target } from "lucide-react"
import { motion } from "framer-motion"

export function ValoresSection() {
  const { t } = useLanguage()

  const valores = [
    { label: t("compromiso"), icon: Heart },
    { label: t("puntualidad"), icon: Clock },
    { label: t("innovacion"), icon: Zap },
    { label: t("responsabilidad"), icon: Shield },
    { label: t("trabajoEquipo"), icon: Users },
    { label: t("transparencia"), icon: Eye },
    { label: t("excelenciaOperativa"), icon: Target },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("valores")}
          </h2>
          <p className="text-muted-foreground md:text-lg">Principios que guían nuestra excelencia operativa</p>
        </div>

        {/* Tres columnas responsivas - grid premium */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {valores.map((valor, index) => {
            const Icon = valor.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-base font-semibold text-gray-800">{valor.label}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
}
