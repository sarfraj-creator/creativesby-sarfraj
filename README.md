# Creativesby Sarfraj — Premium Portfolio Website

> Next.js 14 · Tailwind CSS · TypeScript · Cormorant Garamond · Deep Teal + Gold · Gmail SMTP

## Design Philosophy
Luxury dark agency aesthetic inspired by Pentagram, Superside & top Awwwards winners.
CBS hexagon monogram logo in teal → gold gradient. Grain texture overlay. Custom gold cursor.
Cormorant Garamond display font + DM Sans body. No photos on testimonials — verified badges instead.

## Features
- Custom gold cursor (desktop)
- Hero with cycling animated words
- Scrolling tech marquee strip
- About with Unsplash image + win metrics
- 12 service cards with industry photos
- 6 project case studies with Unsplash covers
- 4-step process section with image
- Animated skill bars (teal/gold accent)
- Testimonials: NO photos, NO fake company names — verified badge + industry + result metric
- Full contact form: Zod validation, business type, 10 service toggles, budget, timeline
- Gmail SMTP: luxury HTML admin email + client confirmation
- Floating gold chatbot (bottom-right)
- Floating WhatsApp button + auto popup (bottom-left)
- SVG favicon (CBS hexagon in teal+gold)
- Fully mobile responsive

## Local Setup

### 1. Install
```bash
cd sarfraj-portfolio
npm install
```

### 2. .env.local is pre-configured
The SMTP password is already in `.env.local`. Just run:
```bash
npm run dev
```
Open http://localhost:3000

## Vercel Deployment

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "creativesby sarfraj portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sarfraj-portfolio.git
git push -u origin main
```
> .gitignore excludes .env.local — your SMTP password is never pushed to GitHub.

### Step 2 — Import on Vercel
1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Framework: Next.js ✅ (auto-detected)

### Step 3 — Add Environment Variables
Settings → Environment Variables → add all 5:

| Name | Value |
|------|-------|
| SMTP_HOST | smtp.gmail.com |
| SMTP_PORT | 587 |
| SMTP_USER | creativesby.sarfraj@gmail.com |
| SMTP_PASS | keco ijiv hprb oetv |
| CONTACT_RECEIVER | creativesby.sarfraj@gmail.com |

### Step 4 — Deploy
Click Deploy. Build command, install command, output dir — all auto-detected.

## File Structure
```
sarfraj-portfolio/
├── app/
│   ├── api/contact/route.ts    ← Gmail SMTP
│   ├── globals.css             ← Dark theme, fonts, grain
│   ├── layout.tsx              ← Favicon, SEO, cursor
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            ← Cycling words, dark bg image
│   │   ├── TrustBar.tsx        ← Scrolling tech marquee
│   │   ├── About.tsx           ← Photo + win metrics
│   │   ├── Services.tsx        ← 12 cards with images
│   │   ├── Projects.tsx        ← 6 case studies with images
│   │   ├── Process.tsx         ← 4 steps + image
│   │   ├── TechStack.tsx       ← Skill bars + tag cloud
│   │   ├── Testimonials.tsx    ← Verified reviews, no photos
│   │   └── Contact.tsx         ← Full validated form
│   ├── Cursor.tsx              ← Gold custom cursor
│   ├── ChatBot.tsx             ← Dark themed chatbot
│   ├── WhatsAppFloat.tsx       ← WA button + popup
│   ├── Footer.tsx              ← CBS logo + links
│   └── Navbar.tsx              ← CBS hexagon logo
├── public/
│   └── favicon.svg             ← CBS hexagon favicon
├── .env.local                  ← Pre-configured (not in git)
├── .env.example
├── next.config.js              ← Unsplash image domain
├── tailwind.config.js          ← Teal+gold palette
└── package.json
```

## Color Palette
- Night: `#080C10` (deepest bg)
- Surface: `#0E1418` (cards, bars)
- Card: `#111820` (elevated cards)
- Border: `#1E2A32`
- Teal: `#1A5F5E` / Bright: `#3DB8B5`
- Gold: `#C9A84C` / Light: `#E2C97E` / Bright: `#F0D98C`
- Text Primary: `#F0EDE8`
- Text Secondary: `#8A9BA8`

## Fonts
- Display: Cormorant Garamond (Google Fonts)
- Body: DM Sans (Google Fonts)
- Mono: JetBrains Mono (Google Fonts)
