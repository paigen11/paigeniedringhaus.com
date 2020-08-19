import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';
import '../styles/pages.scss';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container page-body">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact</h1>
        <h2>
          Thanks again for visiting my site, I hope you like it. <br />
          If you'd like to get in touch...
        </h2>
        <h3>Send me an email</h3>
        <p>
          If you'd like to say "hi" or there's anything you want to chat with me
          about, feel free to reach me at&nbsp;
          <a href="mailto:hellopaigen@gmail.com">hellopaigen@gmail.com</a>. I
          may not reply immediately, but I will, I promise.
        </p>
        <h3>Follow me and start a conversation on social media</h3>
        <ul>
          <li>
            I'm on Twitter as&nbsp;
            <a
              href="https://twitter.com/pniedri"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pniedri
            </a>
          </li>
          <li>
            And I publish on Medium under&nbsp;
            <a
              href="https://medium.com/@paigen11"
              target="_blank"
              rel="noopener noreferrer"
            >
              @paigen11
            </a>
          </li>
        </ul>
        <h3>Check out my Github profile</h3>
        <p>
          All of the&nbsp;
          <a
            href="https://github.com/paigen11"
            target="_blank"
            rel="noopener noreferrer"
          >
            projects
          </a>
          &nbsp; I build for myself (mostly to learn new stuff) are open source,
          and I'm happy for people to fork them and put them to good use.
        </p>
        <h3>
          Or subscribe to my newsletter, I promise to never send spam, only good
          emails of stuff I've written.
        </h3>
        {/* //todo make this nicer */}
        <button>
          <a
            href="https://paigeniedringhaus.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join my newsletter
          </a>
        </button>
        <p>Thanks and have a great day!</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
