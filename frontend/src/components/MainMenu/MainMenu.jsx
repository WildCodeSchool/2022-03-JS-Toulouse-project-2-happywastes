import React from "react";
import "./MainMenu.css";
import NavItem from "../NavItem/NavItem";
import inconRed from "../../assets/img/iconRed-large.png";
import iconGreen from "../../assets/img/iconGreen-large.png";
import iconYellow from "../../assets/img/iconYellow-large.png";

const navItem = [
  {
    id: 1,
    name: "JOURNAL",
    color: "red",
    image: inconRed,
    routePath: "dashboard",
  },
  {
    id: 2,
    name: "RECYCLER",
    color: "green",
    image: iconGreen,
    routePath: "recycler",
  },
  {
    id: 3,
    name: "PROCHAINEMENT",
    color: "gold",
    image: iconYellow,
    routePath: "prochainement",
  },
];

export default function MainMenu() {
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
