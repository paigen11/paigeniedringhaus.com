import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import './MobileNavLinks.scss';

const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
    open: open,
  });

  return (
    <div className={displayMobileNavLinks}>
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
