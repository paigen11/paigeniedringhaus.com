import moment from 'moment';
import jsJabber from '../src/images/thumbnails/jsJabber.jpg';
import myJsStory from '../src/images/thumbnails/myJsStory.jpg';
import reactRoundUp from '../src/images/thumbnails/reactRoundUp.png';
import telerik from '../src/images/thumbnails/telerik.png';
import seDaily from '../src/images/thumbnails/seDaily.png';
import modernWeb from '../src/images/thumbnails/modernWeb.jpeg';
import shesInTech from '../src/images/thumbnails/shesInTech.jpeg';
import podRocket from '../src/images/thumbnails/podRocket.jpeg';
import js20min from '../src/images/thumbnails/20-min-js.jpeg';

export default [
  {
    title: 'JavaScript Jabber: Node 12 with Paige Niedringhaus',
    date: moment('2019-10-08').format('LL'),
    path: 'https://javascriptjabber.com/403',
    img: jsJabber,
  },
  {
    title: 'My JavaScript Story: Paige Niedringhaus',
    date: moment('2020-03-21').format('LL'),
    path: 'https://myjavascriptstory.com/145',
    img: myJsStory,
  },
  {
    title:
      'React Round Up: React Socks for Easy Responsive Design with Paige Niedringhaus',
    date: moment('2020-04-14').format('LL'),
    path: 'https://reactroundup.com/108',
    img: reactRoundUp,
  },
  {
    title:
      'React Wednesdays: Working in Large React Apps with Paige Niedringhaus',
    date: moment('2021-02-17').format('LL'),
    path: 'https://www.telerik.com/react-wednesdays/working-in-large-react-apps-with-paige-niedringhaus',
    img: telerik,
  },
  {
    title: 'React Wednesdays React All-Day: Modernizing Enterprise React Apps',
    date: moment('2021-06-02').format('LL'),
    path: 'https://www.telerik.com/react-wednesdays/react-all-day-modernizing-enterprise-react-apps',
    img: telerik,
  },
  {
    title: "React Wednesdays: Let's Try GitHub Copilot Together",
    date: moment('2021-07-14').format('LL'),
    path: 'https://www.telerik.com/react-wednesdays/react-wednesdays-let-s-try-github-copilot-together',
    img: telerik,
  },
  {
    title:
      'React Round Up: Modernizing Enterprise React Apps with Paige Niedringhaus',
    date: moment('2021-10-20').format('LL'),
    path: 'https://reactroundup.com/modernizing-enterprise-react-apps-with-paige-niedringhaus-rru-160',
    img: reactRoundUp,
  },
  {
    title:
      'Software Engineering Daily: Enterprise React Apps with Paige Niedringhaus',
    date: moment('2021-11-02').format('LL'),
    path: 'https://softwareengineeringdaily.com/2021/11/02/enterprise-react-apps-with-paige-niedringhaus/',
    img: seDaily,
  },
  {
    title:
      'Modern Web Podcast: Modernizing React Apps with Paige Niedringhaus & Mark Erikson',
    date: moment('2021-11-23').format('LL'),
    path: 'https://modernweb.podbean.com/e/modernizing-react-apps-with-paige-niedringhaus-mark-erikson/',
    img: modernWeb,
  },
  {
    title:
      "She's in Tech: Escaping the Application Blackhole with Paige Niedringhaus",
    date: moment('2021-12-21').format('LL'),
    path: 'https://shesintechpodcast.com/escaping-application-blackhole-paige-niedringhaus-shes-in-tech24-',
    img: shesInTech,
  },
  {
    title: 'PodRocket: Modern React with Paige Niedringhaus',
    date: moment('2022-02-08').format('LL'),
    path: 'https://podrocket.logrocket.com/modern-react',
    img: podRocket,
  },
  {
    title: '20minJS: State Management in React with Paige Niedringhaus',
    date: moment('2022-03-29').format('LL'),
    path: 'https://podcast.20minjs.com/1952066/10330403-episode-4-state-management-in-react-with-paige-niedringhaus',
    img: js20min,
  },
];
