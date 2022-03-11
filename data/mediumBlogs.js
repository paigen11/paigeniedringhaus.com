import moment from 'moment';
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
import glasses from '../content/images/full-time-software-engineer-offer/glasses.jpeg';
import pencils from '../content/images/pencils.jpeg';
import cars from '../content/images/cars.jpeg';
import notebookAndCoffee from '../content/images/notebook-and-coffee.jpeg';
import library from '../content/images/library.jpeg';
import reactRoutes from '../content/images/react-routes.png';
import stopSigns from '../content/images/stop-signs.jpeg';
import multiScreens from '../content/images/multi-screens.jpeg';
import phone from '../content/images/phone.jpeg';
import jumping from '../content/images/jumping.jpeg';
import epcot from '../content/images/epcot.jpeg';
import dualMonitors from '../content/images/dual-monitors.jpeg';
import marionette from '../content/images/marionette.jpeg';
import stopwatch from '../content/images/stopwatch.jpeg';
import loader from '../content/images/loader.png';
import laptopGraph from '../content/images/laptop-graph.jpeg';
import uxFlows from '../content/images/ux-flows.jpeg';
import holdingHands from '../content/images/holding-hands.jpeg';
import laptopMetrics from '../content/images/laptop-metrics.jpeg';
import coloredSmoke from '../content/images/colored-smoke.jpeg';
import cables from '../content/images/cables.jpeg';
import fistBump from '../content/images/fist-bump.jpeg';
import scientist from '../content/images/scientist.jpeg';
import puzzle from '../content/images/puzzle.jpg';
import paigeSite from '../content/images/paige-site.png';
import iphoneIpad from '../content/images/iphone-ipad-coffee.jpg';
import gpsTracker from '../content/images/hackster-low-code-gps-tracker/gps-tracker.jpeg';
import reactBlues from '../content/images/react-blues.png';
import assetTrackerMap from '../content/images/blues-asset-tracker-map.png';
import nodeBackground from '../content/images/node-12/node-background.png';
import antiTheftHero from '../content/images/hackster-blues-wheres-my-car/hackster-hero.png';

export default [
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
      'https://medium.com/better-programming/github-contentlates-the-smarter-way-to-formalize-pull-requests-among-development-teams-89f8d6a204f',
    subTitle: 'No More Confusing Pull Requests',
    tags: ['github', 'git', 'programming'],
    timeToRead: 6,
    title:
      'Github contentlates: The Smarter Way to Formalize PRs Among Dev Teams',
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
    date: moment('2019-07-15').format('ll'),
    img: nodeBackground,
    url: 'https://blog.logrocket.com/node-js-12/',
    subTitle: 'Node, new and improved in so many ways',
    tags: ['javascript', 'nodejs', 'programming'],
    timeToRead: 6,
    title: 'Node.js 12: The future of server-side JavaScript',
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
      'Default Function Parameter Values: JavaScript ES6 Feature Series (Pt 3)',
  },
  {
    date: moment('2019-09-01').format('ll'),
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
      'https://medium.com/better-programming/string-contentlate-literals-javascript-es6-feature-series-pt-5-a40e55a5485b',
    subTitle: 'Why developers need to know where the back-ticks key is',
    tags: ['javascript', 'es6'],
    timeToRead: 8,
    title: 'String contentlate Literals: JavaScript ES6 Feature Series (Pt 5)',
  },
  {
    date: moment('2019-09-29').format('ll'),
    img: glasses,
    url:
      'https://itnext.io/enhanced-object-literal-value-shorthand-javascript-es6-feature-series-pt-6-e00dfdc24f64',
    subTitle: 'Because typing the same thing twice in an object is crazy',
    tags: ['javascript', 'es6'],
    timeToRead: 8,
    title:
      'Enhanced Object Literal Values Shorthand: JavaScript ES6 Feature Series (Pt 6)',
  },
  {
    date: moment('2019-10-14').format('ll'),
    img: pencils,
    url:
      'https://medium.com/better-programming/built-in-module-imports-and-exports-javascript-es6-feature-series-part-7-5f0864049e1f',
    subTitle: "Import means never having to write 'require' again",
    tags: ['javascript', 'es6'],
    timeToRead: 11,
    title:
      'Built-In Module Imports and Exports: JavaScript ES6 Feature Series (Pt 7)',
  },
  {
    date: moment('2019-10-27').format('ll'),
    img: cars,
    url:
      'https://itnext.io/classes-and-inheritance-javascript-es6-feature-series-part-8-4a81fa3adf0f',
    subTitle: 'Prototypes are still there...under the hood',
    tags: ['javascript', 'es6'],
    timeToRead: 11,
    title: 'Classes and Inheritance: JavaScript ES6 Feature Series (Pt 8)',
  },
  {
    date: moment('2019-11-12').format('ll'),
    img: notebookAndCoffee,
    url:
      'https://medium.com/better-programming/object-keys-values-and-entries-javascript-es6-feature-series-part-9-d71268791089',
    subTitle:
      'Finally, ECMAScript has some much-needed object manipulation methods',
    tags: ['javascript', 'es6'],
    timeToRead: 10,
    title:
      'Object Keys, Values, and Entries: JavaScript ES6 Feature Series (Pt 9)',
  },
  {
    date: moment('2019-11-24').format('ll'),
    img: library,
    url:
      'https://itnext.io/destructuring-arrays-objects-javascript-es6-feature-series-pt-10-507108471c07',
    subTitle:
      'For concise variable syntax, curly braces have never been more critical',
    tags: ['javascript', 'es6'],
    timeToRead: 12,
    title:
      'Destructuring Arrays & Objects: JavaScript ES6 Feature Series (Pt 10)',
  },
  {
    date: moment('2019-12-09').format('ll'),
    img: reactRoutes,
    url:
      'https://medium.com/better-programming/how-to-pass-multiple-route-parameters-in-a-react-url-path-4b919de0abbe',
    subTitle:
      'Redirects are common. Passing more than one piece of dynamic data with them is not.',
    tags: ['javascript', 'react'],
    timeToRead: 8,
    title: 'How to Pass Multiple Route Parameters in a React URL Path',
  },
  {
    date: moment('2019-12-23').format('ll'),
    img: stopSigns,
    url:
      'https://itnext.io/javascript-error-handling-from-express-js-to-react-810deb5e5e28',
    subTitle:
      'Because errors are bound to happen and we need to handle them correctly.',
    tags: ['javascript', 'react', 'express'],
    timeToRead: 9,
    title: 'JavaScript Error Handling from Express.js to React',
  },
  {
    date: moment('2020-01-20').format('ll'),
    img: multiScreens,
    url:
      'https://medium.com/better-programming/pure-css-media-queries-and-responsive-web-design-with-react-bac7a31e84b4',
    subTitle: "Build your webpages and apps to suit you user's device size",
    tags: ['css', 'javascript', 'react'],
    timeToRead: 11,
    title: 'Pure CSS Media Queries and Responsive Web Design with React',
  },
  {
    date: moment('2020-02-04').format('ll'),
    img: phone,
    url:
      'https://medium.com/better-programming/react-socks-and-responsive-web-design-with-react-63b766d000bd',
    subTitle:
      'A React-specific way to build webpages and apps to suit your users device size',
    tags: ['css', 'javascript', 'react'],
    timeToRead: 10,
    title: 'React Socks and Responsive Web Design with React',
  },
  {
    date: moment('2020-02-16').format('ll'),
    img: jumping,
    url:
      'https://itnext.io/javascripts-optional-chaining-proposal-bc9e6e5f2877',
    subTitle: 'Kiss undefined errors that stop you dead in your tracks goodbye',
    tags: ['javascript'],
    timeToRead: 7,
    title: "JavaScript's Optional Chaining Proposal",
  },
  {
    date: moment('2020-03-03').format('ll'),
    img: epcot,
    url:
      'https://medium.com/better-programming/how-to-use-reacts-context-api-and-usecontext-hooks-effectively-ed98ad9343b6',
    subTitle:
      'Avoid prop drilling both your values and your functions with the help of Context',
    tags: ['javascript', 'react'],
    timeToRead: 7,
    title: "How to Use React's Context API and useContext() Hooks Effectively",
  },
  {
    date: moment('2020-04-01').format('ll'),
    img: dualMonitors,
    url:
      'https://medium.com/better-programming/9-react-testing-library-tips-and-tricks-5cce3e458282',
    subTitle: 'Writing tests is hard. These tips make it a little easier',
    tags: ['javascript', 'react', 'testing'],
    timeToRead: 12,
    title: '9 React Testing Library Tips and Tricks',
  },
  {
    date: moment('2020-04-14').format('ll'),
    img: marionette,
    url:
      'https://blog.bitsrc.io/animating-reactjs-with-react-transition-group-2af6c87cab0c',
    subTitle:
      'Another handy React animation library to have in your tool belt.',
    tags: ['javascript', 'react', 'css'],
    timeToRead: 11,
    title: 'Animating React with React Transition Group',
  },
  {
    date: moment('2020-05-11').format('ll'),
    img: stopwatch,
    url:
      'https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197',
    subTitle:
      "useInterval is a custom Hook that's certain to make intervals simpler in your app.",
    tags: ['javascript', 'react'],
    timeToRead: 8,
    title: 'Polling in React using the useInterval Custom Hook',
  },
  {
    date: moment('2020-06-10').format('ll'),
    img: loader,
    url:
      'https://blog.bitsrc.io/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958',
    subTitle:
      "Loading screens are needed everywhere - don't reinvent the wheel every time.",
    tags: ['javascript', 'react'],
    timeToRead: 8,
    title:
      'Building a Universal Higher-Order Component Page Loader for your React App',
  },
  {
    date: moment('2020-07-08').format('ll'),
    img: laptopGraph,
    url:
      'https://blog.bitsrc.io/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e',
    subTitle: 'Queries are no longer relegated to just page level components',
    tags: ['javascript', 'gatsby', 'react'],
    timeToRead: 8,
    title: 'Gatsby: Fetching Data at The Component Level with useStaticQuery',
  },
  {
    date: moment('2020-08-13').format('ll'),
    img: uxFlows,
    url:
      'https://blog.bitsrc.io/mocking-http-calls-in-cypress-end-to-end-tests-fa2e6b7caaf7',
    subTitle:
      "Don't let unreliable test data keep your new features from making it to production",
    tags: ['javascript', 'cypress', 'testing', 'e2e'],
    timeToRead: 10,
    title: 'Mocking HTTP Calls in Cypress End-to-End Tests',
  },
  {
    date: moment('2020-09-09').format('ll'),
    img: holdingHands,
    url:
      'https://blog.bitsrc.io/recent-advances-and-improvements-to-javascript-promises-561790897a5d',
    subTitle:
      "They've come a long way since the days of Promise.resolve() and Promise.reject()",
    tags: ['javascript', 'promises'],
    timeToRead: 8,
    title: 'Recent Advances and Improvements to JavaScript Promises',
  },
  {
    date: moment('2020-10-20').format('ll'),
    img: laptopMetrics,
    url:
      'https://blog.bitsrc.io/vs-codes-rest-client-plugin-is-all-you-need-to-make-api-calls-e9e95fcfd85a',
    subTitle: "Why leave the IDE to test new endpoints? Now you don't have to.",
    tags: ['vscode', 'javascript', 'api'],
    timeToRead: 9,
    title: "VS Code's REST Client Plugin is All You Need to Make API Calls",
  },
  {
    date: moment('2020-11-24').format('ll'),
    img: coloredSmoke,
    url:
      'https://blog.bitsrc.io/pure-css-to-make-a-button-shine-and-gently-change-colors-over-time-5b685d9c6a7e',
    subTitle: 'Because animations and gradients in CSS are delightful.',
    tags: ['css'],
    timeToRead: 11,
    title:
      'Pure CSS to Make a Button "Shine" and Gently Change Colors Over Time',
  },
  {
    date: moment('2020-12-23').format('ll'),
    img: cables,
    url:
      'https://blog.bitsrc.io/setting-up-axios-interceptors-for-all-http-calls-in-an-application-71bc2c636e4e',
    subTitle:
      "Automatically intercept all the requests and responses so you don't have to remember to do it yourself.",
    tags: ['javascript'],
    timeToRead: 9,
    title: 'Setting up Axios Interceptors for all HTTP call in an application',
  },
  {
    date: moment('2021-01-19').format('ll'),
    img: fistBump,
    url:
      'https://blog.bitsrc.io/css-clamp-the-responsive-combination-weve-all-been-waiting-for-f1ce1981ea6',
    subTitle: 'Bringing together the best of CSS min() and CSS max() functions',
    tags: ['css'],
    timeToRead: 8,
    title: "CSS Clamp(): The Responsive Combination We've All Been Waiting For",
  },
  {
    date: moment('2021-02-22').format('ll'),
    img: scientist,
    url:
      'https://blog.bitsrc.io/successfully-throwing-async-errors-with-the-jest-testing-library-fda17261733a',
    subTitle: 'The One Time Errors Should Happen in your Code',
    tags: ['jest', 'testing', 'javascript'],
    timeToRead: 8,
    title: 'Successfully Throwing Async Errors with the Jest Testing Library',
  },
  {
    date: moment('2021-03-18').format('ll'),
    img: puzzle,
    url:
      'https://blog.bitsrc.io/how-to-utilize-submodules-within-git-repos-5dfdd1c62d09',
    subTitle:
      'One Solution When the Primary Code Can be Open Source, but Specific Content Needs to be Private',
    tags: ['git', 'netlify', 'github'],
    timeToRead: 12,
    title: 'How to Utilize Submodules within Git Repos',
  },
  {
    date: moment('2021-05-03').format('ll'),
    img: paigeSite,
    url:
      'https://blog.bitsrc.io/animate-a-mobile-hamburger-bar-menu-using-css-and-just-a-hint-of-javascript-f31f928eb992',
    subTitle:
      'Add those extra little touches, and propel a site from working to wow.',
    tags: ['css', 'javascript'],
    timeToRead: 10,
    title:
      'Animate a Mobile Hamburger Bar Menu Using CSS and Just a Hint of JavaScript',
  },
  {
    date: moment('2021-06-24').format('ll'),
    img: iphoneIpad,
    url:
      'https://blog.bitsrc.io/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0',
    subTitle: 'Because Edge Cases are the Only Certainty in Development',
    tags: ['react', 'javascript'],
    timeToRead: 8,
    title: 'Using React Hooks to Recognize & Respond to Current Viewport Size',
  },
  {
    date: moment('2021-08-24').format('ll'),
    img: gpsTracker,
    url:
      'https://www.hackster.io/paige-niedringhaus/low-code-gps-asset-tracker-and-map-display-b10419',
    subTitle:
      'Build a GPS tracker with a Blues Wireless Notecarrier, and map it with Datacake.',
    tags: ['iot', 'gps', 'cellular', 'blues wireless', 'datacake'],
    title: 'Low Code GPS Asset Tracker and Map Display',
  },
  {
    date: moment('2021-11-02').format('ll'),
    img: reactBlues,
    url: 'https://blues.io/blog/reactjs-vs-blues-wireless-iot/',
    subTitle:
      'You can build without React or Blues Wireless, but why would you?',
    tags: ['iot', 'react', 'blues wireless', 'javascript'],
    title: 'Blues Wireless - Just Like React, but for IoT',
  },
  {
    date: moment('2022-02-23').format('ll'),
    img: assetTrackerMap,
    url:
      'https://blues.io/blog/gps-asset-tracker-with-blues-wireless-and-react/',
    subTitle:
      'Build your own asset tracker from hardware to software and everything in between.',
    tags: ['iot', 'javascript', 'blues wireless', 'typescript', 'gps'],
    title: 'Low Fi LoJack® with Blues Wireless and React',
  },
  {
    date: moment('2022-03-04').format('ll'),
    img: antiTheftHero,
    url:
      'https://www.hackster.io/paige-niedringhaus/blues-where-s-my-car-5eac7d',
    subTitle:
      'Sounds the (silent) alarm: anti-theft alerting & asset recovery with a Blues Wireless Notecard.',
    tags: ['iot', 'gps', 'cellular', 'blues wireless', 'alert'],
    title: "Blues, Where's My Car?",
  },
];
