import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Mail,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Globe,
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { portfolioData } from "@/data/portfolio"

export const metadata: Metadata = {
  title: "Sobre mí | Anderson Vilatuña — Full-Stack Engineer",
  description:
    "Conoce a Anderson Vilatuña: Desarrollador Full Stack radicado en Quito, Ecuador. Especializado en NestJS, React, PostgreSQL, principios SOLID y soluciones escalables.",
}

export default function SobreMiPage() {
  const { personal, experience, education, languages } = portfolioData

  const techCategories = [
    {
      category: "Lenguajes de Programación",
      skills: ["TypeScript", "JavaScript (ES6+)"],
    },
    {
      category: "Backend & Frameworks",
      skills: ["NestJS", "Node.js", "Express", "TypeORM", "Prisma ORM", "WebSockets"],
    },
    {
      category: "Frontend & UI",
      skills: ["React", "Vite", "Tailwind CSS", "HTML5 / CSS3", "Next.js"],
    },
    {
      category: "Bases de Datos & Almacenamiento",
      skills: ["PostgreSQL", "Diseño Relacional", "Modelo EAV"],
    },
    {
      category: "Herramientas & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "GLPI", "Active Directory"],
    },
    {
      category: "Metodologías & Buenas Prácticas",
      skills: ["Principios SOLID", "Scrum / Agile", "Clean Architecture", "Code Review"],
    },
  ]

  return (
    <div className="w-full flex flex-col bg-black text-white">
      {/* 1. Header con foto de escritorio y café (idéntico a referencia) */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center pt-28 sm:pt-36 pb-16 px-6 md:px-12">
        <img
          alt="Workspace desk with coffee and notebook"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs font-bold shadow-xl backdrop-blur-md">
            <span>👋 ¡Hola!</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            Sobre mí
          </h1>

          <p className="text-zinc-300 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            Desarrollador Full Stack en Quito, Ecuador. Arquitectura limpia, NestJS y soluciones de alto rendimiento que resuelven problemas críticos.
          </p>
        </div>
      </section>

      {/* 2. Sección Principal Blanca (Idéntica a la referencia de diseño) */}
      <section className="w-full bg-white text-zinc-900 py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1240px] mx-auto space-y-24">
          {/* 2.1 Bio & Retrato */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Izquierda: Texto de presentación */}
            <div className="lg:col-span-7 space-y-6 text-zinc-700 leading-relaxed text-base sm:text-lg">
              <p className="text-xl sm:text-2xl font-bold text-black leading-snug">
                Soy Anderson Vilatuña, Desarrollador Full Stack radicado en Quito, Ecuador. Especializado en el desarrollo de aplicaciones web de extremo a extremo con arquitecturas limpias y código mantenible.
              </p>

              <p>
                Cuento con un fuerte enfoque en el diseño de sistemas escalables utilizando <strong className="text-black font-semibold">NestJS</strong>, <strong className="text-black font-semibold">React</strong> y <strong className="text-black font-semibold">PostgreSQL</strong>, cuidando tanto el rendimiento como la predictibilidad de cada componente.
              </p>

              <p>
                He liderado el desarrollo técnico de plataformas logísticas, donde implementé soluciones de mensajería y alertas en tiempo real que optimizaron la operatividad integral de los despachos. Mi metodología de trabajo se basa en principios <strong className="text-black font-semibold">SOLID</strong> y metodologías ágiles <strong className="text-black font-semibold">Scrum</strong>, priorizando siempre la entrega de valor sin deuda técnica.
              </p>

              <p>
                Cuento además con experiencia en soporte y gestión de infraestructura institucional en la Escuela Politécnica Nacional (EPN), gestionando despliegues masivos y políticas de acceso de red.
              </p>

              {/* Pills de Datos Clave */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  <span>Quito, Ecuador</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Español (Nativo) · Inglés (B2)</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto"
                  className="bg-black hover:bg-zinc-800 text-white font-extrabold px-7 py-3.5 rounded-full text-sm tracking-wide transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Hablemos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-colors cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-colors cursor-pointer"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Fotográfica */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] rounded-[36px] overflow-hidden bg-zinc-950 border border-zinc-200 shadow-2xl relative group">
                <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden">
                  <img
                    src="/profile.webp"
                    alt="Anderson Vilatuña - Full-Stack Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-white space-y-1">
                    <div className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Full-Stack Engineer</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      Anderson Joel Vilatuña
                    </div>
                    <div className="text-xs text-zinc-300 font-mono">
                      📍 Quito, Ecuador · Open to Opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2.2 Experiencia Laboral (Timeline idéntico a imagen 2) */}
          <div className="pt-20 border-t border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Columna Izquierda: Título y Filosofía */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                  Experiencia Laboral.
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  No solo escribo código; diseño y construyo sistemas con arquitectura modular y principios de ingeniería sólidos. Un recorrido conectando el análisis riguroso con la entrega de soluciones escalables, liderando desarrollos en equipo y gestionando infraestructura institucional.
                </p>

                <div className="pt-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <span>¿Interesado en mi perfil? Escríbeme</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Timeline Vertical */}
              <div className="lg:col-span-7">
                <div className="relative border-l-2 border-zinc-200 pl-6 sm:pl-8 space-y-12">
                  {/* Item 1: Trackifly */}
                  <div className="relative">
                    {/* Purple Active Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 ring-4 ring-purple-100"></div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        Abril/2026 – Mayo/2026
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                        Líder Técnico & Backend Developer
                      </h3>
                      <div className="text-sm font-semibold text-purple-600">
                        Trackifly — Henry Bootcamp
                      </div>

                      <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-2">
                        Lideré el desarrollo técnico de una plataforma logística integral para la gestión eficiente de envíos y monitoreo de estados. Diseñé e implementé una arquitectura limpia y modular en NestJS bajo principios SOLID, desplegando el sistema de mensajería y alertas en vivo con WebSockets con latencia sub-segundo en un equipo multidisciplinario de 7 ingenieros bajo Scrum.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-3">
                        {["NestJS", "WebSockets", "PostgreSQL", "TypeScript", "SOLID", "Scrum"].map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Escuela Politécnica Nacional - DGIP */}
                  <div className="relative">
                    {/* Gray Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-400"></div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        Agosto/2024 – Octubre/2024
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                        Asistente Técnico de TI
                      </h3>
                      <div className="text-sm font-semibold text-zinc-700">
                        Escuela Politécnica Nacional — Dirección de Gestión de Información y Procesos (DGIP)
                      </div>

                      <div className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-2 space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-1" />
                          <span>
                            Implementé la instalación masiva del agente GLPI y sistemas de antivirus en equipos institucionales, mejorando el control de inventario y la postura de seguridad de la red.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-1" />
                          <span>
                            Gestioné la integración de estaciones de trabajo al Active Directory, asegurando el cumplimiento de las políticas de acceso y autenticación de la institución.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-1" />
                          <span>
                            Brindé soporte técnico inicial a funcionarios, desarrollando habilidades de comunicación efectiva y diagnóstico rápido de incidencias técnicas.
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-3">
                        {["Active Directory", "GLPI", "Soporte TI", "Seguridad Redes", "Diagnóstico de Hardware/Software"].map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2.3 Educación Profesional */}
          <div className="pt-20 border-t border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Columna Izquierda */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                  Educación Profesional.
                </h2>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  Bases sólidas de ingeniería de software y ciencias de la computación combinadas con cientos de horas de práctica intensiva y metodologías de desarrollo actuales.
                </p>
              </div>

              {/* Columna Derecha: Lista de Educación */}
              <div className="lg:col-span-7 space-y-8">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-purple-300 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                        {edu.period}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-purple-100 text-purple-800">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-black tracking-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-purple-600">
                      {edu.institution}
                    </div>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2.4 Stack Tecnológico & Idiomas */}
          <div className="pt-20 border-t border-zinc-200 space-y-12">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                Tecnologías & Metodologías
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg">
                Herramientas y lenguajes que utilizo diariamente para construir productos digitales resilientes y mantenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3"
                >
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-purple-700">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-zinc-900 border border-zinc-200 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-mono uppercase tracking-widest text-purple-300 font-bold">
                  Competencia Lingüística
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Idiomas de Trabajo
                </h3>
                <p className="text-zinc-400 text-sm">
                  Capacidad para colaborar en equipos internacionales y remotos.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="px-5 py-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3"
                  >
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-sm font-bold text-white">{lang.language}</div>
                      <div className="text-xs text-zinc-400 font-mono">{lang.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
