// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
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
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/zp4rker",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:iam@zp4rker.com",
  },
  {
    icon: "mdi:message-outline",
    friendlyName: "Matrix",
    link: "https://matrix.to/#/@zp4rker:wasitiyyah.com",
  },
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "works",
    path: '/projects'
  },
  {
    title: "archive",
    path: '/archive'
  }
];
