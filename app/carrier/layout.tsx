"use client"

import type React from "react"
import { CarrierSidebar } from "@/app/components/carrier-sidebar"
import { Truck } from "lucide-react"
import { useLanguage } from "@/app/components/language-toggle"
import { LanguageToggle } from "@/app/components/language-toggle"

export default function CarrierLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { t } = useLanguage()
  // Verificar si estamos en la página de login
  const isLoginPage = typeof window !== "undefined" && window.location.pathname === "/carrier/login"

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6" />
            <h1 className="text-xl font-bold">{t("portalProveedores")}</h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="relative">
              <span className="absolute right-2 top-2.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">carrier@example.com</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="py-6 pr-6">
            <CarrierSidebar />
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden p-4 md:py-6">{children}</main>
      </div>
    </div>
  )
}
