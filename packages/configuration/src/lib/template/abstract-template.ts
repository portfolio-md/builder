import { ReactElement } from 'react';

import {
  MDXComponents,
  RenderArticleOptions,
  RenderContentOptions,
  RenderFooterOptions,
  RenderHeaderOptions,
  RenderOptions,
  RenderWrapperOptions,
} from '../types/template';

export abstract class Template {
  abstract renderHeader(options: RenderHeaderOptions): ReactElement;
  abstract renderFooter(options: RenderFooterOptions): ReactElement;
  abstract renderWrapper(options: RenderWrapperOptions): ReactElement;
  abstract renderContent(options: RenderContentOptions): ReactElement;
  abstract renderArticle(options: RenderArticleOptions): ReactElement;
  abstract getOverwriteMdxComponents(): MDXComponents;

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
