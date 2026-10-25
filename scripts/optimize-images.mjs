import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("public/assets/web_page");
const output = path.resolve("public/assets/optimized");
await mkdir(output, { recursive: true });
let count = 0;
const dimensions = {};
for (const filename of await readdir(source)) {
  if (!/\.(png|jpe?g)$/i.test(filename)) continue;
  const input = path.join(source, filename);
  const target = path.join(output, filename.replace(/\.[^.]+$/, ".webp"));
  const current = await stat(target).catch(() => null);
  if (!current || current.mtimeMs < (await stat(input)).mtimeMs) {
    await sharp(input)
      .rotate()
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(target);
    count += 1;
  }
  const { width, height } = await sharp(target).metadata();
  dimensions[`/assets/web_page/${filename}`] = { width, height };
}
await writeFile(
  "data/image-dimensions.json",
  JSON.stringify(dimensions, null, 2) + "\n",
);
console.log(
  `Optimized ${count} research images; originals retained for full-resolution viewing.`,
);
