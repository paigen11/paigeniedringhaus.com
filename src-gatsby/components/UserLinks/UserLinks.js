import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faMedium,
  faDev,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import './UserLinks.scss';

const UserLinks = (props) => {
  const { config } = props;

  const getLinkIcons = (icon) => {
    switch (icon) {
      case 'faGithub':
        return <FontAwesomeIcon icon={faGithub} />;
      case 'faXTwitter':
        return <FontAwesomeIcon icon={faXTwitter} />;
      case 'faEnvelope':
        return <FontAwesomeIcon icon={faEnvelope} />;
      case 'faMedium':
        return <FontAwesomeIcon icon={faMedium} />;
      case 'faDev':
        return <FontAwesomeIcon icon={faDev} />;
    }
  };

  const getLinkElements = () => {
    const { userLinks } = config;
    return userLinks.map((link) => (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        key={link.label}
      >
        {getLinkIcons(link.iconClassName)}
        <div className="user-link-text">{link.label}</div>
      </a>
    ));
  };

  const { userLinks, siteRss } = config;
  if (!userLinks) {
    return null;
  }
  return (
    <div className="user-links">
      {getLinkElements()}
      <a href={siteRss} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faRssSquare} />
        <div>RSS</div>
      </a>
    </div>
  );
};

export default UserLinks;
