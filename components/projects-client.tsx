"use client"

import * as React from "react"
import {
  Bot,
  Cpu,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  Terminal,
  Database,
  Code2,
  Workflow,
  Search,
  Filter,
} from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { portfolioData, Project } from "@/data/portfolio"

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  role: string
  period: string
  category: string
  filterCategory: "all" | "ai" | "backend" | "fullstack"
  badge: string
  badgeColor: string
  status: string
  demoUrl?: string
  githubUrl?: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  theChallenge: string
  architecturalDecisions: {
    title: string
    description: string
    icon: string
  }[]
  metrics: {
    value: string
    label: string
    sublabel: string
  }[]
  keyFeatures: string[]
  techStack: {
    category: string
    skills: string[]
  }[]
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "neohw",
    title: "NeoHW",
    subtitle: "E-Commerce de Hardware con Asistente de Compatibilidad con IA Generativa",
    role: "Lead Backend & AI Engineer",
    period: "Enero 2026 – Agosto 2026",
    category: "Proyecto de Titulación / Producción",
    filterCategory: "ai",
    badge: "PROYECTO DE TITULACIÓN",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    status: "Producción / Swagger Docs",
    demoUrl: "https://neohw-backend.onrender.com/api/v1/api-docs",
    githubUrl: "https://github.com",
    accentColor: "#A855F7",
    gradientFrom: "#7C3AED",
    gradientTo: "#170B2F",
    theChallenge:
      "El ensamblaje de hardware para PC presenta miles de combinaciones críticas: compatibilidad de sockets entre CPU y placa base, factor de forma del gabinete, disipación de calor (TDP) y potencia de fuente de alimentación. Modelar estas reglas en una base de datos relacional tradicional genera esquemas rígidos e ineficientes. Además, los usuarios sin conocimientos técnicos suelen cometer compras incompatibles que derivan en costosas devoluciones.",
    architecturalDecisions: [
      {
        title: "Arquitectura EAV (Entity-Attribute-Value)",
        description:
          "Diseño de esquema dinámico en PostgreSQL que permite agregar especificaciones técnicas heterogéneas para cientos de categorías de hardware sin alterar la estructura de tablas ni requerir migraciones complejas.",
        icon: "database",
      },
      {
        title: "Motor de IA con Groq LLMs (<40ms)",
        description:
          "Integración de modelos Llama a través de la infraestructura LPU de Groq con validación estricta de schemas JSON en tiempo de inferencia, logrando respuestas de compatibilidad y recomendación en menos de 40 milisegundos.",
        icon: "bot",
      },
      {
        title: "Pasarela Stripe con Idempotencia",
        description:
          "Manejo seguro de cobros mediante webhooks criptográficos de Stripe con validación de firmas, prevención de transacciones duplicadas y notificaciones automáticas vía Resend.",
        icon: "shield",
      },
      {
        title: "Pruebas de Carga con Artillery",
        description:
          "Simulación de estrés y alta concurrencia de más de 100 solicitudes simultáneas para auditar el pool de conexiones de Prisma ORM y asegurar estabilidad sin fugas de memoria.",
        icon: "activity",
      },
    ],
    metrics: [
      {
        value: "< 40ms",
        label: "Latencia de Inferencia",
        sublabel: "Groq LPU ultra-rápido",
      },
      {
        value: "100+ req/s",
        label: "Carga Soportada",
        sublabel: "Auditoría con Artillery",
      },
      {
        value: "100%",
        label: "Precisión de Socket",
        sublabel: "Reglas EAV estrictas",
      },
      {
        value: "OpenAPI",
        label: "Documentación Viva",
        sublabel: "Swagger UI interactivo",
      },
    ],
    keyFeatures: [
      "Asistente conversacional con IA para armado de presupuestos según uso (Gaming, Diseño 3D, Ofimática).",
      "Validación bidireccional automática de voltajes y ranuras PCIe.",
      "Manejo de estados de órdenes de compra con sincronización de inventario en tiempo real.",
      "Arquitectura modular desacoplada en NestJS con DTOs fuertemente tipados en TypeScript.",
    ],
    techStack: [
      {
        category: "Backend & Core",
        skills: ["NestJS", "Node.js", "TypeScript", "Prisma ORM", "Swagger / OpenAPI"],
      },
      {
        category: "Inteligencia Artificial",
        skills: ["Groq LPU", "Llama 3.3", "Structured Prompting", "JSON Schemas"],
      },
      {
        category: "Datos & Infraestructura",
        skills: ["PostgreSQL (EAV)", "Render PaaS", "Docker", "Artillery Load Testing"],
      },
      {
        category: "Servicios Transaccionales",
        skills: ["Stripe Webhooks", "Resend Email API", "JWT Auth", "Bcrypt"],
      },
    ],
  },
  {
    id: "trackifly",
    title: "Trackifly",
    subtitle: "Sistema de Logística Integral, Despacho y Monitoreo de Envíos en Tiempo Real",
    role: "Backend Engineer & Scrum Collaborator",
    period: "Abril 2026 – Mayo 2026",
    category: "Henry Bootcamp Final Project",
    filterCategory: "backend",
    badge: "PROYECTO FINAL BOOTCAMP",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    status: "Completado / Demo Disponible",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accentColor: "#10B981",
    gradientFrom: "#059669",
    gradientTo: "#022019",
    theChallenge:
      "Las empresas de logística sufren pérdidas por falta de trazabilidad en los estados de entrega y retrasos en la comunicación entre la flota de transporte y los operadores de almacén. Se requería una solución escalable que transmitiera cambios de estado en milisegundos con alta concurrencia, garantizando persistencia relacional estricta y control de permisos entre múltiples roles de usuario.",
    architecturalDecisions: [
      {
        title: "Arquitectura Modular en NestJS",
        description:
          "Estructuración basada en Domain-Driven Design (DDD) con módulos independientes para Envíos, Usuarios, Tracking y Autenticación, facilitando el desarrollo paralelo entre múltiples desarrolladores.",
        icon: "layers",
      },
      {
        title: "Eventos Bidireccionales con WebSockets",
        description:
          "Implementación de WebSockets Gateways para sincronización instantánea de alertas de entrega y cambios de ruta con latencia menor a 1 segundo, entregado en 1 semana récord.",
        icon: "zap",
      },
      {
        title: "Seguridad y RBAC con Guards",
        description:
          "Control de acceso basado en roles (Admin, Conductor, Cliente) implementado con JWT, decoradores personalizados y guards estrictos para proteger endpoints sensibles.",
        icon: "shield",
      },
      {
        title: "Trabajo Ágil en Equipo Multidisciplinario",
        description:
          "Coordinación activa en un equipo de 7 ingenieros bajo Scrum con sprints semanales, retrospectivas, revisiones de código (PRs) e integración continua.",
        icon: "workflow",
      },
    ],
    metrics: [
      {
        value: "7 Días",
        label: "Tiempo de Entrega",
        sublabel: "Módulo realtime completo",
      },
      {
        value: "< 1s",
        label: "Latencia de Alertas",
        sublabel: "WebSockets Gateways",
      },
      {
        value: "7 Devs",
        label: "Equipo Coordinado",
        sublabel: "Metodología Scrum",
      },
      {
        value: "100%",
        label: "Tipado Estricto",
        sublabel: "TypeScript End-to-End",
      },
    ],
    keyFeatures: [
      "Canal de actualización de estados de paquetería en vivo sin refresco de pantalla.",
      "Gestión de flotas y asignación inteligente de pedidos a conductores disponibles.",
      "Historial de auditoría de cada envío con fecha, hora y responsable.",
      "Validación de datos de entrada mediante Pipes y class-validator de NestJS.",
    ],
    techStack: [
      {
        category: "Backend Framework",
        skills: ["NestJS", "Node.js", "TypeScript", "WebSockets / Socket.io"],
      },
      {
        category: "Base de Datos",
        skills: ["PostgreSQL", "TypeORM", "Relational Modeling"],
      },
      {
        category: "Seguridad",
        skills: ["JWT Authentication", "Role-Based Access (RBAC)", "Bcrypt Hashing"],
      },
      {
        category: "Metodología & Herramientas",
        skills: ["Scrum Ágil", "Git / GitHub Flow", "Postman API Testing"],
      },
    ],
  },
  {
    id: "novasalud",
    title: "Nova Salud",
    subtitle: "Plataforma Integral de Autogestión y Gestión de Citas Médicas",
    role: "Full Stack Developer",
    period: "Abril 2026 – Mayo 2026",
    category: "Henry Bootcamp Project",
    filterCategory: "fullstack",
    badge: "FULL-STACK APPLICATION",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    status: "Completado / Código Verificado",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    accentColor: "#3B82F6",
    gradientFrom: "#1D4ED8",
    gradientTo: "#081326",
    theChallenge:
      "La gestión de citas en clínicas de salud suele presentar solapamiento de horarios, cancelaciones no sincronizadas y fricción para los pacientes que deben llamar en horarios de oficina. El reto consistió en construir una SPA de alto rendimiento con validación rigurosa de turnos para prevenir reservas duplicadas y asegurar una experiencia de usuario rápida y amigable.",
    architecturalDecisions: [
      {
        title: "Frontend React + Vite Ultra Reactivo",
        description:
          "Arquitectura orientada a componentes modulares con hooks personalizados para el manejo de estado de reservas, formularios reactivos y feedback visual instantáneo.",
        icon: "code",
      },
      {
        title: "Control de Concurrencia en PostgreSQL",
        description:
          "Modelado de relaciones estrictas con TypeORM para bloquear automáticamente franjas horarias ocupadas y evitar asignaciones dobles ante reservas concurrentes.",
        icon: "database",
      },
      {
        title: "Middlewares de Validación Exhaustiva",
        description:
          "Capa de saneamiento y verificación previa que filtra parámetros antes de tocar la base de datos, garantizando integridad referencial y seguridad de datos médicos.",
        icon: "shield",
      },
      {
        title: "Consumo REST Asíncrono y Optimizado",
        description:
          "Integración de Axios con interceptores para manejo centralizado de errores, tokens de sesión y estados de carga ('spinners' y 'skeletons').",
        icon: "zap",
      },
    ],
    metrics: [
      {
        value: "0 Duplicados",
        label: "Conflictos de Horario",
        sublabel: "Locks transaccionales",
      },
      {
        value: "24/7",
        label: "Autogestión de Citas",
        sublabel: "Sin intervención humana",
      },
      {
        value: "SPA",
        label: "React + Vite",
        sublabel: "Carga instantánea",
      },
      {
        value: "100%",
        label: "Rutas Protegidas",
        sublabel: "Sesiones autenticadas",
      },
    ],
    keyFeatures: [
      "Calendario interactivo con visualización de disponibilidad médica por especialidad.",
      "Portal para pacientes con autogestión de cancelaciones y reprogramaciones.",
      "Panel de administración para médicos con visualización de agenda diaria y estado de turnos.",
      "Sistema de alertas para turnos próximos y confirmaciones inmediatas.",
    ],
    techStack: [
      {
        category: "Frontend",
        skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Axios"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "TypeORM", "Middlewares"],
      },
      {
        category: "Base de Datos",
        skills: ["PostgreSQL", "Relaciones 1:N y N:M", "Data Integrity"],
      },
      {
        category: "Seguridad",
        skills: ["JWT Session Auth", "Protected Routes", "Data Sanitization"],
      },
    ],
  },
]

export function ProjectsClient() {
  const [activeFilter, setActiveFilter] = React.useState<"all" | "ai" | "backend" | "fullstack">("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProjects = React.useMemo(() => {
    return caseStudiesData.filter((project) => {
      const matchesFilter =
        activeFilter === "all" || project.filterCategory === activeFilter
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.theChallenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((cat) =>
          cat.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12 max-w-[1360px] mx-auto text-white">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Casos de Estudio Técnicos & Arquitectura</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Proyectos &{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            Sistemas en Producción
          </span>
        </h1>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Un análisis profundo de los retos de ingeniería, decisiones de arquitectura y soluciones técnicas reales implementadas en cada proyecto.
        </p>

        {/* Global Summary Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 max-w-3xl">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">3</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
              Casos de Estudio
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">&lt;40ms</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
              Inferencia LLM
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">100+ req/s</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
              Estrés Artillery
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">NestJS</div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
              Core Backend
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-zinc-950/80 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-white text-black shadow-lg"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Todos ({caseStudiesData.length})
          </button>
          <button
            onClick={() => setActiveFilter("ai")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "ai"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            IA & Groq LLMs
          </button>
          <button
            onClick={() => setActiveFilter("backend")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "backend"
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Backend & Realtime
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "fullstack"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Full-Stack SPAs
          </button>
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por tecnología, reto..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>
      </div>

      {/* Case Studies List */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="rounded-[32px] overflow-hidden border border-white/15 bg-gradient-to-b from-[#130b26] to-[#090514] shadow-2xl relative"
          >
            {/* Top Banner Header */}
            <div
              className="p-6 sm:p-10 border-b border-white/10 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom}20, transparent)`,
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.period}
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-xs font-mono text-purple-300 font-semibold">
                      {project.role}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    {project.title}
                  </h2>

                  <p className="text-zinc-300 text-sm sm:text-base max-w-3xl font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* External Action Links */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border border-white/20 text-white hover:bg-white/10 transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Ver Código</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold bg-white hover:bg-zinc-200 text-black transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl cursor-pointer"
                    >
                      <span>
                        {project.id === "neohw" ? "Swagger Docs & API" : "Ver Demo"}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Stat Counters Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-black tracking-tight"
                      style={{ color: project.accentColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-1">
                      {metric.label}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {metric.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep Technical Body */}
            <div className="p-6 sm:p-10 space-y-10">
              {/* Challenge / Context */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>01. El Reto Técnico & Problemática</span>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 text-sm sm:text-base leading-relaxed">
                  {project.theChallenge}
                </div>
              </div>

              {/* Architectural Decisions Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                  <Workflow className="w-4 h-4" />
                  <span>02. Decisiones de Arquitectura & Soluciones</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architecturalDecisions.map((decision, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-colors space-y-2 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                          {decision.icon === "database" ? (
                            <Database className="w-4 h-4" />
                          ) : decision.icon === "bot" ? (
                            <Bot className="w-4 h-4" />
                          ) : decision.icon === "shield" ? (
                            <ShieldCheck className="w-4 h-4" />
                          ) : decision.icon === "activity" ? (
                            <Activity className="w-4 h-4" />
                          ) : decision.icon === "layers" ? (
                            <Layers className="w-4 h-4" />
                          ) : decision.icon === "zap" ? (
                            <Zap className="w-4 h-4" />
                          ) : (
                            <Code2 className="w-4 h-4" />
                          )}
                        </div>
                        <h4 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                          {decision.title}
                        </h4>
                      </div>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed pl-11">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Results */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>03. Funcionalidades Clave & Resultados</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Granular Tech Stack Breakdown */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                  <Layers className="w-4 h-4" />
                  <span>04. Stack Tecnológico Detallado</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.techStack.map((stackGroup, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2"
                    >
                      <div className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-wider">
                        {stackGroup.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stackGroup.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/10 text-white border border-white/15"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <Search className="w-8 h-8 text-zinc-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">No se encontraron proyectos</h3>
            <p className="text-zinc-400 text-sm">
              Intenta con otro término de búsqueda o selecciona la categoría &ldquo;Todos&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Bonus Section: AI Lab & Engineering Experiments */}
      <div className="mt-24 p-8 sm:p-12 rounded-[32px] bg-gradient-to-r from-[#170e3d] via-[#1e104b] to-[#0c183d] border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-400/30">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>LABORATORIO & EXPERIMENTOS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            ¿Quieres ver cómo pienso la arquitectura de tu siguiente producto?
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Desde microservicios en NestJS hasta agentes autónomos con llamada a herramientas (Tool Calling) y pasarelas de pago, desarrollo sistemas que toleran fallos y escalan en producción.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="/contacto"
              className="bg-white text-black hover:bg-zinc-200 font-extrabold px-8 py-3.5 rounded-full text-sm sm:text-base tracking-wide transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Contáctame</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://neohw-backend.onrender.com/api/v1/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full text-sm font-bold border border-white/25 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Revisar Swagger de NeoHW</span>
              <Terminal className="w-4 h-4 text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
