"use client"

import Link from "next/link"
import { PlayCircle } from 'lucide-react'

export function FloatingVideoButton() {
  // Positioned above the WhatsApp button to avoid overlap
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Link
        href="/video"
        className="group flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        aria-label="Ver video"
      >
        <PlayCircle className="h-6 w-6 drop-shadow-sm transition-transform group-hover:scale-110" />
        <span className="font-semibold">Ver video</span>
        <span className="ml-1 inline-flex h-2 w-2 animate-ping rounded-full bg-white/80" aria-hidden="true" />
      </Link>
    </div>
  )
}
