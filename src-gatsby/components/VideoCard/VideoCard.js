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
      <h4 className="video-title">{course.title}</h4>
      <h4 className="video-card-subtitle">{course.subtitle}</h4>
      <h4 className="watch-now">
        Watch now <span className="carot">&gt;</span>
      </h4>
    </a>
  </article>
);

export default VideoCard;
