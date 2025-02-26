// import styles from "./HeroStyles.module.css";
// import sun from "../../assets/sun.png";
// import moon from "../../assets/moon.png";
// import heroImg from "../../assets/HeroImg.png";
// import twitterLight from "../../assets/twitter-light.png";
// import twitterDark from "../../assets/twitter-dark.png";
// import githubLight from "../../assets/github-light.png";
// import githubDark from "../../assets/github-dark.png";
// import linkedinLight from "../../assets/linkedin-light.png";
// import linkedinDark from "../../assets/linkedin-dark.png";
// import CV from "../../assets/cv.pdf";
// import { useTheme } from "../../Common/ThemeContext";

// function Hero() {
//   const { theme, toggleTheme } = useTheme();

//   const themeIcon = theme === "light" ? sun : moon;
//   const twitterIcon = theme === "light" ? twitterLight : twitterDark;
//   const githubIcon = theme === "light" ? githubLight : githubDark;
//   const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

//   return (
//     <section id="hero" className={styles.container}>
//       <div className={styles.colorModeContainer}>
//         <img
//           src={heroImg}
//           className={styles.hero}
//           alt="Profile picture of Shiromani"
//         />
//         <img
//           className={styles.colorMode}
//           src={themeIcon}
//           alt="Color mode icon"
//           onClick={toggleTheme}
//         />
//       </div>
//       <div className={styles.info}>
//         <h1>
//           HI, I am <br />
//           SHIROMANI
//         </h1>
//         <h2>Full Stack Developer</h2>
//         <span className={styles.socialIcons}>
//           <a
//             href="https://twitter.com/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={twitterIcon} alt="Twitter icon" />
//           </a>
//           <a
//             href="https://github.com/ShiromaniChowdary79"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={githubIcon} alt="Github icon" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/shiromani79/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={linkedinIcon} alt="LinkedIn icon" />
//           </a>
//         </span>
//         <p className={styles.description}>
//           I am dedicated to learning and developing in a fast-paced development
//           environment, and I have a solid foundation in both front-end and
//           back-end development.
//         </p>
//         <a href={CV} download>
//           <button className={styles.resumeButton}>Resume</button>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import heroImg from "../../assets/HeroImg.png";
import twitterLight from "../../assets/twitter-light.png";
import twitterDark from "../../assets/twitter-dark.png";
import githubLight from "../../assets/github-light.png";
import githubDark from "../../assets/github-dark.png";
import linkedinLight from "../../assets/linkedin-light.png";
import linkedinDark from "../../assets/linkedin-dark.png";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../Common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  useEffect(() => {
    const greetingOptions = {
      strings: ["HI ,I am <br/> SHIROMANI" , "Iam a Tech Enthusiast " , "Iam Full Stack Developer " ,"Iam Web Developer" ,"HI ,I am <br/> SHIROMANI" ],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      showCursor: false,
    };

    // const nameOptions = {
    //   strings: [""],
    //   typeSpeed: 100,
    //   backSpeed: 50,
    //   startDelay: 1200,
    //   showCursor: false,
    // };

    // const roleOptions = {
    //   strings: ["Full Stack Developer", "Software Engineer", "Tech Enthusiast"],
    //   typeSpeed: 100,
    //   backSpeed: 50,
    //   loop: true,
    //   startDelay: 2200,
    // };

    const typedGreeting = new Typed(".typed-greeting", greetingOptions);
    // const typedName = new Typed(".typed-name", nameOptions);
    // const typedRole = new Typed(".typing", roleOptions);

    return () => {
      typedGreeting.destroy();
      // typedName.destroy();
      // typedRole.destroy();
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Shiromani"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          <span className="typed-greeting"></span> <br />
          <span className="typed-name"></span>
        </h1>
        <h2 className="typing"></h2>
        <span className={styles.socialIcons}>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/ShiromaniChowdary79"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shiromani79/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am dedicated to learning and developing in a fast-paced development
          environment, and I have a solid foundation in both front-end and
          back-end development.
        </p>
        <a href={CV} download>
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
