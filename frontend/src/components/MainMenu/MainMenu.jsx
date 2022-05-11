/* eslint-disable global-require */
import React from "react";
import "./MainMenu.css";
import NavItem from "../NavItem/NavItem";

const navItem = [
  {
    id: 1,
    name: "JOURNAL",
    color: "red",
    image: require("../../assets/img/iconRed-large.png"),
    routePath: "dashboard",
  },
  {
    id: 2,
    name: "RECYCLER",
    color: "green",
    image: require("../../assets/img/iconGreen-large.png"),
    routePath: "recycler",
  },
  {
    id: 3,
    name: "PROCHAINEMENT",
    color: "gold",
    image: require("../../assets/img/iconYellow-large.png"),
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
