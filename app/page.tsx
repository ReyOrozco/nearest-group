"use client"

import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Package,
  Plane,
  Ship,
  Truck,
  PhoneIcon as WhatsApp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewsSection } from "./components/news-section"
import { SiteHeader } from "./components/site-header"
import { ClientReviews } from "./components/client-reviews"
import { OurClients } from "./components/our-clients"
import { SpecializedIndustries } from "./components/specialized-industries"
import { OurCapacity } from "./components/our-capacity"
import { useLanguage } from "./components/language-toggle"
// Añadir el componente WhatsappButton al final del componente principal
import { WhatsappButton } from "./components/whatsapp-button"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t("heroTitle")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("heroSubtitle")}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#contact">
                  <Button className="bg-success hover:bg-success/90">
                    {t("solicitarCotizacion")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Logística Global"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/Opcion01.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Capacidad Section */}
      <OurCapacity />

      {/* Nuestros Servicios Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("nuestrosServicios")}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("descripcionServicios")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <Link href="/services/terrestrial" className="text-xl font-bold hover:text-accent">
                {t("logisticaTerrestre")}
              </Link>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/terrestrial" className="hover:text-accent">
                    {t("ftl")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/terrestrial" className="hover:text-accent">
                    {t("ltl")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/terrestrial" className="hover:text-accent">
                    {t("transfer")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/terrestrial" className="hover:text-accent">
                    {t("distribucionNacional")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <Link href="/services/air" className="text-xl font-bold hover:text-accent">
                {t("logisticaAerea")}
              </Link>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/air" className="hover:text-accent">
                    {t("priority")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/air" className="hover:text-accent">
                    {t("economy")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/air" className="hover:text-accent">
                    {t("charter")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/air" className="hover:text-accent">
                    {t("consolidados")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <Ship className="h-8 w-8 text-primary" />
              </div>
              <Link href="/services/maritime" className="text-xl font-bold hover:text-accent">
                {t("logisticaMaritima")}
              </Link>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/maritime" className="hover:text-accent">
                    {t("fcl")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/maritime" className="hover:text-accent">
                    {t("lcl")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/maritime" className="hover:text-accent">
                    {t("multimodal")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/maritime" className="hover:text-accent">
                    {t("proyectosEspeciales")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <Link href="/services/storage" className="text-xl font-bold hover:text-accent">
                {t("almacenamiento")}
              </Link>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/storage" className="hover:text-accent">
                    {t("almacenFiscal")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storage" className="hover:text-accent">
                    {t("crossDocking")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storage" className="hover:text-accent">
                    {t("fulfillment")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storage" className="hover:text-accent">
                    {t("gestionInventario")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("quienesSomosTitle")}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("quienesSomosDesc")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("mision")}</h3>
              </div>
              <p className="text-muted-foreground">{t("misionDesc")}</p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Globe className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("vision")}</h3>
              </div>
              <p className="text-muted-foreground">{t("visionDesc")}</p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <CheckCircle className="h-6 w-6" />
                <h3 className="text-xl font-bold">{t("valores")}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t("compromiso")}</li>
                <li>{t("puntualidad")}</li>
                <li>{t("innovacion")}</li>
                <li>{t("responsabilidad")}</li>
                <li>{t("trabajoEquipo")}</li>
                <li>{t("transparencia")}</li>
                <li>{t("excelenciaOperativa")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients">
        <OurClients />
      </section>

      {/* Specialized Industries Section */}
      <SpecializedIndustries />

      {/* Value Added Section */}
      <section id="value" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("valorAgregadoTitle")}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("valorAgregadoDesc")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <h3 className="text-xl font-bold">{t("atencionPersonalizada")}</h3>
              </div>
              <p className="text-muted-foreground">{t("atencionPersonalizadaDesc")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <h3 className="text-xl font-bold">{t("puertaAPuerta")}</h3>
              </div>
              <p className="text-muted-foreground">{t("puertaAPuertaDesc")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <h3 className="text-xl font-bold">{t("coberturaGlobal")}</h3>
              </div>
              <p className="text-muted-foreground">{t("coberturaGlobalDesc")}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <h3 className="text-xl font-bold">{t("solucionesMedida")}</h3>
              </div>
              <p className="text-muted-foreground">{t("solucionesMedidaDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="success">
        <ClientReviews />
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("solicitudServicio")}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("solicitudServicioDesc")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    {t("nombre")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder={t("nombre")}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="company"
                  >
                    {t("empresa")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="company"
                    placeholder={t("empresa")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    {t("email")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="correo@empresa.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone"
                  >
                    {t("telefono")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    placeholder="+52 (123) 456-7890"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="service"
                >
                  {t("tipoServicio")}
                </label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="service"
                >
                  <option value="">{t("seleccioneServicio")}</option>
                  <option value="terrestrial">{t("logisticaTerrestre")}</option>
                  <option value="air">{t("logisticaAerea")}</option>
                  <option value="maritime">{t("logisticaMaritima")}</option>
                  <option value="storage">{t("almacenamiento")}</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="origin"
                  >
                    {t("origen")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="origin"
                    placeholder="Ciudad, País"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="destination"
                  >
                    {t("destino")}
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="destination"
                    placeholder="Ciudad, País"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  {t("mensaje")}
                </label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  placeholder={t("detallesAdicionales")}
                ></textarea>
              </div>
              <Button className="w-full bg-success hover:bg-success/90">{t("enviarSolicitud")}</Button>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">{t("informacionContacto")}</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t("oficinasMty")}</p>
                      <p className="text-sm text-muted-foreground">{t("direccionMty")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">{t("telefono")}</p>
                      <p className="text-sm text-muted-foreground">(+52) 8110759409</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <div>
                      <p className="font-medium">{t("email")}</p>
                      <p className="text-sm text-muted-foreground">contacto@nearestgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <div>
                      <p className="font-medium">{t("horario")}</p>
                      <p className="text-sm text-muted-foreground">{t("horarioDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-primary text-primary-foreground py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Package className="h-6 w-6" />
                <span>Nearest Group</span>
              </div>
              <p className="text-sm text-primary-foreground/80">{t("heroSubtitle")}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">{t("servicios")}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/services/terrestrial" className="hover:text-accent">
                    {t("logisticaTerrestre")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/air" className="hover:text-accent">
                    {t("logisticaAerea")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/maritime" className="hover:text-accent">
                    {t("logisticaMaritima")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/storage" className="hover:text-accent">
                    {t("almacenamiento")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">{t("quienesSomos")}</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-accent">
                    {t("quienesSomos")}
                  </a>
                </li>
                <li>
                  <a href="#capacity" className="hover:text-accent">
                    {t("nuestraCapacidad")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {t("mision")} y {t("vision")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-primary-foreground/80">© 2025 Opsafy. {t("derechosReservados")}</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/528110759409"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        >
          <WhatsApp className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
      {/* Al final del componente, antes del cierre de </div> principal, añadir: */}
      <WhatsappButton />
    </div>
  )
}
