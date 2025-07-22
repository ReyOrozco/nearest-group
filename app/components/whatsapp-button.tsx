"use client"

import { useEffect } from "react"

export function WhatsappButton() {
  const phoneNumber = "528110759409" // ✅ Reemplaza con tu número real
  const welcomeMessage = "Hola, me gustaría solicitar información sobre los servicios de Nearest Group."
  const encodedMessage = encodeURIComponent(welcomeMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Animación rebote usando Tailwind
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .bounce {
        animation: bounce 1.5s infinite;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bounce flex items-center justify-center h-16 w-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono oficial de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 .4C7.6.4.4 7.6.4 16c0 3 .8 5.8 2.4 8.3L0 32l7.9-2.5c2.3 1.3 5 2 8 2 8.4 0 15.6-7.2 15.6-15.6S24.4.4 16 .4zm0 28.5c-2.7 0-5.3-.7-7.6-2.1l-.5-.3-4.7 1.5 1.6-4.6-.3-.5c-1.4-2.3-2.2-5-2.2-7.7C2.3 8.2 8.2 2.3 16 2.3c7.7 0 13.7 6 13.7 13.7 0 7.8-6 13.9-13.7 13.9zm7.6-10.3c-.4-.2-2.2-1.1-2.5-1.2s-.6-.2-.8.2-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1s-1.6-.6-3-1.9c-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.8-2-1.1-2.8-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.4 1.4 3.6c.2.3 2.4 3.7 5.9 5.2.8.4 1.4.6 1.8.8.8.2 1.5.2 2.1.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>
    </div>
  )
}
