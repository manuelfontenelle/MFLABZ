import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const sourceDir = join(rootDir, "public/images/hero");
const outputDir = join(rootDir, "public/images/hero/mobile");

const MOBILE_WIDTH = 640;
const MOBILE_HERO_FILES = ["hero1", "hero2", "hero3", "hero4"];

const QUALITY = {
  lcp: { avif: 62, webp: 80, jpeg: 84 },
  default: { avif: 55, webp: 75, jpeg: 80 },
};

mkdirSync(outputDir, { recursive: true });

for (const name of MOBILE_HERO_FILES) {
  const inputPath = join(sourceDir, `${name}.jpg`);
  const quality = name === "hero1" ? QUALITY.lcp : QUALITY.default;
  const resized = sharp(inputPath).rotate().resize(MOBILE_WIDTH, null, {
    withoutEnlargement: true,
    fit: "inside",
  });

  await resized
    .clone()
    .avif({ quality: quality.avif, effort: 4 })
    .toFile(join(outputDir, `${name}.avif`));

  await resized
    .clone()
    .webp({ quality: quality.webp })
    .toFile(join(outputDir, `${name}.webp`));

  await resized
    .clone()
    .jpeg({ quality: quality.jpeg, mozjpeg: true })
    .toFile(join(outputDir, `${name}.jpg`));

  console.log(`Optimized ${name} -> public/images/hero/mobile/${name}.{avif,webp,jpg}`);
}
