import moment from 'moment';
import jsJabber from '../src/images/thumbnails/jsJabber.jpg';
import myJsStory from '../src/images/thumbnails/myJsStory.jpg';
import reactRoundUp from '../src/images/thumbnails/reactRoundUp.png';
import telerik from '../src/images/thumbnails/telerik.png';

export default [
  {
    title: 'JavaScript Jabber 398: Node 12 with Paige Niedringhaus',
    date: moment('2019-10-08').format('LL'),
    path:
      'https://devchat.tv/js-jabber/jsj-398-node-12-with-paige-niedringhaus',
    img: jsJabber,
  },
  {
    title: 'My JavaScript Story 143: Paige Niedringhaus',
    date: moment('2020-03-21').format('LL'),
    path: 'https://devchat.tv/my-javascript-story/mjs-143-paige-niedringhaus',
    img: myJsStory,
  },
  {
    title:
      'React Round Up 106: React Socks for Easy Responsive Design with Paige Niedringhaus',
    date: moment('2020-04-14').format('LL'),
    path:
      'https://devchat.tv/react-round-up/rru-106-react-socks-for-easy-responsive-design-with-paige-niedringhaus',
    img: reactRoundUp,
  },
  {
    title:
      'React Wednesdays: Working in Large React Apps with Paige Niedringhaus',
    date: moment('2021-02-17').format('LL'),
    path:
      'https://www.telerik.com/react-wednesdays/working-in-large-react-apps-with-paige-niedringhaus',
    img: telerik,
  },
];
