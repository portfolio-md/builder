import { unified } from 'unified';
import markdown from 'remark-parse';
import docx from 'remark-docx';

import { Renderer } from './types';

export class DocRenderer implements Renderer {
  async render(file: Buffer): Promise<Buffer> {
    const processor = unified().use(markdown).use(docx, { output: 'buffer' });
    const doc = await processor.process(file);
    return doc.result as Buffer;
  }
}
