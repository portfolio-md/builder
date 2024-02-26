import { ReactElement } from 'react';
import {
  PortfolioMdProvider,
  Footer,
  Header,
  Content,
  Wrapper,
  Article,
} from '@portfolio.md/components';
import Link from 'next/link';
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';

import {
  RenderArticleOptions,
  RenderContentOptions,
  RenderFooterOptions,
  RenderHeaderOptions,
  RenderWrapperOptions,
  Template,
} from '@portfolio.md/configuration';

import '@portfolio.md/components/style.css';

export default class DefaultTemplate extends Template {
  renderHeader(options: RenderHeaderOptions): ReactElement {
    const { title, logo, url } = options.home;

    return (
      <Header
        key="header"
        home={{
          title: title,
          logoUrl: logo,
          url: url,
        }}
        menu={options.menu}
        LinkComponent={Link}
        ImageComponent={Image}
      />
    );
  }

  renderFooter(options: RenderFooterOptions): ReactElement {
    const { year, title, url } = options.credentials;

    return (
      <Footer
        key="footer"
        socials={options.socials}
        credentials={{
          year: year,
          title: title,
          url: url,
        }}
        LinkComponent={Link}
      />
    );
  }

  renderWrapper(options: RenderWrapperOptions): ReactElement {
    return (
      <PortfolioMdProvider key="provider">
        <Wrapper>{options.children}</Wrapper>
      </PortfolioMdProvider>
    );
  }

  renderContent(options: RenderContentOptions): ReactElement {
    return <Content key="content">{options.children}</Content>;
  }

  renderArticle(options: RenderArticleOptions): ReactElement {
    return <Article key="article">{options.children}</Article>;
  }

  getOverwriteMdxComponents(): MDXComponents {
    return {};
  }
}
