import React from "react";
import "./menuList.css";
import NavItem from "./NavItem";

const navItem = [
  {
    name: "DASHBOARD",
    color: "red",
  },
  {
    name: "RECYCLER",
    color: "green",
  },
  {
    name: "PROCHAINEMENT",
    color: "gold",
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
