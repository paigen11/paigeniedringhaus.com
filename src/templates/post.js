import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.scss';

const Post = (props) => {
  const { data, pageContext } = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  const { nextslug, nexttitle, prevslug, prevtitle } = pageContext;
  const nextArticle = nextslug && (
    <Link to={nextslug} style={{ maxWidth: '25%' }}>
      <strong>Next Article</strong> <br />
      {nexttitle}
    </Link>
  );

  const prevArticle = prevslug && (
    <Link to={prevslug} style={{ maxWidth: '25%' }}>
      <strong>Previous Article</strong> <br />
      {prevtitle}
    </Link>
  );

  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post-wrapper">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
            {/* // todo make these links look better*/}
            <span>{nextArticle}</span>
            <span>{prevArticle}</span>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
        </div>
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
      excerpt
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date
        category
        tags
        canonical
      }
      fields {
        slug
        date
      }
    }
  }
`;
