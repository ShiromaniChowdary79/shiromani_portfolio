

import React from "react";
import { EXPERIENCES } from "../constants";
import "./Experience.css";
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <div className="experience-container">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="experience-header">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="experience-item">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="experience-year">
              <p>{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="experience-details">
              <h2 className="experience-role">
                {experience.role} {" "}
                <span className="experience-company">
                  {experience.company}
                </span>
              </h2>
              <p className="experience-description">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="experience-tech"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
