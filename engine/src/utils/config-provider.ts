import { CvConfig, Template } from '@portfolio.md/configuration';
import { getTemplate } from '@portfolio.md/templates';
import DatauriParser from 'datauri/parser';
import path from 'path';
import fs from 'fs';
import * as ts from 'typescript';

import { FileFetcher } from './file-fetcher';

type GetConfigResult = {
  config: CvConfig;
  basePath: string;
  template: Template;
  images: {
    [name: string]: {
      dataUri: string;
      file: Buffer;
    };
  };
};

// Facade to remove dependency on concrete implementation
export class ConfigService {
  private static dataUriParser = new DatauriParser();

  static async getConfig() {
    const basePath = process.cwd();
    const config = ConfigService.loadConfig(basePath);
    // TODO: implement template loading system
    const templateName = 'default';

    return {
      config,
      basePath: basePath,
      template: getTemplate(templateName),
      images: await this.getImages(config.images, basePath),
    };
  }

  private static async getImages(
    images: CvConfig['images'],
    basePath: string
  ): Promise<GetConfigResult['images']> {
    const result: GetConfigResult['images'] = {};

    for (const name in images) {
      const file = await FileFetcher.fetchFile(images[name], basePath);
      const dataUri = this.dataUriParser.format(images[name], file).content;

      if (dataUri == null) {
        continue;
      }

      result[name] = {
        dataUri: dataUri,
        file: file,
      };
    }

    return result;
  }

  private static loadConfig(basePath: string): CvConfig {
    const file = fs.readFileSync(path.join(basePath, 'cv.config.ts'));
    const fileStr = file.toString('utf-8');
    const jsProgram = ts.transpile(fileStr);
    return eval(jsProgram) as CvConfig;
  }
}
