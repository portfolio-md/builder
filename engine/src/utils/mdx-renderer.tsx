import { MDXRemote } from 'next-mdx-remote/rsc';

import { ConfigService } from './config-provider';
import { MdxFetcher } from './mdx-fetcher';
import { Components } from './mdx-components';

export default async function mdxRenderer(page: string) {
  const { config, basePath } = await ConfigService.getConfig();

  if (config.pages[page] == null) {
    return null;
  }

  const mdxText = await MdxFetcher.fetchMdx(config.pages[page], basePath);

  return <MDXRemote components={Components} source={mdxText} />;
}
