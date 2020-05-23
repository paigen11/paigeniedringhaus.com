import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import speaking from '../../data/speaking';
import publications from '../../data/publications';
import podcasts from '../../data/podcasts';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const MediaPage = () => {
  console.log(speaking);
  console.log(publications);
  console.log(podcasts);
  return (
    <Layout>
      <div className="media-container page-body">
        <Helmet title={`Media – ${config.siteTitle}`} />
        <h1>Media</h1>
        <p>
          I've been fortunate enough to share what I've learned through talks at
          conferences and meetups, in blogs for companies, and on podcasts.
        </p>
        <h3>Speaking engagements</h3>
        <ul>
          {speaking.map((talk) => {
            return <li key={talk.title}>{talk.title}</li>;
          })}
        </ul>
        <h3>Podcasts episodes</h3>
        <h3>Company blog posts</h3>
      </div>
    </Layout>
  );
};

export default MediaPage;
