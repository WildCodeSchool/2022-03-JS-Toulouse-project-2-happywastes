import React from "react";
import "./back-button.css";
import { useNavigate } from "react-router-dom";

export default function BackButton({ url }) {
  const navigate = useNavigate();

  function goBack() {
    navigate(url || -1);
  }

  return (
    <div className="back-button">
      <button type="button" onClick={goBack} className="btn-back">
        &nbsp;
      </button>
    </div>
  );
}
