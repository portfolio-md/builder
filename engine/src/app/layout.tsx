import { Metadata } from 'next';

import { ConfigService } from '../utils/config-provider';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await ConfigService.getConfig();

  return {
    title: config.meta.title,
    description: config.meta.description,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { config, template } = await ConfigService.getConfig();
  const { menu, socials, credentials } = config;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {template.render({
          header: {
            home: {
              title: credentials.title,
              url: credentials.url,
              logo: '/portfolio.svg',
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
