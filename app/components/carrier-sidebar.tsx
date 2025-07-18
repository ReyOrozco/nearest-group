"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Home, Truck, Clock, DollarSign, FileCheck, Settings, LogOut } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function CarrierSidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const items = [
    {
      href: "/carrier",
      title: "Dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/shipments",
      title: "Embarques",
      icon: <Truck className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/updates",
      title: "Actualizaciones",
      icon: <Clock className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/invoices",
      title: "Facturación",
      icon: <DollarSign className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/compliance",
      title: "Compliance",
      icon: <FileCheck className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/reports",
      title: "Informes",
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      href: "/carrier/settings",
      title: "Configuración",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm font-medium",
            pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
      <div className="flex-1"></div>
      <Button variant="ghost" className="justify-start mt-auto">
        <LogOut className="mr-2 h-4 w-4" />
        Cerrar Sesión
      </Button>
    </nav>
  )
}
