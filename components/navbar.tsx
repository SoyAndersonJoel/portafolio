"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      <div
        className={`w-full transition-all duration-300 flex justify-center ${
          scrolled ? "bg-black/80 backdrop-blur-md pt-3 pb-3 shadow-2xl" : "bg-transparent pt-6"
        }`}
      >
        <div className="px-6 md:px-12 py-3 flex items-center justify-between w-full max-w-[1400px] mx-auto pointer-events-auto">
          {/* Brand */}
          <div className="flex-1 flex justify-start">
            <Link
              className="font-bold tracking-tighter flex items-center gap-2 transition-colors text-white"
              href="/"
            >
              <span className="block text-lg sm:text-xl font-bold tracking-tight">
                {portfolioData.personal.fullName}
              </span>
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8 py-2">
            <Link
              className="relative text-sm font-medium transition-colors py-1 whitespace-nowrap text-white"
              href="/"
            >
              Inicio
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-white" />
            </Link>
            <a
              className="relative text-sm font-medium transition-colors py-1 whitespace-nowrap text-zinc-400 hover:text-white"
              href="#proyectos"
            >
              Proyectos
            </a>
            <a
              className="relative text-sm font-medium transition-colors py-1 whitespace-nowrap text-zinc-400 hover:text-white"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="relative text-sm font-medium transition-colors py-1 whitespace-nowrap text-zinc-400 hover:text-white"
              href="#contacto"
            >
              Contáctame
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer border-white/30 text-white hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer bg-white border-white text-black hover:bg-zinc-200"
            >
              Hablemos
            </a>
            <button
              className="p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shrink-0 border-white/30 text-white hover:bg-white/10"
              title="Español"
            >
              <Globe className="w-[18px] h-[18px]" />
              <span className="font-bold text-xs pl-1.5 pr-0.5">ES</span>
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex-1 flex justify-end items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="w-full bg-[#09090b]/98 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 pointer-events-auto md:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium text-lg py-1"
          >
            Inicio
          </Link>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-400 hover:text-white font-medium text-lg py-1"
          >
            Proyectos
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-400 hover:text-white font-medium text-lg py-1"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-400 hover:text-white font-medium text-lg py-1"
          >
            Contáctame
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-white text-black font-bold py-3 rounded-xl"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
