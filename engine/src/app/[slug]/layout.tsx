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
  const download: { title: string; url: string }[] = [];

  if (page.genPdf) {
    download.push({
      title: 'PDF',
      url: `/pdf/${params.slug}.pdf`,
    });
  }

  if (page.genDoc) {
    download.push({
      title: 'DOCX',
      url: `/doc/${params.slug}.docx`,
    });
  }

  return template.render({
    header: {
      home: {
        title: home.title,
        url: home.url,
        logo: images[home.logoName].dataUri,
      },
      menu: menu,
      download: download,
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
