import { MDXProvider } from '@mdx-js/react';
import { ReactElement } from 'react';

import { Credentials, MenuItem, SocialItem } from './cv-config';

export type RenderHeaderOptions = {
  home: {
    title: string;
    logo: string;
    url: string;
  };
  menu: MenuItem[];
};

export type RenderFooterOptions = {
  socials: SocialItem[];
  credentials: Credentials;
};

export type RenderWrapperOptions = {
  children: ReactElement[];
};

export type RenderContentOptions = {
  children: React.ReactNode;
};

export type RenderArticleOptions = {
  children: React.ReactNode;
};

export type RenderOptions = {
  header: RenderHeaderOptions;
  footer: RenderFooterOptions;
  content: RenderContentOptions;
};

export type MDXComponents = React.ComponentProps<
  typeof MDXProvider
>['components'];
