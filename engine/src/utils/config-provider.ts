import { CvConfig, Template } from '@portfolio.md/configuration';
import { getTemplate } from '@portfolio.md/templates';

type GetConfigResult = {
  config: CvConfig;
  basePath: string;
  template: Template;
};

interface ConfigProvider {
  getConfig(): Promise<GetConfigResult>;
}

class FileConfigProvider implements ConfigProvider {
  async getConfig() {
    const config = await import('../../cv.config');

    return {
      config,
      basePath: process.cwd(),
      template: getTemplate(config.template),
    };
  }
}

// Facade to remove dependency on concrete implementation
export class ConfigService {
  private static configProvider: ConfigProvider = new FileConfigProvider();

  static getConfig() {
    return this.configProvider.getConfig();
  }
}
