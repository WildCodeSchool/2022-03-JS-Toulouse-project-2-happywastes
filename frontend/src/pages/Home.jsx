import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GlobalUserContext } from "../components/GlobalUserContext";
import MainMenu from "../components/MainMenu/MainMenu";
import Login from "./Login";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import variants from "../assets/js/variants";

export default function Home() {
  const userContext = useContext(GlobalUserContext);
  const [user] = userContext.user;
  const [userMail] = userContext.userMail;

  const notify = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userMail}`)
      .then((response) => {
        toast.success(`Connecté en tant que ${response.data.firstName}!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    notify();
  }, []);
  return (
    <div className="home">
      {!user ? (
        <Login />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={variants}
            key="Home"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ToastContainer />
            <MainMenu />
            <ProfileButton />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
