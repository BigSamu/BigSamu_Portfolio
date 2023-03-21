import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div>
      <Layout>
        <Element name="hero_section">
          <Hero />
        </Element>
        <Element name="about_section">
          <About />
        </Element>
        <Element name="projects_section">
          <Portfolio />
        </Element>
        <Element name="timeline_section">
          <Timeline />
        </Element>
        <Element name="contact_section">
          <Contact />
        </Element>
      </Layout>
    </div>
  );
};

export default App;
