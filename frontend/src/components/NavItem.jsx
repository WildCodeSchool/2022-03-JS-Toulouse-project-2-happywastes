import "./NavItem.css";
import React from "react";

// TODO a integrer et mapper dans

const navItem = [
  {
    name: "Dashboard",
    color: "red",
  },
  {
    name: "Recycler",
    color: "Green",
  },
  {
    name: "Prochainement",
    color: "Gold",
  },
];

function NavItem() {
  const { name, color } = navItem;
  return (
    <div className={`menu-item ${color}`}>
      <p className={`menu-item-text ${color}`}>{name}</p>
    </div>
  );
}

export default NavItem;
