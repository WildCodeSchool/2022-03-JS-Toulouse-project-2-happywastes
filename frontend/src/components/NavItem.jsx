import "./NavItem.css";
import "../assets/css/main.css";
import React from "react";

// TODO a integrer et mapper dans

function NavItem(props) {
  const { name, color } = props;
  return (
    <div className={`menu-item ${color}`}>
      <p className={`menu-item-text ${`${color}stroke`}`}>{name}</p>
    </div>
  );
}

export default NavItem;
