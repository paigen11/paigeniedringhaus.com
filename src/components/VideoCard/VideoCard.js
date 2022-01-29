import React from 'react';
import './VideoCard.scss';

const VideoCard = (props) => {
  const { course, index } = props;
  return (
    <article className="video-card" key={index}>
      <a
        href={course.path}
        target="_blank"
        rel="noopener noreferrer"
        className="title"
      >
        <img
          src={course.img}
          style={{ width: 200 }}
          alt="video card thumbnail image"
        />
        <h4 className="video-card-title">{course.title}</h4>
      </a>
    </article>
  );
};

export default VideoCard;
