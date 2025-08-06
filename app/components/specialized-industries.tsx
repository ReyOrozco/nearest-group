"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-toggle"

interface Industry {
  nameKey: string
  descKey: string
  icon: string
  slug: string
}

export function SpecializedIndustries() {
  const { t } = useLanguage()

 const industries: Industry[] = [
  {
    nameKey: "textilTitle",
    descKey: "textilDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/ropa.png",
    slug: "textil",
  },
  {
    nameKey: "saludTitle",
    descKey: "saludDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/personal-medico.png",
    slug: "salud",
  },
  {
    nameKey: "alimentosTitle",
    descKey: "alimentosDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/refresco.png",
    slug: "alimentos",
  },
  {
    nameKey: "automotrizTitle",
    descKey: "automotrizDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Automotriz.png",
    slug: "automotriz",
  },
  {
    nameKey: "electronicaTitle",
    descKey: "electronicaDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Electronica.png",
    slug: "electronica",
  },
  {
    nameKey: "papelTitle", // NUEVA INDUSTRIA
    descKey: "papelDesc",
    icon: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/papel.png",
    slug: "papel",
  },
]

  return (
    <section id="industries" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("industriasTitle")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("industriasDesc")}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.nameKey}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-left shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <img
                  src={industry.icon || "/placeholder.svg?height=32&width=32"}
                  alt={t(industry.nameKey)}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{t(industry.nameKey)}</h3>
              <p className="mt-2 text-muted-foreground">{t(industry.descKey)}</p>
              <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {t("verMas")} <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
