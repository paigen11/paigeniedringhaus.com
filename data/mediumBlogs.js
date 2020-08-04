import moment from 'moment';
import webDevLaptop from '../content/images/web-dev-laptop.jpeg';
import overheadWork from '../content/images/overhead-work.jpeg';
import code from '../content/images/code.jpg';
import graphql from '../content/images/graphql.png';
import screenOfCode from '../content/images/screen-of-code.jpeg';
import moreCode from '../content/images/more-code.jpeg';
import laptopWithCode from '../content/images/laptop-with-code.jpeg';
import docker1 from '../content/images/docker-1.jpeg';
import docker2 from '../content/images/docker-2.png';
import googleJib from '../content/images/google-jib.png';
import sequelize from '../content/images/sequelize.png';
import developers from '../content/images/developers.jpeg';
import insomniaPostman from '../content/images/insomnia-postman.png';
import jwtImg from '../content/images/jwt.png';
import eureka from '../content/images/eureka.png';
import node1 from '../content/images/node-1.png';
import node2 from '../content/images/node-2.jpeg';
import mostInterestingMan from '../content/images/most-interesting-man.jpeg';
import nodemailer from '../content/images/nodemailer.png';
import puppeteer from '../content/images/puppeteer.png';
import fineDog from '../content/images/fine-dog.jpeg';

export default [
  {
    date: moment('2018-04-08').format('ll'),
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
    date: moment('2018-04-15').format('ll'),
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
    date: moment('2018-04-30').format('ll'),
    img: code,
    url:
      'https://medium.com/@paigen11/javascript-array-methods-to-make-you-a-better-developer-4ce42052d54c',
    subTitle: null,
    tags: ['javascript'],
    timeToRead: 7,
    title: 'JavaScript Array Methods to Make You a Better Developer',
  },
  {
    date: moment('2018-05-12').format('ll'),
    img: graphql,
    url: 'https://medium.com/@paigen11/what-is-graphql-really-76c48e720202',
    subTitle: null,
    tags: ['graphql'],
    timeToRead: 10,
    title: 'What is GraphQL, really?',
  },
  {
    date: moment('2018-05-26').format('ll'),
    img: screenOfCode,
    url:
      'https://medium.com/@paigen11/why-a-cloud-config-server-is-crucial-to-a-good-ci-cd-pipeline-and-how-to-set-it-up-pt-1-fa628a125776',
    subTitle: null,
    tags: ['java', 'spring boot', 'devops'],
    timeToRead: 7,
    title:
      'Why a Spring Cloud Config Server is Crucial to a Good CI/CD Pipeline and How To Set It Up (Pt 1)',
  },
  {
    date: moment('2018-06-02').format('ll'),
    img: moreCode,
    url:
      'https://medium.com/@paigen11/leveraging-a-spring-cloud-config-server-in-a-nodejs-application-for-feature-toggles-pt-2-f331c08dfdb6',
    subTitle: null,
    tags: ['spring boot', 'nodejs', 'javascript', 'devops'],
    timeToRead: 9,
    title:
      'Leveraging a Spring Cloud Config Server in a Node.js Application For Feature Toggles (Pt 2)',
  },
  {
    date: moment('2018-06-08').format('ll'),
    img: laptopWithCode,
    url:
      'https://itnext.io/react-svg-images-and-the-webpack-loader-to-make-them-play-nice-2d177ae34d2b',
    subTitle: null,
    tags: ['react', 'javascript'],
    timeToRead: 5,
    title: 'React, SVG Images and the Webpack Loader to Make Them Play Nice',
  },
  {
    date: moment('2018-06-23').format('ll'),
    img: docker1,
    url:
      'https://itnext.io/docker-101-fundamentals-the-dockerfile-b33b59d0f14b',
    subTitle: null,
    tags: ['docker', 'devops'],
    timeToRead: 11,
    title: 'Docker 101: Fundamentals & The Dockerfile',
  },
  {
    date: moment('2018-07-07').format('ll'),
    img: docker2,
    url: 'https://itnext.io/docker-102-docker-compose-6bec46f18a0e',
    subTitle: null,
    tags: ['docker', 'devops'],
    timeToRead: 11,
    title: 'Docker 102: Docker-Compose',
  },
  {
    date: moment('2018-07-18').format('ll'),
    img: googleJib,
    url:
      'https://itnext.io/jib-getting-expert-docker-results-without-any-knowledge-of-docker-ef5cba294e05',
    subTitle: null,
    tags: ['docker', 'devops', 'java ', 'jib'],
    timeToRead: 4,
    title: 'Jib: Getting Expert Docker Results Without Any Knowledge of Docker',
  },
  {
    date: moment('2018-08-04').format('ll'),
    img: sequelize,
    url:
      'https://medium.com/@paigen11/sequelize-the-orm-for-sql-databases-with-nodejs-daa7c6d5aca3',
    subTitle: 'The ORM For SQL Databases with Node.js',
    tags: ['javascript', 'nodejs', 'sql', 'express'],
    timeToRead: 8,
    title: 'Sequelize: Like Mongoose But For SQL',
  },
  {
    date: moment('2018-08-17').format('ll'),
    img: developers,
    url:
      'https://medium.com/@paigen11/using-docker-docker-compose-to-improve-your-full-stack-application-development-1e41280748f4',
    subTitle: null,
    tags: ['docker', 'javascript', 'sql', 'express', 'nodejs'],
    timeToRead: 7,
    title:
      'Using Docker & Docker Compose To Improve Your Full Stack Application Development',
  },
  {
    date: moment('2018-09-01').format('ll'),
    img: insomniaPostman,
    url:
      'https://itnext.io/postman-vs-insomnia-comparing-the-api-testing-tools-4f12099275c1',
    subTitle: null,
    tags: ['api', 'testing', 'postman', 'insomnia'],
    timeToRead: 6,
    title: 'Postman vs. Insomnia: Comparing the API Testing Tools',
  },
  {
    date: moment('2018-09-12').format('ll'),
    img: jwtImg,
    url:
      'https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436',
    subTitle: null,
    tags: ['javascript', 'react', 'jwt', 'security', 'express'],
    timeToRead: 13,
    title:
      'Implementing JSON Web Tokens & Passport.js in a JavaScript Application with React',
  },
  {
    date: moment('2018-09-30').format('ll'),
    img: eureka,
    url:
      'https://itnext.io/how-to-use-netflixs-eureka-and-spring-cloud-for-service-registry-8b43c8acdf4e',
    subTitle: null,
    tags: ['java ', 'nodejs', 'spring boot', 'javascript'],
    timeToRead: 10,
    title: 'How to Use Netflix’s Eureka and Spring Cloud for Service Registry',
  },
  {
    date: moment('2018-10-11').format('ll'),
    img: node1,
    url:
      'https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33',
    subTitle: null,
    tags: ['javascript', 'nodejs', 'big data'],
    timeToRead: 7,
    title: 'Using Node.js to Read Really, Really Large Datasets & Files (Pt 1)',
  },
  {
    date: moment('2018-10-24').format('ll'),
    img: node2,
    url:
      'https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e',
    subTitle:
      'How readFile(), createReadStream() and event-stream Stack Up Against One Another',
    tags: ['javascript', 'nodejs', 'big data', 'testing'],
    timeToRead: 8,
    title:
      'Streams For the Win: A Performance Comparison of Node.js Methods for Reading Large Datasets (Pt 2)',
  },
  {
    date: moment('2018-11-11').format('ll'),
    img: mostInterestingMan,
    url:
      'https://itnext.io/the-absolute-easiest-way-to-debug-node-js-with-vscode-2e02ef5b1bad',
    subTitle:
      'Let’s face it…debugging Node.js is (and always has been) kind of a pain.',
    tags: ['nodejs', 'vscode', 'testing'],
    timeToRead: 7,
    title: 'The Absolute Easiest Way to Debug Node.js — with VS Code',
  },
  {
    date: moment('2018-11-22').format('ll'),
    img: nodemailer,
    url:
      'https://itnext.io/password-reset-emails-in-your-react-app-made-easy-with-nodemailer-bb27968310d7',
    subTitle:
      'Resetting Passwords in JavaScript Apps Doesn’t Have to be Complicated',
    tags: ['javascript', 'nodejs', 'react', 'express'],
    timeToRead: 11,
    title: 'Password Reset Emails In Your React App Made Easy with Nodemailer',
  },
  {
    date: moment('2018-12-08').format('ll'),
    img: puppeteer,
    url:
      'https://itnext.io/getting-started-using-puppeteer-headless-chrome-for-end-to-end-testing-8487718e4d97',
    subTitle:
      'And A Brief Primer on Integrating Puppeteer Into Your Jest Testing',
    tags: ['javascript', 'testing', 'puppeteer', 'react', 'jest'],
    timeToRead: 10,
    title:
      'Getting Started Using Puppeteer & Headless Chrome for End-to-End Testing',
  },
  {
    date: moment('2018-12-22').format('ll'),
    img: fineDog,
    url:
      'https://itnext.io/keep-code-consistent-across-developers-the-easy-way-with-prettier-eslint-60bb7e91b76c',
    subTitle:
      'Writing Code is Tough Enough, Don’t Make it Tougher with Bad Formatting',
    tags: ['vscode', 'javascript', 'eslint'],
    timeToRead: 11,
    title:
      'Keep Code Consistent Across Developers The Easy Way — With Prettier & ESLint',
  },
];
