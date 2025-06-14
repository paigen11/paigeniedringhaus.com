import moment from 'moment';
import angularToReact from '../content/images/angular-react.jpeg';
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
import assetTrackerMap from '../content/images/asset-tracker-map-nextjs-react-leaflet/blues-asset-tracker-map.png';
import nodeBackground from '../content/images/node-12/node-background.png';
import antiTheftHero from '../content/images/hackster-blues-wheres-my-car/hackster-hero.png';
import sms from '../content/images/hackster-blues-wheres-my-car/sms-2.png';
import leakDetectorHero from '../content/images/hackster-leak-detector/hackster-hero.jpg';
import leakDetectorParts from '../content/images/hackster-leak-detector/leak-detector-parts.jpg';
import snowflakeStreamlitLogos from '../content/images/custom-iot-dashboards-snowflake-streamlit-blues/snowflake-streamlit-blues.png';
import fridgeFleetMonitor from '../content/images/nifty-fifty-fridge-fleet-monitor/fridge-fleet-monitor-hero.png';
import parkingLotHelpRequest from '../content/images/nifty-fifty-parking-lot-help-request-button/parking-nf6_hackster.jpg';
import notehubJsLogo from '../content/images/notehub-js-javascript-lib-notehub-api/notehub-js.webp';
import notehubPyLogo from '../content/images/notehub-py/notehub-py-logo.png';

export default [
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
    date: moment('2019-07-15').format('ll'),
    img: nodeBackground,
    url: 'https://blog.logrocket.com/node-js-12/',
    subTitle: 'Node, new and improved in so many ways',
    tags: ['javascript', 'nodejs', 'programming'],
    timeToRead: 6,
    title: 'Node.js 12: The future of server-side JavaScript',
  },
  {
    date: moment('2020-01-20').format('ll'),
    img: multiScreens,
    url: 'https://medium.com/better-programming/pure-css-media-queries-and-responsive-web-design-with-react-bac7a31e84b4',
    subTitle: "Build your webpages and apps to suit you user's device size",
    tags: ['css', 'javascript', 'react'],
    timeToRead: 11,
    title: 'Pure CSS Media Queries and Responsive Web Design with React',
  },
  {
    date: moment('2020-02-04').format('ll'),
    img: phone,
    url: 'https://medium.com/better-programming/react-socks-and-responsive-web-design-with-react-63b766d000bd',
    subTitle:
      'A React-specific way to build webpages and apps to suit your users device size',
    tags: ['css', 'javascript', 'react'],
    timeToRead: 10,
    title: 'React Socks and Responsive Web Design with React',
  },
  {
    date: moment('2020-02-16').format('ll'),
    img: jumping,
    url: 'https://medium.com/itnext/javascripts-optional-chaining-proposal-bc9e6e5f2877',
    subTitle: 'Kiss undefined errors that stop you dead in your tracks goodbye',
    tags: ['javascript'],
    timeToRead: 7,
    title: "JavaScript's Optional Chaining Proposal",
  },
  {
    date: moment('2020-03-03').format('ll'),
    img: epcot,
    url: 'https://medium.com/better-programming/how-to-use-reacts-context-api-and-usecontext-hooks-effectively-ed98ad9343b6',
    subTitle:
      'Avoid prop drilling both your values and your functions with the help of Context',
    tags: ['javascript', 'react'],
    timeToRead: 7,
    title: "How to Use React's Context API and useContext() Hooks Effectively",
  },
  {
    date: moment('2020-04-01').format('ll'),
    img: dualMonitors,
    url: 'https://medium.com/better-programming/9-react-testing-library-tips-and-tricks-5cce3e458282',
    subTitle: 'Writing tests is hard. These tips make it a little easier',
    tags: ['javascript', 'react', 'testing'],
    timeToRead: 12,
    title: '9 React Testing Library Tips and Tricks',
  },
  {
    date: moment('2020-04-14').format('ll'),
    img: marionette,
    url: 'https://medium.com/bitsrc/animating-reactjs-with-react-transition-group-2af6c87cab0c',
    subTitle:
      'Another handy React animation library to have in your tool belt.',
    tags: ['javascript', 'react', 'css'],
    timeToRead: 11,
    title: 'Animating React with React Transition Group',
  },
  {
    date: moment('2020-05-11').format('ll'),
    img: stopwatch,
    url: 'https://medium.com/bitsrc/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197',
    subTitle:
      "useInterval is a custom Hook that's certain to make intervals simpler in your app.",
    tags: ['javascript', 'react'],
    timeToRead: 8,
    title: 'Polling in React using the useInterval Custom Hook',
  },
  {
    date: moment('2020-06-10').format('ll'),
    img: loader,
    url: 'https://medium.com/bitsrc/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958',
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
    url: 'https://medium.com/bitsrc/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e',
    subTitle: 'Queries are no longer relegated to just page level components',
    tags: ['javascript', 'gatsby', 'react'],
    timeToRead: 8,
    title: 'Gatsby: Fetching Data at The Component Level with useStaticQuery',
  },
  {
    date: moment('2020-08-13').format('ll'),
    img: uxFlows,
    url: 'https://medium.com/bitsrc/mocking-http-calls-in-cypress-end-to-end-tests-fa2e6b7caaf7',
    subTitle:
      "Don't let unreliable test data keep your new features from making it to production",
    tags: ['javascript', 'cypress', 'testing', 'e2e'],
    timeToRead: 10,
    title: 'Mocking HTTP Calls in Cypress End-to-End Tests',
  },
  {
    date: moment('2020-09-09').format('ll'),
    img: holdingHands,
    url: 'https://medium.com/bitsrc/recent-advances-and-improvements-to-javascript-promises-561790897a5d',
    subTitle:
      "They've come a long way since the days of Promise.resolve() and Promise.reject()",
    tags: ['javascript', 'promises'],
    timeToRead: 8,
    title: 'Recent Advances and Improvements to JavaScript Promises',
  },
  {
    date: moment('2020-10-20').format('ll'),
    img: laptopMetrics,
    url: 'https://medium.com/bitsrc/vs-codes-rest-client-plugin-is-all-you-need-to-make-api-calls-e9e95fcfd85a',
    subTitle: "Why leave the IDE to test new endpoints? Now you don't have to.",
    tags: ['vscode', 'javascript', 'api'],
    timeToRead: 9,
    title: "VS Code's REST Client Plugin is All You Need to Make API Calls",
  },
  {
    date: moment('2020-11-24').format('ll'),
    img: coloredSmoke,
    url: 'https://medium.com/bitsrc/pure-css-to-make-a-button-shine-and-gently-change-colors-over-time-5b685d9c6a7e',
    subTitle: 'Because animations and gradients in CSS are delightful.',
    tags: ['css'],
    timeToRead: 11,
    title:
      'Pure CSS to Make a Button "Shine" and Gently Change Colors Over Time',
  },
  {
    date: moment('2020-12-23').format('ll'),
    img: cables,
    url: 'https://medium.com/bitsrc/setting-up-axios-interceptors-for-all-http-calls-in-an-application-71bc2c636e4e',
    subTitle:
      "Automatically intercept all the requests and responses so you don't have to remember to do it yourself.",
    tags: ['javascript'],
    timeToRead: 9,
    title: 'Setting up Axios Interceptors for all HTTP call in an application',
  },
  {
    date: moment('2021-01-19').format('ll'),
    img: fistBump,
    url: 'https://medium.com/bitsrc/css-clamp-the-responsive-combination-weve-all-been-waiting-for-f1ce1981ea6e',
    subTitle: 'Bringing together the best of CSS min() and CSS max() functions',
    tags: ['css'],
    timeToRead: 8,
    title: "CSS Clamp(): The Responsive Combination We've All Been Waiting For",
  },
  {
    date: moment('2021-02-22').format('ll'),
    img: scientist,
    url: 'https://medium.com/bitsrc/successfully-throwing-async-errors-with-the-jest-testing-library-fda17261733a',
    subTitle: 'The One Time Errors Should Happen in your Code',
    tags: ['jest', 'testing', 'javascript', 'errors'],
    timeToRead: 8,
    title: 'Successfully Throwing Async Errors with the Jest Testing Library',
  },
  {
    date: moment('2021-03-18').format('ll'),
    img: puzzle,
    url: 'https://medium.com/bitsrc/how-to-utilize-submodules-within-git-repos-5dfdd1c62d09',
    subTitle:
      'One Solution When the Primary Code Can be Open Source, but Specific Content Needs to be Private',
    tags: ['git', 'netlify', 'github'],
    timeToRead: 12,
    title: 'How to Utilize Submodules within Git Repos',
  },
  {
    date: moment('2021-05-03').format('ll'),
    img: paigeSite,
    url: 'https://medium.com/bitsrc/animate-a-mobile-hamburger-bar-menu-using-css-and-just-a-hint-of-javascript-f31f928eb992',
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
    url: 'https://medium.com/bitsrc/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0',
    subTitle: 'Because Edge Cases are the Only Certainty in Development',
    tags: ['react', 'javascript'],
    timeToRead: 8,
    title: 'Using React Hooks to Recognize & Respond to Current Viewport Size',
  },
  {
    date: moment('2021-08-24').format('ll'),
    img: gpsTracker,
    url: 'https://www.hackster.io/paige-niedringhaus/low-code-gps-asset-tracker-and-map-display-b10419',
    subTitle:
      'Build a GPS tracker with a Blues Notecarrier, and map it with Datacake.',
    tags: ['iot', 'gps', 'cellular', 'blues', 'datacake'],
    timeToRead: 16,
    title: 'Low Code GPS Asset Tracker and Map Display',
  },
  {
    date: moment('2021-11-02').format('ll'),
    img: reactBlues,
    url: 'https://blues.io/blog/reactjs-vs-blues-wireless-iot/',
    subTitle: 'You can build without React or Blues, but why would you?',
    tags: ['iot', 'react', 'blues', 'javascript'],
    title: 'Blues - Just Like React, but for IoT',
  },
  {
    date: moment('2022-02-23').format('ll'),
    img: assetTrackerMap,
    url: 'https://blues.io/blog/gps-asset-tracker-with-blues-wireless-and-react/',
    subTitle:
      'Build your own asset tracker from hardware to software and everything in between.',
    tags: ['iot', 'javascript', 'blues', 'typescript', 'gps'],
    title: 'Low Fi LoJack® with Blues and React',
  },
  {
    date: moment('2022-03-04').format('ll'),
    img: antiTheftHero,
    url: 'https://www.hackster.io/paige-niedringhaus/blues-where-s-my-car-5eac7d',
    subTitle:
      'Sounds the (silent) alarm: anti-theft alerting & asset recovery with a Blues Notecard.',
    tags: ['iot', 'gps', 'cellular', 'blues', 'alert'],
    timeToRead: 15,
    title: "Blues, Where's My Car?",
  },

  {
    date: moment('2022-04-13').format('ll'),
    img: sms,
    url: 'https://blues.io/blog/anti-theft-iot-gps-asset-tracker/',
    subTitle:
      'Build a Notecard-based anti-theft device with SMS alerts when movement is detected.',
    tags: ['iot', 'gps', 'cellular', 'blues', 'alert'],
    title: 'Anti-Theft GPS Tracker and Recovery System',
  },
  {
    date: moment('2022-07-08').format('ll'),
    img: leakDetectorHero,
    url: 'https://www.hackster.io/paige-niedringhaus/leave-the-water-running-build-an-iot-smart-leak-detector-3cc099',
    subTitle:
      "Build a leak detector complete with SMS notifications if a leak's detected.",
    tags: ['iot', 'cellular', 'blues', 'alert'],
    title: 'Leave the Water Running? Build an IoT Smart Leak Detector',
  },
  {
    date: moment('2022-07-29').format('ll'),
    img: leakDetectorParts,
    url: 'https://blues.io/blog/build-an-iot-smart-leak-detector-with-sms-alerts/',
    subTitle:
      'Learn to build a low-cost, cellular-enabled water leak detection device complete with SMS alerts.',
    tags: ['iot', 'cellular', 'blues', 'alert'],
    title: 'Build an IoT Smart Leak Detector with SMS Alerts',
  },
  {
    date: moment('2022-09-08').format('ll'),
    img: snowflakeStreamlitLogos,
    url: 'https://blues.io/blog/build-custom-iot-dashboards-with-snowflake-streamlit-and-blues/',
    subTitle:
      'Some basic Python code can create beautiful, highly customized IoT data visualizations in no time.',
    tags: ['iot', 'python', 'blues', 'big data', 'data visualization'],
    title:
      'Quickly Build Custom IoT Dashboards with Snowflake, Streamlit, and Blues',
  },
  {
    date: moment('2022-10-07').format('ll'),
    img: fridgeFleetMonitor,
    url: 'https://www.hackster.io/blues-wireless/refrigerator-fleet-monitoring-made-easy-with-lora-e6163e',
    subTitle:
      'Monitor temp, humidity, and door open/close state across fleets of refrigerators with LoRa-based sensors.',
    tags: ['iot', 'blues'],
    title: 'Refrigerator Fleet Monitoring Made Easy with LoRa',
  },
  {
    date: moment('2022-11-07').format('ll'),
    img: parkingLotHelpRequest,
    url: 'https://www.hackster.io/blues-wireless/host-free-smart-parking-lot-help-request-device-f4a03c',
    subTitle:
      'Use cellular IoT to alert parking lot attendants when customers need assistance with an SMS message of their current location.',
    tags: ['iot', 'blues', 'cellular', 'alert'],
    title: 'Host-free Smart Parking Lot Help Request Device',
  },
  {
    date: moment('2023-02-21').format('ll'),
    img: notehubJsLogo,
    url: 'https://blues.io/blog/introducing-notehub-js-the-javascript-library-for-the-notehub-api/',
    subTitle:
      'Notehub JS connects you to the Notehub API, allowing you to interact with Notehub.io in a JavaScript-friendly way.',
    tags: ['blues', 'javascript', 'api', 'iot', 'npm'],
    title:
      'Introducing Notehub JS – the JavaScript Library for the Notehub API',
  },
  {
    date: moment('2024-06-11').format('ll'),
    img: notehubPyLogo,
    url: 'https://dev.blues.io/blog/notehub-python-sdk-library/',
    subTitle:
      'Notehub Py helps you with the Notehub API, interacting with data in a Python-friendly manner.',
    tags: ['blues', 'python', 'api', 'iot'],
    title: 'Introducing Notehub Py - the Python SDK for Notehub',
  },
];
