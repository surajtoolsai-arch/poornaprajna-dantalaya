# Poornaprajna Dantalaya

Single-page website for Poornaprajna Dantalaya, a dental clinic run by
Dr. Bhargavi Koty, BDS, in BSK 3rd Stage, Bengaluru.

## Stack
React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Editing content
All clinic details (phone, address, hours, Instagram, email, WhatsApp message)
live in one file: `src/data/site.js`. Services and testimonials are in
`src/data/content.js`. Update either file and the whole site updates.

## Deploy
Deploys to Netlify out of the box via `netlify.toml` (build: `npm run build`,
publish: `dist`) with SPA-safe redirects in `public/_redirects`.
