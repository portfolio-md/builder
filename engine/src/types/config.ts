import { ReactElement } from 'react';

export type MenuItem = {
  title: string;
  url: string;
};

export type SocialItem = {
  url: string;
};

export type Credentials = {
  year: number;
  title: string;
  url: string;
};

export type CvConfig = {
  template: string;
  meta: {
    title: string;
    description: string;
  };
  menu: MenuItem[];
  pages: {
    main: string;
    [page: string]: string;
  };
  socials: SocialItem[];
  credentials: Credentials;
};

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

export type RenderOptions = {
  header: RenderHeaderOptions;
  footer: RenderFooterOptions;
  content: RenderContentOptions;
};

export abstract class Template {
  abstract renderHeader(options: RenderHeaderOptions): ReactElement;
  abstract renderFooter(options: RenderFooterOptions): ReactElement;
  abstract renderWrapper(options: RenderWrapperOptions): ReactElement;
  abstract renderContent(options: RenderContentOptions): ReactElement;

  render(options: RenderOptions) {
    return this.renderWrapper({
      children: [
        this.renderHeader(options.header),
        this.renderContent(options.content),
        this.renderFooter(options.footer),
      ],
    });
  }
}
