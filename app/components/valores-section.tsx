"use client"

import { useLanguage } from "@/app/components/language-toggle"
import { CheckCircle } from "lucide-react"

export function ValoresSection() {
  const { t } = useLanguage()

  const valores = [
    t("compromiso"),
    t("puntualidad"),
    t("innovacion"),
    t("responsabilidad"),
    t("trabajoEquipo"),
    t("transparencia"),
    t("excelenciaOperativa"),
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("valores")}
          </h2>
        </div>

        {/* Dos columnas responsivas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {valores.map((valor, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
              <span className="text-lg">{valor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
