import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { ConfigService } from './config-provider';
import { FileFetcher } from './file-fetcher';

export default async function mdxRenderer(page: string) {
  const { config, basePath, template } = await ConfigService.getConfig();

  const file = config.pages[page]?.file;

  if (file == null) {
    return null;
  }

  const mdxFile = await FileFetcher.fetchFile(file, basePath);

  return template.renderArticle({
    children: (
      <MDXRemote
        components={template.getOverwriteMdxComponents()}
        source={mdxFile}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    ),
  });
}
