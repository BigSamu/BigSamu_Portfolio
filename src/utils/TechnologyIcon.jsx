import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs, FaJava, FaEthereum, FaGem, FaNpm,
  FaBootstrap, FaCogs, FaRobot, FaDatabase, FaSass, FaAws, FaGithub
} from 'react-icons/fa';
import {
  DiDjango, DiRuby, DiPostgresql, DiMysql, DiSqllite
} from 'react-icons/di';
import {
  SiNextdotjs, SiVite, SiTailwindcss, SiCplusplus, SiExpress, SiSpring, SiFastapi, SiFlask, SiMongodb, SiSolidity, SiRubysinatra, SiPypi, SiMui, SiOpenai, SiRedux, SiJsonwebtokens, SiWireshark
} from 'react-icons/si';
import {
  TbBrandVscode
} from 'react-icons/tb';

export const getTechnologyIcon = (technology) => {
  const iconMap = {
    // Programming languages
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <FaJsSquare />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'C++': <SiCplusplus />,
    'Solidity': <SiSolidity />,
    'Ruby': <DiRuby />,
    'Sass': <FaSass />,
    
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
