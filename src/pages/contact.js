import React from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import Subscribe from '../components/Subscribe/Subscribe';
import '../styles/pages.scss';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container page-body">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact</h1>
        <section>
          <h2 className="constact-no-underline">
            Thanks again for visiting my site, I hope you like it.
            <br />
            If you'd like to get in touch...
          </h2>
        </section>
        <section>
          <h2>
            Send me an email&nbsp;
            <FontAwesomeIcon icon={faEnvelope} />
          </h2>
          <p>
            If you'd like to say "hi" or want to talk, feel free to reach me at
            &nbsp;
            <a
              href="#mailgo"
              data-address="hellopaigen"
              data-domain="gmail.com"
            >
              hellopaigen&nbsp;@&nbsp;gmail.com
            </a>
            .
          </p>
        </section>
        <section>
          <h2>
            Follow me & chat on social media&nbsp;
            <FontAwesomeIcon icon={faTwitter} />
          </h2>
          <ul>
            <li>
              I'm on Twitter at&nbsp;
              <a
                href="https://twitter.com/pniedri"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pniedri
              </a>
            </li>
            <li>
              I publish on&nbsp;
              <a
                href="https://paigen11.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://dev.to/paigen11"
                target="_blank"
                rel="noopener noreferrer"
              >
                DEV
              </a>
              &nbsp;under @paigen11.
            </li>
            <li>
              And I've started sharing my IoT projects on&nbsp;
              <a
                href="https://www.hackster.io/paige-niedringhaus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hackster.io
              </a>
              &nbsp;.
            </li>
          </ul>
        </section>
        <section>
          <h2>
            Check out my Github profile&nbsp;
            <FontAwesomeIcon icon={faGithub} />
          </h2>
          <p>
            All of the&nbsp;
            <a
              href="https://github.com/paigen11"
              target="_blank"
              rel="noopener noreferrer"
            >
              projects
            </a>
            &nbsp; I build for myself (mostly to learn new stuff) are open
            source, and I'm happy for people to fork them and put them to use.
          </p>
        </section>
        <section>
          <h2>
            Or subscribe to my Substack newsletter&nbsp;
            <FontAwesomeIcon icon={faRssSquare} />
          </h2>
          <p>
            I promise to never send spam, only useful emails about new articles
            I've written or links to talks I've given.
          </p>
          <br />
          <Subscribe />
          <br />
          <br />
          <p>Thanks and have a great day!</p>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
