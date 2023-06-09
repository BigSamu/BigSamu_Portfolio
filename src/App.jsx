import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { ToastProvider } from './contexts/ToastContext';

import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <ToastProvider>
      <Layout>
        <Element name="hero_section">
          <Hero />
        </Element>
        {/* <hr className="border border-stone-200 dark:border-white" /> */}
        <Element name="about_section">
          <About />
        </Element>
        {/* <hr className="border border-stone-200 dark:border-white" /> */}
        <Element name="projects_section">
          <Portfolio />
        </Element>
        {/* <hr className="border border-stone-200 dark:border-white" /> */}
        <Element name="timeline_section">
          <Timeline />
        </Element>
        {/* <hr className="border border-stone-200 dark:border-white" /> */}
        <Element name="contact_section">
          <Contact />
        </Element>
        {/* <hr className="border border-stone-200 dark:border-white" /> */}
      </Layout>
    </ToastProvider>
  );
};

export default App;
