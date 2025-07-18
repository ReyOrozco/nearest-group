import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validar los datos recibidos
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contacto@nearestgroup.com", // Cambiar por el correo de destino
      replyTo: email,
      subject: `Formulario de contacto: ${subject}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        
        Mensaje:
        ${message}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}
