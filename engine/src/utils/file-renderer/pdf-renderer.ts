import { Converter } from 'showdown';
import puppeteer from 'puppeteer';

import { Renderer } from './types';

export class PdfRenderer implements Renderer {
  private converter: Converter = new Converter();

  constructor() {
    this.converter.setFlavor('github');
  }

  async render(file: Buffer): Promise<Buffer> {
    const html = this.converter.makeHtml(file.toString('utf-8'));
    return await this.getPdf(html);
  }

  private async getPdf(html: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const wrappedHtml = `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
        </head>
        <body>
          <div class="p-4">
            <article class="prose prose-sm max-w-none prose-headings:m-2 prose-p:m-2">${html}</article>
          </div>
        </body>
      </html>
    `;

    await page.setContent(wrappedHtml, {
      waitUntil: 'domcontentloaded',
    });

    return await page.pdf({
      format: 'A4',
    });
  }
}
