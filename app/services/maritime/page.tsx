import Link from "next/link"
import { ArrowLeft, CheckCircle, Package, Ship } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MaritimeLogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Package className="h-6 w-6" />
            <span>Nearest Group</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              Quiénes Somos
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="/#value" className="text-sm font-medium hover:text-primary">
              Valor Agregado
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/portal" className="hidden md:block">
              <Button variant="outline">Portal de Clientes</Button>
            </Link>
            <Button className="md:hidden" size="icon" variant="outline">
              <Package className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <Link href="/#services" className="inline-flex items-center text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Servicios
          </Link>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Soluciones Marítimas FCL & LCL Multimodal
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Cobertura en más de 30 países y tarifas competitivas para tus envíos internacionales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button>Cotiza tu transporte marítimo</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Logística Marítima"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=620&width=1100"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FCL Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Ship className="h-4 w-4" />
                <span>FCL (Full Container Load)</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Contenedores completos para tus envíos internacionales.
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Contenedores 20', 40', 40' HC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Refrigerados, Flat Rack, Open Top, Tank Containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Servicio puerta a puerta nacional e internacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Seguimiento GPS en tiempo real</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="FCL Service"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=620&width=1100"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LCL Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                alt="LCL Service"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=620&width=1100"
                width="550"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Package className="h-4 w-4" />
                <span>LCL (Less Container Load / Consolidado)</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Tarifas fraccionadas con la misma eficiencia.
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Envíos consolidados para optimizar costos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Rutas regulares desde Asia, Europa, América del Sur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para cargas que no requieren un contenedor completo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multimodal Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
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
                  className="h-4 w-4"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg>
                <span>Soluciones Multimodales</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Integración puerto-camión-ferrocarril para una logística completa.
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Combinación de diferentes medios de transporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gestión de documentación y aduanas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optimización de rutas y costos</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Multimodal Service"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=620&width=1100"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
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
                className="h-4 w-4"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span>Ventajas Competitivas</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Por qué elegir nuestros servicios marítimos?
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cobertura Global</h3>
              <p className="text-sm text-muted-foreground text-center">
                Red de agentes propios en más de 30 países para una gestión eficiente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Salidas Frecuentes</h3>
              <p className="text-sm text-muted-foreground text-center">
                Programación regular de salidas y seguimiento GPS en tiempo real.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tiempos Optimizados</h3>
              <p className="text-sm text-muted-foreground text-center">
                Rutas planificadas para minimizar tiempos de tránsito y entregas puntuales.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Gestión Aduanera</h3>
              <p className="text-sm text-muted-foreground text-center">
                Trámites aduaneros consolidados o con tu propio agente para mayor flexibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
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
                className="h-4 w-4"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Proceso</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Cómo funciona nuestro servicio marítimo?
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-lg font-bold text-center">Elección de servicio</h3>
              <p className="text-sm text-muted-foreground text-center">
                Selecciona entre FCL o LCL según tus necesidades de carga.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-lg font-bold text-center">Selección de contenedor</h3>
              <p className="text-sm text-muted-foreground text-center">
                Elige el tipo de contenedor y las rutas más adecuadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-lg font-bold text-center">Cotización</h3>
              <p className="text-sm text-muted-foreground text-center">
                Recibe una cotización personalizada basada en volumen y destino.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <h3 className="text-lg font-bold text-center">Programación</h3>
              <p className="text-sm text-muted-foreground text-center">
                Coordinación de recogida y transporte multimodal.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                5
              </div>
              <h3 className="text-lg font-bold text-center">Monitoreo y entrega</h3>
              <p className="text-sm text-muted-foreground text-center">
                Seguimiento en tiempo real hasta la entrega final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Listo para optimizar tu logística marítima?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Contáctanos hoy mismo para una cotización personalizada y descubre cómo podemos ayudarte a mejorar tu
                cadena de suministro internacional.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/#contact">
                <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                  Acceder al Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-primary">
                <Package className="h-6 w-6" />
                <span>Nearest Group</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Soluciones logísticas integrales para conectar su negocio con el mundo.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Servicios</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/terrestrial" className="hover:text-primary">
                    Logística Terrestre
                  </Link>
                </li>
                <li>
                  <Link href="/services/air" className="hover:text-primary">
                    Logística Aérea
                  </Link>
                </li>
                <li>
                  <Link href="/services/maritime" className="hover:text-primary">
                    Logística Marítima
                  </Link>
                </li>
                <li>
                  <Link href="/services/storage" className="hover:text-primary">
                    Almacenamiento
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#about" className="hover:text-primary">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-primary">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-primary">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-primary">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/portal" className="hover:text-primary">
                    Portal de Clientes
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-primary">
                    Solicitud de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground">
                © 2025 Nearest Group. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
                <Link href="#" className="text-muted-foreground hover:text-primary">
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
            className="h-6 w-6"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}
