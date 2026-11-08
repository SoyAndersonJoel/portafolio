"use client"

import * as React from "react"
import { portfolioData } from "@/data/portfolio"

export function ToolsMarquee() {
  const { tools } = portfolioData
  const marqueeItems = [...tools, ...tools]

  return (
    <section id="herramientas" className="w-full py-12 md:py-16 overflow-hidden relative z-20 bg-[#fafafa] text-zinc-900 border-t border-zinc-200/80">
      <h3 className="text-center text-xs md:text-sm font-bold text-zinc-500 mb-8 uppercase tracking-[0.2em]">
        Herramientas & Tecnologías que domino
      </h3>

      <div className="relative w-full flex overflow-hidden py-2">
        {/* Left and right fade gradients matching the off-white background */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap px-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              title={tool.name}
              className="group flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-zinc-200/70 hover:scale-110 transition-all duration-300 cursor-default p-3 shrink-0"
            >
              <img
                alt={tool.name}
                src={tool.icon}
                className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:rotate-3 transition-transform"
                loading="lazy"
              />
              <span className="text-[10px] font-bold text-zinc-800 mt-1 truncate max-w-full">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
