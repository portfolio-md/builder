import { Metadata } from 'next';
import Script from 'next/script';

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
        url: '/icon/' + image.name,
      })),
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { config } = await ConfigService.getConfig();
  const { analytics } = config;
  const gTag = analytics?.gTag;

  return (
    <html lang="en">
      <body>
        {children}{' '}
        {gTag && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gTag}`}
              strategy="beforeInteractive"
            />

            <Script id="google-analytics" strategy="beforeInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${gTag}");`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
