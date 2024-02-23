import { MDXProvider } from '@mdx-js/react';

type MDXComponents = React.ComponentProps<typeof MDXProvider>['components'];

export const Components: MDXComponents = {
  h1: (props) => <h1 className="text-red-600" {...props}></h1>,
};
