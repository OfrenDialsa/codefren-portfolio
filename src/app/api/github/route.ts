import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Invalid input" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Ofren Dialsa <contact@codefren.site>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New contact message from ${name}`,
            html: `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Arial, sans-serif; background-color: #f9fafb; padding: 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <tr>
        <td style="padding: 20px 24px; background-color: #111827; color: #ffffff;">
          <h2 style="margin: 0; font-size: 18px; font-weight: 600;">
            New Contact Message
          </h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #d1d5db;">
            Sent from your portfolio
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding: 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; color: #111827;">
            <tr>
              <td style="padding-bottom: 10px;">
                <strong>Name:</strong><br />
                <span style="color: #374151;">${name}</span>
              </td>
            </tr>

            <tr>
              <td style="padding-bottom: 10px;">
                <strong>Email:</strong><br />
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding-top: 14px;">
                <strong>Message:</strong>
                <div style="margin-top: 8px; padding: 14px 16px; background-color: #f3f4f6; border-radius: 8px; color: #374151; line-height: 1.6;">
                  ${message}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 16px 24px; background-color: #f9fafb; font-size: 12px; color: #6b7280; text-align: center;">
          Reply directly to this email to respond.
        </td>
      </tr>
    </table>
  </div>
  `,
        });


        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
