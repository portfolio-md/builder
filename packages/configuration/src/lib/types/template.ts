import { MDXProvider } from '@mdx-js/react';
import { ReactElement } from 'react';

export type RenderHeaderOptions = {
  home: {
    title: string;
    logo: string;
    url: string;
  };
  menu: {
    title: string;
    url: string;
  }[];
  download?: {
    title: string;
    url: string;
  }[];
};

export type RenderFooterOptions = {
  socials: {
    url: string;
  }[];
  credentials: {
    year: number;
    title: string;
    url: string;
  };
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
