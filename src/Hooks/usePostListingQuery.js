import { useStaticQuery, graphql } from 'gatsby';

export const usePostListingQuery = () => {
  const postListData = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              date(formatString: "MMMM D, YYYY")
            }
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              date
              thumbnail {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return postListData;
};
