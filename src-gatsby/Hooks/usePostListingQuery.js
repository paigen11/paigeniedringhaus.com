import { useStaticQuery, graphql } from 'gatsby';

export const usePostListingQuery = () => {
  const postListData = useStaticQuery(graphql`query PostQuery {
  allMarkdownRemark(
    filter: {frontmatter: {omit: {eq: false}}}
    sort: {fields: [fields___date], order: DESC}
  ) {
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
              gatsbyImageData(width: 200, layout: FIXED)
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
