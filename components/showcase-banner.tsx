"use client"

import * as React from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function ShowcaseBanner() {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 bg-[#fafafa] relative z-20">
      <div className="max-w-[1240px] mx-auto rounded-[32px] overflow-hidden shadow-2xl relative border border-white/20 bg-gradient-to-r from-[#170e3d] via-[#24125e] to-[#0f1d4a] text-white p-8 md:p-14">
        {/* Blueprint mathematical formulas and geometric overlay like in screenshot */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none overflow-hidden">
          <svg className="w-full h-full text-white" viewBox="0 0 1200 400" fill="none" stroke="currentColor">
            <path d="M50 80 Q 200 20, 350 80 T 650 80" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="120" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="80" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="50" y1="200" x2="350" y2="200" strokeWidth="0.8" />
            <line x1="200" y1="50" x2="200" y2="350" strokeWidth="0.8" />
            <circle cx="950" cy="180" r="90" strokeWidth="0.8" />
            <path d="M850 180 L 1050 180" strokeWidth="0.8" />
            <text x="70" y="60" fill="currentColor" fontSize="12" fontFamily="monospace">f(x) = EAV(comp) * LLM(Groq)</text>
            <text x="800" y="80" fill="currentColor" fontSize="12" fontFamily="monospace">lim (t&rarr;0) latency &lt; 50ms</text>
            <text x="500" y="320" fill="currentColor" fontSize="12" fontFamily="monospace">int_0^inf e^(-st) NestJS dt</text>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube · Tech Breakdown</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Cómo construyo sistemas de Inteligencia Artificial y arquitecturas reales
            </h3>

            <p className="text-zinc-300 text-base max-w-lg leading-relaxed">
              Explicaciones directas al grano: diseño de microservicios con NestJS, integración de LLMs en flujos de producción y despliegues con resiliencia garantizada.
            </p>

            <div>
              <a
                href="https://neohw-backend.onrender.com/api/v1/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-zinc-200 font-extrabold px-8 py-3.5 rounded-full text-sm sm:text-base tracking-wide transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explorar Swagger & Arquitectura</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Floating Video Thumbnail Card matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <a
              href="https://neohw-backend.onrender.com/api/v1/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[460px] rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-zinc-950 p-4 sm:p-5 flex flex-col justify-between relative group hover:border-purple-400/60 transition-all hover:scale-[1.02] cursor-pointer"
            >
              {/* Top video title */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  AV
                </div>
                <div className="text-xs font-bold text-white truncate">
                  NeoHW: Cómo integré IA, NestJS y Stripe desde cero
                </div>
              </div>

              {/* Center Play Graphic */}
              <div className="relative py-6 sm:py-8 flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-br from-black/80 to-purple-950/40 rounded-xl border border-white/10 p-4">
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#22c55e] drop-shadow-md">
                  DE CERO A PRODUCCIÓN
                </div>

                {/* Big Red YouTube Button */}
                <div className="w-14 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Formula icons row */}
                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-zinc-300">
                  <span className="px-2 py-0.5 rounded bg-white/10 font-bold text-purple-300">NestJS</span>
                  <span>+</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-bold text-emerald-400">Groq AI</span>
                  <span>+</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-bold text-cyan-300">Stripe</span>
                </div>
              </div>

              {/* Bottom video footer */}
              <div className="flex items-center justify-between pt-3 text-[11px] text-zinc-400 font-medium">
                <span>Arquitectura & Código Documentado</span>
                <span className="text-white font-bold flex items-center gap-1 group-hover:text-purple-300 transition-colors">
                  Ver demo ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
