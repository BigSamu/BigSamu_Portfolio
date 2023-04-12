import React from 'react';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { getTechnologyIcon } from '../utils/TechnologyIcon.jsx';

const PortfolioItem = ({ project }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 shadow-md rounded-md p-4">
      <img
        src={project.imgUrl}
        alt={project.title}
        className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-sm italic mb-2">{project.type}</p>
      <p className="grow">{project.details}</p>
      <ul className="text-sm my-5">
        {project.stack.map((technology, index) => (
          <li key={index} className="inline-block mr-2 my-1">
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {getTechnologyIcon(technology)}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex space-x-3">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            <span className="flex items-center space-x-1">
              <FaGithub />
              <span className="underline">Github</span>
            </span>
          </a>
        ) : (
          <span className="italic">Project under NDA</span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
          >
            <span className="flex items-center space-x-1">
              <FaExternalLinkAlt />
              <span className="underline">Demo</span>
            </span>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
