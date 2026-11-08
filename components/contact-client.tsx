"use client"

import * as React from "react"
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { portfolioData } from "@/data/portfolio"

type FormStatus = "idle" | "sending" | "success" | "error"

export function ContactClient() {
  const { personal } = portfolioData

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [status, setStatus] = React.useState<FormStatus>("idle")
  const [errorMsg, setErrorMsg] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !message.trim()) return

    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Anónimo",
          email: email.trim(),
          message: message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err.message || "Error inesperado. Intenta de nuevo.")
    }
  }

  return (
    <div className="w-full flex flex-col bg-black text-white">
      {/* 1. Hero Header */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center justify-center pt-28 sm:pt-36 pb-16 px-6 md:px-12">
        <img
          alt="Team working together on a project"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 scale-105"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/25 text-white text-xs font-bold shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Contáctame</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
            Hablemos de tu proyecto
          </h1>

          <p className="text-zinc-200 max-w-2xl text-base sm:text-lg font-normal leading-relaxed drop-shadow-sm">
            ¿Tienes una idea, una vacante o un reto técnico? Escríbeme directamente y te respondo en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* 2. Sección Blanca: Formulario + Tarjetas de Contacto */}
      <section className="w-full bg-white text-zinc-900 py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          {/* Formulario y Cards en un contenedor unificado con borde */}
          <div className="rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
            {/* Encabezado del formulario */}
            <div className="flex items-center gap-3 px-8 py-5 border-b border-zinc-200 bg-zinc-50/80">
              <MessageSquare className="w-5 h-5 text-zinc-700" />
              <h2 className="text-base sm:text-lg font-bold text-black">
                ¿Prefieres escribirme?
              </h2>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Columna Izquierda: Formulario */}
                <div className="lg:col-span-7">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-black text-black">
                        ¡Mensaje enviado!
                      </h3>
                      <p className="text-zinc-600 text-sm sm:text-base max-w-sm">
                        Gracias por escribirme. Revisaré tu mensaje y te responderé lo antes posible.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 px-6 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nombre */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-zinc-900"
                        >
                          Nombre
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Juan Pérez"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400 transition-all"
                        />
                      </div>

                      {/* Correo */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-zinc-900"
                        >
                          Correo <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="juan@ejemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400 transition-all"
                        />
                      </div>

                      {/* Mensaje */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-zinc-900"
                        >
                          Mensaje <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          placeholder="Cuéntame en qué te ayudo..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400 transition-all"
                        />
                      </div>

                      {/* Error feedback */}
                      {status === "error" && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      {/* Botón Submit */}
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white font-extrabold px-10 py-3.5 rounded-full text-sm tracking-wide transition-all hover:scale-105 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {status === "sending" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Enviar mensaje</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Columna Derecha: Tarjetas de Información de Contacto */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Correo */}
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 hover:border-purple-300 bg-zinc-50/60 hover:bg-purple-50/40 transition-all group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-white border border-zinc-200 group-hover:border-purple-300 flex items-center justify-center text-zinc-600 group-hover:text-purple-600 transition-colors shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Correo</div>
                      <div className="text-xs sm:text-sm text-zinc-500 group-hover:text-purple-600 transition-colors">
                        {personal.email}
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp / Teléfono */}
                  <a
                    href={`https://wa.me/${personal.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 hover:border-emerald-300 bg-zinc-50/60 hover:bg-emerald-50/40 transition-all group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-white border border-zinc-200 group-hover:border-emerald-300 flex items-center justify-center text-zinc-600 group-hover:text-emerald-600 transition-colors shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">WhatsApp</div>
                      <div className="text-xs sm:text-sm text-zinc-500 group-hover:text-emerald-600 transition-colors">
                        +593 {personal.whatsappNumber.slice(3)}
                      </div>
                    </div>
                  </a>

                  {/* Ubicación */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 bg-zinc-50/60">
                    <div className="w-11 h-11 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Ubicación</div>
                      <div className="text-xs sm:text-sm text-zinc-500">
                        {personal.location}
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div className="pt-4 border-t border-zinc-200 space-y-3">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      También me encuentras en
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
