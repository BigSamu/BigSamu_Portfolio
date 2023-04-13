import React from 'react';
import { ImProfile } from 'react-icons/im';

import SectionTitle from './SectionTitle';
import { Link } from 'react-scroll';
import tech_stack from '../data/tech_stack';
import { getTechnologyIcon } from '../utils/TechnologyIcon.jsx';

import about from '../data/about';
import profileCoding from '/assets/bigsamu_illustration_coding.png';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] grid place-items-center py-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-top gap-4 md:gap-10 w-full lg:w-11/12 ">
        <div className="w-full lg:w-2/6 order-2 md:order-1">
          <div className="max-w-xs md:max-xs mx-auto py-5">
            <img
              src={profileCoding}
              alt="bigsamu_illustration_coding"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="flex justify-center m-5">
            <a
              href="https://1drv.ms/b/s!Asber9wcpjf8j4V8Ku7CtswQJm90eA?e=bxphL2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl py-2 px-10 font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
            >
              <ImProfile />
              <span className="text-lg ml-2">My CV</span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-4/6 order-1 md:order-2">
          <SectionTitle>About Me</SectionTitle>
          {about.split('\n').map((paragraph, idx) => (
            <p className="mb-3" key={idx}>
              {paragraph}
            </p>
          ))}
          <div className="text-center">
            <p className="text-lg font-bold underline">
              My Preferred Tech Stack
            </p>
            <ul className="text-sm md:text-md mt-3 flex flex-wrap justify-center gap-x-2">
              {tech_stack.preferred.map((technology, index) => (
                <li key={index} className="inline-block mr-2 my-1">
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                    {getTechnologyIcon(technology)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
