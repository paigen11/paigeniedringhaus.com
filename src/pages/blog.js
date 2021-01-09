import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import Subscribe from '../components/Subscribe/Subscribe';
import '../styles/pages.scss';

const BlogPage = () => {
  return (
    <Layout>
      <div className="blog-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <h1 className="blog-title">Blog</h1>
        <PostListing />
        <div className="blog page-body">
          <h2 className="latest-title">Newsletter</h2>
          <p>
            Like what you see? Subscribe to my newsletter to be the first to get
            notified when I've published new articles.
          </p>
          <Subscribe />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
