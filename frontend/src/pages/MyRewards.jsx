import React from "react";
import MyRewardsList from "../components/MyRewardsList/MyRewardsList";
import MyRewardsTitle from "../components/MyRewardsList/MyRewardsTitle";
import MyRewardsSwitch from "../components/MyRewardsList/MyRewardsSwitch";
import BackButton from "../components/BackButton/BackButton";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import "./MyRewards.css";

export default function MyRewards() {
  return (
    <div>
      <ProfileButton />
      <BackButton />
      <div className="my-rewards-container">
        <MyRewardsTitle />
        <MyRewardsList />
        <MyRewardsSwitch />
      </div>

      <NavBottom />
    </div>
  );
}
