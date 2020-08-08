import React from 'react';
import { kebabCase } from 'lodash';
import './PostTags.scss';

const PostTags = ({ tags }) => {
  // consider removing hover color change since these aren't clickable for now

  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag) => (
          <div key={tag} className={kebabCase(tag)}>
            {tag}
          </div>
        ))}
    </div>
  );
};

export default PostTags;
