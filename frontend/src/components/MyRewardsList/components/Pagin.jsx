import React from "react";
import "./Pagin.css";

export default function Pagin({ roundSelected }) {
  return (
    <div>
      <div className={roundSelected} />
    </div>
  );
}
