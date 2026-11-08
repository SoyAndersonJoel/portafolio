import type { Metadata } from "next"
import { ContactClient } from "@/components/contact-client"

export const metadata: Metadata = {
  title: "Contáctame | Anderson Vilatuña — Full-Stack Engineer",
  description:
    "Ponte en contacto con Anderson Vilatuña para proyectos, vacantes, colaboraciones o asesorías técnicas en desarrollo Full Stack con NestJS, React e IA.",
}

export default function ContactoPage() {
  return <ContactClient />
}
