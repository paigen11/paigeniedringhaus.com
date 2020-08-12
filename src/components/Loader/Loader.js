import React from 'react';
import './Loader.scss';

const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <h2>{message}</h2>
    </div>
  );
};

export default Loader;
