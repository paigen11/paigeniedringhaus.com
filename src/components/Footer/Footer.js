import React from 'react';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import UserLinks from '../UserLinks/UserLinks';
import './Footer.scss';

const Footer = () => {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>
          <Link to={url}>
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
