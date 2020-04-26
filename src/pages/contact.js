import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container page-body">
        <Helmet title={`Contact – ${config.siteTitle}`} />
        <h1>This is the contact page</h1>
      </div>
    </Layout>
  );
};

export default ContactPage;
