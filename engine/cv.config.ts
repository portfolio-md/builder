import { CvConfig } from '@portfolio.md/builder';

export default {
  meta: {
    title: 'Example CV',
    description: 'Example CV description',
  },
  home: {
    title: 'Example CV',
    logoName: 'logo',
    url: '/',
  },
  pages: {
    cv: {
      file: 'file:///content/cv.md',
      generate: {
        pdf: true,
        docx: true,
      },
      isMain: true,
    },
    projects: {
      file: 'file:///content/projects.md',
      generate: {
        pdf: true,
        docx: true,
      },
      menu: {
        title: 'Projects',
      },
    },
  },
  socials: [
    {
      url: 'https://github.com/portfolio-md',
    },
  ],
  credentials: {
    title: 'Example CV',
    year: 2024,
    url: '/',
  },
  images: {
    logo: 'file:///content/portfolio.svg',
  },
} satisfies CvConfig;
