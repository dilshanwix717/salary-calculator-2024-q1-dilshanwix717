import React from "react";
import image from "../../assets/user.png";

import "./Navbar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Dashboard</p>
      </div>
      <div className="icons">
        <div className="notification">
          <NotificationsNoneIcon />
        </div>
        <div className="user">
          <img src={image} alt="" className="icon" />

          <KeyboardArrowDownIcon />
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
