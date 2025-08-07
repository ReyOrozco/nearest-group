"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const VIDEO_WEBM =
  "https://crepkozegpevqpyh.public.blob.vercel-storage.com/Nearestgroup%20%281%29.webm"

export default function VideoPresentationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <img
                src="/logo-nearest.png"
                alt="Nearest Group Logo"
                className="h-16 w-auto transition-transform hover:scale-105 duration-200"
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
                  className="transition-colors text-foreground/60 hover:text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" size="sm" className="p-0 text-foreground/60 hover:text-primary">
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
        </div>
      </header>

      {/* Video Section */}
      <section
        id="player"
        className="flex-1 flex items-center justify-center py-16 px-2 md:px-0 bg-gradient-to-br from-background to-slate-100"
      >
        <div className="container mx-auto max-w-5xl rounded-2xl shadow-2xl bg-white/95 p-0 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="overflow-hidden rounded-2xl border bg-black/90 shadow-lg">
              <video
                ref={videoRef}
                autoPlay
                muted
                controls
                preload="metadata"
                className="aspect-video w-full transition-all duration-200 hover:shadow-2xl"
                playsInline
                poster="/placeholder.svg?height=720&width=1280"
                aria-label="Presentación en video de Nearest Group"
                style={{ background: "#19191a" }}
              >
                <source src={VIDEO_WEBM} type="video/webm" />
                {"Tu navegador no soporta el elemento de video."}
              </video>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center space-y-7 px-4 md:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Acerca del video</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prepárate para descubrir cómo <span className="font-semibold text-primary">Nearest Group</span> transforma la logística: capacidades operativas, soluciones innovadoras y casos de éxito reales.
              <br />
              <br />
              ¿Te interesa implementarlo en tu empresa?
            </p>
            <Link href="/#contact">
              <Button size="lg" className="w-full text-base font-semibold shadow-lg hover:scale-105 duration-200">
                Habla con un asesor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              ¿Listo para llevar tu logística al siguiente nivel?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-lg md:text-2xl">
              Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a transformar tu
              operación.
            </p>
            <Link href="/#contact">
              <Button
                variant="outline"
                className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-2xl text-xl font-bold shadow-md hover:scale-105 transition-transform"
              >
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Nearest Group. Todos los derechos reservados.
          </p>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary">
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  )
}
