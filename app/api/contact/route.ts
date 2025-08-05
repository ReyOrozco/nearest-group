import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, origin, destination, message } = await request.json()

    // Validar los datos recibidos
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    // Mapear el servicio a texto legible
    const serviceMap: { [key: string]: string } = {
      terrestrial: "Logística Terrestre",
      air: "Logística Aérea",
      maritime: "Logística Marítima",
      storage: "Almacenamiento",
      other: "Otro",
    }

    const serviceName = serviceMap[service] || service || "No especificado"

    // Template HTML para el correo
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5;">
        <!-- Encabezado -->
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
            📋 Nueva Solicitud de Cotización
          </h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">
            Solicitud recibida desde el sitio web de Nearest Group
          </p>
        </div>

        <!-- Información del cliente -->
        <div style="background: white; margin: 0; padding: 30px;">
          <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            👤 Información del cliente
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                📝 Nombre completo:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                ${name}
              </td>
            </tr>
            ${
              company
                ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                🏢 Empresa:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                ${company}
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                📧 Correo electrónico:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                📱 Teléfono:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                🎯 Servicio de interés:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                ${serviceName}
              </td>
            </tr>
            ${
              origin || destination
                ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">
                🗺️ Ruta:
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">
                ${origin || "No especificado"} → ${destination || "No especificado"}
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">
                💬 Mensaje:
              </td>
              <td style="padding: 12px 0; color: #1f2937; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </td>
            </tr>
          </table>

          <!-- Acciones rápidas -->
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 16px;">⚡ Acciones Rápidas</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="mailto:${email}?subject=Re: Solicitud de Cotización - Nearest Group&body=Estimado/a ${name},%0D%0A%0D%0AGracias por contactarnos. Hemos recibido tu solicitud de ${serviceName} y nos pondremos en contacto contigo a la brevedad.%0D%0A%0D%0ASaludos,%0D%0AEquipo Nearest Group" 
                 style="background: #3b82f6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
                📧 Responder por Email
              </a>
              ${
                phone
                  ? `
              <a href="tel:${phone}" 
                 style="background: #10b981; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
                📞 Llamar
              </a>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hola%20${encodeURIComponent(name)},%20hemos%20recibido%20tu%20solicitud%20de%20${encodeURIComponent(serviceName)}%20y%20queremos%20darte%20seguimiento." 
                 style="background: #25d366; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
                💬 WhatsApp
              </a>
              `
                  : ""
              }
            </div>
          </div>

          <!-- Recordatorio -->
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 20px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>⏰ Recordatorio:</strong> Responder en las próximas 24 horas para mantener un excelente servicio al cliente.
            </p>
          </div>
        </div>

        <!-- Pie de página -->
        <div style="background: #1f2937; color: #9ca3af; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 12px;">
            © 2025 Nearest Group - Sistema de Notificaciones Automáticas
          </p>
          <p style="margin: 5px 0 0 0; font-size: 11px;">
            Este correo fue generado automáticamente desde el formulario de contacto del sitio web.
          </p>
        </div>
      </div>
    `

    // Enviar el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: "Nearest Group <onboarding@resend.dev>",
      to: ["contacto@nearestgroup.com"],
      replyTo: email,
      subject: `Nueva Solicitud de Cotización: ${serviceName} - ${name}`,
      html: htmlTemplate,
    })

    if (error) {
      console.error("Error al enviar el correo:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
        emailId: data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}
