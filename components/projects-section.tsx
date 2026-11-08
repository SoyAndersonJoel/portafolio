"use client"

import * as React from "react"
import { ArrowUpRight, ExternalLink, Bot, CheckCircle2 } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolioData, Project } from "@/data/portfolio"

export function ProjectsSection() {
  const { projects } = portfolioData

  // Stacking offset configuration
  const stackTops = ["top-24 sm:top-28", "top-28 sm:top-36", "top-32 sm:top-44"]
  const zIndexes = ["z-10", "z-20", "z-30"]

  return (
    <section id="proyectos" className="w-full py-16 md:py-24 relative z-20 bg-[#fafafa] text-zinc-900">
      {/* Header matching Image 1 */}
      <div className="flex flex-col items-center text-center mb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-3">
          <span className="text-zinc-400">Proyectos</span> Destacados
        </h2>
        <p className="text-zinc-600 max-w-2xl text-base md:text-lg">
          Una selección de aplicaciones construidas utilizando metodologías ágiles, diseño funcional y las mejores herramientas tecnológicas.
        </p>
      </div>

      {/* Stacking Cards Container */}
      <div className="mx-auto w-full max-w-[880px] px-6 space-y-12 md:space-y-24 pb-16">
        {projects.map((project: Project, index: number) => {
          const stickyTop = stackTops[index] || "top-32"
          const zIndex = zIndexes[index] || "z-10"

          return (
            <div
              key={project.id}
              className={`sticky ${stickyTop} ${zIndex} w-full rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/10 transition-all duration-300`}
              style={{
                backgroundColor: project.gradientTo,
              }}
            >
              {/* Top Banner Graphic (identical to IdoneApp card in screenshot) */}
              <div
                className="h-[210px] sm:h-[260px] p-6 sm:p-8 flex items-center justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              >
                {/* Abstract graphic lines on the left */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-48 h-48 opacity-25 pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor">
                    <path d="M10 80 Q 52.5 10, 95 80 T 180 80" strokeWidth="2" />
                    <path d="M10 100 Q 52.5 30, 95 100 T 180 100" strokeWidth="2" />
                    <path d="M10 120 Q 52.5 50, 95 120 T 180 120" strokeWidth="2" />
                    <path d="M10 140 Q 52.5 70, 95 140 T 180 140" strokeWidth="2" />
                  </svg>
                </div>

                {/* Left side abstract badge / emblem */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-xs uppercase font-mono tracking-widest text-white/70">
                      Arquitectura & IA
                    </div>
                    <div className="text-xl font-bold text-white tracking-tight">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Right side floating UI mockups cards (just like screenshot) */}
                <div className="relative z-10 flex items-end gap-3 -mr-2 sm:mr-4">
                  {/* Mockup card 1 */}
                  <div className="w-28 sm:w-36 h-36 sm:h-44 rounded-xl bg-black/60 border border-white/20 shadow-2xl p-3 flex flex-col justify-between backdrop-blur-md transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-2 rounded bg-white/20"></div>
                      <div className="w-3/4 h-2 rounded bg-white/10"></div>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400">
                      Status: 200 OK
                    </div>
                  </div>

                  {/* Mockup card 2 */}
                  <div className="w-32 sm:w-40 h-40 sm:h-52 rounded-xl bg-black/80 border border-white/30 shadow-2xl p-3.5 flex flex-col justify-between backdrop-blur-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white font-mono">
                        {project.id === "neohw" ? "Groq LLM" : "Realtime API"}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-300">
                      <div>&gt; latency: &lt;45ms</div>
                      <div>&gt; uptime: 99.9%</div>
                    </div>
                    <div className="w-full h-6 rounded-md bg-white text-black text-[10px] font-bold flex items-center justify-center">
                      Live Production
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Content Body (exact layout of IdoneApp in Image 1) */}
              <div
                className="p-6 sm:p-9 text-white space-y-5"
                style={{
                  backgroundColor: project.gradientTo,
                }}
              >
                {/* Category Pill Badge */}
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider Line */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  {/* Left: Site URL / Status */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      SITIO / REPOSITORIO
                    </div>
                    <div className="text-sm font-semibold text-white font-mono mt-0.5 truncate max-w-[240px] sm:max-w-none">
                      {project.demoUrl ? project.demoUrl.replace("https://", "") : "github.com"}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full text-xs font-bold border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Código</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold bg-white hover:bg-zinc-200 text-black transition-all hover:scale-105 inline-flex items-center gap-1.5 shadow-lg"
                      >
                        <span>Ver proyecto</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
