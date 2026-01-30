import { useStaticQuery, graphql } from 'gatsby';

export const useLatestPostsQuery = () => {
  const latestPostsData = useStaticQuery(graphql`
    query LatestPostQuery {
      allMarkdownRemark(
        filter: { frontmatter: { omit: { eq: false } } }
        sort: { fields: [fields___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            fields {
              slug
              date(formatString: "MMM D, YYYY")
            }
            timeToRead
            frontmatter {
              title
              subTitle
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
