"use client"

import * as React from "react"
import { Mail, MapPin, Globe } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
  const { personal } = portfolioData
  const [currentYear, setCurrentYear] = React.useState("2026")

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer id="contacto" className="w-full bg-black text-white relative z-20 border-t border-white/10">
      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6 md:px-12 pt-16 pb-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="font-bold text-2xl text-white tracking-tight">
              {personal.fullName}
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Engineer. Creando experiencias de software modernas, arquitecturas en NestJS y productos potenciados con Inteligencia Artificial.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
              <li><a href="#herramientas" className="hover:text-white transition-colors">Stack Tecnológico</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Valor Diferencial</a></li>
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
