import { motion, AnimatePresence } from "framer-motion";
import MenuList from "../components/MainMenu/MainMenu";
import ProfileButton from "../components/ProfileButton/ProfileButton";

const variants = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "Inertia", duration: 0.18 },
  },
  exit: {
    x: -400,
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.18 },
  },
};

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        key="Home"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home"
      >
        <MenuList />
        <ProfileButton />
      </motion.div>
    </AnimatePresence>
  );
}
