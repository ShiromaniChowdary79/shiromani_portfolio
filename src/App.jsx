// import React from 'react';
// import "./App.css";
// import About from "./Components/About/About";
// import Hero from "./Components/Hero/Hero";
// import Technologies from "./Components/Technology/Technologies";
// import Experience from "./Components/Experience/Experiences";
// import WorkProject from "./Components/WorkProject/Project"
// import Contact from './Components/Contact/Contact';
// import Invitation from './Components/Invitation/Invitation';

// function App() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Technologies />
//       <Experience />
//       <WorkProject/>
//       <Contact/>
//       <Invitation/>
    
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Technologies from "./Components/Technology/Technologies";
import Experience from "./Components/Experience/Experiences";
import WorkProject from "./Components/WorkProject/Project";
import Contact from "./Components/Contact/Contact";
import Invitation from "./Components/Invitation/Invitation";  // Import Invitation Component

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false); // Track visibility

  return (
    <>
      {!showPortfolio ? (
        <Invitation onAccept={() => setShowPortfolio(true)} />
      ) : (
        <>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <WorkProject />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
