import React from "react";
import "./MyRewardsList.css";
import Reward from "./components/Reward";
import rewards from "../Dashboard/DataReward";

export default function MyRewardsList() {
  return (
    <div className="my-rewards-list">
      {rewards.slice(rewards.length - 3).map((element) => (
        <Reward
          key={element.id}
          img={element.img}
          name={element.name}
          id={element.id}
          level={element.level}
          color={element.color}
        />
      ))}
    </div>
  );
}
