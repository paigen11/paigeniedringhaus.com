import React from 'react';
import './VideoCard.scss';

const VideoCard = ({ course }) => (
  <article className="video-card">
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
      <h4>{course.title}</h4>
      <h4 className="video-card-subtitle">{course.subtitle}</h4>
    </a>
  </article>
);

export default VideoCard;
