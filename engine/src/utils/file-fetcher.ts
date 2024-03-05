import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const loadFileAsync = promisify(fs.readFile);

export class FileFetcher {
  static async fetchFile(url: string, basePath = ''): Promise<Buffer> {
    if (isHttpUrl(url)) {
      const res = await fetch(url);
      const arrayBuffer = await res.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }

    const buffer = await loadFileAsync(path.join(basePath, url));
    return buffer;
  }
}

function isHttpUrl(url: string) {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
}
