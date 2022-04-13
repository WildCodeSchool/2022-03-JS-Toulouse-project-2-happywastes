import React from "react";
import "./menuList.css";
import NavItem from "./NavItem";

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

export default function MenuList() {
  return (
    <div className="menu-list">
      {navItem.map((item) => (
        <NavItem color={item.color} name={item.name} />
      ))}
    </div>
  );
}
