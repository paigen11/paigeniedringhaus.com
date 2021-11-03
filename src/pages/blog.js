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
        <section>
          <h1 className="blog-title">Blog</h1>
          <p className="page-body blog-disclaimer">
            <strong>Please note:</strong>&nbsp;I'm in the process of hosting
            these posts here on my personal site, but until I'm done, many will
            take you to the original&nbsp;
            <a
              href="https://paigen11.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              article
            </a>
            &nbsp;or&nbsp;
            <a
              href="https://www.hackster.io/paige-niedringhaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              project
            </a>
            &nbsp;in a new tab.
          </p>
        </section>
        <section>
          <PostListing />
        </section>
        <section>
          <div className="blog page-body">
            <h2 className="latest-title">Newsletter</h2>
            <p>
              Like what you see? Subscribe to my newsletter to be the first to
              get notified when I've published new articles.
            </p>
            <Subscribe />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;
