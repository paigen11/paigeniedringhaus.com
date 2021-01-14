import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import config from '../../../data/SiteConfig';
import favicon from '../../images/favicon-pn.png';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MobileNavContext from '../../context/MobileNavContext';
import './Layout.scss';

const MainLayout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const layoutContainerPositioning = classNames('layout-container', {
    open: mobileNavOpen,
  });

  useEffect(() => {
    const checkInitialViewportSize = () => {
      if (window.innerWidth > 767) {
        setShowMobileNavMenu(false);
      } else if (window.innerWidth < 767) {
        setShowMobileNavMenu(true);
      }
    };

    checkInitialViewportSize();
  }, []);

  return (
    <MobileNavContext.Provider
      value={{
        mobileNavOpen,
        showMobileNavMenu,
        toggleMobileNav: (navState) => setMobileNavOpen(navState),
        toggleMobileNavView: (showNavBool) => setShowMobileNavMenu(showNavBool),
      }}
    >
      <div className={layoutContainerPositioning}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <html lang="en" />
        </Helmet>
        <Navigation />
        {children}
        <Footer />
      </div>
    </MobileNavContext.Provider>
  );
};

export default MainLayout;
