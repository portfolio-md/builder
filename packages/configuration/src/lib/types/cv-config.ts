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
  menu: MenuItem[];
  pages: {
    main: string;
    [page: string]: string;
  };
  socials: SocialItem[];
  credentials: Credentials;
};
