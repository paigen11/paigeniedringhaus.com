import { formatDate } from '../utils/date';

const jsJabber = '/thumbnails/jsJabber.jpg';
const myJsStory = '/thumbnails/myJsStory.jpg';
const reactRoundUp = '/thumbnails/reactRoundUp.png';
const telerik = '/thumbnails/telerik.png';
const seDaily = '/thumbnails/seDaily.png';
const modernWeb = '/thumbnails/modernWeb.jpeg';
const shesInTech = '/thumbnails/shesInTech.jpeg';
const podRocket = '/thumbnails/podRocket.png';
const js20min = '/thumbnails/20-min-js.jpeg';

export default [
  {
    title: 'JavaScript Jabber: Node 12 with Paige Niedringhaus',
    date: formatDate('2019-10-08'),
    path: 'https://topenddevs.com/podcasts/javascript-jabber/jsj-398-node-12-with-paige-niedringhaus',
    img: jsJabber,
  },
  {
    title: 'My JavaScript Story: Paige Niedringhaus',
    date: formatDate('2020-03-21'),
    path: 'https://topenddevs.com/podcasts/my-javascript-story/mjs-143-paige-niedringhaus',
    img: myJsStory,
  },
  {
    title:
      'React Round Up: React Socks for Easy Responsive Design with Paige Niedringhaus',
    date: formatDate('2020-04-14'),
    path: 'https://topenddevs.com/podcasts/react-round-up/rru-106-react-socks-for-easy-responsive-design-with-paige-niedringhaus',
    img: reactRoundUp,
  },
  {
    title:
      'React Wednesdays: Working in Large React Apps with Paige Niedringhaus',
    date: formatDate('2021-02-17'),
    path: 'https://www.telerik.com/react-wednesdays/working-in-large-react-apps-with-paige-niedringhaus',
    img: telerik,
  },
  {
    title: 'React Wednesdays React All-Day: Modernizing Enterprise React Apps',
    date: formatDate('2021-06-02'),
    path: 'https://www.telerik.com/react-wednesdays/react-all-day-modernizing-enterprise-react-apps',
    img: telerik,
  },
  {
    title: "React Wednesdays: Let's Try GitHub Copilot Together",
    date: formatDate('2021-07-14'),
    path: 'https://www.telerik.com/react-wednesdays/react-wednesdays-let-s-try-github-copilot-together',
    img: telerik,
  },
  {
    title:
      'React Round Up: Modernizing Enterprise React Apps with Paige Niedringhaus',
    date: formatDate('2021-10-20'),
    path: 'https://topenddevs.com/podcasts/react-round-up/modernizing-enterprise-react-apps-with-paige-niedringhaus-rru-160',
    img: reactRoundUp,
  },
  {
    title:
      'Software Engineering Daily: Enterprise React Apps with Paige Niedringhaus',
    date: formatDate('2021-11-02'),
    path: 'https://softwareengineeringdaily.com/2021/11/02/enterprise-react-apps-with-paige-niedringhaus/',
    img: seDaily,
  },
  {
    title:
      'Modern Web Podcast: Modernizing React Apps with Paige Niedringhaus & Mark Erikson',
    date: formatDate('2021-11-23'),
    path: 'https://modernweb.podbean.com/e/modernizing-react-apps-with-paige-niedringhaus-mark-erikson/',
    img: modernWeb,
  },
  {
    title:
      "She's in Tech: Escaping the Application Blackhole with Paige Niedringhaus",
    date: formatDate('2021-12-21'),
    path: null,
    img: shesInTech,
  },
  {
    title: 'React Round Up: Nailing Your Interview with Paige Niedringhaus',
    date: formatDate('2022-01-05'),
    path: 'https://topenddevs.com/podcasts/react-round-up/nailing-your-interview-with-paige-niedringhaus-react-167',
    img: reactRoundUp,
  },
  {
    title: 'PodRocket: Modern React with Paige Niedringhaus',
    date: formatDate('2022-02-08'),
    path: 'https://podrocket.logrocket.com/modern-react',
    img: podRocket,
  },
  {
    title: '20minJS: State Management in React with Paige Niedringhaus',
    date: formatDate('2022-03-29'),
    path: null,
    img: js20min,
  },
];
