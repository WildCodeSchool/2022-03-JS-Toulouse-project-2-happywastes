import { Link } from "react-router-dom";
import React from "react";
import "./ProfileButton.scss";

function ProfileButton() {
  return (
    <Link to="/settings">
      <span className="ProfileButton-btn" />
    </Link>
  );
}

export default ProfileButton;
