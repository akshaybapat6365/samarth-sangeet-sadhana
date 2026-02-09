'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

const rateWindowMs = 10 * 60 * 1000;
const rateMax = 3;
const rate = new Map<string, { count: number; resetAt: number }>();

function getClientIp() {
  const h = headers();
  const forwarded = h.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown';
  return h.get('x-real-ip') || 'unknown';
}

function rateLimitOk(ip: string) {
  const now = Date.now();
  const existing = rate.get(ip);

  if (!existing || existing.resetAt < now) {
    rate.set(ip, { count: 1, resetAt: now + rateWindowMs });
    return true;
  }

  if (existing.count >= rateMax) return false;
  existing.count += 1;
  return true;
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isEmail(email: string) {
  // Pragmatic check. We only use it for reply-to; don't over-validate.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = String(formData.get('website') ?? '').trim();
  if (honeypot) {
    // Pretend success to avoid revealing the honeypot to bots.
    return { status: 'success' };
  }

  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const mode = String(formData.get('mode') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (name.length < 2) return { status: 'error', message: 'Please enter your name.' };
  if (name.length > 80) return { status: 'error', message: 'Name is too long.' };

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 8) return { status: 'error', message: 'Please enter a valid phone number.' };
  if (phone.length > 30) return { status: 'error', message: 'Phone number is too long.' };

  if (email && !isEmail(email)) {
    return { status: 'error', message: 'Please enter a valid email address (or leave it blank).' };
  }

  if (message.length < 10) return { status: 'error', message: 'Please enter a short message.' };
  if (message.length > 2000) return { status: 'error', message: 'Message is too long.' };

  const ip = getClientIp();
  if (!rateLimitOk(ip)) {
    return { status: 'error', message: 'Too many requests. Please try again in a few minutes.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      status: 'error',
      message:
        'Email is not configured yet. Please call us directly for now.',
    };
  }

  const resend = new Resend(apiKey);
  const h = headers();

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email || '(not provided)');
  const safeMode = escapeHtml(mode || '(not specified)');
  const safeMessage = escapeHtml(message);

  const subject = `New enquiry: ${name}${mode ? ` (${mode})` : ''}`;
  const text =
    `New enquiry\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email || '(not provided)'}\n` +
    `Mode: ${mode || '(not specified)'}\n\n` +
    `Message:\n${message}\n\n` +
    `Meta:\n` +
    `IP: ${ip}\n` +
    `User-Agent: ${h.get('user-agent') || ''}\n` +
    `Referer: ${h.get('referer') || ''}\n`;

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
      <h2>New enquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Mode:</strong> ${safeMode}</p>
      <hr />
      <p style="white-space: pre-wrap;"><strong>Message:</strong><br/>${safeMessage}</p>
      <hr />
      <p style="color: #555; font-size: 12px;">
        IP: ${escapeHtml(ip)}<br/>
        User-Agent: ${escapeHtml(h.get('user-agent') || '')}<br/>
        Referer: ${escapeHtml(h.get('referer') || '')}
      </p>
    </div>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email && isEmail(email) ? email : undefined,
      html,
      text,
    });
    return { status: 'success' };
  } catch (err) {
    console.error('Contact email failed:', err);
    return { status: 'error', message: 'Failed to send. Please try again later.' };
  }
}

