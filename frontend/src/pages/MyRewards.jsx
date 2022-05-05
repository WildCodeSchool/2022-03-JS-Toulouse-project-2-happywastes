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
  const lengthRewardsData = rewards.length;
  const pagination = Math.ceil(lengthRewardsData / 5);
  const [count, setCount] = useState(1);

  const nextSlicing = () => {
    if (count >= pagination) {
      setSlicing(0);
      setCount(1);
    } else {
      setSlicing(slicing + 5);
      setCount(count + 1);
    }
  };
  const previousSlicing = () => {
    if (count <= 1) {
      setSlicing((pagination - 1) * 5);
      setCount(pagination);
    } else {
      setSlicing(slicing - 5);
      setCount(count - 1);
    }
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
            setSlicing={setSlicing}
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
