import { portfolioData } from "@/data/portfolio"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || ""

    let reply = `¡Hola! Soy el asistente virtual de ${portfolioData.personal.fullName}. `

    if (lastMessage.includes("nest") || lastMessage.includes("backend") || lastMessage.includes("stack") || lastMessage.includes("tecnolog") || lastMessage.includes("experiencia")) {
      reply = `${portfolioData.personal.fullName} es Full-Stack Engineer especializado en backend con NestJS, Node.js, TypeScript y PostgreSQL, además de construir SPAs reactivas con React y Vite. Integra modelos de IA (Groq LLMs) y pasarelas como Stripe.`
    } else if (lastMessage.includes("proyect") || lastMessage.includes("portfolio") || lastMessage.includes("trabajo") || lastMessage.includes("neohw") || lastMessage.includes("trackifly")) {
      const pNames = portfolioData.projects.map((p) => `"${p.title}"`).join(", ")
      reply = `Entre los proyectos destacados de ${portfolioData.personal.fullName} se encuentran: ${pNames}. Puedes ver la arquitectura, Swagger docs y código en la sección de proyectos de la web.`
    } else if (lastMessage.includes("contact") || lastMessage.includes("email") || lastMessage.includes("correo") || lastMessage.includes("hablar") || lastMessage.includes("contrat")) {
      reply = `Puedes contactar a ${portfolioData.personal.fullName} por correo a ${portfolioData.personal.email} o a través de su WhatsApp flotante en esta web.`
    } else {
      reply = `${portfolioData.personal.bio} ¿Te gustaría saber más sobre sus proyectos en NestJS, sus integraciones con IA o sus metodologías de trabajo?`
    }

    const encoder = new TextEncoder()
    const customReadable = new ReadableStream({
      async start(controller) {
        const chunks = reply.split(" ")
        for (let i = 0; i < chunks.length; i++) {
          const word = chunks[i] + (i < chunks.length - 1 ? " " : "")
          const payload = `0:${JSON.stringify(word)}\n`
          controller.enqueue(encoder.encode(payload))
          await new Promise((resolve) => setTimeout(resolve, 25))
        }
        controller.close()
      },
    })

    return new Response(customReadable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Vercel-AI-Data-Stream": "v1",
      },
    })
  } catch (error) {
    console.error("Chat error:", error)
    return new Response(JSON.stringify({ error: "Error procesando el mensaje" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
