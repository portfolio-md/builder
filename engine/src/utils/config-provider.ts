import { CvConfig, Template } from '@portfolio.md/configuration';
import { getTemplate } from '@portfolio.md/templates';
import fs from 'fs';
import path from 'path';
import DatauriParser from 'datauri/parser';

import { FileFetcher } from './file-fetcher';

const dataUriParser = new DatauriParser();

type GetConfigResult = {
  config: CvConfig;
  basePath: string;
  template: Template;
  images: {
    [name: string]: string;
  };
};

interface ConfigProvider {
  getConfig(): Promise<GetConfigResult>;
}

class FileConfigProvider implements ConfigProvider {
  async getConfig() {
    const file = fs
      .readFileSync(path.join(process.cwd(), 'cv.config.json'))
      .toString('utf-8');
    const config: CvConfig = JSON.parse(file);

    return {
      config,
      basePath: process.cwd(),
      template: getTemplate(config.template),
      images: await this.getImages(config.images),
    };
  }

  async getImages(
    images: CvConfig['images']
  ): Promise<GetConfigResult['images']> {
    const result: GetConfigResult['images'] = {};

    for (const name in images) {
      const file = await FileFetcher.fetchFile(images[name], process.cwd());
      const dataUri = dataUriParser.format(images[name], file).content;

      if (dataUri == null) {
        continue;
      }

      result[name] = dataUri;
    }

    return result;
  }
}

// Facade to remove dependency on concrete implementation
export class ConfigService {
  private static configProvider: ConfigProvider = new FileConfigProvider();

  static getConfig() {
    return this.configProvider.getConfig();
  }
}
