import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ToolsMarquee } from "@/components/tools-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AiCapabilitiesSection } from "@/components/ai-capabilities"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { DotField } from "@/components/dot-field"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-clip selection:bg-purple-500 selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow w-full relative z-10 pt-0 pb-16">
        <div className="flex flex-col">
          <div className="relative w-full flex flex-col gap-0 md:gap-16 pb-0">
            {/* Background DotField starts subtly from hero to bottom */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
              <DotField
                dotRadius={1.5}
                dotSpacing={14}
                cursorRadius={450}
                bulgeStrength={65}
                glowRadius={170}
                glowColor="#2e1065"
                gradientFrom="rgba(168, 85, 247, 0.35)"
                gradientTo="rgba(129, 140, 248, 0.20)"
              />
            </div>

            <Hero />
            <ToolsMarquee />
            <ProjectsSection />
            <AiCapabilitiesSection />
            <TestimonialsSection />
          </div>
        </div>
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
