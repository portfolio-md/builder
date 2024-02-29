import { Metadata } from 'next';

import { ConfigService } from '../utils/config-provider';
import iconsGenerator from '../utils/icons-generator';
import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await ConfigService.getConfig();
  const { images } = await iconsGenerator();

  return {
    title: config.meta.title,
    description: config.meta.description,
    icons: {
      other: images.map<IconDescriptor>((image) => ({
        url: '/icons/' + image.name,
      })),
    },
  };
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value != null && value != undefined;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { config, template, images } = await ConfigService.getConfig();
  const { home, socials, credentials, pages } = config;
  const menu = Object.values(pages)
    .map((page) => page.menu)
    .filter(notEmpty);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {template.render({
          header: {
            home: {
              title: home.title,
              url: home.url,
              logo: images[home.logoName].dataUri,
            },
            menu: menu,
          },
          content: {
            children: children,
          },
          footer: {
            socials: socials,
            credentials: credentials,
          },
        })}
      </body>
    </html>
  );
}
