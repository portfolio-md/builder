import { CvConfig } from '@portfolio.md/builder';

export default {
  meta: {
    title: 'portfolio.md',
    description:
      'Node.js tool which helps to create static portfolio website with resume',
  },
  home: {
    title: 'portfolio.md',
    logo: 'logo',
    url: '/',
  },
  pages: {
    main: {
      file: 'https://raw.githubusercontent.com/portfolio-md/builder/main/README.md',
      isMain: true,
    },
    example: {
      file: 'content/example.md',
      menu: {
        title: 'Example',
      },
      generate: {
        pdf: true,
        docx: true,
      },
    },
    github: {
      menu: {
        title: 'GitHub Repo',
        url: 'https://github.com/portfolio-md/builder',
      },
    },
  },
  socials: [
    {
      url: 'https://github.com/portfolio-md',
    },
  ],
  credentials: {
    title: 'Dmytro Baida',
    year: 2024,
    url: 'https://dmytrobaida.github.io',
  },
  images: {
    logo: 'content/logo.svg',
  },
} satisfies CvConfig;
