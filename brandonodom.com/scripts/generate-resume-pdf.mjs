import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

/**
 * Renders /resume-print to public/resume/Brandon_Odom_Resume.pdf, which is
 * gitignored and regenerated on every deploy.
 *
 * Must run BEFORE the app server starts: `next start` snapshots public/ at
 * startup and 404s anything written afterwards.
 *
 * Renders the last `yarn build`, NOT your working tree. Rebuild first, or
 * point at a dev server to pick up live edits:
 *
 *   PDF_ORIGIN=http://localhost:3000 yarn generate:pdf
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "resume", "Brandon_Odom_Resume.pdf");
const PORT = process.env.PDF_PORT ?? "3999";

async function waitForServer(origin, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      if ((await fetch(`${origin}/resume-print`)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`No server answering at ${origin} after ${timeoutMs}ms`);
}

async function renderTo(origin) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 768 });
    await page.goto(`${origin}/resume-print`, { waitUntil: "networkidle0" });

    // Required: the fonts are `font-display: block`, so without this the PDF
    // renders before they load and comes out blank.
    await page.evaluate(() => document.fonts.ready);

    return await page.pdf({
      format: "letter",
      printBackground: true,
      margin: {
        top: "0.5in",
        right: "0",
        bottom: "0.5in",
        left: "0",
      },
    });
  } finally {
    await browser.close();
  }
}

const existing = process.env.PDF_ORIGIN;
const origin = existing ?? `http://localhost:${PORT}`;

// Own server on its own port: during a deploy the previous build is still
// serving on the usual one, and would render the old resume. Next's entrypoint
// is spawned directly rather than via the .bin shim, so kill() hits one process.
const server = existing
  ? null
  : spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", PORT], {
      cwd: ROOT,
      stdio: "ignore",
    });

try {
  await waitForServer(origin);
  const pdf = await renderTo(origin);
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, pdf);
  console.log(`Wrote ${OUT} (${pdf.length} bytes)`);
} finally {
  server?.kill();
}
