"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ToolsMarquee } from "@/components/tools-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AiCapabilitiesSection } from "@/components/ai-capabilities"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactModal } from "@/components/contact-modal"

export function PortfolioView() {
  const [contactModalOpen, setContactModalOpen] = React.useState(false)

  React.useEffect(() => {
    // Listen for custom trigger event or anchor hash
    const handleContactClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const trigger = target.closest("a[href='#contacto'], button[data-contact-trigger='true']")
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
      {/* Floating Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow w-full relative z-10 pt-0 pb-0">
        <div className="flex flex-col">
          <Hero />
          <ToolsMarquee />
          <ProjectsSection />
          <AiCapabilitiesSection />
        </div>
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <WhatsAppFloat />

      {/* Interactive Supabase Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}
