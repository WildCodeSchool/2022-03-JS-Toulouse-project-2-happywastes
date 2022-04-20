import React from "react";
import SettingsMenuList from "../components/SettingsMenuList/SettingsMenuList";
import Avatar from "../components/Avatar/Avatar";
import NavBottom from "../components/NavBottom/NavBottom";
import BackButton from "../components/BackButton/BackButton";

export default function Settings() {
  return (
    <div>
      <BackButton />
      <Avatar />
      {/* TODO add individual setting popups component */}
      <SettingsMenuList />
      <BackButton />
      <NavBottom />
      <BackButton />
    </div>
  );
}
