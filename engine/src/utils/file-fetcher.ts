import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const loadFileAsync = promisify(fs.readFile);

export class FileFetcher {
  static async fetchFile(url: string, basePath = ''): Promise<Buffer> {
    const { protocol, pathname } = new URL(url);

    switch (protocol) {
      case 'file:': {
        const buffer = await loadFileAsync(path.join(basePath, pathname));
        return buffer;
      }

      default: {
        const res = await fetch(url);
        const arrayBuffer = await res.arrayBuffer();
        return Buffer.from(arrayBuffer);
      }
    }
  }
}
