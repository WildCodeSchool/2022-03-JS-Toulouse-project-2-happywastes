import React from "react";
import "./menuList.css";
import NavItem from "./NavItem";

const navItem = [
  {
    id: 1,
    name: "DASHBOARD",
    color: "red",
    image: "src/assets/img/iconRed -large.png",
    routePath: "journal",
  },
  {
    id: 2,
    name: "RECYCLER",
    color: "green",
    image: "src/assets/img/iconGreen-large.png",
    routePath: "recycler",
  },
  {
    id: 3,
    name: "PROCHAINEMENT",
    color: "gold",
    image: "src/assets/img/iconYellow -large.png",
    routePath: "prochainement",
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
          routePath={item.routePath}
        />
      ))}
    </div>
  );
}
