# portfolio.md

Node.js library which helps to generate static portfolio and resume website with minimal configuration!

## How to create new portfolio

1. Create new folder using

```bash
mkdir portfolio
cd portfolio
```

2. To generate new portfolio.md project run script provided below

```bash
npx @portfolio.md/scaffolder
```

3. To start dev server run

```bash
npm run dev
```

4. To build website run

```bash
npm run build
```

5. After build you will get your static website files located in **dist** folder. Which you can deploy on any static files hosting

## Configuration

After scaffolding new portfolio you will get project structure like this:

- content
  - \*.md
  - \*.svg
- cv.config.ts
- package.json

**Content** folder contains all markdown files used to build pages of our portfolio. It also can contain images used in portfolio. For example image in header

**cv.config.ts** is configuration file which is needed to build your portfolio

```typescript
export type CvConfig = {
  /**
   * Website metadata configuration settings
   */
  meta: {
    /**
     * Website title
     */
    title: string;
    /**
     * Website description
     */
    description: string;
    /**
     * Verification tokens for google search console etc.
     */
    verification?: {
      /**
       * Token for google search console verification
       */
      google: string;
    };
  };
  /**
   * Header home section settings
   */
  home: {
    /**
     * Home section title
     */
    title: string;
    /**
     * Url of home link
     */
    url: string;
    /**
     * Image name provided in images section.
     */
    logo: string;
  };
  /**
   * Website pages list
   */
  pages: {
    [page: string]: {
      /**
       * Url or path to markdown file of the page
       */
      file?: string;
      /**
       * Generate files settings
       */
      generate?: {
        /**
         * Generate pdf
         */
        pdf?: boolean;
        /**
         * Generate docx
         */
        docx?: boolean;
      };
      /**
       * Header menu item settings
       */
      menu?: {
        /**
         * Header menu item title
         */
        title: string;
        /**
         * Header menu item url
         */
        url?: string;
      };
      /**
       * Is main page. Can have only one
       */
      isMain?: boolean;
    };
  };
  /**
   * List of website socials shown in footer section
   */
  socials: {
    /**
     * Social network page url
     */
    url: string;
  }[];
  /**
   * Website credentials
   */
  credentials: {
    /**
     * Year shown in footer credentials section
     */
    year: number;
    /**
     * Title shown in footer credentials section
     */
    title: string;
    /**
     * Url of credentials title element
     */
    url: string;
  };
  /**
   * List of images used by website
   */
  images: {
    [name: string]: string;
  };
  /**
   * Analytics settings
   */
  analytics?: {
    /**
     * Gtag for google analytics
     */
    gTag?: string;
  };
};
```

## Examples

Example websites created using portfolio.md

- https://dmytrobaida.github.io
- https://portfolio-md.github.io/example

## Built with

- Next.js
- NX monorepo manager
