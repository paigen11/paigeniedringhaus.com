import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../static/logos/pn-logo-48.png';
import './Navigation.scss';

const Navigation = () => (
  <header className="navigation-wrapper">
    <div className="navigation-header">
      <span className="navigation-names">
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <span>Paige Niedringhaus</span>
      </span>
      <span className="navigation-links">
        <Link activeClassName="active" to="/blog/">
          Blog
        </Link>
        <Link activeClassName="active" to="/media/">
          Media
        </Link>
        <Link activeClassName="active" to="/about/">
          About
        </Link>
        <Link activeClassName="active" to="/contact/">
          Contact
        </Link>
      </span>
    </div>
  </header>
);

export default Navigation;
