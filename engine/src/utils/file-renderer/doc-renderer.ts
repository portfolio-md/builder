import { unified } from 'unified';
import markdown from 'remark-parse';
import docx from 'remark-docx';
import remarkGfm from 'remark-gfm';
import imageSize from 'image-size';

import { Renderer } from './types';

export class DocRenderer implements Renderer {
  async render(file: Buffer): Promise<Buffer> {
    const processor = unified()
      .use(markdown)
      .use(remarkGfm)
      .use(docx, {
        output: 'buffer',
        imageResolver: async (url) => {
          const imageFile = await fetch(url).then((r) => r.arrayBuffer());
          const { width, height } = imageSize(new Uint8Array(imageFile));

          return {
            image: Buffer.from(imageFile),
            width: width ?? 0,
            height: height ?? 0,
          };
        },
      });
    const doc = await processor.process(file);
    return doc.result as Buffer;
  }
}
