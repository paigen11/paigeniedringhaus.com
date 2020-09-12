import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import '../styles/pages.scss';

const BlogPage = () => {
  return (
    <Layout>
      <div className="blog-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <h1 className="page-body">Blog</h1>
        <PostListing />
      </div>
    </Layout>
  );
};

export default BlogPage;
