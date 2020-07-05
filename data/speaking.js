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
    date: moment('February 23, 2017').format('MMM Do, YYYY'),
    path:
      'https://www.meetup.com/learn-to-code-in-atlanta-digitalcrafts/events/237763832',
    img: digitalCrafts,
  },
  {
    title: 'The Home Depot Tech Talk: Migrating from AngularJS to React',
    date: moment('June 14, 2018').format('MMM Do, YYYY'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'The Home Depot Tech Talk: Docker 102',
    date: moment('June 27, 2018').format('MMM Do, YYYY'),
    path: null,
    img: theHomeDepot,
  },
  {
    title:
      'Girl Develop It Panelist Series: A Day in the Life of UX Designers and Developers',
    date: moment('July 10, 2018').format('MMM Do, YYYY'),
    path: 'https://www.meetup.com/Girl-Develop-It-Atlanta/events/251904253',
    img: girlDevelopIt,
  },
  {
    title:
      'The Home Depot Tech Talk: Google Jib: Getting Expert Docker Results Without Any Knowledge of Docker',
    date: moment('October 3, 2018').format('MMM Do, YYYY'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'The Home Depot Tech Talk: Responsive Design with ReactJS',
    date: moment('October 14, 2019').format('MMM Do, YYYY'),
    path: null,
    img: theHomeDepot,
  },
  {
    title: 'Connect.Tech 2019: Responsive Design with ReactJS',
    date: moment('October 18, 2019').format('MMM Do, YYYY'),
    path: 'https://connect.tech/session/?id=4664',
    img: connectTech,
  },
  {
    title: 'Virtual Meetup: React Testing Library Tips & Tricks',
    date: moment('April 30, 2020').format('MMM Do, YYYY'),
    path: 'https://www.crowdcast.io/e/react-virtual-meetup',
    img: react,
  },
  {
    title:
      'DigitalCrafts Elective Workshop: React Testing Library Tips and Tricks',
    date: moment('June 3, 2020').format('MMM Do, YYYY'),
    path:
      'https://us02web.zoom.us/rec/share/-e1HIK7L8H5OZKvXxk3dda8ZQ6Tqeaa8gSEW-vFezSQQqxeDKTctYEhQODwaXE8?startTime=1591223149000',
    img: digitalCrafts,
  },
  {
    title:
      'Breaking the Glass: RAD Women Webinar: Authentic Confidence & Self Advocacy',
    date: moment('June 24, 2020').format('MMM Do, YYYY'),
    path: null,
    img: breakingTheGlass,
  },
];
