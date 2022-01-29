import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import courses from '../../data/courses';
import courseVideos from '../../data/courseVideos';
import Layout from '../components/Layout/Layout';
import VideoCard from '../components/VideoCard/VideoCard';
import '../styles/pages.scss';

const CoursesPage = () => {
  return (
    <Layout>
      <div className="courses-container page-body">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <h1>Courses</h1>
        <section>
          <p className="intro">
            Having spent the majority of my development career building
            enterprise level applications, I wrote the React course I wish I
            could have learned from early on.
          </p>
          <p className="intro">
            There's so much to know when it comes to long-lived, business
            critical applications in large organizations.
          </p>
          <p className="intro">
            From upgrading and refactoring an existing application, to tooling
            and linting, to design systems and testing - the list is long.
          </p>
          <p className="intro">
            I packed all I've learned into a single course about building and
            maintaining enterprise-sized apps. Get lots of material and hands-on
            practice updating a React app to meet today's high software
            standards.
          </p>
          <p className="intro">
            It covers the exact techniques used at leading companies to support
            their line of business React apps.
          </p>
        </section>
        <section>
          <h2>Modernize an Enterprise React App</h2>
          <ul>
            {courses.map((course) => {
              return (
                <li className="course-items" key={course.title}>
                  <a
                    href={course.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    <img
                      src={course.img}
                      alt="Cover image for The newline Guide to Modernizing an Enterprise React App"
                    />
                    <h4>{course.title}</h4>
                    <p>{course.hook}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="courses-container video-wrapper">
        <section>
          <h2 className="intro">Free YouTube Videos</h2>
          <p className="intro">
            Or if you'd like an idea of everything in my course, check out these
            free YouTube videos. They introduce you to all my course has to
            offer and some of the most commonly used React Hooks you'll reach
            for daily.
          </p>
          <div className="videos">
            {courseVideos.length
              ? courseVideos.map((course, index) => (
                  <VideoCard course={course} index={index} />
                ))
              : null}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CoursesPage;
