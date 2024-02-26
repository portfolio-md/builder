/**
 * @type {import('@portfolio.md/configuration').CvConfig}
 **/
module.exports = {
  template: 'default',
  meta: {
    title: 'Example CV',
    description: 'Example CV description',
  },
  menu: [
    {
      title: 'Projects',
      url: '/pages/projects',
    },
    {
      title: 'LeetCode solutions',
      url: '/pages/leetcode',
    },
  ],
  pages: {
    main: 'file:///content/cv.md',
    projects: 'file:///content/projects.md',
    leetcode: 'file:///content/leetcode-solutions.mdx',
  },
  socials: [
    {
      url: 'https://github.com/dmytrobaida',
    },
  ],
  credentials: {
    title: 'Example CV',
    year: 2024,
    url: '/',
  },
};
