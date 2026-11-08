"use client"

import * as React from "react"
import { ArrowRight, Quote, Sparkles, Terminal, Code2 } from "lucide-react"

export function ShowcaseBanner() {
  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 bg-[#fafafa] relative z-20">
      <div className="max-w-[1240px] mx-auto rounded-[32px] overflow-hidden shadow-2xl relative border border-white/20 bg-gradient-to-r from-[#130b30] via-[#1e104b] to-[#0c183d] text-white p-8 md:p-14">
        {/* Subtle geometric & circuit pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 1200 400" fill="none" stroke="currentColor">
            <path d="M50 80 Q 200 20, 350 80 T 650 80" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="120" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="80" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="50" y1="200" x2="350" y2="200" strokeWidth="0.8" />
            <line x1="200" y1="50" x2="200" y2="350" strokeWidth="0.8" />
            <circle cx="950" cy="180" r="90" strokeWidth="0.8" />
            <path d="M850 180 L 1050 180" strokeWidth="0.8" />
            <text x="70" y="60" fill="currentColor" fontSize="12" fontFamily="monospace">clean_code &gt; complexity</text>
            <text x="800" y="80" fill="currentColor" fontSize="12" fontFamily="monospace">focus = consistency * time</text>
            <text x="500" y="320" fill="currentColor" fontSize="12" fontFamily="monospace">build. ship. iterate.</text>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Inspiring Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Filosofía de Desarrollo</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                &ldquo;El software extraordinario no nace de la casualidad, sino del rigor, la curiosidad y la disciplina diaria.&rdquo;
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Mi objetivo en cada línea de código es construir sistemas limpios, predecibles y de alto rendimiento que creen valor tangible y resuelvan problemas complejos sin fricción.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="bg-white text-black hover:bg-zinc-200 font-extrabold px-8 py-3.5 rounded-full text-sm sm:text-base tracking-wide transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Creemos algo juntos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Abierto a nuevos retos</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Developer Workspace Imagery with Glass Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group hover:border-purple-400/50 transition-all duration-300">
              {/* Workspace Photo */}
              <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Clean Code Engineering Workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Floating live status card overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-300 font-bold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      anderson@production
                    </span>
                    <span className="text-emerald-400 text-[11px] font-semibold">● 100% Focused</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    &gt; NestJS · React · TypeScript · AI Agents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
