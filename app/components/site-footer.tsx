import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Link } from "@nextui-org/react"

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>
          <p className="text-sm text-muted-foreground">Hecho con ❤️ en NextUI.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium">Empresa</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              Acerca de
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
            <Link href="/admin/login" className="text-sm text-muted-foreground hover:text-foreground">
              Acceso Empleados
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
