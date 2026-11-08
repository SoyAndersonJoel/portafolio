"use client"

import * as React from "react"
import { StarBorder } from "@/components/star-border"

export function Hero() {
  const floatingIcons = [
    { name: "NestJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Claude Code", img: "https://cdn.simpleicons.org/claude/D97757" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  ]

  return (
    <section className="relative z-10 min-h-[95vh] flex flex-col justify-between pt-16 lg:pt-36 pb-12 overflow-hidden bg-black text-white">
      {/* Watermark: ANDERSON in left-6 bottom-[18%] text-[16vw] */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute left-6 bottom-[18%] text-[16vw] font-black tracking-tighter leading-none text-white/[0.08] uppercase whitespace-nowrap">
          Anderson
        </div>
      </div>

      {/* Right side portrait image with glowing purple/indigo aura identical to uxjonathan */}
      <div className="relative lg:absolute lg:right-[0%] lg:bottom-0 w-full lg:w-[60%] h-[65vh] lg:h-full -mt-12 lg:-mt-0 z-0 pointer-events-none flex justify-center lg:justify-end items-end select-none mb-8 lg:mb-0">
        <div className="hidden md:block absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-purple-600/15 rounded-full filter blur-[100px] opacity-70" />
        <div className="hidden md:block absolute bottom-[20%] right-[30%] w-[250px] h-[250px] bg-indigo-600/10 rounded-full filter blur-[80px] opacity-70" />
        <div className="relative h-full w-auto origin-bottom">
          <picture className="h-full w-auto object-contain object-bottom flex justify-center">
            <source media="(max-width: 768px)" srcSet="/profile-mobile.webp" />
            <source media="(min-width: 769px)" srcSet="/profile.webp" />
            <img
              alt="Anderson Vilatuña"
              loading="eager"
              className="h-full w-auto object-contain object-bottom"
              src="/profile.webp"
            />
          </picture>
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </div>
      </div>

      {/* Foreground Container */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col justify-start lg:justify-between flex-grow gap-4 lg:gap-16 -mt-8 lg:mt-8">
        {/* Main Grid: Headline + Floating Glass Icon Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center w-full">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <div className="mb-4">
              <p className="font-medium text-base md:text-lg text-white">
                Hola 👋 soy Anderson Vilatuña
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.02] text-white uppercase flex flex-col items-start">
                <span>FULL-STACK</span>
                <span>ENGINEER</span>
              </h1>
            </div>

            <div>
              <a
                className="bg-white text-black hover:bg-zinc-200 font-extrabold px-8 py-4 rounded-full text-base tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] inline-flex items-center justify-center cursor-pointer"
                href="#contacto"
              >
                Hablemos
              </a>
            </div>
          </div>

          {/* Center-Right floating icon card with StarBorder identical to uxjonathan */}
          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-start items-center z-10 mt-6 lg:mt-0 lg:-ml-32 xl:-ml-48">
            <div className="w-full max-w-[280px]">
              <StarBorder
                color="rgba(168, 85, 247, 0.7)"
                speed="4s"
                className="w-full"
              >
                <div className="grid grid-cols-4 gap-3">
                  {floatingIcons.map((item) => (
                    <div
                      key={item.name}
                      title={item.name}
                      className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-default"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </StarBorder>
            </div>
          </div>
        </div>

        {/* Bottom stats row identical to uxjonathan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-end w-full pt-0 md:pt-8 mt-0 md:mt-4 z-10">
          <div className="lg:col-span-6 text-left max-w-lg">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Full-Stack Engineer. Diseño y construyo productos digitales, arquitecturas en NestJS y flujos potenciados con Inteligencia Artificial.
            </p>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-left">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-2">
                  2+
                </div>
                <div className="text-zinc-500 text-xs md:text-sm font-medium leading-tight">
                  Años de experiencia
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-2">
                  10+
                </div>
                <div className="text-zinc-500 text-xs md:text-sm font-medium leading-tight">
                  Proyectos entregados
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-2">
                  100%
                </div>
                <div className="text-zinc-500 text-xs md:text-sm font-medium leading-tight">
                  Código real & APIs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
