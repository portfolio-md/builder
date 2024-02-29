import { ConfigService } from '../../../utils/config-provider';
import pdfRenderer from '../../../utils/pdf-renderer';

export async function generateStaticParams() {
  const { config } = await ConfigService.getConfig();
  const { pages } = config;
  const pagesToGenerate = Object.keys(pages).filter(
    (key) => pages[key].genPdf === true
  );

  return pagesToGenerate.map((page) => ({
    slug: page,
  }));
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const pdf = await pdfRenderer(params.slug);

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
