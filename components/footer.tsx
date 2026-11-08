"use client"

import * as React from "react"
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
  const { personal } = portfolioData
  const [currentYear, setCurrentYear] = React.useState("2026")

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer id="contacto" className="w-full bg-black text-white mt-16 relative z-20 border-t border-white/10">
      {/* Call to action big banner with background image identical to uxjonathan */}
      <div className="relative w-full overflow-hidden min-h-[500px] flex items-center justify-center text-center px-6 pt-36 pb-20">
        <img
          alt="Engineering workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          src="https://plus.unsplash.com/premium_photo-1661762857872-77960f34d91b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-3xl flex flex-col items-center space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            ¿Tienes un proyecto o vacante en mente?{" "}
            <span className="text-zinc-400">Hagámoslo realidad.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-base sm:text-lg">
            Disponible para posiciones Full-Stack, Backend con NestJS o integraciones de IA.
          </p>
          <a
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:scale-105 shadow-2xl cursor-pointer"
            href={`mailto:${personal.email}`}
          >
            <span>Escríbeme</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6 md:px-12 pt-16 pb-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="font-bold text-2xl text-white tracking-tight">
              {personal.fullName}
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Engineer. Creando experiencias de software modernas, resilientes y potenciadas con Inteligencia Artificial.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navegación */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#herramientas" className="hover:text-white transition-colors">Stack & Herramientas</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span className="truncate">{personal.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Español / Remoto</span>
          </div>
          <div>
            © {currentYear} {personal.fullName}. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
