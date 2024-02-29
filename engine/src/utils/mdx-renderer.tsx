import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { ConfigService } from './config-provider';
import { FileFetcher } from './file-fetcher';

export default async function mdxRenderer(page: string) {
  const { config, basePath, template } = await ConfigService.getConfig();

  if (config.pages[page] == null) {
    return null;
  }

  const mdxFile = await FileFetcher.fetchFile(
    config.pages[page].file,
    basePath
  );

  return template.renderArticle({
    children: (
      <MDXRemote
        components={template.getOverwriteMdxComponents()}
        source={mdxFile}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    ),
  });
}
