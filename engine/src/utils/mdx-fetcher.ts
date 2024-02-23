import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const loadFileAsync = promisify(fs.readFile);

export class MdxFetcher {
  static async fetchMdx(url: string, basePath = ''): Promise<string> {
    const { protocol, pathname } = new URL(url);

    switch (protocol) {
      case 'file:': {
        const buffer = await loadFileAsync(path.join(basePath, pathname));
        return buffer.toString('utf-8');
      }

      default: {
        const res = await fetch(url);
        const text = await res.text();
        return text;
      }
    }
  }
}
