export interface Project {
  id: string
  title: string
  role: string
  period: string
  category: string
  description: string
  highlights: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  gradientFrom: string
  gradientTo: string
  status?: string
}

export interface Tool {
  name: string
  icon: string
  category?: string
}

export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatar: string
}

export const portfolioData = {
  personal: {
    firstName: "Anderson",
    lastName: "Vilatuña",
    fullName: "Anderson Vilatuña",
    roleLine1: "FULL-STACK",
    roleLine2: "ENGINEER",
    headlineBadge: "Hola 👋 soy Anderson Vilatuña",
    bio: "Full-Stack Engineer especializado en NestJS, React, TypeScript y arquitecturas escalables. Diseño y construyo productos web con IA, agentes y microservicios listos para producción.",
    location: "Remoto / Ecuador",
    yearsExp: "2+",
    projectsCount: "10+",
    deployCount: "99.9%",
    whatsappNumber: "593999999999", // Placeholder editable
    email: "anderson.vilatuna.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  tools: [
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Groq AI / LLMs", icon: "/groq.svg" },
    { name: "Claude Code", icon: "https://cdn.simpleicons.org/claude/D97757" },
    { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    { name: "Stripe", icon: "/stripe.svg" },
    { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  ] as Tool[],
  projects: [
    {
      id: "neohw",
      title: "NeoHW",
      role: "Backend & AI Developer",
      period: "Enero/2026 – Agosto/2026",
      category: "Proyecto de Titulación / E-Commerce con IA",
      description: "Plataforma avanzada de comercio electrónico especializada en hardware con asistente de ensamblaje de PC potenciado por Inteligencia Artificial generativa.",
      highlights: [
        "Motor de compatibilidad de componentes en tiempo real usando arquitectura EAV, evitando compras erróneas.",
        "Integración de LLMs (Groq AI) para recomendaciones inteligentes según presupuesto y requerimientos.",
        "Pasarela de pagos Stripe con webhooks automáticos y notificaciones transaccionales vía Resend.",
        "Pruebas de estrés y alta concurrencia ejecutadas con Artillery.",
      ],
      tags: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Groq AI", "Artillery", "TypeScript"],
      demoUrl: "https://neohw-backend.onrender.com/api/v1/api-docs",
      githubUrl: "https://github.com",
      gradientFrom: "#4338ca",
      gradientTo: "#1e1b4b",
      status: "Producción / Swagger Docs",
    },
    {
      id: "trackifly",
      title: "Trackifly",
      role: "Backend Developer",
      period: "Abril/2026 – Mayo/2026",
      category: "Logística Integral & Realtime",
      description: "Aplicación de logística integral para la gestión eficiente de envíos y rastreo de estados con sistema de notificaciones en tiempo real.",
      highlights: [
        "Arquitectura limpia y escalable en NestJS con desacoplamiento modular para alta concurrencia.",
        "Sistema de alertas y notificaciones en tiempo real entregado en 1 semana con WebSockets / SSE.",
        "Trabajo ágil en equipo multidisciplinario de 7 ingenieros bajo Scrum con CI/CD.",
      ],
      tags: ["NestJS", "Node.js", "PostgreSQL", "JWT", "TypeScript", "Scrum"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      gradientFrom: "#065f46",
      gradientTo: "#022c22",
      status: "Henry Bootcamp Final Project",
    },
    {
      id: "novasalud",
      title: "Nova Salud",
      role: "Full Stack Developer",
      period: "Abril/2026 – Mayo/2026",
      category: "Salud & Gestión de Citas Médicas",
      description: "Sistema digital de gestión de tickets y autogestión de citas para optimizar el flujo de atención en clínicas y centros de salud.",
      highlights: [
        "SPA de alto rendimiento en React + Vite con rutas protegidas, validaciones estrictas y TypeORM.",
        "Middlewares personalizados para validación de datos de extremo a extremo antes de impactar PostgreSQL.",
        "Consumo sincronizado en tiempo real de servicios REST con Axios eliminando colas y esperas manuales.",
      ],
      tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "TypeORM", "TypeScript"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      gradientFrom: "#1e3a8a",
      gradientTo: "#0f172a",
      status: "Henry Bootcamp Project",
    },
  ] as Project[],
  testimonials: [
    {
      id: 1,
      quote: "Anderson demostró una velocidad de ejecución excepcional en Trackifly. Lideró la arquitectura backend en NestJS y entregó el módulo de notificaciones en tiempo récord, demostrando madurez y calidad técnica.",
      name: "Team Lead de Proyecto",
      role: "Henry Bootcamp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      quote: "El motor de compatibilidad con IA en NeoHW resolvió un problema crítico de negocio. Su dominio para conectar modelos LLMs con Stripe y PostgreSQL fue clave para el éxito del proyecto.",
      name: "Asesor Técnico",
      role: "Comité de Titulación",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      quote: "Trabajar con Anderson en Nova Salud fue garantía de orden: código tipado, validaciones robustas y una interfaz React muy limpia y ágil para el usuario final.",
      name: "Desarrollador Par",
      role: "Frontend Colleague",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ] as Testimonial[],
}
