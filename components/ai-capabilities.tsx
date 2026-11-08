"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"

export function AiCapabilitiesSection() {
  const capabilities = [
    {
      title: "Agentes Autónomos & Flujos con LLMs",
      description: "Implementación de agentes que razonan y ejecutan tareas complejas integrando modelos Groq, OpenAI o Claude con herramientas externas.",
      badge: "AI Agents",
      techs: ["Groq AI", "Vercel AI SDK", "Prompt Engineering", "Tool Calling"],
    },
    {
      title: "Arquitecturas Backend de Alto Rendimiento",
      description: "Desarrollo de servicios escalables en NestJS y Node.js con arquitecturas limpias, validaciones estrictas y desacoplamiento modular.",
      badge: "Backend & Clean Code",
      techs: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker"],
    },
    {
      title: "Sistemas en Tiempo Real & WebSockets",
      description: "Infraestructura para eventos concurrentes, notificaciones push y sockets de baja latencia probados bajo estrés con Artillery.",
      badge: "Realtime",
      techs: ["WebSockets", "SSE", "Artillery", "Redis", "JWT Auth"],
    },
    {
      title: "Integraciones de Pagos & Notificaciones",
      description: "Procesamiento seguro de transacciones mediante Stripe Webhooks y sistemas transaccionales automatizados con Resend.",
      badge: "Fintech & SaaS",
      techs: ["Stripe", "Webhooks", "Resend", "EAV Architecture"],
    },
  ]

  return (
    <section className="w-full py-20 relative z-20 border-t border-white/5">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Valor Diferencial
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Ingeniería de Software + <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">IA Aplicada</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
            No solo escribo código: conecto modelos de Inteligencia Artificial para resolver problemas comerciales reales, automatizar operaciones y escalar sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#141417] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-purple-300 border border-white/10">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {item.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-black/40 text-zinc-300 font-mono border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

