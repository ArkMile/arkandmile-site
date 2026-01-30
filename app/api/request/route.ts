import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic in-memory rate limit (works fine for early-stage; serverless may reset)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_PER_WINDOW = 5;

function getIP(req: NextRequest) {
  // Vercel/Proxies
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return { ok: true };
  }
  if (entry.count >= MAX_PER_WINDOW) return { ok: false };
  entry.count += 1;
  return { ok: true };
}

type Payload = {
  name: string;
  email: string;
  problem: string;
  details?: string;
  // honeypot
  website?: string;
};

export async function POST(req: NextRequest) {
  try {
    const ip = getIP(req);
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Try again in a minute." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<Payload>;

    // Honeypot: if filled, it's probably a bot
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const problem = (body.problem ?? "").trim();
    const details = (body.details ?? "").trim();

    if (!name || !email || !problem) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Minimal email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const TO = process.env.REQUEST_TO_EMAIL || "arkandmile@gmail.com";
    const FROM = process.env.REQUEST_FROM_EMAIL || "arkandmile@gmail.com";

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { ok: false, message: "Server email is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const subject = `Ark & Mile Tool Request: ${problem.slice(0, 60)}`;

    const text = [
      `New tool request from arkandmile.com`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Problem: ${problem}`,
      details ? `Details: ${details}` : `Details: (none)`,
      ``,
      `IP: ${ip}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
        <h2 style="margin:0 0 12px 0;">New Ark &amp; Mile Tool Request</h2>
        <p style="margin:0 0 8px 0;"><b>Name:</b> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0;"><b>Email:</b> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px 0;"><b>Problem:</b> ${escapeHtml(problem)}</p>
        ${
          details
            ? `<p style="margin:0 0 8px 0;"><b>Details:</b><br/>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>`
            : `<p style="margin:0 0 8px 0;"><b>Details:</b> (none)</p>`
        }
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
        <p style="margin:0;color:#666;font-size:12px">
          IP: ${escapeHtml(ip)} • ${new Date().toISOString()}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: email, // you can reply directly to the requester
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "Failed to send request." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
