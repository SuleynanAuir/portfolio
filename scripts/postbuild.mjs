import { readFile, writeFile } from "node:fs/promises";

const { config } = JSON.parse(
  await readFile(".next/required-server-files.json", "utf8"),
);
await writeFile(
  "out/deployment.json",
  JSON.stringify(
    {
      basePath: config.basePath,
      siteUrl: config.env.NEXT_PUBLIC_SITE_URL,
    },
    null,
    2,
  ) + "\n",
);
console.log(`GitHub Pages export ready: ${config.env.NEXT_PUBLIC_SITE_URL}/`);
