import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalUserContext } from "../components/GlobalUserContext";
import ConnectionForm from "../components/Form/ConnectionForm";
import Splashscreen from "../components/Splashscreen/Splashscreen";

function Login() {
  const userContext = useContext(GlobalUserContext);
  const [setUserValue] = userContext.user;
  const [showSplashscreen, setShowSplashscreen] = useState(true);
  const [showConnectionForm, setShowConnectionForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowConnectionForm(true);
    }, 2000);
  }, []);

  return (
    <div>
      {showSplashscreen && <Splashscreen />}
      <Link
        onClick={() => {
          setUserValue(false);
        }}
        to="/"
      />
      {showConnectionForm && <ConnectionForm />}
    </div>
  );
}

export default Login;
