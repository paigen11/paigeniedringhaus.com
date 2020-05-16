import React from 'react';
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
        <div className="notice-container">
          <h4>{copyright}</h4>
          <UserLinks config={config} labeled />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
