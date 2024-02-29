export type MenuItem = {
  title: string;
  url: string;
};

export type SocialItem = {
  url: string;
};

export type Credentials = {
  year: number;
  title: string;
  url: string;
};

export type Page = {
  file: string;
  genPdf: boolean;
  menu?: MenuItem;
};

export type CvConfig = {
  template: string;
  meta: {
    title: string;
    description: string;
  };
  home: {
    title: string;
    url: string;
    logoName: string;
  };
  pages: {
    main: Page;
    [page: string]: Page;
  };
  socials: SocialItem[];
  credentials: Credentials;
  images: {
    [name: string]: string;
  };
};
