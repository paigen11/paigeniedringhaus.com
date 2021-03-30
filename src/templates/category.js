import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

const CategoryTemplate = (props) => {
  const { category } = props.pageContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        {/* future todo - replace this with component which filters by post categories */}
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          timeToRead
          frontmatter {
            title
            subTitle
            tags
            date
            category
          }
        }
      }
    }
  }
`;
