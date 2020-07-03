import React from 'react';
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
      <div className="main-page page-body">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <html lang="en" />
        </Helmet>
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
      <PostListing />
    </Layout>
  );
};

export default App;
