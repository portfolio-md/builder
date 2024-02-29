import { Converter } from 'showdown';
import puppeteer from 'puppeteer';

import { ConfigService } from './config-provider';
import { FileFetcher } from './file-fetcher';

const converter = new Converter();
converter.setFlavor('github');

export default async function pdfRenderer(page: string) {
  const { config, basePath } = await ConfigService.getConfig();

  if (config.pages[page] == null) {
    return null;
  }

  const mdxFile = await FileFetcher.fetchFile(
    config.pages[page].file,
    basePath
  );
  const html = converter.makeHtml(mdxFile.toString('utf-8'));

  return await getPdf(html);
}

async function getPdf(html: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const wrappedHtml = `
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
      </head>
      <body>
        <div class="p-4">
          <article class="prose">${html}</article>
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
