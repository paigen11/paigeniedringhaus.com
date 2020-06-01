import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const PostListing = () => {
  const data = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
              date
            }
            excerpt
            timeToRead
            frontmatter {
              title
              tags
              cover
              date
            }
          }
        }
      }
    }
  `);

  const getPostList = () => {
    const postList = [];
    data.allMarkdownRemark.edges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  };

  const postList = getPostList();
  return (
    <div>
      {/* Your post list here. */
      postList.map((post) => (
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default PostListing;
