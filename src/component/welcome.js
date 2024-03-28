import React, { useState, useEffect } from 'react';
import MaxIcon from '../assets/images/max_icons_u.png';
import '../styles/welcome.css';
import Introduction from '../component/introduction';
import Objective from '../component/objective';



const Welcome = () => {
  // Use state to manage line visibility
  const [showLines, setShowLines] = useState(false);
  const [visitorName, setVisitorName] = useState(false);
  const [introductionCompleted, setIntroductionCompleted] = useState(false);
  useEffect(() => {
    // Show lines after 1 second (optional, assuming animation is handled in CSS)
    const lineTimeout = setTimeout(() => {
      setShowLines(true);
    }, 1000);

    // Hide lines after 5 seconds by setting showLines to false (fade-out animation is triggered in CSS)
    const fadeTimeout = setTimeout(() => {
      setShowLines(false);
    }, 5000);

    // Clean up timeouts
    return () => {
      clearTimeout(lineTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  const handleIntroductionSubmit = (name) => {
    setVisitorName(name)
    setIntroductionCompleted(true);

    // You can add logic here to update the user table in the FitGlide database
    
  };

  return(
    <div className="container">
      <img src={MaxIcon} alt="Max Icon" className="max-icon" />
      <div className={`text-container ${showLines ? '' : 'fade-out-all'}`}> {/* Apply fade-out class conditionally */}
          <p className="line">Hey there! </p>
          <p className="line">I'm Max,</p>
          <p className="line">Your virtual fitness companion, and I'm thrilled to welcome you to FitGlide!</p>
          <p className="line">Together, we're going to embark on an incredible fitness journey.</p> 
     </div>
     {!showLines && !introductionCompleted &&
     
     <Introduction onSubmit={handleIntroductionSubmit} /> /* Use the Introduction component */
     }
    {introductionCompleted && (
        <Objective visitorName={visitorName}/>
      )}
  </div>
  )
};

export default Welcome;
