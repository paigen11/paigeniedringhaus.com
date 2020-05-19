const config = {
  siteTitle: 'Paige Niedringhaus',
  siteTitleShort: 'Paige Niedringhaus',
  siteTitleAlt: 'Paige Niedringhaus',
  siteLogo: '/logos/pn-logo-1024.png',
  siteUrl: 'https://paigeniedringhaus.com',
  pathPrefix: '/',
  siteDescription:
    'Paige Niedringhaus is a full stack software engineer with a focus on front end development.',
  siteRss: '/rss.xml',
  siteRssTitle: 'Paige Niedringhaus RSS feed',
  googleAnalyticsID: 'UA-85613962-11',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD/MM/YYYY',
  postsPerPage: 4,
  userName: 'Paige',
  userEmail: 'hellopaigen@gmail.com',
  userTwitter: 'pniedri',
  userLocation: 'Atlanta, GA',
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/paigen11',
      iconClassName: 'faGithub',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/pniedri',
      iconClassName: 'faTwitter',
    },
    {
      label: 'Email',
      url: 'mailto:hellopaigen@gmail.com',
      iconClassName: 'faEnvelope',
    },
  ],
  copyright: 'Copyright © 2020. Paige Niedringhaus',
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};

// Validate

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
