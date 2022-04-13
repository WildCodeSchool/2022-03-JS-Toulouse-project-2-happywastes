import React from "react";
import "./menuList.css";
import NavItem from "./NavItem";

const navItem = [
  {
    name: "DASHBOARD",
    color: "red",
    image: "src/assets/img/iconRed -large.png",
  },
  {
    name: "RECYCLER",
    color: "green",
    image: "src/assets/img/iconGreen-large.png",
  },
  {
    name: "PROCHAINEMENT",
    color: "gold",
    image: "src/assets/img/iconYellow -large.png",
  },
];

export default function MenuList() {
  return (
    <div className="menu-list">
      {navItem.map((item) => (
        <NavItem image={item.image} color={item.color} name={item.name} />
      ))}
    </div>
  );
}
