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
import java from '../content/images/java.png';
import swagger from '../content/images/swagger.png';
import errorMsg from '../content/images/error-msg.png';
import angularToReact from '../content/images/angular-react.jpeg';
import esLint from '../content/images/eslint-success.jpeg';
import nvm from '../content/images/nvm.png';
import multipleDevs from '../content/images/multiple-devs.jpeg';
import npm from '../content/images/npm.png';
import vsCode from '../content/images/vs-code.png';
import multiNode from '../content/images/multiple-nodes.png';
import officeSpace from '../content/images/office-space.jpeg';
import sparta from '../content/images/sparta-destructuring.jpeg';
import allForOne from '../content/images/all-for-one.jpeg';
import cssIsAwesome from '../content/images/css-is-awesome.jpeg';
import stumpedDev from '../content/images/stumped-dev.jpeg';
import blocks from '../content/images/blocks.jpeg';
import chalkboard from '../content/images/chalkboard.jpeg';
import books from '../content/images/books.jpeg';
import highlighters from '../content/images/highlighters.jpeg';
import pen from '../content/images/pen.jpeg';

export default [
  {
    date: moment('2018-04-08').format('ll'),
    img: webDevLaptop,
    url:
      'https://medium.com/@paigen11/how-i-went-from-a-digital-marketer-to-a-software-engineer-in-4-months-7ed99c65d360',
    subTitle:
      "Like many people, my career path to web development wasn't a straight line.",
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
      'After I graduated from coding bootcamp, the hard work was only just beginning.',
    tags: ['career change', 'advice'],
    timeToRead: 9,
    title: 'How I Earned a Full-time Software Engineer Offer in 6 Months',
  },
  {
    date: moment('2018-04-30').format('ll'),
    img: code,
    url:
      'https://medium.com/@paigen11/javascript-array-methods-to-make-you-a-better-developer-4ce42052d54c',
    subTitle: 'Learn to manipulate arrays like a pro.',
    tags: ['javascript'],
    timeToRead: 7,
    title: 'JavaScript Array Methods to Make You a Better Developer',
  },
  {
    date: moment('2018-05-12').format('ll'),
    img: graphql,
    url: 'https://medium.com/@paigen11/what-is-graphql-really-76c48e720202',
    subTitle:
      'The API standard providing a more efficient, powerful and flexible alternative to REST.',
    tags: ['graphql'],
    timeToRead: 10,
    title: 'What is GraphQL, really?',
  },
  {
    date: moment('2018-05-26').format('ll'),
    img: screenOfCode,
    url:
      'https://medium.com/@paigen11/why-a-cloud-config-server-is-crucial-to-a-good-ci-cd-pipeline-and-how-to-set-it-up-pt-1-fa628a125776',
    subTitle:
      'Store and update variables your application will need to run in just one place.',
    tags: ['java', 'spring boot', 'devops'],
    timeToRead: 7,
    title:
      'Why a Spring Cloud Config Server is Crucial to a Good CI/CD Pipeline (Pt 1)',
  },
  {
    date: moment('2018-06-02').format('ll'),
    img: moreCode,
    url:
      'https://medium.com/@paigen11/leveraging-a-spring-cloud-config-server-in-a-nodejs-application-for-feature-toggles-pt-2-f331c08dfdb6',
    subTitle:
      'Yes, you can use a Java config server to alter a Node.js service.',
    tags: ['spring boot', 'nodejs', 'javascript', 'devops'],
    timeToRead: 9,
    title:
      "Leveraging a Spring Cloud Config Server in a Node.js App's Feature Toggles (Pt 2)",
  },
  {
    date: moment('2018-06-08').format('ll'),
    img: laptopWithCode,
    url:
      'https://itnext.io/react-svg-images-and-the-webpack-loader-to-make-them-play-nice-2d177ae34d2b',
    subTitle:
      'React and SVGs did not start out friends. One NPM package offered an answer.',
    tags: ['react', 'javascript'],
    timeToRead: 5,
    title: 'React, SVG Images and the Webpack Loader to Make Them Play Nice',
  },
  {
    date: moment('2018-06-23').format('ll'),
    img: docker1,
    url:
      'https://itnext.io/docker-101-fundamentals-the-dockerfile-b33b59d0f14b',
    subTitle:
      'Containerize all project dependencies in one place for easy deployments anywhere.',
    tags: ['docker', 'devops'],
    timeToRead: 11,
    title: 'Docker 101: Fundamentals & The Dockerfile',
  },
  {
    date: moment('2018-07-07').format('ll'),
    img: docker2,
    url: 'https://itnext.io/docker-102-docker-compose-6bec46f18a0e',
    subTitle:
      'The recipe card for getting all your Dockerized apps to work together seamlessly.',
    tags: ['docker', 'devops'],
    timeToRead: 11,
    title: 'Docker 102: Docker-Compose',
  },
  {
    date: moment('2018-07-18').format('ll'),
    img: googleJib,
    url:
      'https://itnext.io/jib-getting-expert-docker-results-without-any-knowledge-of-docker-ef5cba294e05',
    subTitle: 'All of the containerization benefits, none of the complexity.',
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
    subTitle:
      "The hardest part of a new project can be getting all the pieces running, but it doesn't have to be.",
    tags: ['docker', 'javascript', 'sql', 'express', 'nodejs'],
    timeToRead: 7,
    title: 'Using Docker To Improve Your Full Stack Application Development',
  },
  {
    date: moment('2018-09-01').format('ll'),
    img: insomniaPostman,
    url:
      'https://itnext.io/postman-vs-insomnia-comparing-the-api-testing-tools-4f12099275c1',
    subTitle:
      'The pros and cons of each testing tool, so you can find the best for your needs.',
    tags: ['api', 'testing', 'postman', 'insomnia'],
    timeToRead: 6,
    title: 'Postman vs. Insomnia: Comparing the API Testing Tools',
  },
  {
    date: moment('2018-09-12').format('ll'),
    img: jwtImg,
    url:
      'https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436',
    subTitle:
      'How and why to use the various auth options Passport.js has to offer.',
    tags: ['javascript', 'react', 'jwt', 'security', 'express'],
    timeToRead: 13,
    title: 'Implementing JSON Web Tokens & Passport.js in a React Application',
  },
  {
    date: moment('2018-09-30').format('ll'),
    img: eureka,
    url:
      'https://itnext.io/how-to-use-netflixs-eureka-and-spring-cloud-for-service-registry-8b43c8acdf4e',
    subTitle: 'Remove the complexity of microservice architecture ',
    tags: ['java ', 'nodejs', 'spring boot', 'javascript'],
    timeToRead: 10,
    title: 'How to Use Netflix’s Eureka and Spring Cloud for Service Registry',
  },
  {
    date: moment('2018-10-11').format('ll'),
    img: node1,
    url:
      'https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33',
    subTitle: 'Node can handle big data pretty, darn well.',
    tags: ['javascript', 'nodejs', 'big data'],
    timeToRead: 7,
    title: 'Using Node.js to Read Really, Really Large Datasets & Files (Pt 1)',
  },
  {
    date: moment('2018-10-24').format('ll'),
    img: node2,
    url:
      'https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e',
    subTitle: 'How readFile(), createReadStream() and event-stream Stack Up',
    tags: ['javascript', 'nodejs', 'big data', 'testing', 'performance'],
    timeToRead: 8,
    title:
      'A Performance Comparison of Node.js Methods for Reading Large Datasets (Pt 2)',
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
    title: 'Getting Started Using Puppeteer for End-to-End Testing',
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
  {
    date: moment('2019-01-04').format('ll'),
    img: java,
    url:
      'https://itnext.io/using-java-to-read-really-really-large-files-a6f8a3f44649',
    subTitle: 'This is the kind of stuff Java was made for.',
    tags: ['java ', 'big data', 'performance', 'testing'],
    timeToRead: 16,
    title: 'Using Java to Read Really, Really Large Files',
  },
  {
    date: moment('2019-01-21').format('ll'),
    img: swagger,
    url:
      'https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4',
    subTitle: 'Spring Boot makes Swagger APIs look easy, Node.js not so much.',
    tags: ['nodejs', 'swagger', 'api', 'testing', 'javascript'],
    timeToRead: 18,
    title: 'Setting Up Swagger to API Test In a JavaScript Application',
  },
  {
    date: moment('2019-02-03').format('ll'),
    img: errorMsg,
    url:
      'https://itnext.io/the-case-for-standardized-error-handling-in-your-web-application-6428ff60cc31',
    subTitle:
      'Because Bad Error Messages — or Worse, Invisible Errors are Doing No One Any Favors',
    tags: ['api', 'errors', 'programming'],
    timeToRead: 9,
    title:
      'The Case for Standardized Error Handling in Your Web Application’s APIs',
  },
  {
    date: moment('2019-02-11').format('ll'),
    img: angularToReact,
    url: 'https://buttercms.com/blog/migrating-from-angularjs-to-react',
    subTitle: 'What to Keep in Mind as You Upgrade Your Legacy UI Code Bases',
    tags: ['javascript', 'react', 'angular', 'spring boot'],
    timeToRead: 10,
    title: 'Migrating from AngularJS to React',
  },
  {
    date: moment('2019-02-17').format('ll'),
    img: esLint,
    url:
      'https://itnext.io/how-eslint-makes-me-a-better-react-developer-237fb14c00ae',
    subTitle: 'JavaScript’s Loose Standards are a Blessing and a Curse',
    tags: ['javascript', 'eslint', 'react', 'self improvement'],
    timeToRead: 11,
    title: 'How ESLint Makes Me a Better React Developer',
  },
  {
    date: moment('2019-03-03').format('ll'),
    img: nvm,
    url:
      'https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b',
    subTitle:
      'Nope, I didn’t Misspell NPM — Node Version Manager is it’s Own Handy Dev Tool',
    tags: ['javascript', 'nodejs', 'nvm', 'programming'],
    timeToRead: 7,
    title:
      'NVM, the Easiest Way to Switch Node.js Environments on Your Machine in a Flash',
  },
  {
    date: moment('2019-03-15').format('ll'),
    img: multipleDevs,
    url:
      'https://itnext.io/update-feature-toggles-in-a-react-app-without-redeploying-5b95674a5bb1',
    subTitle:
      'Spring Cloud Makes Feature Toggles Easy, a Node Endpoint Makes Redeploying Unneeded',
    tags: ['javascript', 'nodejs', 'react', 'spring boot'],
    timeToRead: 11,
    title: 'Update Feature Toggles in a React App without Redeploying',
  },
  {
    date: moment('2019-03-31').format('ll'),
    img: npm,
    url:
      'https://itnext.io/node-engines-helping-developers-everywhere-avoid-phantom-bugs-2eef519604b2',
    subTitle:
      'Specific Node.js Engines Should Be a Required Field for Every Package.json',
    tags: ['javascript', 'nodejs', 'programming', 'npm'],
    timeToRead: 7,
    title: 'Node Engines: Helping Developers Everywhere Avoid Phantom Bugs',
  },
  {
    date: moment('2019-04-13').format('ll'),
    img: vsCode,
    url: 'https://itnext.io/settings-sync-with-vs-code-c3d4f126989',
    subTitle:
      'Just When You Thought Visual Studio Code Couldn’t Get Any Better, It Did',
    tags: ['javascript', 'vscode', 'programming'],
    timeToRead: 9,
    title: 'Take Your VS Code Configuration Anywhere Easily with Settings Sync',
  },
  {
    date: moment('2019-05-02').format('ll'),
    img: multiNode,
    url:
      'https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93',
    subTitle: 'At Some Point, Everyone Has this Problem…',
    tags: ['javascript', 'nodejs', 'npm'],
    timeToRead: 8,
    title: '4 Solutions To Run Multiple Node.js or NPM Commands Simultaneously',
  },
  {
    date: moment('2019-05-12').format('ll'),
    img: officeSpace,
    url:
      'https://itnext.io/javascripts-async-await-versus-promise-the-great-debate-6308cb2e10b3',
    subTitle: 'Prepare Yourselves, You’re Stepping into a Minefield',
    tags: ['javascript', 'async', 'es6', 'promises'],
    timeToRead: 11,
    title: 'JavaScript’s Async/Await versus Promises: The Great Debate',
  },
  {
    date: moment('2019-05-27').format('ll'),
    img: sparta,
    url:
      'https://itnext.io/using-es6-to-destructure-nested-objects-in-javascript-avoid-undefined-errors-that-break-your-code-612ae67913e9',
    subTitle: 'Because Airbnb’s ESLint is Merciless in React',
    tags: ['javascript', 'react', 'es6', 'eslint'],
    timeToRead: 10,
    title: 'Using ES6 To Destructure Deeply Nested Objects in JavaScript',
  },
  {
    date: moment('2019-06-11').format('ll'),
    img: allForOne,
    url:
      'https://medium.com/better-programming/github-templates-the-smarter-way-to-formalize-pull-requests-among-development-teams-89f8d6a204f',
    subTitle: 'No More Confusing Pull Requests',
    tags: ['github', 'git', 'programming'],
    timeToRead: 6,
    title: 'Github Templates: The Smarter Way to Formalize PRs Among Dev Teams',
  },
  {
    date: moment('2019-06-23').format('ll'),
    img: cssIsAwesome,
    url:
      'https://itnext.io/viewport-units-the-css-you-didnt-know-about-but-should-24b104483429',
    subTitle: 'Because CSS Done Right is Awesome',
    tags: ['css', 'programming'],
    timeToRead: 6,
    title: 'Viewport Units, the CSS You Didn’t Know About But Should',
  },
  {
    date: moment('2019-07-07').format('ll'),
    img: stumpedDev,
    url: 'https://itnext.io/javascript-international-methods-b70a2de09d92',
    subTitle:
      'Because Date Formatting is Pain & International Formatting is Impossible',
    tags: ['javascript', 'programming', 'internationalization'],
    timeToRead: 12,
    title: 'JavaScript International Methods',
  },
  {
    date: moment('2019-07-28').format('ll'),
    img: blocks,
    url:
      'https://itnext.io/var-let-const-javascript-es6-feature-series-pt-1-fa603567809e',
    subTitle: "Let's Begin at the Beginning...",
    tags: ['javascript', 'es6'],
    timeToRead: 10,
    title: 'Var, Let & Const: JavaScript ES6 Feature Series (Pt 1)',
  },
  {
    date: moment('2019-08-06').format('ll'),
    img: chalkboard,
    url:
      'https://itnext.io/arrow-functions-javascript-es6-feature-series-pt-2-e8c31c823392',
    subTitle: 'When is a Function Not a Function? When it’s an Arrow',
    tags: ['javascript', 'es6'],
    timeToRead: 11,
    title: 'Arrow Functions: JavaScript ES6 Feature Series (Pt 2)',
  },
  {
    date: moment('2019-08-23').format('ll'),
    img: books,
    url:
      'https://itnext.io/default-function-parameter-values-javascript-es6-feature-series-pt-3-bd8392a88a12',
    subTitle: "Less Parameter Undefined Checks Make Developers' Lives Easier",
    tags: ['javascript', 'es6'],
    timeToRead: 8,
    title:
      'Default Function Parameter Values: JavaScript ES6 Feature Series (Pt 3)book',
  },
  {
    date: moment('2019-09=01').format('ll'),
    img: highlighters,
    url:
      'https://itnext.io/spread-rest-parameters-javascript-es6-feature-series-pt-4-c9e9f0c0228f',
    subTitle: 'The Syntax so Nice ES6 Used it Twice',
    tags: ['javascript', 'es6'],
    timeToRead: 11,
    title: 'Spread & Rest Parameters: JavaScript ES6 Feature Series (Pt 4)',
  },
  {
    date: moment('2019-09-16').format('ll'),
    img: pen,
    url:
      'https://medium.com/better-programming/string-template-literals-javascript-es6-feature-series-pt-5-a40e55a5485b',
    subTitle: 'Why developers need to know the back-ticks key is',
    tags: ['javascript', 'es6'],
    timeToRead: 8,
    title: 'String Template Literals: JavaScript ES6 Feature Series (Pt 5)pe',
  },
];
