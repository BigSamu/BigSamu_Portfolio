import React from 'react';
import PortfolioItem from './PortfolioItem';
import projects from '../data/portfolio';
import SectionTitle from './SectionTitle';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className=" min-h-[calc(100vh-78px)] py-10 text-center md:text-left">
      <div className="w-full mx-auto max-w-6xl">
        <SectionTitle>Recent Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              project={project}
            />
          ))}
        </div>
        <div className="grid place-items-center gap-3 mt-14">
          <p className="text-xl font-semibold text-center">
            More Projects in my Github Account
          </p>
          <a
            href="https://github.com/BigSamu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl py-2 px-10 font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
          >
            <FaGithub />
            <span className="text-xl ml-2">BigSamu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
