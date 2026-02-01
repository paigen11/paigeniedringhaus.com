import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { sortArrayByDate } from '../helpers/helpers';
import config from '../../data/SiteConfig';
import speaking from '../../data/speaking';
import publications from '../../data/publications';
import podcasts from '../../data/podcasts';
import Layout from '../components/Layout/Layout';
import logRocket from '../images/thumbnails/logRocket.jpg';
import butterCMS from '../images/thumbnails/butterCMS.png';
import newline from '../images/thumbnails/newline-logo.png';
import blues from '../images/thumbnails/blues-favicon.svg';
import '../styles/pages.scss';

const MediaPage = () => {
  const companyMap = {
    ButterCMS: butterCMS,
    LogRocket: logRocket,
    newline: newline,
    Blues: blues,
  };

  const companies = Object.entries(publications);
  const sortedPodcasts = sortArrayByDate(podcasts);
  const sortedSpeaking = sortArrayByDate(speaking);

  return (
    <Layout>
      <div className="media-container page-body">
        <Helmet title={`Media | ${config.siteTitle}`} />
        <h1>Media</h1>
        <section>
          <p className="intro">
            In addition to my own <Link to="/blog">blog posts</Link>, I've been
            fortunate enough to share what I've learned through speaking at
            conferences and meetups, writing technical articles, and appearing
            on podcasts.
          </p>
          <p className="intro">
            From 2020 to 2023, I co-hosted the&nbsp;
            <a
              href="https://topenddevs.com/podcasts/react-round-up/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Round Up
            </a>
            &nbsp;podcast.
          </p>
        </section>
        <section>
          <p className="intro">
            And in 2023, my friends Jack Herrington, TJ VanToll, and I created
            the&nbsp;
            <a
              href="https://front-end-fire.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front-end Fire
            </a>
            &nbsp;podcast to bring developers the latest greatest news in the
            frontend world. I also joined the LogRocket podcast&nbsp;
            <a
              href="https://podrocket.logrocket.com/hosts/paige-niedringhaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              PodRocket
            </a>
            &nbsp;as a co-host, too.
          </p>
        </section>
        <section>
          <p className="intro">
            In both podcasts, I get to talk to my friends and experts in the web
            dev community about the latest libraries, frameworks, and all things
            frontend and beyond.
          </p>
        </section>
        <section>
          <h2>Talks & Videos</h2>
          <p>(Note: Recorded talks are hyperlinked in purple.)</p>
          <ul>
            {sortedSpeaking.map((talk) => {
              return (
                <li className="media-items" key={talk.title}>
                  <img
                    className="media-images"
                    src={talk.img}
                    alt="organization logo"
                  />
                  {talk.path ? (
                    <a
                      href={talk.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="title"
                    >
                      {talk.title}
                    </a>
                  ) : (
                    <span className="title">{talk.title}</span>
                  )}
                  <span className="date">{talk.date}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2>Podcasts I was interviewed on</h2>
          <ul>
            {sortedPodcasts.map((episode) => {
              return (
                <li className="media-items" key={episode.title}>
                  <img
                    className="media-images"
                    src={episode.img}
                    alt="podcast logo"
                  />
                  <a
                    href={episode.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    {episode.title}
                  </a>
                  <span className="date">{episode.date}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2>Company articles</h2>
          {companies.reverse().map((publication) => {
            const companyName = publication[0];
            const articles = publication[1];
            return (
              <article key={companyName}>
                <span className="media-items companies">
                  <img
                    src={companyMap[companyName]}
                    className="media-images"
                    alt="company logo"
                  />
                  <h3>{companyName}</h3>
                </span>
                <ul>
                  {articles.reverse().map((article) => {
                    return (
                      <li className="media-items articles" key={article.title}>
                        <a
                          href={article.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="title"
                        >
                          {article.title}
                        </a>
                        <span className="date">{article.date}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default MediaPage;
