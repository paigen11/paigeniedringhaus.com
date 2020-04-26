import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import favicon from '../../images/favicon-pn.png';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Layout.scss';

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <html lang="en" />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
