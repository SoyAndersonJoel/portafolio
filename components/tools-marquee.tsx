"use client"

import * as React from "react"
import { portfolioData } from "@/data/portfolio"

export function ToolsMarquee() {
  const { tools } = portfolioData
  // Double the list for infinite seamless marquee
  const marqueeItems = [...tools, ...tools]

  return (
    <section id="herramientas" className="w-full pb-4 pt-10 md:pt-16 overflow-hidden relative z-20">
      <h3 className="text-center text-xs md:text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-widest opacity-80">
        Herramientas & Tecnologías que domino
      </h3>

      <div className="relative w-full flex overflow-hidden py-4">
        {/* Left and right fade gradients identical to uxjonathan */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap px-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              title={tool.name}
              className="group flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default p-3 shrink-0"
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

