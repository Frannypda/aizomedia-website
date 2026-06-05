import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nombre, email, telefono, tienda, facturacion, problema } = body

  if (!nombre || !email || !telefono || !tienda || !problema) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Aizomedia Web <onboarding@resend.dev>',
      to: 'aizomediaagency@gmail.com',
      subject: `Nuevo lead: ${nombre} — ${tienda}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7fc;padding:32px;border-radius:12px">
          <div style="background:#0a1a35;padding:24px 32px;border-radius:8px;margin-bottom:24px">
            <h2 style="color:#fff;margin:0;font-size:20px">Nuevo lead desde la web</h2>
            <p style="color:rgba(255,255,255,.5);margin:4px 0 0;font-size:13px">Aizomedia · Formulario de contacto</p>
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5a6680;width:140px">Nombre</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;font-weight:600;color:#0a1a35">${nombre}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5a6680">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0a1a35"><a href="mailto:${email}" style="color:#3e7d5e">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5a6680">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;font-weight:600;color:#0a1a35"><a href="tel:${telefono}" style="color:#3e7d5e">${telefono}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5a6680">Tienda</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0a1a35"><a href="${tienda}" style="color:#3e7d5e" target="_blank">${tienda}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#5a6680">Facturación</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0a1a35">${facturacion}</td></tr>
            <tr><td style="padding:10px 0;font-size:13px;color:#5a6680;vertical-align:top">Problema</td><td style="padding:10px 0;font-size:15px;color:#0a1a35;line-height:1.6">${problema}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 })
  }
}
