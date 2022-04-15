import React from "react";
import Avatar from "../components/Common/Avatar/Avatar";
import NavBottom from "../components/Common/NavBottom/NavBottom";
import BackButton from "../components/BackButton/BackButton";

export default function Settings() {
  return (
    <div>
      <BackButton />
      <Avatar />
      {/* TODO add individual setting popups component */}
      <BackButton />
      <NavBottom />
    </div>
  );
}
