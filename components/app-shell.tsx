"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactModal } from "@/components/contact-modal"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [contactModalOpen, setContactModalOpen] = React.useState(false)

  React.useEffect(() => {
    const handleContactClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const trigger = target.closest("a[href='/contacto'], button[data-contact-trigger='true']")
      if (trigger) {
        e.preventDefault()
        setContactModalOpen(true)
      }
    }

    document.addEventListener("click", handleContactClick)
    return () => document.removeEventListener("click", handleContactClick)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-clip selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main className="flex-grow w-full relative z-10 pt-0 pb-0">
        {children}
      </main>

      <Footer />
      <WhatsAppFloat />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}
