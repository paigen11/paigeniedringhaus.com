import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const FourOhFourPage = () => {
  return (
    <Layout>
      <div className="404-container page-body">
        <Helmet title={`404 – ${config.siteTitle}`} />
        <h1>Oh no, you found the 404 page.</h1>
        {/* //todo add more  */}
      </div>
    </Layout>
  );
};

export default FourOhFourPage;
