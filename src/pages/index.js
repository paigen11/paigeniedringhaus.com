import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon-pn.png';
import Layout from '../components/Layout/Layout';
import paige from '../../content/images/paige-smile.jpg';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Subscribe from '../components/Subscribe/Subscribe';
import '../styles/pages.scss';

const App = () => {
  return (
    <Layout>
      <div className="page-body">
        <Helmet>
          <title>Paige Niedringhaus</title>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <html lang="en" />
        </Helmet>
        <section>
          <div className="main-page">
            <div className="main-intro">
              <h1>Hi everyone, I'm Paige</h1>
              <h2>
                I'm a full stack software engineer with a focus on frontend
                development. I also write about web development, JavaScript and
                technology.
              </h2>
            </div>
            <img src={paige} alt="paige picture" />
          </div>
        </section>
        <p>
          Welcome and thanks for stopping by. I hope you enjoy exploring this
          site as much as I've enjoyed building it.
        </p>
        <section>
          <p className="welcome">
            While you're here, you can check out my&nbsp;
            <Link to="/blog">blog posts</Link>, see my&nbsp;
            <Link to="/media">talks and interviews</Link>, learn more&nbsp;
            <Link to="/about">about me</Link>, or&nbsp;
            <Link to="/contact">get in touch</Link>.
          </p>
        </section>
        <section>
          <h2 className="latest-title">Latest Blog Posts</h2>
          <LatestPosts />
        </section>
        <section>
          <h2 className="latest-title">Newsletter</h2>
          <p>
            My goal with this blog is to create useful content for web
            developers. Subscribe to be notified when I share something new.
          </p>
          <Subscribe />
        </section>
      </div>
    </Layout>
  );
};

export default App;
