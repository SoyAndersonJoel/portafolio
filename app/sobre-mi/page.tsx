import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre mí | Anderson Vilatuña",
  description: "Conoce más sobre Anderson Vilatuña — Full-Stack Engineer especializado en NestJS, React e IA.",
}

export default function SobreMiPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-32">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
        Próximamente
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
        <span className="text-zinc-400">Sobre</span> mí
      </h1>
      <p className="text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
        Pronto encontrarás aquí mi historia, experiencia profesional, formación y todo lo que me define como ingeniero de software.
      </p>
    </div>
  )
}
