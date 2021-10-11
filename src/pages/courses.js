import React from 'react';
import Helmet from 'react-helmet';
import newlineHero from '../images/paige-newline-hero-image.png';
import config from '../../data/SiteConfig';
import courses from '../../data/courses';
import Layout from '../components/Layout/Layout';
import '../styles/pages.scss';

const CoursesPage = () => {
  return (
    // todo give this a background and shadow to make it look like a card and test mobile view
    <Layout>
      <div className="courses-container page-body">
        <Helmet title={`Courses | ${config.siteTitle}`} />
        <h1>Courses</h1>
        <section>
          <p className="intro">
            Having spent the majority of my development career building
            enterprise level applications, in 2021&nbsp;
            {/* todo make this a separate check it out button  */}
            <a
              href="https://www.newline.co/courses/newline-guide-to-modernizing-an-enterprise-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              I wrote the React course I wish I could have learned from early on
            </a>
            .
          </p>
          <p className="intro">
            While most React tutorials start with the latest version of the
            framework, and may touch on testing and tooling, there's so much
            more involved when it comes to long-lived, business critical
            applications in large organizations.
          </p>
          <p className="intro">
            From upgrading and refactoring an existing application to use Hooks,
            to adding project tooling and linting configs, to incorporating
            design libraries and adding integration and end-to-end tests, I
            tried to pack as much of what I've learned into a single course as
            we update an example React app similar to what you'd find in the
            real world.
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
