import moment from 'moment';
import newlineHero from '../content/images/newline/newline-hero.png';
import newlineVideoOne from '../content/images/newline/tutorial-1-hero.jpeg';
import newlineVideoTwo from '../content/images/newline/tutorial-2-hero.jpeg';
import newlineVideoFour from '../content/images/newline/tutorial-3-hero.jpeg';
import newlineVideoThree from '../content/images/newline/tutorial-4-hero.jpeg';
import newlineVideoFive from '../content/images/newline/tutorial-5-hero.jpeg';
import newlineVideoSix from '../content/images/newline/tutorial-6-hero.jpeg';

export default [
  {
    title: 'Upgrade an Outdated React App',
    subtitle: '(React Hooks & More)',
    date: moment('2021-10-25').format('LL'),
    path: 'https://www.youtube.com/watch?v=Prv6Pt1Ltrs',
    img: newlineHero,
  },
  {
    title: 'Intro to React Hooks',
    subtitle: '(Part 1 of 6)',
    date: moment('2022-01-11').format('LL'),
    path: 'https://www.youtube.com/watch?v=hlhLujLmH78',
    img: newlineVideoOne,
  },
  {
    title: 'useState Hook',
    subtitle: '(Part 2 of 6)',
    date: moment('2022-01-12').format('LL'),
    path: 'https://www.youtube.com/watch?v=rg3aSmiZgX0',
    img: newlineVideoTwo,
  },
  {
    title: 'useEffect Hook',
    subtitle: '(Part 3 of 6)',
    date: moment('2022-01-13').format('LL'),
    path: 'https://www.youtube.com/watch?v=28MnBPqqDVk',
    img: newlineVideoThree,
  },
  {
    title: 'useRef Hook',
    subtitle: '(Part 4 of 6)',
    date: moment('2022-01-16').format('LL'),
    path: 'https://www.youtube.com/watch?v=dBMTFAizsEA',
    img: newlineVideoFour,
  },
  {
    title: 'useContext Hook',
    subtitle: '(Part 5 of 6)',
    date: moment('2022-01-17').format('LL'),
    path: 'https://www.youtube.com/watch?v=j-WjpVJB6Rc',
    img: newlineVideoFive,
  },
  {
    title: 'Custom Hooks & Summary',
    subtitle: '(Part 6 of 6)',
    date: moment('2022-01-18').format('LL'),
    path: 'https://www.youtube.com/watch?v=aCu4PaygeP4',
    img: newlineVideoSix,
  },
];
