"use client"

import Link from "next/link"
import { Package } from "lucide-react"
import { LanguageToggle, useLanguage } from "./language-toggle"

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6" />
          <span className="font-bold sm:inline-block">Nearest Group</span>
        </Link>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("quienesSomos")}
            </Link>
            <Link href="/#services" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("servicios")}
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t("contacto")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
