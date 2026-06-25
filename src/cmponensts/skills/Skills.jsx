import React from 'react';
import './Skills.css';

import PythonLogo from '../../assets/pythin_img.jpeg';
import Reactlogo from '../../assets/React-icon.svg.jpeg';
import awslogo from '../../assets/aws_logo.jpeg';
import azurelogo from '../../assets/Microsoft_azure_logo.jpeg';
import htmllogo from '../../assets/html_img.jpeg';
import csslogo from '../../assets/css.jpeg';
import mysqllogo from '../../assets/MySQL-Logo.jpeg';
import nodelogo from '../../assets/node-js.jpeg';
import expresslogo from '../../assets/express.jpeg';
import gitlogo from '../../assets/git.jpeg';
import matplotliblogo from '../../assets/matplotlib.jpeg';
import numpylogo from '../../assets/numpy.jpeg';
import pandaslogo from '../../assets/pandas.jpeg';
import visuallogo from '../../assets/visualcode.jpeg';

// React icons FIX (requires npm install react-icons)
import { FaPython, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiJavascript, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <img src={PythonLogo} alt="Python" className="skillImg" /> },
  { name: 'MySql', icon: <img src={mysqllogo} alt="mysql" className="skillImg" /> },
  { name: 'Azure', icon: <img src={azurelogo} alt="Azure" className="skillImg" /> },
  { name: 'AWS', icon: <img src={awslogo} alt="AWS" className="skillImg" /> },
  { name: 'HTML', icon: <img src={htmllogo} alt="HTML" className="skillImg" /> },
  { name: 'CSS', icon: <img src={csslogo} alt="CSS" className="skillImg" /> },
  { name: 'React.js', icon: <img src={Reactlogo} alt="React" className="skillImg" /> },
  { name: 'Node.js', icon: <img src={nodelogo} alt="node.js" className="skillImg" /> },
  { name: 'Express.js', icon: <img src={expresslogo} alt="express.js" className="skillImg" /> },
  { name: 'Git', icon: <img src={gitlogo} alt="Git" className="skillImg" /> },
  { name: 'Matplotlib', icon: <img src={matplotliblogo} alt="matplotlib" className="skillImg" /> },
  { name: 'Numpy', icon: <img src={numpylogo} alt="numpy" className="skillImg" /> },
  { name: 'Pandas', icon: <img src={pandaslogo} alt="pandas" className="skillImg" /> },
  { name: 'Visual Studio Code', icon: <img src={visuallogo} alt="visual" className="skillImg" /> }
];

const Skills = () => {
  return (
    <section className="skillsSection">
      <h2 className="skillsTitle">SKILLS</h2>

      <div className="skillsWrapper">
        {skills.map((skill, index) => (
          <div className="skillPill" key={index}>
            <span className="skillIcon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
