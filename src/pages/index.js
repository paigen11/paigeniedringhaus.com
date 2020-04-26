import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon-pn.png';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const App = () => (
  <Layout>
    <div className="main-page page-body">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <html lang="en" />
      </Helmet>
      <h1>Main Page</h1>
    </div>
  </Layout>
);

export default App;
