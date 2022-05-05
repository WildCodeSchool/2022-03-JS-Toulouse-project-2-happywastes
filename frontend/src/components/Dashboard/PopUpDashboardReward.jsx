import React, { useState } from "react";
import PopUpReward from "../MyRewardsList/components/PopUpReward";
import "../MyRewardsList/components/PopUpReward.css";

export default function PopUpDashboardReward({ img, level }) {
  const [popupReward, setPopupReward] = useState(false);

  const popUpAppear = () => {
    setPopupReward(!popupReward);
  };
  return (
    <div className="popup-dashboard-reward">
      <button type="button" onClick={() => popUpAppear()}>
        <img className="img-reward" src={img} alt="img-level" />
      </button>
      {popupReward && (
        <PopUpReward img={img} level={level} funcClosePopup={popUpAppear} />
      )}
    </div>
  );
}
