"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-toggle"
import { motion } from "framer-motion"
import { Star, TrendingUp } from "lucide-react"

export function SuccessStories() {
  const { t } = useLanguage()

  const stories = [
    {
      company: "Empresa Textil Premium",
      industry: t("textil"),
      challenge: "Necesitaban optimizar la distribución estacional de colecciones de ropa",
      solution: "Implementamos un sistema de logística personalizado con predicción de demanda",
      result: "20% reducción en costos de envío y entregas puntuales en todas las temporadas",
      icon: "👕",
    },
    {
      company: "Farmacéutica MX",
      industry: t("farmaceutico"),
      challenge: "Mantener la cadena de frío para medicamentos especializados",
      solution: "Soluciones de transporte refrigerado con monitoreo de temperatura en tiempo real",
      result: "100% cumplimiento normativo y cero productos dañados",
      icon: "💊",
    },
    {
      company: "Distribuidora de Alimentos",
      industry: t("alimentos"),
      challenge: "Gestionar múltiples puntos de distribución con productos perecederos",
      solution: "Red logística con centros de distribución estratégicos y control de temperatura",
      result: "30% aumento en eficiencia operativa y mejor rotación de inventario",
      icon: "🍎",
    },
    {
      company: "Manufacturer Automotriz",
      industry: t("automotriz"),
      challenge: "Control preciso de piezas y números de serie en toda la cadena",
      solution: "Sistema de rastreo y gestión de inventario integrado",
      result: "Reducción del 25% en tiempos de espera y mejor cumplimiento de entregas",
      icon: "🚗",
    },
    {
      company: "Tienda Electrónica Online",
      industry: t("electronica"),
      challenge: "Fulfillment de múltiples órdenes diarias con manejo seguro de productos delicados",
      solution: "Centro de fulfillment dedicado con empaques especializados",
      result: "99.5% tasa de satisfacción del cliente y entregas en 24-48 horas",
      icon: "💻",
    },
    {
      company: "Productor de Papel",
      industry: t("papelTitle"),
      challenge: "Transporte seguro de grandes volúmenes de papel y cartón",
      solution: "Flota especializada con espacios de almacenamiento optimizados",
      result: "Ahorros operacionales del 18% y entregas más rápidas",
      icon: "📦",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="success" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("historiasExitoTitle")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("historiasExitoDesc")}
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-3xl">{story.icon}</div>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{story.company}</CardTitle>
                  <CardDescription className="text-xs font-medium text-primary">
                    {story.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Desafío</p>
                    <p className="text-sm leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Solución</p>
                    <p className="text-sm leading-relaxed">{story.solution}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-700">{story.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
