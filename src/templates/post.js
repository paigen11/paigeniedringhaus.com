import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/Layout/Layout';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import config from '../../data/SiteConfig';
import Subscribe from '../components/Subscribe/Subscribe';
import './b16-tomorrow-dark.css';
import './post.scss';

const Post = (props) => {
  const { data, pageContext } = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const sortedTags = post.tags?.sort();

  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <div className="post-container">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={`/blog${slug}`} postNode={postNode} postSEO />
        <article className="post-wrapper">
          <p className="post-category">{post.category}</p>
          <figcaption>
            First published {moment(post.date).format('LL')}
            {post.ogLink ? (
              <>
                &nbsp;in&nbsp;
                <a
                  href={post.ogLink}
                  target="_blank"
                  rel="nooperner noreferrer"
                >
                  <strong>{post.publication}</strong>
                </a>
              </>
            ) : null}
          </figcaption>
          <h1 className="post-title">{post.title}</h1>
          <h2 className="post-subtitle">{post.subTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={sortedTags} />
            <SocialLinks postPath={`/blog${slug}`} postNode={postNode} />
          </div>
          <p>
            Want to be notified first when I publish new content? Subscribe to
            my newsletter.
          </p>
          <Subscribe />
        </article>
      </div>
    </Layout>
  );
};

export default Post;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        subTitle
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 680, quality: 100, layout: CONSTRAINED)
          }
        }
        date
        category
        tags
        canonical
        ogLink
        publication
      }
      fields {
        slug
        date
      }
    }
  }
`;
