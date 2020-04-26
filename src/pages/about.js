import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import '../styles/pages.scss';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container page-body">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>This is the about me page</h1>
        <About />
      </div>
    </Layout>
  );
};

export default AboutPage;
