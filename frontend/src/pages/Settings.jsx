import React from "react";
import Avatar from "../components/Common/Avatar/Avatar";
import NavBottom from "../components/Common/NavBottom/NavBottom";
import MenuList from "../components/Settings/SettingsMenuList/MenuList";
import BackButton from "../components/BackButton/BackButton";

export default function Settings() {
  return (
    <div>
      <BackButton />
      <Avatar />
      {/* TODO add individual setting popups component */}
      <MenuList />
      <BackButton />
      <NavBottom />
      <BackButton />
    </div>
  );
}
