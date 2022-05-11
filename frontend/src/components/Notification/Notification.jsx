import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Notification.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Notification() {
  const [searchParams] = useSearchParams();
  let notifRecyclage = searchParams.get("notif");

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const notify = () => {
    setShowConfetti(true);
    toast("Félicitation, vous venez de recycler 🎉 ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => setShowConfetti(false), 5000);
  };

  useEffect(() => {
    if (notifRecyclage === "true") {
      notify();
      notifRecyclage = false;
    }
  }, []);

  return (
    <div>
      {showConfetti && (
        <Confetti
          tweenDuration={4000}
          recycle={false}
          width={width}
          height={height}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Notification;
