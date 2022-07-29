import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import config from '../../data/SiteConfig';
import seanAndPaige from '../../content/images/sean-and-paige.jpg';
import '../styles/pages.scss';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container page-body">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>About</h1>
        <section>
          <h2>Hey, I'm Paige Niedringhaus.</h2>
          <p>
            I'm a full stack staff software engineer, technical writer, and
            speaker, originally from St. Louis, MO 🇺🇸.
          </p>
        </section>
        <section>
          <h2>Web development wasn't my first job...</h2>
          <p>
            Software development hasn't always been my focus. After graduating
            high school, I attended&nbsp;
            <a
              href="http://www.emory.edu/home/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emory University
            </a>
            &nbsp;and graduated from the&nbsp;
            <a
              href="https://goizueta.emory.edu/"
              target="_blank"
              rel="nooperner noreferrer"
            >
              Goizueta Business School
            </a>
            &nbsp;with a Bachelor's of Business Administration and
            concentrations in Marketing, Management and International Business
            🎓. I then worked as a digital marketer and content strategist for
            several advertising agencies before I made the decision to pursue a
            total career change to web development in 2016.
          </p>
        </section>
        <section>
          <h2>But it turns out, I really enjoy it.</h2>
          <p>
            <a
              href="https://www.digitalcrafts.com/"
              target="_blank"
              rel="nooperner noreferrer"
            >
              DigitalCrafts
            </a>
            &nbsp;is the immersive coding bootcamp I attended, and I've been
            writing software ever since 💻. If you want to hear more about how I
            got started in web development, I shared my origin story on the
            podcast&nbsp;
            <a
              href="https://myjavascriptstory.com/145"
              target="_blank"
              rel="noopener noreferrer"
            >
              My JavaScript Story
            </a>
            &nbsp;📻, and wrote about my early experiences as a new developer in
            a few&nbsp;
            <a href="/blog/how-i-went-from-a-digital-marketer-to-a-software-engineer-in-4-months">
              blog
            </a>
            &nbsp;posts.
          </p>
        </section>
        <section>
          <h2>And now, I want to help others find the joy in coding too.</h2>
          <p>
            Today, I work with a team of talented folks as a staff software
            engineer at the IoT startup&nbsp;
            <a
              href="https://blues.io/"
              target="_blank"
              rel="nooperner noreferrer"
            >
              Blues Wireless
            </a>
            &nbsp;. I'm always learning new things, but my focus and interest
            right now is on&nbsp;
            <strong>
              frontend web development technologies like React, Next.js, and
              Svelte
            </strong>
            , and building&nbsp;
            <a
              hrerf="https://www.hackster.io/paige-niedringhaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet of Things projects
            </a>
            &nbsp;powered by Blues Wireless hardware.
          </p>
          <p>Previously, I was a senior software engineer at The Home Depot.</p>
          <p>
            Bringing cool user interfaces to life with HTML, CSS and JavaScript,
            and solving new problems daily is what I enjoy most about my job.
          </p>
          <p>
            But I also love seeing other developers improve, build fun things
            they dreamed up, and succeed in their careers, which is why I mentor
            devs, write about what I've learned online, and speak at conferences
            and meetups.
          </p>
          <p>
            I've written regularly on&nbsp;
            <a
              href="https://paigen11.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            &nbsp;and other <Link to="/media">publications</Link> about web
            development and technology for years, but I wanted to build my own
            site to share my knowledge with a broader audience (and hopefully
            learn new things from them as well!). I hope you find my&nbsp;
            <Link to="/blog">posts</Link>&nbsp;useful as you build your own
            awesome stuff.
          </p>
        </section>
        <section>
          <h2>If you want to know more about me personally...</h2>
          <p>
            I met my husband, Sean, while I was working in Atlanta, GA, and
            we've been happily married since 2016 (that was a really good year
            for me, in case you haven't noticed).
          </p>
          <p>
            And when I'm not programming, I like to spend my spare time working
            on my art 🎨 (watercolors), traveling ✈️, and hanging out with
            family and friends. I've recently gotten into mastering handstands
            and handbalancing, so if you have tips, let me know!
          </p>
          <figure>
            <img src={seanAndPaige} alt="sean and paige photo" />
            <figcaption>
              Sean and me, looking extra spiffy for our friend's wedding.
            </figcaption>
          </figure>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
