import React from 'react';
import Helmet from 'react-helmet';
import newlineHero from '../images/paige-newline-hero-image.png';
import config from '../../data/SiteConfig';
import courses from '../../data/courses';
import Layout from '../components/Layout/Layout';
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
            and linting, to design sytems and testing - the list is long.
          </p>
          <p className="intro">
            I packed all I've learned into a single course about building and
            maintaining enterprise-sized apps. Get lots of material and hands-on
            practice updating a React app to meet today's high software
            standards.
          </p>
          <p className="intro">
            If you'd like a sneak peek of everything in my course, check out
            this free YouTube video. It covers the exact techniques in use at
            leading companies to support their line of business React apps.
          </p>
          <div className="intro button">
            <a
              href="https://www.youtube.com/watch?v=Prv6Pt1Ltrs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                aria-label="Check out a free video on YouTube giving you a taste of The newline Guide to Modernizing Enterprise React Apps"
                className="subscribe-button"
              >
                Free course sneak peek
              </button>
            </a>
          </div>
          <p className="intro">
            Or click the link below to go straight to my full course.
          </p>
        </section>
        <section>
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
                      src={newlineHero}
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
    </Layout>
  );
};

export default CoursesPage;
