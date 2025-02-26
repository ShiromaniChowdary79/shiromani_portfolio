// import React from 'react';
// import "./Contact.css"
// import {motion} from "framer-motion";

// const Contact = () => {
//     return (
//         <div className="contact container">
//             <form>
//                 <div className="form">
//                     <motion.div 
//                     whileInView={{opacity:1,y:0}}
//                     initial={{opacity:0,y:-100}}
//                     transition={{duration:1.5}}
//                     className="form-txt">
//                         <h1>Contact </h1>
                        
//                         <h3>shiromani.441@gmail.com</h3>
//                         <p>
//                             BENGALURU , KARNATAKA<br />+91-7093907773
//                         </p>
//                         <h3>India</h3>
//                         <p>
//                         560037
//                         </p>
//                     </motion.div>
//                     <motion.div 
//                     whileInView={{opacity:1,x:0}}
//                     initial={{opacity:0,x:-100}}
//                     transition={{duration:1.5}}
//                     className="form-details">
//                         <input type="text" name="name" id="name" placeholder="Name" required />
//                         <input type="email" name="email" id="email" placeholder="Email" required />
//                         <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
//                         <button type="submit">SEND MESSAGE</button>
//                     </motion.div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Contact;


import React from 'react';
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="contact container">
            <form>
                <div className="form">
                    {/* Left Side: Contact Information */}
                    <motion.div 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="form-txt"
                    >
                        <h1>Contact Me</h1>
                        <h3>Email</h3>
                        <p>shiromani.441@gmail.com</p>
                        <h3>Location</h3>
                        <p>Bengaluru, Karnataka<br />India - 560037</p>
                        <h3>Phone</h3>
                        <p>+91-7093907773</p>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="form-details"
                    >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="52" rows="7" placeholder="Your message" required></textarea>

                        <button type="submit">SEND MESSAGE</button>
                    </motion.div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
