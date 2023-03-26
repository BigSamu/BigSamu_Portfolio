// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar } from 'flowbite-react';

import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = ({ theme, setTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  const offset_navbar = -60;
  
  return (
    <div className="sticky top-0 left-0 w-full z-50 py-1 !bg-stone-900">
      <Navbar
        fluid={true}
        className="!bg-transparent px-5 max-w-5xl mx-auto"
      >
        <div>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={offset_navbar}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/assets/bigsamu.png"
              alt="BigSamu_Logo"
              className="h-8 w-auto mr-3"
            />
            <h1 className="text-lg font-bold text-stone-300">BigSamu</h1>
          </Link>
        </div>

        <div className="flex gap-1 md:order-2">
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
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <li>
            <Link
              activeClass="border-b-2"
              to="about_section"
              spy={true}
              smooth={true}
              offset={offset_navbar}
              className="cursor-pointer text-stone-300 text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="border-b-2"
              to="projects_section"
              spy={true}
              smooth={true}
              offset={offset_navbar}
              className="cursor-pointer text-stone-300 text-lg"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="border-b-2"
              to="timeline_section"
              spy={true}
              smooth={true}
              offset={offset_navbar}
              className="cursor-pointer text-stone-300 text-lg"
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              activeClass="border-b-2"
              to="contact_section"
              spy={true}
              smooth={true}
              offset={offset_navbar}
              className="cursor-pointer text-stone-300 text-lg"
            >
              Contact
            </Link>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
