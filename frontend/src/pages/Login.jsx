import React, { useState, useEffect } from "react";
import Splashscreen from "../components/Splashscreen/Splashscreen";

function Login() {
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 2000);
  }, []);

  return <div>{showSplashscreen && <Splashscreen />}</div>;
}

export default Login;
