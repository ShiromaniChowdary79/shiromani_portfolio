// import React from 'react';
// import { ABOUT_TEXT } from "../constants";

// const About = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4'>
//       <div className='flex flex-col items-center'>
//         <h1 className='my-20 text-center text-4xl'>ABOUT ME</h1>
//         <div className="w-full lg:w-1/2">
//           <div className='flex justify-center'>
//             <p className='text-base leading-6 text-gray-700 text-center'>{ABOUT_TEXT}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

// import React from 'react';
// import { ABOUT_TEXT } from "../constants";
// import './About.css';

// const About = () => {
//   return (
//     <motion.div 
//     whileInView={{opacity:1,x:0}}
//     initial={{opacity:0,x:-100}}
//     transition={{duration:1}}
//     className='about-container'>
//       <h1 className='about-title'>ABOUT ME</h1>
//       <div className='about-content'>
//         <p className='about-text'>{ABOUT_TEXT}</p>
//       </div>
//     </motion.div>
//   );
// }

// export default About;


import React from 'react';

import { motion } from 'framer-motion'; 
import { ABOUT_TEXT } from "../constants"; 
import './About.css'; 
const About = () => {
  return (
    <div 
            
      className='about-container'>       
      <motion.h1 
      whileInView={{ opacity: 1, x: 0 }} 
      initial={{ opacity: 0, x: -100 }}  
      transition={{ duration: 1 }} 
      className='about-title'>ABOUT ME</motion.h1> 
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }} 
      initial={{ opacity: 0, x: 100 }}  
      transition={{ duration: 1 }} 
      className='about-content'>           
        <p className='about-text'>{ABOUT_TEXT}</p>
      </motion.div>
    </div>
  );
}

export default About;
