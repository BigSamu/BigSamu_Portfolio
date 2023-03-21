import React from 'react';
import { ImProfile } from 'react-icons/im';

import SectionTitle from './SectionTitle';
import { Link } from 'react-scroll';
import tech_stack from '../data/tech_stack';
import { getTechnologyIcon } from '../utils/TechnologyIcon.jsx';

import profileCoding from '/assets/bigsamu_illustration_coding.png';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] grid place-items-center py-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full lg:w-9/12 ">
        <div className="w-full md:w-1/2">
          <div className="max-w-xs md:max-w-md mx-auto p-5">
            <img
              src={profileCoding}
              alt="bigsamu_illustration_coding"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <SectionTitle>About Me</SectionTitle>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            velit auctor, semper purus ut, bibendum nunc. Duis sodales urna vel
            tortor imperdiet, sit amet tincidunt libero vehicula. Nullam vitae
            nibh nibh.
          </p>
          <p className="mt-5 text-lg font-bold underline">
            My Preferred Tech Stack
          </p>
          <ul className="text-md md:text-lg mt-3 flex flex-wrap justify-center md:justify-start gap-x-2">
            {tech_stack.preferred.map((technology, index) => (
              <li key={index} className="inline-block mr-2 my-1">
                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                  {getTechnologyIcon(
                    technology
                  )}
                </span>
              </li>
            ))}
          </ul>
          {/* <p className="mt-4 text-lg font-bold underline">Other Experience</p>
          <div className="text-md mt-3 flex flex-wrap gap-x-1 items-center">
            {tech_stack.other_experience.map((technology, index) => (
              <>
                <span>{technology}</span>
                {(index!=tech_stack.other_experience.length-1) ? <span>-</span> : ""}
              </>
            ))}
          </div> */}
          <div className="mt-5 mx-auto">
            <a
              href="https://1drv.ms/b/s!Asber9wcpjf8j4V8pIIOGza9O14Zlw?e=axa6vD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl py-2 px-10 font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
            >
              <ImProfile />
              <span className="text-xl ml-2">My CV</span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
