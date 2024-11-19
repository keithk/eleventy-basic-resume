import { chromium } from "playwright";

async function printPDF() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8080", { waitUntil: "networkidle" });
  await page.pdf({ format: "Letter", path: "./resume.pdf" });
  await browser.close();
}

await printPDF();
