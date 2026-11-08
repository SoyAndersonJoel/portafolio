"use client"

import { Hero } from "@/components/hero"
import { ToolsMarquee } from "@/components/tools-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AiCapabilitiesSection } from "@/components/ai-capabilities"
import { ShowcaseBanner } from "@/components/showcase-banner"

export function PortfolioView() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ToolsMarquee />
      <ProjectsSection />
      <AiCapabilitiesSection />
      <ShowcaseBanner />
    </div>
  )
}
