import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import Splashscreen from "../components/Splashscreen/Splashscreen";

function Login() {
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 2000);
  }, []);

  return (
    <div>
      {showSplashscreen && <Splashscreen />}
      <Form />
    </div>
  );
}

export default Login;
