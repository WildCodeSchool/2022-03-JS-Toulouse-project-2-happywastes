/* eslint-disable global-require */
import React from "react";
import SettingsMenuItem from "../SettingsMenuItem/SettingsMenuItem";
import "./SettingsMenuList.css";

const settingMenuItem = [
  {
    id: 1,
    image: require("../../assets/img/iconRed-large.png"),
    title: "Modifier mon avatar",
    color: "red",
    routePath: "avatar-popup",
  },
  {
    id: 2,
    title: "Mon identifiant",
    image: require("../../assets/img/iconGreen-large.png"),
    color: "green",
    routePath: "identifiant/popup",
  },
  {
    id: 3,
    title: "Mes favoris",
    image: require("../../assets/img/iconYellow-large.png"),
    color: "gold",
    routePath: "favoris/popup",
  },
];

function SettingsMenuList({ setAvatarInfo, avatarInfo }) {
  return (
    <div className="settings-menu-list-container">
      {settingMenuItem.map((item) => (
        <SettingsMenuItem
          className="settings-menu-item"
          image={item.image}
          key={item.id}
          title={item.title}
          color={item.color}
          routePath={item.routePath}
          setAvatarInfo={setAvatarInfo}
          avatarInfo={avatarInfo}
        />
      ))}
    </div>
  );
}

export default SettingsMenuList;
