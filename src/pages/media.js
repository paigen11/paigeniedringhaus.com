import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const MediaPage = () => {
  return (
    <Layout>
      <div className="media-container page-body">
        <Helmet title={`Media – ${config.siteTitle}`} />
        <h1>This is the media page</h1>
      </div>
    </Layout>
  );
};

export default MediaPage;
