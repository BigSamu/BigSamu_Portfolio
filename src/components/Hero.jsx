import React from 'react';
import { Link } from 'react-scroll';
import ResumePreview from './ResumePreview';

import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import { ImProfile } from 'react-icons/im';

import userDetails from '../data/userDetails';
import profilePicture from '/assets/bigsamu.png';

const Intro = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] grid place-items-center py-5">
      <div className="flex flex-col items-center text-center">
        <img
          src={profilePicture}
          alt="bigsamu_profile_picture"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full mb-4 shadow-lg"
        />

        <h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
          Samuel Valdes Gutierrez
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer | Full-Stack Developer | AI & Blockchain Enthusiast
        </p>
        <p className="text-sm max-w-xl mb-3 font-bold">
          Engineer with 6+ years of experience in Finance and Hardware
          solutions, concluding a career shift into Software Engineering. Avid
          learner and self-disciplined with solid communication skills. Looking
          for entry-level positions in high-performant Software Engineering
          teams, preferably working with Full-Stack technologies. 
        </p>

        <div className="flex flex-col md:flex-row items-center md:gap-x-1">
          <Link
            to="about_section"
            spy={true}
            smooth={true}
            offset={-56}
            className="cursor-pointer text-lg underline text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            A Bit More About Me!
          </Link>
          <RxDotFilled className="hidden md:inline"/>
          <Link
            to="projects_section"
            spy={true}
            smooth={true}
            offset={-56}
            className="cursor-pointer text-lg underline text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            My Projects
          </Link>
          <RxDotFilled className="hidden md:inline"/>
          <Link
            to="timeline_section"
            spy={true}
            smooth={true}
            offset={-56}
            className="cursor-pointer text-lg underline text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            My Professional Path
          </Link>
          <RxDotFilled className="hidden md:inline"/>
          <Link

            to="contact_section"
            spy={true}
            smooth={true}
            offset={-56}
            className="cursor-pointer text-lg underline text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            Want to Contact Me?
          </Link>
        </div>

        <div className="flex space-x-4 mt-5">
          <a
            href="https://github.com/BigSamu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/samuel-valdes-gutierrez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.hackerrank.com/BigSamu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaHackerrank />
          </a>
        </div>

        <div className="mt-3">
          <a
            href={userDetails.cv_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl py-2 px-10 font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
          >
            <ImProfile />
            <span className="text-xl ml-2">My CV</span>
          </a>
          {/* <ResumePreview /> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
