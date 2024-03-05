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
      file: 'content/main.md',
      isMain: true,
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
