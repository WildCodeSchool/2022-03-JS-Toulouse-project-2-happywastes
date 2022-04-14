import { Link } from "react-router-dom";
import React from "react";
import "./back-button.css";

export default function BackButton() {
  return (
    <Link to="settings">
      <div className="back-button">coucou</div>
    </Link>
  );
}
