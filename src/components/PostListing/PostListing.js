import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { usePostListingQuery } from '../../Hooks/usePostListingQuery';
import Loader from '../Loader/Loader';
import { sortArrayByDate } from '../../helpers/helpers';
import mediumBlogs from '../../../data/mediumBlogs';
import PostTags from '../PostTags/PostTags';
import './PostListing.scss';

const PostListing = () => {
  const [fullPostList, setFullPostList] = useState([]);
  const emptyQuery = '';
  const [state, setState] = useState({
    filteredPostList: [],
    query: emptyQuery,
    postCount: 0,
  });
  const localSitePosts = usePostListingQuery();

  const getAndFormatAllPosts = (posts) => {
    const postList = posts.allMarkdownRemark.edges.map((postEdge) => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail.childImageSharp.fixed,
        title: postEdge.node.frontmatter.title,
        subTitle: postEdge.node.frontmatter.subTitle,
        date: postEdge.node.fields.date,
        timeToRead: postEdge.node.timeToRead,
      };
    });
    const fullPostList = postList.concat(mediumBlogs);
    const sortedPostsList = sortArrayByDate(fullPostList);
    sortedPostsList.forEach((post) => {
      post.tags?.sort();
    });
    setFullPostList(sortedPostsList);
    setState({ postCount: sortedPostsList.length });
    return sortedPostsList;
  };

  useEffect(() => {
    getAndFormatAllPosts(localSitePosts);
  }, []);

  const filterPosts = (e) => {
    const query = e.target.value;
    const filteredPostList = fullPostList.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        (post.subTitle &&
          post.subTitle.toLowerCase().includes(query.toLowerCase())) ||
        (post.tags &&
          post.tags.join('').toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredPostList,
      postCount: filteredPostList.length,
    });
  };

  const { filteredPostList, query, postCount } = state;
  const hasSearchResults = filteredPostList && query !== emptyQuery;
  const posts = hasSearchResults ? filteredPostList : fullPostList;

  return (
    <>
      {!posts.length && query === emptyQuery && (
        <Loader message="Loading blog posts" />
      )}
      <>
        <span className="post-wrapper">
          <span className="post-search-wrapper page-body">
            <input
              className="searchInput"
              type="search"
              aria-label="Search"
              placeholder="Filter blog posts by title or tag"
              onChange={(e) => filterPosts(e)}
            ></input>
            <span className="post-count-wrapper">
              <p className="post-count">{postCount}&nbsp;</p>
              {postCount === 1 ? <p>post</p> : <p>posts</p>}
            </span>
          </span>
          <div className="posts-wrapper wide-page-body">
            {posts.length ? (
              posts.map((post, index) => (
                <article className="post" key={index}>
                  <p className="post-date">
                    {post.date}&nbsp;
                    {post.timeToRead ? (
                      <>
                        {'\u2022'} {post.timeToRead} min read
                      </>
                    ) : null}
                  </p>
                  {post.path ? (
                    <Link to={`/blog${post.path}`} key={post.title}>
                      <p className="post-title">{post.title}</p>
                      <Img fixed={post.thumbnail} />
                      <p>{post.subTitle}</p>
                    </Link>
                  ) : (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="post-title">{post.title}</p>
                      <img
                        src={post.img}
                        style={{ width: 200 }}
                        alt="blog post thumbnail image"
                      />
                      <p>{post.subTitle}</p>
                    </a>
                  )}
                  <PostTags tags={post.tags} />
                </article>
              ))
            ) : (
              <div className="empty-results">
                <h2>Sorry, no search results match your query.</h2>
              </div>
            )}
          </div>
        </span>
      </>
    </>
  );
};

export default PostListing;
