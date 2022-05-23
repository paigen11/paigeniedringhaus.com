import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useLatestPostsQuery } from '../../Hooks/useLatestPostsQuery';
import Loader from '../Loader/Loader';
import PostTags from '../PostTags/PostTags';
import { sortArrayByDate } from '../../helpers/helpers';
import mediumBlogs from '../../../data/mediumBlogs';
import './LatestPosts.scss';

const LatestPosts = () => {
  const [latestPostList, setLatestPostList] = useState([]);
  const localSitePosts = useLatestPostsQuery();

  const getAndFormatLatestPosts = (posts) => {
    const latestMediumBlogs = mediumBlogs.slice(
      mediumBlogs.length - 4,
      mediumBlogs.length,
    );
    const latestPostList = [];
    posts.allMarkdownRemark.edges.forEach((postEdge) => {
      if (!postEdge.node.frontmatter.omit) {
        latestPostList.push({
          path: postEdge.node.fields.slug,
          title: postEdge.node.frontmatter.title,
          subTitle: postEdge.node.frontmatter.subTitle,
          tags: postEdge.node.frontmatter.tags,
          date: postEdge.node.fields.date,
        });
      }
    });
    const fullPostList = latestPostList.concat(latestMediumBlogs);
    const sortedPostsList = sortArrayByDate(fullPostList);
    sortedPostsList.forEach((post) => {
      post.tags?.sort();
    });
    const latestPosts = sortedPostsList.slice(0, 4);

    setLatestPostList(latestPosts);
    return latestPosts;
  };

  useEffect(() => {
    getAndFormatLatestPosts(localSitePosts);
  }, []);

  const posts = latestPostList;

  return (
    <>
      {!posts.length && <Loader message="Loading lastest blog posts" />}
      <>
        <div className="latest-posts-wrapper">
          {posts.length
            ? posts.map((post, index) => (
                <div className="post" key={index}>
                  {post.path ? (
                    <Link
                      className="post-link"
                      to={`/blog${post.path}`}
                      key={post.title}
                    >
                      <p className="post-title">{post.title}</p>
                      <p className="post-sub-title">{post.subTitle}</p>
                      <PostTags tags={post.tags} />
                      <p className="read-more">
                        Read more <span className="carot">&gt;</span>
                      </p>
                    </Link>
                  ) : (
                    <>
                      <a
                        className="post-link"
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="post-title">{post.title}</p>
                        <p className="post-sub-title">{post.subTitle}</p>
                        <PostTags tags={post.tags} />
                        <p className="read-more">
                          Read more <span className="carot">&gt;</span>
                        </p>
                      </a>
                    </>
                  )}
                </div>
              ))
            : null}
          <h2>
            <Link to="/blog">View all articles &gt;</Link>
          </h2>
        </div>
      </>
    </>
  );
};

export default LatestPosts;
