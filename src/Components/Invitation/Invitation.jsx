// // import { useState } from "react";
// // import "./Invitation.css"; // Import styles

// // const Invitation = ({ onAccept }) => {
// //     const [showPopup, setShowPopup] = useState(false);
// //     const [noButtonPosition, setNoButtonPosition] = useState({ top: "0px", left: "0px" });

// //     const handleYesClick = () => {
// //         setShowPopup(true);
// //         setTimeout(() => {
// //             onAccept(); // Hide invitation and show portfolio
// //         }, 2000);
// //     };

// //     const handleNoHover = () => {
// //         const newX = Math.random() * window.innerWidth * 0.7;
// //         const newY = Math.random() * window.innerHeight * 0.7;
// //         setNoButtonPosition({ top: `${newY}px`, left: `${newX}px` });
// //     };

// //     return (
// //         <div className="invitation-screen">
// //             <div className="invitation">
// //                 <h1>You Here to Visit? </h1>
// //                 <div className="buttons">
// //                     <button
// //                         id="no-btn"
// //                         style={{ position: "absolute", ...noButtonPosition }}
// //                         onMouseEnter={handleNoHover}
// //                     >
// //                         No 😢
// //                     </button>
// //                     <button id="yes-btn" onClick={handleYesClick}>
// //                         Yes! 😊
// //                     </button>
// //                 </div>
// //                 {showPopup && <div className="popup"><p>Aww, thank you! ❤️</p></div>}
// //             </div>
// //         </div>
// //     );
// // };

// export default Invitation;
import React, { useState } from "react";
import "./Invitation.css";

const Invitation = ({ onAccept }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ left: "50px", top: "0px" });

  const moveNoButton = () => {
    const randomX = Math.random() * 600 - 300; // Bigger range for wilder movement
    const randomY = Math.random() * 400 - 200;

    setNoButtonPosition({ left: `${randomX}px`, top: `${randomY}px` });

    // Extra jitter effect (optional)
    setTimeout(() => {
      const jitterX = Math.random() * 50 - 25;
      const jitterY = Math.random() * 50 - 25;
      setNoButtonPosition({ left: `${randomX + jitterX}px`, top: `${randomY + jitterY}px` });
    }, 50); // Super fast jitter
  };

  return (
    <div className="invitation-screen">
      <div className="invitation">
        <h1>Are You Here to visit my portfolio ?</h1>
        <div className="buttons">
          <button className="yes-btn" onClick={onAccept}>Yes</button>
          <button 
            className="no-btn" 
            onClick={moveNoButton} 
            style={{ transform: `translate(${noButtonPosition.left}, ${noButtonPosition.top})` }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
