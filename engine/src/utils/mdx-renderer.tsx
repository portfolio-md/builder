import { MDXRemote } from 'next-mdx-remote/rsc';

import { ConfigService } from './config-provider';
import { MdxFetcher } from './mdx-fetcher';

export default async function mdxRenderer(page: string) {
  const { config, basePath, template } = await ConfigService.getConfig();

  if (config.pages[page] == null) {
    return null;
  }

  const mdxText = await MdxFetcher.fetchMdx(config.pages[page], basePath);

  return template.renderArticle({
    children: (
      <MDXRemote
        components={template.getOverwriteMdxComponents()}
        source={mdxText}
      />
    ),
  });
}
