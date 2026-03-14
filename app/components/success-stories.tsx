"use client"

import { useLanguage } from "./language-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function SuccessStories() {
  const { t } = useLanguage()

  const stories = [
    {
      company: "Cemex",
      title: "Optimización de distribución nacional",
      description: "Reducción de 35% en costos logísticos mediante soluciones integradas de transporte terrestre y almacenamiento.",
      result: "35% reducción de costos",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/cemex-logo-.png",
    },
    {
      company: "Whirlpool",
      title: "Logística aérea prioritaria para electrodomésticos",
      description: "Implementación de servicios aéreos prioritarios para garantizar entregas justo a tiempo en toda Latinoamérica.",
      result: "99.2% puntualidad",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Whirlpool_Corporation_Logo.png",
    },
    {
      company: "Ternium",
      title: "Gestión de acero y productos siderúrgicos",
      description: "Soluciones especializadas para transporte de materiales pesados con cumplimiento de normas internacionales.",
      result: "0 incidentes en 2 años",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Ternium_Logo.svg.png",
    },
    {
      company: "Audi",
      title: "Logística automotriz de precisión",
      description: "Transporte especializado de componentes automotrices con trazabilidad completa y entrega sincronizada.",
      result: "100% trazabilidad",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Audi.png",
    },
    {
      company: "Smurfit Westrock",
      title: "Distribución nacional de empaques",
      description: "Red de almacenamiento y distribución de papel y empaques con entregas programadas en punto de venta.",
      result: "15,000 m² almacenados",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/skg_logo.svg",
    },
    {
      company: "American Standard",
      title: "Logística de sanitarios y cerámicos",
      description: "Transporte especializado de artículos frágiles con empaque personalizado y seguimiento GPS 24/7.",
      result: "0.2% tasa de daño",
      image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/American-Standard-Logo-2013n.png",
    },
  ]

  return (
    <section id="success" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("historiasExito") || "Historias de Éxito"}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("historiasExitoDesc") || "Casos de éxito de nuestros clientes corporativos"}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <img
                      alt={story.company}
                      className="h-12 w-auto max-w-[100px] object-contain"
                      src={story.image || "/placeholder.svg?height=48&width=150"}
                    />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-grow space-y-2">
                    <h3 className="font-bold text-lg text-primary">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">
                      ✓ {story.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
