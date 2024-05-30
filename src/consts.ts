// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  displayTitle: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "zp4rker's stuff",
  displayTitle: "my stuff",
  description: "the home of my thoughts and works",
  lang: "en-GB",
  profile: {
    author: "zp4rker",
    description: "just a regular guy"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "cib:matrix",
    friendlyName: "Matrix (@zp4rker:wasitiyyah.com)",
    link: "https://matrix.to/#/@zp4rker:wasitiyyah.com",
  },
  {
    icon: "mdi:github",
    friendlyName: "Github (@zp4rker)",
    link: "https://github.com/zp4rker",
  },
  {
    icon: "mdi:email",
    friendlyName: "Email (iam@zp4rker.com)",
    link: "mailto:iam@zp4rker.com",
  },
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "works",
    path: '/projects'
  },
];
