"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "./language-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageToggle } from "./language-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, currentLanguage } = useLanguage()

  // Enlaces de navegación con submenús
  const navLinks = [
    {
      name: t("inicio"),
      href: "/#hero",
      hasSubmenu: false,
    },
    {
      name: t("quienesSomos"),
      hasSubmenu: true,
      submenu: [
        { name: t("quienesSomos"), href: "/#about" },
        { name: t("nuestraCapacidad"), href: "/#capacity" },
        { name: t("servicios"), href: "/#services" },
        { name: t("valorAgregado"), href: "/#value" },
        { name: t("soluciones"), href: "/#industries" },
      ],
    },
    {
      name: t("clientes"),
      hasSubmenu: true,
      submenu: [
        { name: t("nuestrosClientes"), href: "/#clients" },
        { name: t("historiasExito"), href: "/#success" },
      ],
    },
    {
      name: t("noticias"),
      href: "/#news",
      hasSubmenu: false,
    },
    {
      name: t("contacto"),
      href: "/#contact",
      hasSubmenu: false,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Logo con los colores especificados */}
            <div className="flex items-center">
              <span className="text-[rgb(1,176,241)] font-bold text-2xl">Nearest</span>
              <span className="text-[rgb(201,201,201)] font-bold text-2xl ml-1">Group</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button className="ml-2 block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, index) =>
            !link.hasSubmenu ? (
              <Link
                key={index}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ) : (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" size="sm" className="text-foreground/60 hover:text-foreground/80 p-0">
                    {link.name} <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.submenu?.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex}>
                      <Link href={subItem.href} className="w-full">
                        {subItem.name}
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
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              {navLinks.map((link, index) =>
                !link.hasSubmenu ? (
                  <Link key={index} href={link.href} className="py-2" onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                ) : (
                  <div key={index} className="py-2">
                    <div className="font-medium">{link.name}</div>
                    <div className="pl-4 mt-1 space-y-1">
                      {link.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-1 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </nav>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <div className="hidden md:flex items-center space-x-4 text-sm"></div>
        </div>
      </div>
    </header>
  )
}
