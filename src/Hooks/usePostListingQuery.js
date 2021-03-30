import { useStaticQuery, graphql } from 'gatsby';

export const usePostListingQuery = () => {
  const postListData = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              date(formatString: "MMM D, YYYY")
            }
            timeToRead
            frontmatter {
              omit
              title
              subTitle
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
