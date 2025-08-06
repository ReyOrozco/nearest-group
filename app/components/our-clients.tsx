"use client"

import { useLanguage } from "./language-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function OurClients() {
  const { t } = useLanguage()

  const clients = [
    { name: "Cemex", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/cemex-logo-.png" },
    { name: "Whirlpool", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Whirlpool_Corporation_Logo.png" },
    { name: "Audi", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Audi.png" },
    { name: "Ternium", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Ternium_Logo.svg.png" },
    { name: "Herdez", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Herdez-logo_red-2.png" },
    { name: "American Standard", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/American-Standard-Logo-2013n.png" },
    { name: "Del Valle", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/sales-del-valle.png" },
    { name: "Envases", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/envases_rgb600x400px.png" },
    { name: "bonasal", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/bonasal.webp" },
    { name: "bose", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/bose.webp" },
    { name: "CAFESCA", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/CAFESCA.webp" },
    { name: "garcomex", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/garcomex.webp" },
    { name: "gondi", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/gondi.webp" },
    { name: "Gairet", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Gairet.webp" },
    { name: "osman", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/osman.webp" },
    { name: "phoeix", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/phoeix.jpeg" },
    { name: "PISA", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/PISA.webp" },
    { name: "psf", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/psf.webp" },
    { name: "RB", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/RB.webp" },
    { name: "Schettino", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Schettino.webp" },
    { name: "smurfit", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/smurfit.webp" },
    { name: "Torrecid", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Torrecid.webp" },
    { name: "westrock", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/westrock.webp" },
    { name: "biopappel", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/biopappel-logo.jpg" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("nuestrosClientes")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("empresasConfian")}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="overflow-hidden border-0 bg-background shadow-none hover:shadow-md transition-shadow duration-300 rounded-lg">
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    alt={client.name}
                    className="aspect-[2/1] object-contain h-20 w-auto max-w-[150px] hover:scale-105 transition-all duration-300 ease-in-out"
                    src={client.logo || "/placeholder.svg?height=80&width=150"}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
