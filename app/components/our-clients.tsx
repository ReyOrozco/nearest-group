"use client"

import { useLanguage } from "./language-toggle"
import { Card, CardContent } from "@/components/ui/card"

export function OurClients() {
  const { t } = useLanguage()

  const clients = [
    { name: "Empresa 1", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Audi.png" },
    { name: "Empresa 2", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Whirlpool_Corporation_Logo.png" },
    { name: "Empresa 3", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/cemex-logo-.png" },
    { name: "Empresa 4", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Ternium_Logo.svg.png" },
    { name: "Empresa 5", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Herdez-logo_red-2.png" },
    { name: "Empresa 6", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/American-Standard-Logo-2013n.png" },
    { name: "Empresa 7", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/sales-del-valle.png" },
    { name: "Empresa 8", logo: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/envases_rgb600x400px.png" },
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-background shadow-none">
              <CardContent className="flex items-center justify-center p-6">
                <img
                  alt={client.name}
                  className="aspect-[2/1] object-contain"
                  height="80"
                  src={client.logo || "/placeholder.svg"}
                  width="150"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
