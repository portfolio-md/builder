import { favicons, FaviconResponse } from 'favicons';

import { ConfigService } from './config-provider';

let icons: FaviconResponse;

export default async function iconsGenerator() {
  if (icons != null) {
    return icons;
  }

  const {
    config: { home },
    images,
  } = await ConfigService.getConfig();
  const logoFile = images[home.logoName].file;

  icons = await favicons(logoFile, {
    icons: {
      favicons: true,
      android: false,
      appleIcon: false,
      appleStartup: false,
      windows: false,
      yandex: false,
    },
    output: {
      files: false,
      html: false,
    },
  });

  return icons;
}
