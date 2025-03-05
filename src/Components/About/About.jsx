import React from "react";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="about-title"
      >
        ABOUT ME
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="about-content"
      >
        <p className="about-text">{ABOUT_TEXT}</p>
      </motion.div>
    </div>
  );
};

export default About;
