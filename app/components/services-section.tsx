"use client"

import { Truck, Plane, Ship, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-toggle"
import { motion } from "framer-motion"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Truck,
      titleKey: "logisticaTerrestre",
      items: [t("ftl"), t("ltl"), t("transfer"), t("distribucionNacional")],
    },
    {
      icon: Plane,
      titleKey: "logisticaAerea",
      items: [t("priority"), t("economy"), t("charter"), t("consolidados")],
    },
    {
      icon: Ship,
      titleKey: "logisticaMaritima",
      items: [t("fcl"), t("lcl"), t("multimodal"), t("proyectosEspeciales")],
    },
    {
      icon: Package,
      titleKey: "almacenamiento",
      items: [t("almacenFiscal"), t("crossDocking"), t("fulfillment"), t("gestionInventario")],
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
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("serviciosTitle")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("serviciosDesc")}
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <CardTitle>{t(service.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
