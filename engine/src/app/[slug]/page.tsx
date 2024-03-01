import { getMenu } from '../../utils/common';
import mdxRenderer from '../../utils/mdx-renderer';
import { ConfigService } from '../../utils/config-provider';

export async function generateStaticParams() {
  const { config } = await ConfigService.getConfig();
  const pages = Object.keys(config.pages);

  return pages.map((page) => ({
    slug: page,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
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
      children: await mdxRenderer(params.slug),
    },
    footer: {
      socials: socials,
      credentials: credentials,
    },
  });
}
