import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

class Landing extends React.Component {
  render() {
    return (
      <Layout>
        <div className="landing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;
