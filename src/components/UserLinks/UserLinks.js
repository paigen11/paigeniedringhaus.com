import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import './UserLinks.scss';

const UserLinks = (props) => {
  const { config } = props;

  const getLinkIcons = (icon) => {
    switch (icon) {
      case 'faGithub':
        return <FontAwesomeIcon icon={faGithub} />;
      case 'faTwitter':
        return <FontAwesomeIcon icon={faTwitter} />;
      case 'faEnvelope':
        return <FontAwesomeIcon icon={faEnvelope} />;
      case 'faMedium':
        return <FontAwesomeIcon icon={faMedium} />;
    }
  };

  const getLinkElements = () => {
    const { userLinks } = config;
    return userLinks.map((link) => (
      <a href={link.url} target="_blank" key={link.label}>
        {getLinkIcons(link.iconClassName)}
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
      <a href={siteRss} target="_blank">
        <FontAwesomeIcon icon={faRssSquare} />
      </a>
    </div>
  );
};

export default UserLinks;
