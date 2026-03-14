"use client"

import { Users, LogisticsIcon, Globe, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-toggle"
import { motion } from "framer-motion"

// Fallback icon for LogisticsIcon
const LogisticsIconFallback = () => <div className="h-5 w-5" />

export function ValueAddedSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Users,
      titleKey: "atencionPersonalizada",
      descriptionKey: "atencionPersonalizadaDesc",
    },
    {
      icon: LogisticsIconFallback,
      titleKey: "puertaAPuerta",
      descriptionKey: "puertaAPuertaDesc",
    },
    {
      icon: Globe,
      titleKey: "coberturaGlobal",
      descriptionKey: "coberturaGlobalDesc",
    },
    {
      icon: Zap,
      titleKey: "solucionesMedida",
      descriptionKey: "solucionesMedidaDesc",
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
    <section id="value" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("valorAgregadoTitle")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("valorAgregadoDesc")}
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
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{t(value.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(value.descriptionKey)}
                    </p>
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
