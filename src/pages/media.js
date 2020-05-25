import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import config from '../../data/SiteConfig';
import speaking from '../../data/speaking';
import publications from '../../data/publications';
import podcasts from '../../data/podcasts';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const MediaPage = () => {
  console.log(speaking);
  console.log(podcasts);
  console.log(publications);
  console.log(Object.entries(publications));
  const companies = Object.entries(publications);
  return (
    <Layout>
      <div className="media-container page-body">
        <Helmet title={`Media – ${config.siteTitle}`} />
        <h1>Media</h1>
        <p>
          In addition to my own <Link to="/blog">blog posts</Link>, I've been
          fortunate enough to share what I've learned through talks at
          conferences and meetups, in writing blogs for companies, and speaking
          as a guest on podcasts.
        </p>
        <h3>Speaking engagements</h3>
        <ul>
          {speaking.map((talk) => {
            return (
              <li key={talk.title}>
                <img className="media-images" src={talk.img} />
                <a href={talk?.path ? talk.path : null} target="_blank">
                  {talk.title}
                </a>{' '}
                - {talk.date}
                {talk.slides && (
                  <ul>
                    <li>
                      <a href={talk.slides} target="_blank">
                        Slides
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <h3>Podcast episodes</h3>
        <ul>
          {podcasts.map((episode) => {
            return (
              <li key={episode.title}>
                <a href={episode.path} target="_blank">
                  {episode.title}
                </a>{' '}
                - {episode.date}
              </li>
            );
          })}
        </ul>
        <h3>Company blog posts</h3>
        {companies.map((publication) => {
          const companyName = publication[0];
          const articles = publication[1];
          return (
            <article key={companyName}>
              <h4>{companyName}</h4>
              <ul>
                {articles.map((article) => {
                  return (
                    <li key={article.title}>
                      <a href={article.path} target="_blank">
                        {article.title}
                      </a>{' '}
                      - {article.date}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default MediaPage;
