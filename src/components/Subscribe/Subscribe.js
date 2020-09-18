import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <a
      href="https://paigeniedringhaus.substack.com/subscribe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="subscribe-button">Join my newsletter</button>
    </a>
  );
};

export default Subscribe;
