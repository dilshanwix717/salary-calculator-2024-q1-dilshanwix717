import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <h1>Welcome back, John Doe</h1>
        <p>
          The end of the year is coming. Are you planning your performance
          interviews? You can do this super efficiently with Acmy.
        </p>
        <Link to="/more-info" className="more-info-link">
          Look here for more information
        </Link>
      </div>
      <div className="circle-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
    </div>
  );
};

export default Welcome;
