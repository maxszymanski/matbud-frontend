'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.SMTP_USER,
            subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
            text: `Imię: ${name}\nTelefon: ${phone}\n\nWiadomość:\n${message}`,
            html: `<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p style="margin-top: 20px;"><strong>Wiadomość:</strong><br>${message}</p>
    </div>`,
        })

        return { status: 'success' }
    } catch (error) {
        return { status: 'error' }
    }
}
