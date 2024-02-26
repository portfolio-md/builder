import { CvConfig, Template } from '@portfolio.md/configuration';

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
    // const Template = (await import(`../../templates/${config.template}`))
    //   .default;

    const templates = await import('@portfolio.md/templates');
    const Template = templates['Default'];

    return {
      config,
      basePath: process.cwd(),
      template: new Template(),
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
