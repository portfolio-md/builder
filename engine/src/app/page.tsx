import { ConfigService } from '../utils/config-provider';
import PageLayout from './[slug]/layout';
import mdxRenderer from '../utils/mdx-renderer';

export default async function Index() {
  const { config } = await ConfigService.getConfig();
  const pages = Object.keys(config.pages).filter((p) => config.pages[p].isMain);

  if (pages.length === 0) {
    throw new Error('There is no main pages!');
  }

  if (pages.length > 1) {
    throw new Error('There are more than 1 main page!');
  }

  const child = await mdxRenderer(pages[0]);

  return <PageLayout params={{ slug: pages[0] }}>{child}</PageLayout>;
}
