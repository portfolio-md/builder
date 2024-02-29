import iconsGenerator from '../../../utils/icons-generator';

export async function generateStaticParams() {
  const { images } = await iconsGenerator();

  return images.map((image) => ({
    slug: image.name,
  }));
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const { images } = await iconsGenerator();
  const image = images.find((image) => image.name === params.slug);

  return new Response(image?.contents);
}
