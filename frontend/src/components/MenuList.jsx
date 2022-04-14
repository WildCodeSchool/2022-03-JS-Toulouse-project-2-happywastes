import React from "react";
import "./menuList.css";
import NavItem from "./NavItem";

const navItem = [
  {
    id: 1,
    name: "DASHBOARD",
    color: "red",
    image: "src/assets/img/iconRed -large.png",
  },
  {
    id: 2,
    name: "RECYCLER",
    color: "green",
    image: "src/assets/img/iconGreen-large.png",
  },
  {
    id: 3,
    name: "PROCHAINEMENT",
    color: "gold",
    image: "src/assets/img/iconYellow -large.png",
  },
];

export default function MenuList() {
  return (
    <div className="menu-list">
      {navItem.map((item) => (
        <NavItem
          key={item.id}
          image={item.image}
          color={item.color}
          name={item.name}
        />
      ))}
    </div>
  );
}
