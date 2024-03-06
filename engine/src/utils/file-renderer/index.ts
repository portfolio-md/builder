import { ConfigService } from '../config-provider';
import { FileFetcher } from '../file-fetcher';
import { DocRenderer } from './doc-renderer';
import { PdfRenderer } from './pdf-renderer';

export class FileRenderer {
  private static pdfRenderer = new PdfRenderer();
  private static docRenderer = new DocRenderer();

  static async render(page: string, type: 'pdf' | 'doc') {
    const { config, basePath } = await ConfigService.getConfig();
    const file = config.pages[page]?.file;

    if (file == null) {
      throw new Error('Cant find required page!');
    }

    const fileBuf = await FileFetcher.fetchFile(file, basePath);

    switch (type) {
      case 'pdf':
        return await FileRenderer.pdfRenderer.render(fileBuf);
      case 'doc':
        return await FileRenderer.docRenderer.render(fileBuf);
    }
  }
}
