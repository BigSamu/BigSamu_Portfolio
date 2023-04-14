import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IoMoon, IoSunny } from 'react-icons/io5';

const navigation = [
  { name: 'About', href: 'about_section', current: true },
  { name: 'Projects', href: 'projects_section', current: false },
  { name: 'Timeline', href: 'timeline_section', current: false },
  { name: 'Contact', href: 'contact_section', current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = ({ theme, setTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [offsetNavbar, setOffsetNavabr] = useState();
  const navbarRef = React.createRef(null);
  const resizeObserver = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      resizeObserver.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const outerHeight = -1 * entry.contentRect.height;
          setOffsetNavabr(outerHeight);
        }
      });
      resizeObserver.current.observe(navbarRef.current);
    }

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };

  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
    console.log(offsetNavbar);
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 left-0 w-full z-50 bg-stone-900"
      ref={navbarRef}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden lg:flex flex-shrink-0 items-center">
                <Link
                  to="hero_section"
                  spy={true}
                  smooth={true}
                  offset={offsetNavbar}
                  className="flex items-center cursor-pointer"
                >
                  <img
                    className="h-8 w-auto"
                    src="/assets/bigsamu.png"
                    alt="BigSamu_Logo"
                  />
                  <h1 className="text-lg text-stone-300 font-bold mx-3">
                    BigSamu
                  </h1>
                </Link>
              </div>

              <div className="flex flex-1 items-center justify-center ">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, idx) => (
                      <Link
                        key={idx}
                        activeClass="border-b-2"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={offsetNavbar}
                        className="cursor-pointer text-stone-300 text-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="block sm:hidden">
                  <Link
                    to="hero_section"
                    spy={true}
                    smooth={true}
                    offset={offsetNavbar}
                    className="flex items-center cursor-pointer"
                  >
                    <h1 className="text-lg text-stone-300 font-bold">
                      BigSamu
                    </h1>
                  </Link>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={handleThemeSwitch}
                  className="text-xl focus:outline-none "
                >
                  {isDarkMode ? (
                    <IoSunny
                      className="text-orange-300 hover:text-orange-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <IoMoon
                      className="text-violet-200 hover:text-violet-300"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 py-3">
              <div className="flex flex-col space-y-4">
                {navigation.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      activeClass="border-b-2"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={offsetNavbar}
                      className="cursor-pointer text-stone-300 text-lg"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
