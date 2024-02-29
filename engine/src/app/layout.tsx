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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
