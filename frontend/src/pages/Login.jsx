import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form/Form";
import Splashscreen from "../components/Splashscreen/Splashscreen";
import UserContext from "../components/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 2000);
  }, []);

  return (
    <div>
      {showSplashscreen && <Splashscreen />}
      <Link
        onClick={() => {
          setUser(false);
        }}
        to="/"
      />
      <Form />
    </div>
  );
}

export default Login;
