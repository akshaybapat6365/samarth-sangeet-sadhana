# Samarth Sangeet Sadhana

A rich, bilingual website for Samarth Sangeet Sadhana music classes, featuring a premium Indian classical ("Royal Court") design language and seamless language switching between English and Marathi.

## Features

- Bilingual support (English/Marathi) with persistent toggle
- Multi-page structure: Home, About, Classes, Events, Gallery, Contact
- Royal Court visual system: parchment surfaces, brass-gold accents, subtle jali lattice
- Responsive layout + accessibility-friendly focus states
- Contact form with email delivery (Resend)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Context for language management
- Resend (contact form)

## Development

```bash
npm install
npm run dev
```

### Contact Form (Local)

Create `.env.local`:

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Samarth Sangeet Sadhana <no-reply@yourdomain.com>"
```

## Deployment

Deployed on Vercel.

Set the same environment variables in the Vercel project settings:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
