import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { usePostListingQuery } from '../../Hooks/usePostListingQuery';
import { sortArrayByDate } from '../../helpers/helpers';
import mediumBlogs from '../../../data/mediumBlogs';
import PostTags from '../PostTags/PostTags';
import './PostListing.scss';

const PostListing = ({ partial = false }) => {
  const getPostList = () => {
    const postList = [];
    const posts = usePostListingQuery();
    posts.allMarkdownRemark.edges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail.childImageSharp.fixed,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    const fullList = postList.concat(mediumBlogs);
    const sortedPostsList = sortArrayByDate(fullList);
    console.log(sortedPostsList);
    const uniqueTags = new Set();
    sortedPostsList.forEach((post) => {
      console.log(post.tags);
      post.tags?.forEach((tag) => {
        uniqueTags.add(tag);
      });
    });
    console.log(uniqueTags);
    if (partial) {
      return sortedPostsList.slice(0, 4);
    }
    return sortedPostsList;
  };

  const postList = getPostList();

  return (
    <div className="posts-wrapper">
      {postList.map((post) => (
        <div className="post">
          <p className="post-date">
            {post.date} {'\u2022'} {post.timeToRead} min read
          </p>
          {post.path ? (
            <Link to={post.path} key={post.title}>
              <p className="post-title">{post.title}</p>
              <Img fixed={post.thumbnail} />
              {post.excerpt && <p>{post.excerpt}</p>}
            </Link>
          ) : (
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <p className="post-title">{post.title}</p>
              <img src={post.img} style={{ width: 200 }} />
              {post.subTitle ? <p>{post.subTitle}</p> : <p></p>}
            </a>
          )}
          <PostTags tags={post.tags} />
        </div>
      ))}
    </div>
  );
};

export default PostListing;
