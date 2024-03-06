import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types';

import { ConfigService } from '../utils/config-provider';
import iconsGenerator from '../utils/icons-generator';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';

import 'highlight.js/styles/vs2015.css';
import './styles.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await ConfigService.getConfig();
  const { images } = await iconsGenerator();

  return {
    title: config.meta.title,
    description: config.meta.description,
    verification: {
      google: config.meta.verification?.google,
    },
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
      <body>{children}</body>
      {gTag && <GoogleAnalytics gaId={gTag} />}
    </html>
  );
}
