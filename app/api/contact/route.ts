import { NextResponse } from "next/server";
import { contactPage } from "@/content/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INBOX = process.env.CONTACT_INBOX?.trim() || contactPage.email;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const origin =
    request.headers.get("origin") || new URL(request.url).origin;
  const referer =
    request.headers.get("referer") || `${origin}/contact`;

  let delivered = false;
  try {
    delivered = await deliverWithFormSubmit({
      name,
      email,
      message,
      origin,
      referer,
    });
  } catch (error) {
    console.error("Contact delivery request failed:", error);
  }

  if (!delivered) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

async function deliverWithFormSubmit({
  name,
  email,
  message,
  origin,
  referer,
}: {
  name: string;
  email: string;
  message: string;
  origin: string;
  referer: string;
}) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New portfolio inquiry from ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    },
  );

  let payload: { success?: string | boolean; message?: string } = {};
  try {
    payload = (await response.json()) as {
      success?: string | boolean;
      message?: string;
    };
  } catch {
    return false;
  }

  const ok = payload.success === true || payload.success === "true";
  if (!ok) {
    console.error("FormSubmit delivery failed:", payload.message ?? response.status);
  }

  return ok;
}
