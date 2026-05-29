// Generates public/og-image.png (1200x630) — the social share card.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../public/og-image.png')

const W = 1200
const H = 630

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#38bdf8" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="#0a0a0f"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="120" cy="80" r="360" fill="url(#glow1)"/>
  <circle cx="1120" cy="560" r="340" fill="url(#glow2)"/>

  <!-- accent bar -->
  <rect x="90" y="180" width="6" height="270" rx="3" fill="url(#accent)"/>

  <!-- content -->
  <text x="124" y="170" font-family="'JetBrains Mono','Courier New',monospace" font-size="26" letter-spacing="6" fill="#38bdf8">&lt;/&gt; DEVOPS &amp; OPERATIONS ENGINEER</text>

  <text x="120" y="290" font-family="'Space Grotesk',Arial,sans-serif" font-size="92" font-weight="700" fill="#ffffff">TRAN DINH TRUNG</text>

  <text x="122" y="360" font-family="'Space Grotesk',Arial,sans-serif" font-size="40" font-weight="600" fill="url(#accent)">Kubernetes · Kafka · Observability · Cloud</text>

  <text x="124" y="430" font-family="Inter,Arial,sans-serif" font-size="28" fill="#9494a8">Resilient cloud-native infrastructure at scale —</text>
  <text x="124" y="468" font-family="Inter,Arial,sans-serif" font-size="28" fill="#9494a8">turning manual ops into automated, observable systems.</text>

  <!-- footer line -->
  <line x1="124" y1="528" x2="1076" y2="528" stroke="#232334" stroke-width="1"/>
  <circle cx="132" cy="568" r="6" fill="#22c55e"/>
  <text x="150" y="576" font-family="Inter,Arial,sans-serif" font-size="24" fill="#e8e8f0">Ho Chi Minh City, Vietnam</text>
  <text x="1076" y="576" text-anchor="end" font-family="'JetBrains Mono','Courier New',monospace" font-size="24" fill="#9494a8">trandinhtrung255@gmail.com</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(out)
console.log('Generated', out)
