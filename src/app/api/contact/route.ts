import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  // Create transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p>${message}</p><p><strong>Reply to:</strong> ${email}</p>`,
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response("Failed to send email", { status: 500 });
  }
}