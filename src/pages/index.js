import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon-pn.png';
import Layout from '../components/Layout/Layout';
import paige from '../../content/images/paige-smile.jpg';
import LatestPosts from '../components/LatestPosts/LatestPosts';
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
              development, and I write about web development, JavaScript and
              technology.
            </h2>
          </div>
          <img src={paige} alt="paige picture" />
        </div>
        <p className="welcome-message">
          Welcome and thanks for stopping by. While you're here, you can check
          out my <Link to="/blog">blog posts</Link>, see my{' '}
          <Link to="/media">talks and interviews</Link>, or learn more{' '}
          <Link to="/about">about me</Link>.
        </p>
        <h2 className="latest-title">Latest Blog Posts</h2>
        <LatestPosts />
      </div>
    </Layout>
  );
};

export default App;
