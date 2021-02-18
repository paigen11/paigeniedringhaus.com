import { useStaticQuery, graphql } from 'gatsby';

export const useLatestPostsQuery = () => {
  const latestPostsData = useStaticQuery(graphql`
    query LatestPostQuery {
      allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            fields {
              slug
              date(formatString: "MMM D, YYYY")
            }
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              date
              omit
            }
          }
        }
      }
    }
  `);
  return latestPostsData;
};
