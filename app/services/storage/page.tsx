"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle, Package, Warehouse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function StorageLogisticsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Inicio", href: "/", hasSubmenu: false },
    {
      name: "Quiénes Somos",
      hasSubmenu: true,
      submenu: [
        { name: "Quiénes Somos", href: "/#about" },
        { name: "Nuestra Capacidad", href: "/#capacity" },
        { name: "Servicios", href: "/#services" },
        { name: "Valor Agregado", href: "/#value" },
        { name: "Soluciones", href: "/#industries" },
      ],
    },
    {
      name: "Clientes",
      hasSubmenu: true,
      submenu: [
        { name: "Nuestros Clientes", href: "/#clients" },
        { name: "Historias de Éxito", href: "/#success" },
      ],
    },
    { name: "Noticias", href: "/#news", hasSubmenu: false },
    { name: "Contacto", href: "/#contact", hasSubmenu: false },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <img
                src="/logo-nearest.png"
                alt="Nearest Group Logo"
                className="h-32 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.nextElementSibling.style.display = "flex"
                }}
              />
              <div className="hidden items-center space-x-2">
                <span className="text-[rgb(1,176,241)] font-bold text-2xl">Nearest</span>
                <span className="text-[rgb(201,201,201)] font-bold text-2xl ml-1">Group</span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              className="ml-2 block md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) =>
              !link.hasSubmenu ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors text-foreground/60 hover:text-foreground/80"
                >
                  {link.name}
                </Link>
              ) : (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" size="sm" className="p-0 text-foreground/60 hover:text-foreground/80">
                      {link.name} <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.submenu?.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link href={sub.href} className="w-full">
                          {sub.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ),
            )}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 border-b bg-background md:hidden">
              <nav className="flex flex-col p-4">
                {navLinks.map((link) =>
                  !link.hasSubmenu ? (
                    <Link key={link.name} href={link.href} className="py-2" onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ) : (
                    <div key={link.name} className="py-2">
                      <div className="font-medium">{link.name}</div>
                      <div className="mt-1 space-y-1 pl-4">
                        {link.submenu?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-1 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </nav>
            </div>
          )}

          <div className="flex items-center space-x-4">{/* Empty div to maintain layout */}</div>
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
                  Almacenaje Dedicado y Compartido
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Infraestructura inteligente para su inventario con soluciones flexibles y seguras.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button>Solicita espacio de almacenamiento</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Almacenamiento"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/17.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Storage Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Warehouse className="h-4 w-4" />
                <span>Almacenamiento Dedicado</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Área exclusiva para tu mercancía con máxima seguridad.
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Espacio exclusivo para tus productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Control de acceso y seguridad 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalización según tus necesidades específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para inventarios permanentes o de alto valor</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Dedicated Storage"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/15.jpg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shared Storage Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <img
                alt="Shared Storage"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://crepkozegpevqpyh.public.blob.vercel-storage.com/16.jpg"
                width="550"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Package className="h-4 w-4" />
                <span>Almacenamiento Compartido</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Espacios flexibles según demanda con costos optimizados.
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flexibilidad para crecer o reducir según necesidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Costos optimizados y escalabilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para inventarios estacionales o variables</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
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
              </svg>
              <span>Servicios Adicionales</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Soluciones complementarias para una gestión integral
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
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Picking & Packing</h3>
              <p className="text-sm text-muted-foreground text-center">
                Selección y empaque de productos según tus especificaciones.
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
                  <path d="M18 8L22 12L18 16" />
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cross Docking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Transferencia directa sin almacenamiento intermedio para mayor eficiencia.
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
              <h3 className="text-xl font-bold">Gestión de Inventarios</h3>
              <p className="text-sm text-muted-foreground text-center">
                Control total con sistema WMS para optimizar tu stock.
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Seguros a Medida</h3>
              <p className="text-sm text-muted-foreground text-center">
                Protección personalizada para tu mercancía durante todo el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Beneficios</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                ¿Por qué elegir nuestros servicios de almacenamiento?
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
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
                  className="h-8 w-8 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Respuesta Rápida</h3>
              <p className="text-muted-foreground">
                Adaptación inmediata ante variaciones de demanda, permitiéndote responder ágilmente a los cambios del
                mercado.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Visibilidad Total</h3>
              <p className="text-muted-foreground">
                Acceso a reportes en tiempo real sobre tu inventario, movimientos y estado de tus productos en todo
                momento.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Costos Transparentes</h3>
              <p className="text-muted-foreground">
                Estructura de precios clara y sin sorpresas, con opciones flexibles que se adaptan a tu presupuesto y
                necesidades.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
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
                  className="h-8 w-8 text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Equipo Especializado</h3>
              <p className="text-muted-foreground">
                Personal altamente capacitado y atención personalizada para garantizar la mejor experiencia y cuidado de
                tu mercancía.
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
                ¿Cómo funciona nuestro servicio de almacenamiento?
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-lg font-bold text-center">Definición de requerimientos</h3>
              <p className="text-sm text-muted-foreground text-center">
                Análisis detallado de tus necesidades de espacio y servicios adicionales.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-lg font-bold text-center">Contrato y alta en WMS</h3>
              <p className="text-sm text-muted-foreground text-center">
                Formalización del acuerdo y configuración en nuestro sistema de gestión.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-lg font-bold text-center">Ingreso de mercancía</h3>
              <p className="text-sm text-muted-foreground text-center">
                Recepción con auditoría detallada para garantizar la integridad de tus productos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <h3 className="text-lg font-bold text-center">Gestión y reportes</h3>
              <p className="text-sm text-muted-foreground text-center">
                Administración continua con informes periódicos sobre el estado de tu inventario.
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
                ¿Listo para optimizar tu gestión de inventario?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Contáctanos hoy mismo para una consulta personalizada y descubre cómo nuestras soluciones de
                almacenamiento pueden impulsar tu negocio.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/#contact">
                <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                  Reserva tu espacio ahora
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                  Habla con un asesor
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
