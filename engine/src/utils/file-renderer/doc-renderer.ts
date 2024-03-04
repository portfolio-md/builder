import { Converter } from 'showdown';
// @ts-expect-error there is no types
import HTMLtoDOCX from 'html-to-docx';

import { Renderer } from './types';

export class DocRenderer implements Renderer {
  private converter: Converter = new Converter();

  constructor() {
    this.converter.setFlavor('github');
  }

  async render(file: Buffer): Promise<Buffer> {
    const html = this.converter.makeHtml(file.toString('utf-8'));
    return await HTMLtoDOCX(html);
  }
}
