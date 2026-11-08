"use client"

import * as React from "react"
import { ArrowRight, Sparkles, Terminal } from "lucide-react"

export function ShowcaseBanner() {
  return (
    <section className="w-full py-10 md:py-14 px-4 sm:px-6 bg-[#fafafa] relative z-20">
      <div className="max-w-[1240px] mx-auto rounded-[32px] overflow-hidden shadow-2xl relative border border-white/20 bg-gradient-to-r from-[#130b30] via-[#1e104b] to-[#0c183d] text-white p-6 md:p-10">
        {/* Subtle geometric & circuit pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 1200 300" fill="none" stroke="currentColor">
            <path d="M50 60 Q 200 15, 350 60 T 650 60" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="150" r="100" strokeWidth="0.8" />
            <circle cx="200" cy="150" r="60" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="50" y1="150" x2="350" y2="150" strokeWidth="0.8" />
            <line x1="200" y1="40" x2="200" y2="260" strokeWidth="0.8" />
            <circle cx="950" cy="140" r="70" strokeWidth="0.8" />
            <path d="M870 140 L 1030 140" strokeWidth="0.8" />
            <text x="70" y="45" fill="currentColor" fontSize="11" fontFamily="monospace">clean_code &gt; complexity</text>
            <text x="800" y="60" fill="currentColor" fontSize="11" fontFamily="monospace">focus = consistency * time</text>
            <text x="500" y="250" fill="currentColor" fontSize="11" fontFamily="monospace">build. ship. iterate.</text>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Inspiring Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Filosofía de Desarrollo</span>
            </div>

            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-[1.15]">
              &ldquo;El software extraordinario nace del rigor, la curiosidad y la disciplina diaria.&rdquo;
            </h3>
            <p className="text-zinc-300 text-sm max-w-lg leading-relaxed">
              Construyo sistemas limpios, predecibles y de alto rendimiento que crean valor tangible y resuelven problemas complejos sin fricción.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contacto"
                className="bg-white text-black hover:bg-zinc-200 font-extrabold px-7 py-3 rounded-full text-sm tracking-wide transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
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

          {/* Right Column: Inspiring workspace image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group hover:border-purple-400/50 transition-all duration-300">
              <div className="relative h-[200px] sm:h-[230px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                  alt="Developer building innovative software"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Floating live status card overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-purple-300 font-bold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      anderson@production
                    </span>
                    <span className="text-emerald-400 text-[10px] font-semibold">● Online</span>
                  </div>
                  <div className="text-[10px] text-zinc-300 font-mono">
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
