import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nombre, email, telefono, asunto, mensaje } = body;

        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            return NextResponse.json(
                { message: "Faltan campos requeridos" }, 
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "Mundo Silica <onboarding@resend.dev>",
            to: "Mundosilica.ok@gmail.com",
            subject: `Nueva consulta: ${asunto} - ${nombre}`,
            react: EmailTemplate({
                nombre,
                email,
                telefono,
                asunto,
                mensaje,
            }) as React.ReactElement,
        });

        console.log("Email enviado:", data);

        return NextResponse.json({ 
            message: "Email enviado correctamente",
            data: data
        }, { status: 200 });

    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json({ 
            message: "Error al enviar el email",
            error: error instanceof Error ? error.message : "Error desconocido"
        }, { status: 500 });
    }
}