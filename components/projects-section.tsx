"use client"

import * as React from "react"
import { ArrowUpRight, Bot, Cpu, Sparkles, CheckCircle2, Terminal } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolioData, Project } from "@/data/portfolio"

export function ProjectsSection() {
  const { projects } = portfolioData

  const stackTops = ["top-20 sm:top-24", "top-24 sm:top-32", "top-28 sm:top-40"]
  const zIndexes = ["z-10", "z-20", "z-30"]

  return (
    <section id="proyectos" className="w-full py-16 md:py-24 relative z-20 bg-[#fafafa] text-zinc-900 overflow-visible">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-3">
          <span className="text-zinc-400">Proyectos</span> Destacados
        </h2>
        <p className="text-zinc-600 max-w-2xl text-base md:text-lg">
          Una selección de aplicaciones construidas utilizando metodologías ágiles, diseño funcional y las mejores herramientas tecnológicas.
        </p>
      </div>

      {/* Stacking Cards Container: Wider (max-w-[1060px]) and with less height */}
      <div className="mx-auto w-full max-w-[1060px] px-4 sm:px-6 space-y-10 md:space-y-16 pb-20">
        {projects.map((project: Project, index: number) => {
          const stickyTop = stackTops[index] || "top-28"
          const zIndex = zIndexes[index] || "z-10"

          return (
            <div
              key={project.id}
              className={`sticky ${stickyTop} ${zIndex} w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.28)] border border-white/20 transition-all duration-300 hover:scale-[1.01] group`}
              style={{
                backgroundColor: project.gradientTo,
              }}
            >
              {/* Compact Vibrant Banner */}
              <div
                className="h-[140px] sm:h-[170px] px-6 sm:px-10 flex items-center justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              >
                {/* Background abstract waves */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white" fill="none" stroke="currentColor">
                    <path d="M10 80 Q 52.5 10, 95 80 T 180 80" strokeWidth="2.5" />
                    <path d="M10 100 Q 52.5 30, 95 100 T 180 100" strokeWidth="2.5" />
                    <path d="M10 120 Q 52.5 50, 95 120 T 180 120" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Left brand badge in banner */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                    {project.id === "neohw" ? (
                      <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    ) : project.id === "trackifly" ? (
                      <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    ) : (
                      <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] uppercase font-mono tracking-widest text-white/80">
                      {project.role}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Right side interactive mockups */}
                <div className="relative z-10 hidden sm:flex items-center gap-3">
                  <div className="w-32 h-24 rounded-xl bg-black/60 border border-white/20 shadow-xl p-3 flex flex-col justify-between backdrop-blur-md transform -rotate-2 group-hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                      <span>Live 200 OK</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1.5 rounded bg-white/25"></div>
                      <div className="w-2/3 h-1.5 rounded bg-white/15"></div>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-300">
                      &lt;40ms latency
                    </div>
                  </div>

                  <div className="w-36 h-28 rounded-xl bg-black/80 border border-white/30 shadow-2xl p-3.5 flex flex-col justify-between backdrop-blur-lg transform rotate-2 group-hover:rotate-0 transition-transform">
                    <div className="text-[10px] font-bold text-white font-mono flex items-center justify-between">
                      <span>{project.id === "neohw" ? "Groq LLM" : "NestJS API"}</span>
                      <span className="text-purple-400">99.9%</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-300">
                      &gt; EAV Arch + AI
                    </div>
                    <div className="w-full h-5 rounded bg-white text-black text-[9px] font-extrabold flex items-center justify-center">
                      Producción
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Body */}
              <div
                className="p-5 sm:p-7 md:p-8 text-white space-y-4"
                style={{
                  backgroundColor: project.gradientTo,
                }}
              >
                {/* Category Pill */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 text-white border border-white/20 shadow-sm">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/70">
                    {project.period}
                  </span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed max-w-4xl font-medium">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider Line & Actions */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      SITIO / REPOSITORIO
                    </div>
                    <div className="text-sm font-semibold text-white font-mono mt-0.5 truncate max-w-[240px] sm:max-w-none">
                      {project.demoUrl ? project.demoUrl.replace("https://", "") : "github.com"}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-bold border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
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
                        className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold bg-white hover:bg-zinc-200 text-black transition-all hover:scale-105 inline-flex items-center gap-1.5 shadow-lg cursor-pointer"
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
