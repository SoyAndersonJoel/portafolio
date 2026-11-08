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
      {/* 1. Header con foto de escritorio y café clara y luminosa (estilo editorial) */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center pt-28 sm:pt-36 pb-16 px-6 md:px-12">
        <img
          alt="Workspace desk with coffee, pen and notebook"
          className="absolute inset-0 w-full h-full object-cover opacity-65 transition-transform duration-1000 scale-105"
          src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2000&auto=format&fit=crop"
        />
        {/* Gradiente sutil y luminoso que deja ver la madera, taza y libreta */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/25 text-white text-xs font-bold shadow-xl backdrop-blur-md hover:border-purple-400/50 transition-colors">
            <span>👋 ¡Hola!</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-md">
            Sobre mí
          </h1>

          <p className="text-zinc-200 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-sm">
            Desarrollador Full Stack en Quito, Ecuador. Arquitectura limpia, NestJS y soluciones de alto rendimiento que resuelven problemas críticos.
          </p>
        </div>
      </section>

      {/* 2. Sección Principal Blanca (Idéntica a la referencia de diseño) */}
      <section className="w-full bg-white text-zinc-900 py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-[1240px] mx-auto space-y-24">
          {/* 2.1 Bio & Retrato */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Izquierda: Texto de presentación sin negritas y tamaño más pequeño */}
            <div className="lg:col-span-7 space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
              <p>
                Soy Anderson Vilatuña, Desarrollador Full Stack radicado en Quito, Ecuador. Me especializo en la construcción de aplicaciones web de extremo a extremo, con un enfoque en la arquitectura limpia, el rendimiento del sistema y soluciones preparadas para escalar en producción.
              </p>

              <p>
                Cuento con experiencia en el diseño y desarrollo de aplicaciones utilizando NestJS, React y PostgreSQL, cuidando la predictibilidad, la seguridad y la eficiencia de cada servicio implementado.
              </p>

              <p>
                He liderado el desarrollo técnico de plataformas logísticas, donde implementé soluciones de mensajería y alertas en tiempo real que optimizaron la operatividad integral de los despachos. Mi metodología de trabajo se basa en principios SOLID y metodologías ágiles Scrum, priorizando siempre la entrega de código mantenible y soluciones que resuelvan problemas críticos de negocio.
              </p>

              <p>
                Cuento además con experiencia en soporte y gestión de infraestructura institucional en la Escuela Politécnica Nacional (EPN), gestionando despliegues masivos y políticas de acceso de red.
              </p>

              {/* Pills de Datos Clave */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-xs font-medium text-zinc-800 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  <span>Quito, Ecuador</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-xs font-medium text-zinc-800 transition-colors">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Español (Nativo) · Inglés (B2)</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
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
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-all hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-all hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-11 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-800 transition-all hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Retrato Circular Premium */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative group">
                {/* Aura ambiental suave detrás del círculo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 via-indigo-400/20 to-emerald-400/15 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 -z-10" />

                {/* Anillo exterior decorativo */}
                <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-b from-zinc-200 via-white to-zinc-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] group-hover:shadow-[0_25px_70px_rgba(124,58,237,0.2)] transition-all duration-500">
                  {/* Contenedor circular exacto 1:1 para imagen redonda */}
                  <div className="w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-white relative flex items-center justify-center border border-zinc-100">
                    <img
                      src="/aboutme.png"
                      alt="Anderson Vilatuña - Full-Stack Engineer"
                      className="w-full h-full object-contain object-center rounded-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Badge flotante inferior: Estado en vivo */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-lg flex items-center gap-2 whitespace-nowrap z-20 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-zinc-800">Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2.2 Experiencia Laboral (Timeline idéntico a imagen 2 con animaciones fluidas) */}
          <div className="pt-20 border-t border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Columna Izquierda: Título y Filosofía */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                  Experiencia Laboral.
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  No solo escribo código; diseño y construyo sistemas con arquitectura modular y principios de ingeniería sólidos. Un recorrido conectando el análisis riguroso con la entrega de soluciones escalables, liderando desarrollos en equipo y gestionando infraestructura institucional.
                </p>

                <div className="pt-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 hover:gap-3 transition-all"
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
                  <div className="relative group">
                    {/* Purple Active Dot with Animated Ring */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 ring-4 ring-purple-100 group-hover:ring-purple-200 group-hover:scale-110 transition-all"></div>

                    <div className="space-y-2 p-5 -ml-5 rounded-2xl transition-colors duration-300 hover:bg-zinc-50/80">
                      <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        Abril/2026 – Mayo/2026
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight group-hover:text-purple-900 transition-colors">
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
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200 hover:border-purple-300 hover:bg-white transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Escuela Politécnica Nacional - DGIP */}
                  <div className="relative group">
                    {/* Gray Dot that turns dark on hover */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-400 group-hover:bg-zinc-600 group-hover:scale-110 transition-all"></div>

                    <div className="space-y-2 p-5 -ml-5 rounded-2xl transition-colors duration-300 hover:bg-zinc-50/80">
                      <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        Agosto/2024 – Octubre/2024
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight group-hover:text-zinc-950 transition-colors">
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
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200 hover:border-zinc-400 hover:bg-white transition-colors"
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

          {/* 2.3 Educación Profesional con tarjetas interactivas */}
          <div className="pt-20 border-t border-zinc-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Columna Izquierda */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                  Educación Profesional.
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  Bases sólidas de ingeniería de software y ciencias de la computación combinadas con cientos de horas de práctica intensiva y metodologías de desarrollo actuales.
                </p>
              </div>

              {/* Columna Derecha: Lista de Educación con hover effect */}
              <div className="lg:col-span-7 space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-purple-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-2 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                        {edu.period}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-purple-100 text-purple-800">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-black tracking-tight group-hover:text-purple-900 transition-colors">
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
              <p className="text-zinc-600 text-sm sm:text-base">
                Herramientas y lenguajes que utilizo diariamente para construir productos digitales resilientes y mantenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="text-xs font-bold font-mono uppercase tracking-wider text-purple-700">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:border-zinc-400 hover:scale-105 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
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
                    className="px-5 py-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3 hover:bg-white/15 transition-all hover:scale-105"
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
