import { readFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = join(root, 'public');
const ogDir = join(publicDir, 'og');
const brandDir = join(publicDir, 'brand');
mkdirSync(ogDir, { recursive: true });
mkdirSync(brandDir, { recursive: true });

const source = readFileSync(join(root, 'src', 'data', 'categories.ts'), 'utf8');
const categories = [...source.matchAll(/slug: '([^']+)',\n\s+name: '([^']+)'/g)].map(
  (match) => ({ slug: match[1], name: match[2] }),
);

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const wrap = (text, maxLength) => {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
};

const mark = `
  <g transform="translate(80 76) scale(1.65)">
    <rect width="40" height="40" rx="11" fill="#0A2033"/>
    <path d="M8.5 24.5h4.2l2.3-6.2 3.4 10.4 2.6-7h5.2" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="29" cy="21.7" r="1.8" fill="#5EEAD4"/>
    <path d="M9 14.5h6" stroke="#8FB4CC" stroke-width="2" stroke-linecap="round"/>
  </g>
`;

const escapeText = (value) => escapeXml(value);

function ogSvg({ title, subtitle = 'Troubleshooting guides', label = 'FIXPROBLEMNOW' }) {
  const lines = wrap(title, 26);
  const lineHeight = 74;
  const startY = lines.length === 1 ? 330 : lines.length === 2 ? 292 : 258;
  const titleText = lines
    .map(
      (line, index) =>
        `<text x="80" y="${startY + index * lineHeight}" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="-1.5">${escapeText(line)}</text>`,
    )
    .join('');
  const subtitleY = startY + (lines.length - 1) * lineHeight + 64;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#061522"/>
      <stop offset="0.58" stop-color="#0A2033"/>
      <stop offset="1" stop-color="#0F2E47"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.1" r="0.9">
      <stop offset="0" stop-color="#0A63BD" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#0A63BD" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0v46" fill="none" stroke="#FFFFFF" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="10" height="630" fill="#0A63BD"/>
  ${mark}
  <text x="160" y="120" fill="#8FB4CC" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="3">${escapeText(label)}</text>
  ${titleText}
  <text x="82" y="${subtitleY}" fill="#9FC0D5" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500">${escapeText(subtitle)}</text>
  <g transform="translate(80 545)">
    <rect width="300" height="44" rx="22" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.18"/>
    <circle cx="28" cy="22" r="7" fill="#5EEAD4"/>
    <text x="46" y="29" fill="#D9E8F2" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="600">Independent tech help</text>
  </g>
  <text x="1120" y="580" text-anchor="end" fill="#7E97AA" font-family="Segoe UI, Arial, sans-serif" font-size="20">fixproblemnow.com</text>
</svg>`;
}

async function render(svg, file) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
}

await render(
  ogSvg({
    title: 'Clear fixes for everyday tech problems',
    subtitle: 'Computers · phones · Wi-Fi · printers · software · TV',
  }),
  join(ogDir, 'default.png'),
);

for (const category of categories) {
  await render(
    ogSvg({
      title: category.name,
      subtitle: 'Step-by-step troubleshooting guides',
    }),
    join(ogDir, `${category.slug}.png`),
  );
}

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 40 40">
  <rect width="40" height="40" rx="11" fill="#0A2033"/>
  <path d="M8.5 24.5h4.2l2.3-6.2 3.4 10.4 2.6-7h5.2" stroke="#5EEAD4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="29" cy="21.7" r="1.8" fill="#5EEAD4"/>
  <path d="M9 14.5h6" stroke="#8FB4CC" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const iconBuffer = Buffer.from(faviconSvg);
await sharp(iconBuffer).resize(32, 32).png().toFile(join(publicDir, 'favicon-32.png'));
await sharp(iconBuffer).resize(180, 180).png().toFile(join(publicDir, 'apple-touch-icon.png'));
await sharp(iconBuffer).resize(512, 512).png().toFile(join(publicDir, 'brand', 'logo-512.png'));

console.log(`Generated default and ${categories.length} category OG images, plus icons.`);
