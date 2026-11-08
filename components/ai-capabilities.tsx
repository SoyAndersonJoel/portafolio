"use client"

import * as React from "react"
import { Sparkles, ArrowRight, Bell, Clock } from "lucide-react"

export function AiCapabilitiesSection() {
  const cards = [
    {
      badge: "INTELIGENCIA ARTIFICIAL",
      badgeColor: "bg-[#F59E0B]",
      category: "AGENTES AUTÓNOMOS · TOOL CALLING · LLMS",
      title: "Agentes de IA Autónomos & Flujos con LLMs",
      description: "Implementación de agentes inteligentes que razonan, ejecutan llamadas a herramientas (Tool Calling), mantienen memoria y automatizan flujos de negocio complejos con Groq AI, Claude y OpenAI.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      statusText: "ESPECIALIZACIÓN CLAVE · PROMPTING AVANZADO",
      buttonText: "Consultar solución",
      isPrimary: false,
    },
    {
      badge: "ALTO RENDIMIENTO",
      badgeColor: "bg-[#10B981]",
      category: "BACKEND ROBUSTO · NESTJS & POSTGRESQL",
      title: "Arquitectura Backend Escalable (NestJS)",
      description: "Desarrollo de microservicios y APIs modulares con TypeScript, middlewares estrictos de validación, Prisma/TypeORM, WebSockets para tiempo real y pruebas de carga con Artillery.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      statusText: "ARQUITECTURA LIMPIA & SEGURIDAD",
      buttonText: "Ver detalles / Contratar",
      isPrimary: true,
    },
    {
      badge: "FINTECH & MONETIZACIÓN",
      badgeColor: "bg-[#F59E0B]",
      category: "FULL-STACK · PAGOS & NOTIFICACIONES",
      title: "E-Commerce con IA & Pasarelas de Pago",
      description: "Integración de pagos con Stripe Webhooks para cobros seguros, notificaciones transaccionales automáticas con Resend y SPAs de alta reactividad en React y Vite.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
      statusText: "PRODUCCIÓN / CI-CD",
      buttonText: "Consultar solución",
      isPrimary: false,
    },
  ]

  return (
    <section id="servicios" className="w-full py-24 relative z-20 bg-gradient-to-b from-[#090214] via-[#1a0833] to-[#090214] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 max-w-[1300px] mx-auto">
        {/* Header: VALOR DIFERENCIAL */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-purple-300 uppercase">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>VALOR DIFERENCIAL · FULL-STACK & IA</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Ingeniería de Software + <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Agentes de IA</span>
          </h2>

          <p className="text-zinc-300 max-w-2xl text-base md:text-lg leading-relaxed">
            No solo escribo código básico: conecto modelos de lenguaje, configuro agentes que razonan y ejecutan herramientas, y estructuro arquitecturas limpias listas para escalar en producción.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[26px] overflow-hidden bg-white text-zinc-900 border border-white/10 shadow-2xl flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Top Image Part */}
              <div className="relative h-[190px] sm:h-[210px] w-full overflow-hidden bg-zinc-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block ${card.badgeColor} text-black font-extrabold text-[10px] tracking-wider px-3 py-1 rounded-full uppercase shadow-md`}>
                    {card.badge}
                  </span>
                </div>

                {/* Clock / Status icon top-right */}
                <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 border border-white/20">
                  <Clock className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom White Part */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white text-zinc-900 space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-500">
                    {card.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">
                    {card.statusText}
                  </div>

                  <a
                    href="#contacto"
                    className="w-full bg-black text-white hover:bg-zinc-800 font-bold text-xs sm:text-sm py-3 px-5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                  >
                    {card.isPrimary ? (
                      <>
                        <span>{card.buttonText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5" />
                        <span>{card.buttonText}</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
