import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ToolsMarquee } from "@/components/tools-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AiCapabilitiesSection } from "@/components/ai-capabilities"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-clip selection:bg-purple-500 selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow w-full relative z-10 pt-0 pb-0">
        <div className="flex flex-col">
          {/* Hero Section */}
          <Hero />

          {/* Tools & Projects on light background, identical to uxjonathan */}
          <ToolsMarquee />
          <ProjectsSection />

          {/* Solutions / Enfoque with deep purple theme, identical to "Mis cursos" */}
          <AiCapabilitiesSection />
        </div>
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
