// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { FiMenu } from 'react-icons/fi';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-10 shadow-md bg-stone-900 text-stone-300 ">
      <div className="max-w-5xl w-11/12 mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="hero_section"
              spy={true}
              smooth={true}
              offset={-56}
              className="flex items-center cursor-pointer"
            >
              <img
                src="/assets/bigsamu.png"
                alt="BigSamu_Logo"
                className="h-8 w-auto mr-3"
              />
              <h1 className="text-lg font-bold">BigSamu</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              activeClass="border-b-2"
              to="about_section"
              spy={true}
              smooth={true}
              offset={-56}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="border-b-2"
              to="projects_section"
              spy={true}
              smooth={true}
              offset={-56}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="border-b-2"
              to="timeline_section"
              spy={true}
              smooth={true}
              offset={-56}
              className="cursor-pointer"
            >
              Timeline
            </Link>
            <Link
              activeClass="border-b-2"
              to="contact_section"
              spy={true}
              smooth={true}
              offset={-56}
              className="cursor-pointer"
            >
              Contact
            </Link>
            {/* Dark mode toggle */}
            <button
              onClick={handleThemeSwitch}
              className="ml-4 text-xl focus:outline-none "
            >
              {isDarkMode ? (
                <IoSunny className="text-orange-300" />
              ) : (
                <IoMoon className="text-violet-200" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-300 focus:outline-none"
            >
              <FiMenu className="text-2xl" />
            </button>
            {/* Dark mode toggle */}
            <button
              onClick={handleThemeSwitch}
              className="ml-4 focus:outline-none"
            >
              {isDarkMode ? (
                <IoSunny className="text-orange-300" />
              ) : (
                <IoMoon className="text-violet-200" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              <div>
                <Link
                  activeClass="border-b-2"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  className="cursor-pointer"
                >
                  Portfolio
                </Link>
              </div>
              <div>
                <Link
                  activeClass="border-b-2"
                  to="timeline"
                  spy={true}
                  smooth={true}
                  className="cursor-pointer"
                >
                  Timeline
                </Link>
              </div>
              <div>
                <Link
                  activeClass="border-b-2"
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
