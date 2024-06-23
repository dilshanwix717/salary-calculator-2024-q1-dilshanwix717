import React from "react";
import "./Menu.scss";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

function Menu() {
  return (
    <div className="menu">
      <div className="title">Acmy Solutions</div>
      <div className="item">
        <p className="listItem">
          <BrokenImageIcon />
          Dashboard
        </p>
      </div>
    </div>
  );
}

export default Menu;
