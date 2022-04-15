import React from "react";
import MenuList from "../components/Settings/SettingsMenuList/MenuList";
import BackButton from "../components/BackButton/BackButton";
import NavBottom from "../components/Common/NavBottom/NavBottom";

export default function Settings() {
  return (
    <div>
      {/* TODO add Avatar component */}
      {/* TODO add individual setting popups component */}
      <MenuList />
      <BackButton />
      <NavBottom />
      <BackButton />
    </div>
  );
}
