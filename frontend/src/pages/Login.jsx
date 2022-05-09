import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ConnectionForm from "../components/Form/ConnectionForm";
import Splashscreen from "../components/Splashscreen/Splashscreen";
import UserContext from "../components/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
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
          setUser(false);
        }}
        to="/"
      />
      {showConnectionForm && <ConnectionForm />}
    </div>
  );
}

export default Login;
