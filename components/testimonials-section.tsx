"use client"

import * as React from "react"
import { portfolioData, Testimonial } from "@/data/portfolio"

export function TestimonialsSection() {
  const { testimonials } = portfolioData
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
    <section id="testimonios" className="w-full py-20 relative z-20 border-t border-white/5">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3">
            Lo que dicen de mí
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            <span className="text-zinc-600">Impacto real.</span>
            <br />
            Proyectos reales.
          </h2>
        </div>
        <div className="text-xs font-semibold tracking-widest text-zinc-500 uppercase flex items-center gap-2">
          ← DESLIZA →
        </div>
      </div>

      {/* Horizontal Scroll Testimonials */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-6 cursor-grab select-none"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((item: Testimonial) => (
          <div
            key={item.id}
            className="shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] p-8 md:p-10 rounded-3xl bg-[#141417] text-white border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
          >
            <div>
              {/* Quote icon SVG identical to uxjonathan */}
              <svg className="w-8 h-8 mb-6 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm md:text-base font-medium leading-relaxed mb-8 text-zinc-200">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <div className="font-bold text-sm text-white">{item.name}</div>
                <div className="text-xs text-zinc-400">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

