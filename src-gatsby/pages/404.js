import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import sadFace from '../images/pleading-face.png';
import '../styles/pages.scss';

const FourOhFourPage = () => {
  return (
    <Layout>
      <div className="not-found-container page-body">
        <Helmet title={`404:Not Found – ${config.siteTitle}`} />
        <span className="title-wrapper">
          <h1>Oh no, you found the 404 error page.</h1>
          <img src={sadFace} alt="pleading emoji face" />
        </span>
        <h2>Unfortunately, there's nothing at this URL.</h2>
        <Link to="/">
          <h3>Best to head home</h3>
        </Link>
      </div>
    </Layout>
  );
};

export default FourOhFourPage;
