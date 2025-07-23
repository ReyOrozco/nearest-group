"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-toggle"

export interface NewsItem {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  date: string
  image: string
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Expansión de servicios en Latinoamérica",
    titleEn: "Service expansion in Latin America",
    description: "Nearest Group anuncia la apertura de nuevas rutas y servicios en países de Latinoamérica.",
    descriptionEn: "Nearest Group announces the opening of new routes and services in Latin American countries.",
    date: "2025-01-15",
    image:
      "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Noticias/Expansi%C3%B3n%20de%20servicios%20en%20Latinoam%C3%A9rica.png",
  },
  {
    id: "news-2",
    title: "Nueva flota de vehículos eléctricos",
    titleEn: "New fleet of electric vehicles",
    description:
      "Comprometidos con el medio ambiente, incorporamos vehículos eléctricos a nuestra flota de distribución urbana.",
    descriptionEn: "Committed to the environment, we incorporate electric vehicles into our urban distribution fleet.",
    date: "2025-05-20",
    image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Noticias/Unidad%20Electrica.jpeg",
  },
  {
    id: "news-3",
    title: "Certificación ISO 9001:2015",
    titleEn: "ISO 9001:2015 Certification",
    description: "Nearest Group obtiene la certificación ISO 9001:2015 por su sistema de gestión de calidad.",
    descriptionEn: "Nearest Group obtains ISO 9001:2015 certification for its quality management system.",
    date: "2025-03-10",
    image: "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Noticias/ISO.png",
  },
]

export function NewsSection() {
  const { t, language } = useLanguage()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "es" ? "es-MX" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("newsUpdates")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("stayUpToDate")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                alt={language === "es" ? item.title : item.titleEn}
                className="aspect-video w-full object-cover"
                src={item.image || "/placeholder.svg?height=200&width=400"}
              />
              <CardHeader>
                <CardTitle>{language === "es" ? item.title : item.titleEn}</CardTitle>
                <CardDescription>{formatDate(item.date)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{language === "es" ? item.description : item.descriptionEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
