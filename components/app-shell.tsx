"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-clip selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main className="flex-grow w-full relative z-10 pt-0 pb-0">
        {children}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
