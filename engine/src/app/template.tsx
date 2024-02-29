import { notEmpty } from '../utils/common';
import { ConfigService } from '../utils/config-provider';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const { config, template, images } = await ConfigService.getConfig();
  const { home, socials, credentials, pages, cv } = config;
  const menu = Object.entries(pages)
    .map(([name, page]) => {
      if (page.menu == null) {
        return null;
      }
      return {
        ...page.menu,
        url: page.menu.url ?? `/page/${name}`,
      };
    })
    .filter(notEmpty);

  return template.render({
    header: {
      home: {
        title: home.title,
        url: home.url,
        logo: images[home.logoName].dataUri,
      },
      menu: menu,
      download:
        cv != null
          ? {
              title: cv.title,
              url: `/pdf/${cv.name}.pdf`,
            }
          : undefined,
    },
    content: {
      children: children,
    },
    footer: {
      socials: socials,
      credentials: credentials,
    },
  });
}
