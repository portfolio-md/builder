import { ReactElement } from 'react';
import {
  ContentWrapper,
  Footer,
  Header,
  Wrapper,
} from '@portfolio.md/components';

import {
  RenderContentOptions,
  RenderFooterOptions,
  RenderHeaderOptions,
  RenderWrapperOptions,
  Template,
} from '../src/types/config';

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
      />
    );
  }

  renderWrapper(options: RenderWrapperOptions): ReactElement {
    return <Wrapper key="wrapper">{options.children}</Wrapper>;
  }

  renderContent(options: RenderContentOptions): ReactElement {
    return (
      <ContentWrapper key="content-wrapper">{options.children}</ContentWrapper>
    );
  }
}
