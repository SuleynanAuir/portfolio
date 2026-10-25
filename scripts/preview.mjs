import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
let deployment;
try {
  deployment = JSON.parse(
    await readFile(path.join(root, "deployment.json"), "utf8"),
  );
} catch {
  console.error("Run npm run build before npm start.");
  process.exit(1);
}
const { basePath } = deployment;
const port = Number(process.env.PORT ?? 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const url = new URL(request.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (basePath && (pathname === "/" || pathname === basePath)) {
      response.writeHead(302, { Location: `${basePath}/${url.search}` }).end();
      return;
    }
    let status = 200;
    let file;
    if (basePath && !pathname.startsWith(`${basePath}/`)) {
      status = 404;
    } else {
      file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
      if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
        response.writeHead(403).end();
        return;
      }
      const info = await stat(file).catch(() => null);
      if (info?.isDirectory()) {
        if (!pathname.endsWith("/")) {
          response
            .writeHead(302, { Location: `${url.pathname}/${url.search}` })
            .end();
          return;
        }
        file = path.join(file, "index.html");
      }
      if (!(await stat(file).catch(() => null))?.isFile()) status = 404;
    }
    if (status === 404) file = path.join(root, "404.html");
    response.writeHead(status, {
      "Content-Type": types[path.extname(file)] ?? "application/octet-stream",
    });
    if (request.method === "HEAD") response.end();
    else
      createReadStream(file)
        .on("error", () => response.destroy())
        .pipe(response);
  } catch {
    response.writeHead(400).end("Bad request");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Preview: http://127.0.0.1:${port}${basePath}/`),
);
