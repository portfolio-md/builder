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
  menu: MenuItem[];
  pages: {
    main: string;
    [page: string]: string;
  };
  socials: SocialItem[];
  credentials: Credentials;
  images: {
    [name: string]: string;
  };
};
