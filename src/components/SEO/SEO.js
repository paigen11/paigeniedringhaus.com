import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import moment from 'moment';
import config from '../../../data/SiteConfig';

const SEO = (props) => {
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let image;
  let postURL;
  let canonical;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.subTitle;
    image = getImage(postNode.frontmatter.featuredImage);
    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
    canonical = postMeta.canonical;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteAltImage;
  }

  const getImagePath = (imageURI) => {
    if (
      !imageURI.match(
        `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`,
      )
    )
      return urljoin(config.siteUrl, config.pathPrefix, imageURI);

    return imageURI;
  };

  const getPublicationDate = () => {
    if (!postNode) return null;

    if (!postNode.frontmatter) return null;

    if (!postNode.frontmatter.date) return null;

    return moment(postNode.frontmatter.date, config.dateFromFormat).toDate();
  };

  const datePublished = getPublicationDate();

  const authorJSONLD = {
    '@type': 'Person',
    name: config.userName,
    email: config.userEmail,
    address: config.userLocation,
  };

  const logoJSONLD = {
    '@type': 'ImageObject',
    url: getImagePath(config.siteLogo),
  };

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: { '@type': 'ImageObject', url: image },
        author: authorJSONLD,
        publisher: {
          ...authorJSONLD,
          '@type': 'Organization',
          logo: logoJSONLD,
        },
        datePublished,
        description,
      },
    );
  }

  return (
    <Helmet
      link={
        canonical ? [{ rel: 'canonical', key: canonical, href: canonical }] : []
      }
    >
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
