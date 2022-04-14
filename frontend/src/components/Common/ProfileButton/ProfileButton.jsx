import { Link } from "react-router-dom";
import React from "react";
import "./ProfileButton.scss";

function ProfileButton() {
  return (
    <Link to="settings">
      <img
        src="src/assets/img/iconParams-small.png"
        alt="parameters"
        className="ProfileButton-btn"
      />
    </Link>
  );
}

export default ProfileButton;
