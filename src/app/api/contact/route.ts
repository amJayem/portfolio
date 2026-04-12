import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "csejayem19@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#4f46e5;margin-bottom:4px;">New Portfolio Message</h2>
          <p style="color:#6b7280;font-size:14px;margin-top:0;">Someone reached out via your portfolio contact form.</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <table style="width:100%;font-size:15px;color:#111827;">
            <tr>
              <td style="padding:6px 0;font-weight:600;width:80px;">Name</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;font-weight:600;">Email</td>
              <td><a href="mailto:${email}" style="color:#4f46e5;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:8px;font-size:15px;color:#374151;line-height:1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="margin-top:20px;font-size:13px;color:#9ca3af;">
            Hit Reply to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
