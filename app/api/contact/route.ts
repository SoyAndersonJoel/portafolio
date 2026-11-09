import { NextResponse } from "next/server"
import { getServiceSupabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email y mensaje son obligatorios" },
        { status: 400 }
      )
    }

    const supabase = getServiceSupabase()

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: name || "Anónimo",
          email: email.trim(),
          message: message.trim(),
          created_at: new Date().toISOString(),
          read: false,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "Error al guardar el mensaje en la base de datos", details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado y guardado correctamente",
      data,
    })
  } catch (error: unknown) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Error interno del servidor", details: error instanceof Error ? error.message : "Desconocido" },
      { status: 500 }
    )
  }
}
