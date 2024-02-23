import mdxRenderer from '../utils/mdx-renderer';

export default async function Index() {
  return await mdxRenderer('main');
}
