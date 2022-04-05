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
            First published {moment(post.date).format('ll')}
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
          <h1>{post.title}</h1>
          <h3>{post.subTitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
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
            fluid(maxWidth: 680, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
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
