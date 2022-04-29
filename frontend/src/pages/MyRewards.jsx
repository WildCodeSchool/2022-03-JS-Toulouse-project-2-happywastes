import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import MyRewardsList from "../components/MyRewardsList/MyRewardsList";
import MyRewardsTitle from "../components/MyRewardsList/MyRewardsTitle";
import MyRewardsSwitch from "../components/MyRewardsList/MyRewardsSwitch";
import BackButton from "../components/BackButton/BackButton";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import NavBottom from "../components/NavBottom/NavBottom";
import "./MyRewards.css";
import rewards from "../components/Dashboard/DataReward";
import variants from "../assets/js/variants";

export default function MyRewards() {
  const [slicing, setSlicing] = useState(0);
  const pagination = Math.ceil(rewards.length / 5);
  const lengthRewardsData = rewards.length;

  const nextSlicing = () => {
    setSlicing(slicing + 5);
  };
  const previousSlicing = () => {
    setSlicing(slicing - 5);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        key="Rewards"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="dashboard"
      >
        <ProfileButton />
        <BackButton />
        <div className="my-rewards-container">
          <MyRewardsTitle />
          <MyRewardsList slicing={slicing} />
          <MyRewardsSwitch
            slicing={slicing}
            pagination={pagination}
            funcNext={nextSlicing}
            funcPrevious={previousSlicing}
            dataLength={lengthRewardsData}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.5 } }}
        >
          <NavBottom />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
