"use client"

import * as React from "react"
import { ArrowUpRight, CheckCircle2, Terminal } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolioData, Project } from "@/data/portfolio"

export function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section id="proyectos" className="w-full py-16 md:py-24 relative z-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          <span className="text-zinc-500">Proyectos</span> Destacados
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
          Aplicaciones completas, APIs robustas y arquitecturas escalables desarrolladas con metodologías ágiles, validaciones estrictas y modelos de Inteligencia Artificial.
        </p>
      </div>

      {/* Cards stack */}
      <div className="mx-auto w-full max-w-[960px] px-6 space-y-12">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#111114] hover:border-white/20 transition-all duration-300 shadow-2xl"
          >
            {/* Project Header Banner with customized gradient */}
            <div
              className="h-[180px] sm:h-[220px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
              }}
            >
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/10">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white/80 bg-black/30 px-2.5 py-1 rounded-md">
                  {project.period}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <div className="text-sm font-medium text-white/80 mt-1">
                  {project.role}
                </div>
              </div>
            </div>

            {/* Project Body */}
            <div className="flex flex-1 flex-col gap-5 p-6 sm:p-9 bg-[#111114]">
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Highlights bullets */}
              <div className="space-y-2 pt-1">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Demo & Code */}
              <div className="pt-4 mt-auto border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  {project.status}
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
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
                      className="px-5 py-2.5 rounded-full text-xs font-bold bg-white hover:bg-zinc-200 text-black transition-all hover:scale-105 inline-flex items-center gap-1 shadow-sm"
                    >
                      <span>Ver Documentación / Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

