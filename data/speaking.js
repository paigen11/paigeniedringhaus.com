import moment from 'moment';
import connectTech from '../src/images/thumbnails/connectTech.png';
import digitalCrafts from '../src/images/thumbnails/digitalCrafts.png';
import girlDevelopIt from '../src/images/thumbnails/girlDevelopIt.png';
import theHomeDepot from '../src/images/thumbnails/theHomeDepot.png';
import breakingTheGlass from '../src/images/thumbnails/breakingTheGlass.png';
import react from '../content/images/react.png';

export default [
  {
    title: 'Women in Tech Speaker Panel',
    date: moment('2017-02-23').format('LL'),
    path:
      'https://www.meetup.com/learn-to-code-in-atlanta-digitalcrafts/events/237763832',
    img: digitalCrafts,
  },
  {
    title: 'The Home Depot Tech Talk: Migrating from AngularJS to React',
    date: moment('2018-06-14').format('LL'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'The Home Depot Tech Talk: Docker 102',
    date: moment('2018-06-27').format('LL'),
    path: null,
    img: theHomeDepot,
  },
  {
    title:
      'Girl Develop It Panelist Series: A Day in the Life of UX Designers and Developers',
    date: moment('2018-07-10').format('LL'),
    path: 'https://www.meetup.com/Girl-Develop-It-Atlanta/events/251904253',
    img: girlDevelopIt,
  },
  {
    title:
      'The Home Depot Tech Talk: Google Jib: Getting Expert Docker Results Without Any Knowledge of Docker',
    date: moment('2018-10-03').format('LL'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'The Home Depot Tech Talk: Responsive Design with ReactJS',
    date: moment('2019-10-14').format('LL'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'Connect.Tech 2019: Responsive Design with ReactJS',
    date: moment('2019-10-18').format('LL'),
    path: 'https://connect.tech/session/?id=4664',
    img: connectTech,
  },
  {
    title: 'Virtual Meetup: React Testing Library Tips & Tricks',
    date: moment('2020-04-30').format('LL'),
    path: 'https://www.crowdcast.io/e/react-virtual-meetup',
    img: react,
  },
  {
    title:
      'DigitalCrafts Elective Workshop: React Testing Library Tips and Tricks',
    date: moment('2020-06-03').format('LL'),
    path:
      'https://us02web.zoom.us/rec/share/-e1HIK7L8H5OZKvXxk3dda8ZQ6Tqeaa8gSEW-vFezSQQqxeDKTctYEhQODwaXE8?startTime=1591223149000',
    img: digitalCrafts,
  },
  {
    title:
      'Breaking the Glass: RAD Women Webinar: Authentic Confidence & Self Advocacy',
    date: moment('2020-06-24').format('LL'),
    path: null,
    img: breakingTheGlass,
  },
];
