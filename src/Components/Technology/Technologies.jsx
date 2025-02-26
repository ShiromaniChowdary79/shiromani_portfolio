import React from 'react';
import "./Technologies.css";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs, DiMysql } from "react-icons/di";
import { SiMongodb, SiRedux } from "react-icons/si";
import { FaHtml5, FaCss3, FaGithubSquare, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='technologies-container'> 
      <motion.h1 
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: 100 }}
       transition={{ duration: 1}}
      className='skills-title'>Skills</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='skills-wrapper'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='skill-item'
        >
          <RiReactjsLine className='react-icon' />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <SiMongodb className='mongo-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <DiMysql className='sql-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <DiNodejs className='node-icon' />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <FaHtml5 className='html-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <FaCss3 className='css-icon' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <RiTailwindCssFill className='tailwind-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <AiOutlineJavaScript className='js-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <FaGithubSquare className='git-icon'/>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <SiRedux className='redux-icon' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="skill-item"
        >
          <FaBootstrap className='Bs-icon'/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
