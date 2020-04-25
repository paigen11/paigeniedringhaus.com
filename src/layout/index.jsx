import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon-pn.png';
import './index.css';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <html lang="en" />
      </Helmet>
      {children}
    </div>
  );
};

export default MainLayout;
