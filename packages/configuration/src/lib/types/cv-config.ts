export type CvConfig = {
  // TODO: implement template loading
  // template: string;

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
