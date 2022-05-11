import React from "react";
import SettingsMenuItem from "../SettingsMenuItem/SettingsMenuItem";
import "./SettingsMenuList.css";
import inconRed from "../../assets/img/iconRed-large.png";
import iconGreen from "../../assets/img/iconGreen-large.png";
import iconYellow from "../../assets/img/iconYellow-large.png";

const settingMenuItem = [
  {
    id: 1,
    image: inconRed,
    title: "Modifier mon avatar",
    color: "red",
    routePath: "avatar-popup",
  },
  {
    id: 2,
    title: "Mon identifiant",
    image: iconGreen,
    color: "green",
    routePath: "identifiant/popup",
  },
  {
    id: 3,
    title: "Mes favoris",
    image: iconYellow,
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
