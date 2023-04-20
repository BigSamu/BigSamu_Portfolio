import React from 'react';
import {
  FaHtml5, FaCss3Alt,FaReact, FaPython, FaNodeJs, FaJava, FaEthereum, FaGem, FaNpm,
  FaBootstrap, FaSass, FaAws, FaGithub
} from 'react-icons/fa';
import {
  DiDjango, DiRuby, DiPostgresql, DiMysql, DiSqllite
} from 'react-icons/di';
import {
  SiJavascript, SiTypescript, SiJquery, SiSwiper, SiGooglefonts,SiFontawesome, SiNextdotjs, SiVite, SiTailwindcss, SiCplusplus, SiExpress, SiSpring, SiFastapi, SiFlask, SiMongodb, SiSolidity, SiRubysinatra, SiPypi, SiMui, SiOpenai, SiRedux, SiJsonwebtokens, SiWireshark, SiVercel
} from 'react-icons/si';
import {
  TbBrandVscode
} from 'react-icons/tb';

export const getTechnologyIcon = (technology) => {
  const iconMap = {
    // Programming languages and fonts
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'C++': <SiCplusplus />,
    'Solidity': <SiSolidity />,
    'Ruby': <DiRuby />,
    'Sass': <FaSass />,
    'FontAwesome': <SiFontawesome />,
    'Google Fonts': <SiGooglefonts />,
    
    // Frameworks and libraries
    'ReactJS': <FaReact />,
    'NodeJS': <FaNodeJs />,
    'Bootstrap': <FaBootstrap />,
    'MaterialUI': <SiMui />,
    'ViteJS': <SiVite />,
    'TailwindCSS': <SiTailwindcss />,
    'NextJS': <SiNextdotjs />,
    'ExpressJS': <SiExpress />,
    'Spring Boot Suite': <SiSpring />,
    'FastAPI': <SiFastapi />,
    'Django': <DiDjango />,
    'Flask': <SiFlask />,
    'Sinatra': <SiRubysinatra />,
    'Redux': <SiRedux />,
    'JQuery': <SiJquery />,
    'Swiper': <SiSwiper/>,
    

    // Databases
    'MongoDB': <SiMongodb />,
    'SQLite': <DiSqllite />,
    'PostgresSQL': <DiPostgresql />,
    'MySQL': <DiMysql />,
    'Ethereum': <FaEthereum />,
    
    // Softwares and Platforms
    'Github': <FaGithub />,
    'VSCode': <TbBrandVscode />,
    'AWS': <FaAws />,
    'NPM': <FaNpm />,
    'PyPI': <SiPypi />,
    'OpenAI': <SiOpenai />,
    'Vercel': <SiVercel/>,

    // Security
    'OAuth': <img src="https://static-00.iconduck.com/assets.00/oauth-icon-512x511-baa2vilm.png"/>,
    'JWT': <SiJsonwebtokens/>,
    'Wireshrak': <SiWireshark/>,
}


  return (
    <span className="flex items-center">
      {iconMap[technology]}
      <span className="ml-1">{technology}</span>
    </span>
  );
};
