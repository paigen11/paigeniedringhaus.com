import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import './PostTags.scss';

const PostTags = ({ tags }) => {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag) => (
          <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
            <button className={_.kebabCase(tag)} type="button">
              {tag}
            </button>
          </Link>
        ))}
    </div>
  );
};

export default PostTags;
