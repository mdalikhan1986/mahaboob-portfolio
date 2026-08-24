import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM_ADDRESS = "Portfolio <onboarding@resend.dev>";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonError(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return jsonError("Name, a valid email, and a message are required.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const inbox = process.env.CONTACT_INBOX?.trim();

  if (!apiKey || !inbox) {
    console.error("Contact API missing RESEND_API_KEY or CONTACT_INBOX.");
    return jsonError("Email service is not configured.", 500);
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [inbox],
        reply_to: email,
        subject: `New portfolio inquiry from ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
        html: [
          `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
          `<p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`,
        ].join(""),
      }),
    });

    const payload = (await response.json().catch(() => null)) as {
      id?: string;
      message?: string;
      name?: string;
    } | null;

    if (!response.ok || !payload?.id) {
      console.error("Resend delivery failed:", {
        status: response.status,
        payload,
      });
      return jsonError(
        payload?.message ?? "Failed to send the message.",
        502,
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery request failed:", error);
    return jsonError("Failed to send the message.", 502);
  }
}
