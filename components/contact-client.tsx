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
  Copy,
  Check,
  ExternalLink,
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
  const [copiedEmail, setCopiedEmail] = React.useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

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
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err.message || "Error al conectar. Puedes escribirme directo por WhatsApp o Gmail.")
    }
  }

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personal.email
  )}&su=${encodeURIComponent("Contacto desde tu Portafolio")}&body=${encodeURIComponent(
    name ? `Hola Anderson,\n\nSoy ${name}.\n\n${message || "Me gustaría conversar contigo."}` : ""
  )}`

  const whatsappDirectUrl = `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(
    `Hola Anderson, te escribo desde tu portafolio.${name ? ` Mi nombre es ${name}.` : ""}${
      message ? ` ${message}` : ""
    }`
  )}`

  return (
    <div className="w-full flex flex-col bg-black text-white">
      {/* 1. Hero Header */}
      <section className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[400px] flex items-center justify-center pt-28 sm:pt-36 pb-16 px-6 md:px-12">
        <img
          alt="Engineering collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 scale-105"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/25 text-white text-xs font-bold shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Contacto Directo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
            Contáctame
          </h1>

          <p className="text-zinc-200 max-w-2xl text-base sm:text-lg font-normal leading-relaxed drop-shadow-sm">
            Envíame un mensaje directo por el formulario, o conversemos en tiempo real a través de WhatsApp o Gmail.
          </p>
        </div>
      </section>

      {/* 2. Sección Blanca: Formulario + Tarjetas de Contacto */}
      <section className="w-full bg-white text-zinc-900 py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          {/* Contenedor unificado con borde */}
          <div className="rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
            {/* Encabezado del formulario solicitado */}
            <div className="flex items-center gap-3 px-8 py-5 border-b border-zinc-200 bg-zinc-50/80">
              <MessageSquare className="w-5 h-5 text-zinc-700" />
              <h2 className="text-base sm:text-lg font-bold text-black">
                Contáctate conmigo
              </h2>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Columna Izquierda: Formulario */}
                <div className="lg:col-span-7">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-5 bg-zinc-50 rounded-2xl border border-zinc-200">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-black">
                          ¡Mensaje enviado con éxito!
                        </h3>
                        <p className="text-zinc-600 text-sm sm:text-base max-w-md">
                          Tu mensaje ha sido registrado. Si deseas una respuesta inmediata o enviar una copia directa, puedes abrir tu correo o escribirme al WhatsApp:
                        </p>
                      </div>

                      {/* Botones de acción directa tras enviar */}
                      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full max-w-md">
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[180px] bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md hover:scale-105"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Abrir en Gmail</span>
                        </a>

                        <a
                          href={whatsappDirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[180px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md hover:scale-105"
                        >
                          <Phone className="w-4 h-4" />
                          <span>WhatsApp Directo</span>
                        </a>
                      </div>

                      <button
                        onClick={() => {
                          setStatus("idle")
                          setName("")
                          setEmail("")
                          setMessage("")
                        }}
                        className="text-xs text-zinc-500 hover:text-black underline pt-4 cursor-pointer"
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

                      {/* Botones de Envío */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="bg-black hover:bg-zinc-800 text-white font-extrabold px-8 py-3.5 rounded-full text-sm tracking-wide transition-all hover:scale-105 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
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

                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3.5 rounded-full border border-zinc-300 hover:border-red-500 text-zinc-700 hover:text-red-600 bg-white font-bold text-sm inline-flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-sm"
                          title="Redactar mensaje directamente en Gmail"
                        >
                          <Mail className="w-4 h-4 text-red-500" />
                          <span>Abrir en Gmail</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      </div>
                    </form>
                  )}
                </div>

                {/* Columna Derecha: Tarjetas de Información de Contacto Directo */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Correo / Gmail Card con apertura directa y botón copiar */}
                  <div className="p-5 rounded-2xl border border-zinc-200 hover:border-purple-300 bg-zinc-50/70 transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-purple-600 shadow-sm">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black">Correo Electrónico</div>
                          <div className="text-xs text-zinc-500 font-mono">
                            {personal.email}
                          </div>
                        </div>
                      </div>

                      {/* Botón Copiar Correo */}
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-xl border border-zinc-200 hover:border-zinc-400 bg-white text-zinc-600 hover:text-black transition-colors cursor-pointer text-xs flex items-center gap-1.5 shadow-sm"
                        title="Copiar correo al portapapeles"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[11px] font-bold text-emerald-600">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-medium">Copiar</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Enlaces directos a Gmail Web y mailto */}
                    <div className="flex items-center gap-2 pt-1 border-t border-zinc-200/60">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-purple-600 hover:text-purple-800 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Escribir en Gmail Web</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-zinc-300">•</span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        Abrir app de correo
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Card con número directo 0961625931 */}
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-2xl border border-zinc-200 hover:border-emerald-300 bg-zinc-50/70 hover:bg-emerald-50/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 group-hover:border-emerald-300 flex items-center justify-center text-emerald-600 transition-colors shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black flex items-center gap-2">
                          <span>WhatsApp</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-600 font-mono font-medium">
                          {personal.phone} · {personal.displayPhone}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                      Chatear ↗
                    </span>
                  </a>

                  {/* Ubicación */}
                  <div className="flex items-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-zinc-50/70">
                    <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Ubicación</div>
                      <div className="text-xs sm:text-sm text-zinc-600">
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
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-sm font-semibold transition-all hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-sm font-semibold transition-all hover:scale-105 cursor-pointer shadow-sm"
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
