import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon-pn.png';
import Layout from '../components/Layout/Layout';
import paige from '../../content/images/paige-smile.jpg';
import PostListing from '../components/PostListing/PostListing';
import '../styles/pages.scss';

const App = () => {
  return (
    <Layout>
      <div className="page-body">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <html lang="en" />
        </Helmet>
        <div className="main-page">
          <div className="main-intro">
            <h1>Hi everyone, I'm Paige</h1>
            <h2>
              I'm a full stack software engineer with a focus on frontend
              development. I write about web development, JavaScript and
              technology.
            </h2>
          </div>
          <img src={paige} alt="paige picture" />
        </div>
        <p>
          If you're interested, below are some of my latest blog posts. You can
          also head over to my <Link to="/blog">blog page</Link> to see a full
          list of all of them.
        </p>
        <h3>Latest Posts</h3>
        {/* consider switching this with a list view of latest blogs instead of cards */}
        <PostListing partial={true} />
      </div>
    </Layout>
  );
};

export default App;
