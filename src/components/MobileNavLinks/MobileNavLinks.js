import React from 'react';
import { Link } from 'gatsby';
import './MobileNavLinks.scss';

const MobileNavLinks = () => {
  return (
    <div className="mobile-nav-wrapper">
      <Link className="mobile-link" activeClassName="active" to="/blog">
        Blog
      </Link>
      <Link className="mobile-link" activeClassName="active" to="/media">
        Media
      </Link>
      <Link className="mobile-link" activeClassName="active" to="/about">
        About
      </Link>
      <Link className="mobile-link" activeClassName="active" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default MobileNavLinks;
