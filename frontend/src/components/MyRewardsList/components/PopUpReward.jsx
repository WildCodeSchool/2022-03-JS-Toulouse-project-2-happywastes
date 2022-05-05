import React from "react";
import "../../../assets/css/popup.scss";
import "./PopUpReward.css";

export default function PopUpReward({ funcClosePopup, img, level }) {
  return (
    <div className="popup">
      <div className="popup-card header">
        <div className="btn-close">
          <button
            className="popup-button"
            type="submit"
            onClick={() => funcClosePopup()}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="xmark"
              className="svg-inline--fa fa-xmark "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </button>
        </div>

        <div className="popup-corps">
          <h1 className="h1-title">Informations</h1>
          <p className="text-level">{level} XP</p>
          <img src={img} alt="badge" />
          <p>Grace à ce badge, vous avez pu recycler un ours en peluche.</p>
          <img
            id="img-object-recycled"
            src="https://media4.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif?cid=ecf05e47t7o54qc7zubpjlsngcyaohhuai9vb03nlcumxiw4&rid=giphy.gif&ct=g"
            alt="ours en peluche"
          />
        </div>
      </div>
    </div>
  );
}
