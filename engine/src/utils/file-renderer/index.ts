import { ConfigService } from '../config-provider';
import { FileFetcher } from '../file-fetcher';
import { DocRenderer } from './doc-renderer';
import { PdfRenderer } from './pdf-renderer';

export class FileRenderer {
  private static pdfRenderer = new PdfRenderer();
  private static docRenderer = new DocRenderer();

  static async render(page: string, type: 'pdf' | 'doc') {
    const { config, basePath } = await ConfigService.getConfig();

    if (config.pages[page] == null) {
      throw new Error('Cant find required page!');
    }

    const file = await FileFetcher.fetchFile(config.pages[page].file, basePath);

    switch (type) {
      case 'pdf':
        return await FileRenderer.pdfRenderer.render(file);
      case 'doc':
        return await FileRenderer.docRenderer.render(file);
    }
  }
}
