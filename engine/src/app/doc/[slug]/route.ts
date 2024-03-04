import { ConfigService } from '../../../utils/config-provider';
import { FileRenderer } from '../../../utils/file-renderer';

const ext = '.docx';

export async function generateStaticParams() {
  const { config } = await ConfigService.getConfig();
  const { pages } = config;
  const pagesToGenerate = Object.keys(pages).filter(
    (key) => pages[key].genDoc === true
  );

  return pagesToGenerate.map((page) => ({
    slug: `${page}${ext}`,
  }));
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const fileWithExt = params.slug;
  // Remove extension
  const fileName = fileWithExt.substring(0, fileWithExt.length - ext.length);
  const pdf = await FileRenderer.render(fileName, 'doc');

  return new Response(pdf, {
    headers: {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  });
}
