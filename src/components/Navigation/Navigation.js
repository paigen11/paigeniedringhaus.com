import React, { useContext, useEffect } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';
import classNames from 'classnames';
import logo from '../../../static/logos/pn-logo-48.png';
import MobileNavLinks from '../MobileNavLinks/MobileNavLinks';
import MobileNavContext from '../../context/MobileNavContext';
import './Navigation.scss';

const Navigation = () => {
  const mobileNavContext = useContext(MobileNavContext);

  const active = classNames('mobile-menu', {
    open: mobileNavContext.mobileNavOpen,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        mobileNavContext.toggleMobileNav(false);
        mobileNavContext.toggleMobileNavView(false);
      } else if (window.innerWidth < 767) {
        mobileNavContext.toggleMobileNavView(true);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Headroom>
        <header className="navigation-wrapper">
          <div className="navigation-header">
            <span className="navigation-names">
              <Link className="link" to="/">
                <img className="logo" src={logo} alt="pn initials logo"></img>
                <span>Paige Niedringhaus</span>
              </Link>
            </span>
            <span className="navigation-links">
              {mobileNavContext.showMobileNavMenu ? (
                <button
                  aria-label="Toggle Mobile Menu Button"
                  className={active}
                  onClick={() => {
                    mobileNavContext.toggleMobileNav(
                      !mobileNavContext.mobileNavOpen,
                    );
                  }}
                >
                  <div className="bar-one" />
                  <div className="bar-two" />
                  <div className="bar-three" />
                </button>
              ) : (
                <nav aria-label="desktop navigation">
                  <Link className="link" activeClassName="active" to="/blog">
                    Blog
                  </Link>
                  <Link className="link" activeClassName="active" to="/media">
                    Media
                  </Link>
                  <Link className="link" activeClassName="active" to="/about">
                    About
                  </Link>
                  <Link className="link" activeClassName="active" to="/contact">
                    Contact
                  </Link>
                </nav>
              )}
            </span>
          </div>
        </header>
      </Headroom>
      {mobileNavContext.showMobileNavMenu ? (
        <MobileNavLinks open={mobileNavContext.mobileNavOpen} />
      ) : null}
    </>
  );
};

export default Navigation;
