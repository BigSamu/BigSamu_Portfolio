import React from 'react';
import { ImProfile } from 'react-icons/im';

import SectionTitle from './SectionTitle';
import { Link } from 'react-scroll';
import tech_stack from '../data/tech_stack';
import { getTechnologyIcon } from '../utils/TechnologyIcon.jsx';

import profileCoding from '/assets/bigsamu_illustration_coding.png';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] grid place-items-center py-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-top gap-4 md:gap-10 w-full lg:w-10/12 ">
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
          <p className="mb-5">
            Hey there! 👋 I'm Samuel, a curious engineer and avid learner 🤓
            always hungry to soak up new knowledge like a sponge 🧽. I recently
            made an exciting transition to software development, and I'm now on
            the hunt for new opportunities to take my skills to the next level
            🚀.
          </p>

          <p className="mb-5">
            My engineering journey began when I pursued a Bachelor's Degree in
            Engineering 🎓, where I delved into a variety of topics like math
            ➕, physics 🌎, energy 🔥, mechanics 🛠️, electricity ⚡, finance 💰,
            and programming 👨‍💻. Yep, you read that right! So many topics! In
            Chile 🇨🇱, engineering degrees take six years 🤯. However, in my
            case, I took seven 😱 because I was fascinated about programming and
            computing 💻. I realized that my passion lay in these areas, and
            that was where I wanted to take my career.
          </p>

          <p className="mb-5">
            After finishing my degree 👨‍🎓, I set my sights on building a career
            in Fintech. I was fortunate enough to work in big tech incumbents 🏢
            and investment banks 🏦, where I developed specialized skills. But
            after six years, I realized that I was drifting away from my passion
            for coding 👨‍💻, and my skills were just sitting in a drawer 🗄️. That
            was when I decided to take action and enroll myself in a Full-Stack
            Development Bootcamp to refresh my skills and pursue an MSc
            Computing Degree in the UK 🇬🇧 to further my education and pave the
            way for a software engineering career 🖥.
          </p>

          <p className="mb-5">
            Nowadays, I keep busy by working as a TA in a coding academy, where
            I'm constantly helping students to achieve their dreams for a career
            in tech. In my free time ⏱, I'm always learning new trends and
            technologies 📖 and working on personal projects or jobs as a
            freelance developer 😎. I'm familiar with a range of Full-Stack
            technologies, but my favorite languages are Javascript and Python,
            especially when used with ReactJS and FastAPI frameworks 🙌.
          </p>

          <p class="mb-5">
            Throughout my career, I've proven my ability to plan, design, and
            solve real-life problems with a combination of technical and social
            skills 🤝. I'm excited to join a startup or company as a junior
            engineer, where I can bring my diverse skill set and experience to
            contribute to the team's success. 🌟
          </p>

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
