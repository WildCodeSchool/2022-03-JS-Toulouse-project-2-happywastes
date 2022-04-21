import React from "react";
import imgPaginClear from "../../../assets/img/pagination-clair.png";
import "./Pagin.css";

export default function Pagin({ roundSelected }) {
  return (
    <div>
      <div className={roundSelected} />
    </div>
  );
}
