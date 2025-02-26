import React from "react";
import "./project.css";
import { PROJECTS } from "../constants";
import {motion} from "framer-motion"; 

const Project = () => {
  {PROJECTS.map((project, index) => (
    <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="project-image-container"
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </motion.div>
    </a>
  ))}
  return (
    <div className="project-container">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
      className="project-title">PROJECTS</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-item">
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </motion.div>
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
             className="project-details">
              <h2 className="project-name">{project.title}</h2>
              <h3 className="project-description">{project.description}</h3>
              <div className="project-tech-container">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

// before chatgpt

// import React from "react";
// import "./project.css";
// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion"; 

// const Project = () => {
//   return (
//     <div className="project-container">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1 }}
//         className="project-title"
//       >
//         PROJECTS
//       </motion.h1>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="project-item">
//             <a
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="project-image-link"
//             >
//               <motion.div
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1 }}
//                 className="project-image-container"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="project-image"
//                 />
//               </motion.div>
//             </a>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="project-details"
//             >
//               <h2 className="project-name">{project.title}</h2>
//               <h3 className="project-description">{project.description}</h3>
//               <div className="project-tech-container">
//                 {project.technologies.map((tech, index) => (
//                   <span key={index} className="project-tech">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;
