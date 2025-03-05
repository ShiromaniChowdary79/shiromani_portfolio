import React, { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Technologies from "./Components/Technology/Technologies";
import Experience from "./Components/Experience/Experiences";
import WorkProject from "./Components/WorkProject/Project";
import Contact from "./Components/Contact/Contact";
import Invitation from "./Components/Invitation/Invitation";  

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false); 

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
