import mdxRenderer from '../../utils/mdx-renderer';
import { ConfigService } from '../../utils/config-provider';

export async function generateStaticParams() {
  const { config } = await ConfigService.getConfig();
  const pages = Object.keys(config.pages).filter(
    (p) => config.pages[p].file != null
  );

  return pages.map((page) => ({
    slug: page,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  return await mdxRenderer(params.slug);
}
