import { getMenu } from '../../utils/common';
import { ConfigService } from '../../utils/config-provider';

export default async function PageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const { config, template, images } = await ConfigService.getConfig();
  const { home, socials, credentials, pages } = config;
  const menu = getMenu(pages);
  const page = pages[params.slug];

  return template.render({
    header: {
      home: {
        title: home.title,
        url: home.url,
        logo: images[home.logoName].dataUri,
      },
      menu: menu,
      download: page.genPdf
        ? {
            title: 'PDF',
            url: `/pdf/${params.slug}.pdf`,
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
