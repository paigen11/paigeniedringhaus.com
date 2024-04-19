const config = {
  siteTitle: 'Paige Niedringhaus',
  siteTitleShort: 'Paige Niedringhaus',
  siteTitleAlt: 'Paige Niedringhaus',
  siteLogo: '/logos/pn-logo-1024.png',
  siteAltImage: '/pn-hero-image.png',
  siteUrl: 'https://www.paigeniedringhaus.com',
  pathPrefix: '/',
  siteDescription:
    'Paige Niedringhaus is a full stack software engineer with a focus on frontend development.',
  siteRss: '/rss.xml',
  siteRssTitle: 'Paige Niedringhaus RSS feed',
  googleAnalyticsID: 'UA-85613962-11',
  newGoogleAnalyticsID: 'G-33LYCFN2QF',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD/MM/YYYY',
  postsPerPage: 4,
  userName: 'Paige',
  userEmail: 'hellopaigen@gmail.com',
  userTwitter: 'pniedri',
  userLocation: 'Atlanta, GA',
  userLinks: [
    {
      label: 'X',
      url: 'https://twitter.com/pniedri',
      iconClassName: 'faXTwitter',
    },
    {
      label: 'Medium',
      url: 'https://medium.com/@paigen11',
      iconClassName: 'faMedium',
    },
    {
      label: 'DEV',
      url: 'https://dev.to/paigen11',
      iconClassName: 'faDev',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/paigen11',
      iconClassName: 'faGithub',
    },
    {
      label: 'Email',
      url: 'mailto:hellopaigen@gmail.com',
      iconClassName: 'faEnvelope',
    },
  ],
  copyright: `Copyright © 2024. Paige Niedringhaus`,
  themeColor: '#40c9a2', // Used for setting manifest and progress theme colors.
  backgroundColor: '#eceef5', // Used for setting manifest background color.
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
