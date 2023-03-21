import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <ul className="flex items-center space-x-4">
              {/* Add your social media icons or links here */}
              <li>
                <a href="https://github.com/bigsamu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-4xl text-white"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/samuel-valdes-gutierrez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-4xl text-white" />
                </a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/bigsamu" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
                  <FaHackerrank className="text-4xl text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

