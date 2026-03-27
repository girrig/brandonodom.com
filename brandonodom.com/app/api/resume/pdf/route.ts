import puppeteer from "puppeteer";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`${origin}/resume-print`, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      format: "letter",
      printBackground: true,
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
    });

    return new Response(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Brandon_Odom_Resume.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
