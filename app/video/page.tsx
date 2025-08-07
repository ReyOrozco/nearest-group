"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, PlayCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Video hosted on Vercel Blob (provided by you)
const VIDEO_WEBM =
"https://crepkozegpevqpyh.public.blob.vercel-storage.com/Nearestgroup%20%281%29.webm"

export default function VideoPresentationPage() {
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
    {/* Header (matching style from services/terrestrial) */}
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img
              src="/logo-nearest.png"
              alt="Nearest Group Logo"
              className="h-24 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling?.setAttribute("style", "display:flex")
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

        <div className="flex items-center space-x-4">{/* spacer */}</div>
      </div>
    </header>

    {/* Video Player + Descripción */}
    <section id="player" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl border bg-black">
              <video
                controls
                preload="metadata"
                className="aspect-video w-full"
                playsInline
                poster="/placeholder.svg?height=720&width=1280"
                aria-label="Presentación en video de Nearest Group"
              >
                <source src={VIDEO_WEBM} type="video/webm" />
                {"Tu navegador no soporta el elemento de video."}
              </video>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Acerca del video</h2>
              <p className="text-muted-foreground">
                Sumérgete en nuestras capacidades operativas y soluciones que están transformando la logística.
                Descubre casos de éxito reales y cómo Nearest Group puede llevar tu operación al siguiente nivel.
                Activa el audio y prepárate para ver por qué nuestros clientes nos eligen.
              </p>
              <p className="text-muted-foreground">
                ¿Quieres resultados? Da play y conoce el servicio que puede transformar tu logística.
              </p>
              <div>
                <Link href="/#contact">
                  <Button className="w-full">Habla con un asesor</Button>
                </Link>
              </div>
            </div>
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
              ¿Listo para llevar tu logística al siguiente nivel?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/#contact">
              <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Footer (simple, page-specific) */}
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Nearest Group. Todos los derechos reservados.
          </p>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  </div>
)
}
