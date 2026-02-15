import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../public/icons');

// SVG icon - stylized "C" for CEO with orange accent
const createSvgIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="96" fill="#09090b"/>
  <circle cx="256" cy="256" r="140" fill="none" stroke="#f97316" stroke-width="48" stroke-linecap="round" stroke-dasharray="440 880"/>
  <circle cx="340" cy="150" r="24" fill="#f97316"/>
</svg>
`;

const sizes = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'apple-icon-180.png', size: 180 },
];

async function generateIcons() {
  await mkdir(outputDir, { recursive: true });

  for (const { name, size } of sizes) {
    const svg = Buffer.from(createSvgIcon(size));
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(join(outputDir, name));
    console.log(`Generated ${name}`);
  }

  console.log('All icons generated!');
}

generateIcons().catch(console.error);
