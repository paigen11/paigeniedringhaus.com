import React from 'react';
import { kebabCase } from 'lodash';
import './PostTags.scss';

const PostTags = ({ tags }) => {
  const tagList = tags?.map((tag) => (
    <div key={tag} className={kebabCase(tag)}>
      {tag}
    </div>
  ));

  return (
    <div className="post-tag-container">
      {tags ? (
        <>
          <span>Tags: </span>
          {tagList}
        </>
      ) : null}
    </div>
  );
};

export default PostTags;
