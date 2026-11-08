import type { Metadata } from "next"
import { ProjectsClient } from "@/components/projects-client"

export const metadata: Metadata = {
  title: "Casos de Estudio & Proyectos | Anderson Vilatuña",
  description:
    "Análisis profundo de arquitectura, retos técnicos y sistemas en producción desarrollados por Anderson Vilatuña: NeoHW (IA + NestJS), Trackifly (Realtime Logistics) y Nova Salud.",
}

export default function ProyectosPage() {
  return <ProjectsClient />
}
