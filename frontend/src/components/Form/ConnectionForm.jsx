import React, { useState, useContext } from "react";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import UserContext from "../UserContext";

function ConnectionForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/api/user/${mail}`,
        { email: mail, password },
        [mail, password]
      )
      .then((response) => {
        console.log(response, ": bien transmis");
        navigate("/", { replace: true });
        setUser(true);
      })
      .catch((error) => {
        console.error(error);
        alert("Identifiants invalide");
      });
  };

  return (
    <div className="main-container">
      <img
        className="logo-form"
        src="src/assets/img/HW_LogoBlue-large.png"
        alt="logo"
      />
      <div className="container-form">
        <form className="form" onSubmit={HandleSubmit}>
          <h2>Connection</h2>
          <div className="input-container">
            <label htmlFor={mail}>
              <span className="label-text">Email :</span>
              <div className="icon">
                <IoMail />
              </div>
              <input
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                type="email"
                id="mail"
                name="mail"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor={password}>
              <span className="label-text">Mot de passe :</span>
              <div className="icon">
                <FaLock />
              </div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                name="password"
                required
              />
            </label>
          </div>
          <button type="submit" className="submit">
            Envoyer
          </button>
          <Link to="/create-account">
            Pas encore inscrit? Créer votre compte ici!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ConnectionForm;
