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
        <h3>Paige Niedringhaus</h3>
      </span>
      <span className="navigation-links">
        <Link to="/blog/">Blog</Link>
        <Link to="/media/">Media</Link>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
      </span>
    </div>
  </header>
);

export default Navigation;
