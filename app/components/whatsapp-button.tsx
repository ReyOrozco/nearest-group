"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsappButton({ directOpen = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("es")

  // Detectar idioma del navegador al cargar
  useEffect(() => {
    const userLang = navigator.language.startsWith("es") ? "es" : "en"
    setLanguage(userLang)
  }, [])

  const phoneNumber = "5215512345678" // ✅ Cambia por tu número real
  const welcomeMessage =
    language === "es"
      ? "Hola, me gustaría solicitar información sobre los servicios de Nearest Group."
      : "Hello, I would like to request information about Nearest Group services."

  const encodedMessage = encodeURIComponent(welcomeMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  const handleClick = () => {
    if (directOpen) {
      window.open(whatsappUrl, "_blank")
    } else {
      if (isOpen) {
        window.open(whatsappUrl, "_blank")
      } else {
        setIsOpen(true)
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && !directOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-4 w-64 shadow-xl rounded-xl">
              <CardHeader className="pb-2 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Nearest Group</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="-mr-2 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pb-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {language === "es"
                    ? "¿Cómo podemos ayudarte con tu cotización o servicios logísticos?"
                    : "How can we help you with your quote or logistics services?"}
                </p>
              </CardContent>
              <CardFooter className="bg-primary/5 pt-0">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  {language === "es" ? "Enviar mensaje" : "Send message"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        className="rounded-full h-14 w-14 shadow-lg bg-green-500 hover:bg-green-600"
        onClick={handleClick}
      >
        <MessageSquare className="h-6 w-6 text-white" />
        <span className="sr-only">
          {language === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
        </span>
      </Button>
    </div>
  )
}
