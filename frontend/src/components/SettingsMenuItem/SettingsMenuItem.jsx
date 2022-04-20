import { Link } from "react-router-dom";
import "./SettingsMenuItem.css";
import "../../assets/css/main.css";
import React from "react";

function SettingsMenuItem(props) {
  const { title, color, image, routePath } = props;
  return (
    <Link to={routePath}>
      <div className={`settings-menu-item ${color}`}>
        <img className="settings-menu-item-image" src={image} alt="" />
        <p className="settings-menu-item-text">{title}</p>
      </div>
    </Link>
  );
}

export default SettingsMenuItem;
