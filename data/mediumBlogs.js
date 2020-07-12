import moment from 'moment';
import webDevLaptop from '../content/images/web-dev-laptop.jpeg';
import overheadWork from '../content/images/overhead-work.jpeg';
import code from '../content/images/code.jpg';

export default [
  {
    date: moment('2018-04-08').format('LL'),
    img: webDevLaptop,
    url:
      'https://medium.com/@paigen11/how-i-went-from-a-digital-marketer-to-a-software-engineer-in-4-months-7ed99c65d360',
    subTitle:
      'Like more and more people today, my career path to web development was not a straight line.',
    tags: ['career change', 'advice'],
    timeToRead: 10,
    title:
      'How I Went From a Digital Marketer to a Software Engineer in 4 Months',
  },
  {
    date: moment('2018-04-15').format('LL'),
    img: overheadWork,
    url:
      'https://medium.com/@paigen11/how-i-earned-a-full-time-software-engineer-offer-in-6-months-b0fe0d0b6cfa',
    subTitle:
      'After I graduated from my 4 month coding bootcamp, I knew the hard work was only just beginning.',
    tags: ['career change', 'advice'],
    timeToRead: 9,
    title: 'How I Earned a Full-time Software Engineer Offer in 6 Months',
  },
  {
    date: moment('2018-04-30').format('LL'),
    img: code,
    url:
      'https://medium.com/@paigen11/javascript-array-methods-to-make-you-a-better-developer-4ce42052d54c',
    subTitle: null,
    tags: ['javascript'],
    timeToRead: 7,
    title: 'JavaScript Array Methods to Make You a Better Developer',
  },
];
