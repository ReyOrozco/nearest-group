"use client"

import { useLanguage } from "./language-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function SuccessStories() {
  const { t } = useLanguage()

  const successClients = [
    { name: "Cemex", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/cemex-logo-.png", success: "Optimización de 40% en distribución" },
    { name: "Whirlpool", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Whirlpool_Corporation_Logo.png", success: "Entregas 99.5% puntuales" },
    { name: "Audi", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Audi.png", success: "Control de inventario en tiempo real" },
    { name: "Ternium", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Ternium_Logo.svg.png", success: "Reducción de costos 35%" },
    { name: "Smurfit Westrock", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/skg_logo.svg", success: "Mejora en rotación de inventario" },
    { name: "American Standard", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/American-Standard-Logo-2013n.png", success: "Flexibilidad operacional mejorada" },
    { name: "Del Valle", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/sales-del-valle.png", success: "Cadena de frío garantizada" },
    { name: "Envases", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/envases_rgb600x400px.png", success: "Eficiencia operativa +30%" },
    { name: "Bonasal", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/bonasal.webp", success: "Reducción de gastos logísticos" },
    { name: "Bose", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/bose.webp", success: "Satisfacción del cliente 98%" },
    { name: "CAFESCA", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/CAFESCA.webp", success: "Entregas optimizadas" },
    { name: "Garcomex", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/garcomex.webp", success: "Gestión mejorada" },
  ]

  return (
    <section id="success" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("historiasExitoTitle")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empresas líderes que confiaron en Nearest Group para optimizar sus operaciones logísticas
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {successClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 bg-background shadow-none hover:shadow-lg transition-shadow duration-300 rounded-lg h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full gap-3">
                  <img
                    alt={client.name}
                    className="aspect-[2/1] object-contain h-16 w-auto max-w-[120px] hover:scale-105 transition-all duration-300 ease-in-out"
                    src={client.logo || "/placeholder.svg?height=80&width=150"}
                  />
                  <p className="text-xs text-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {client.success}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
