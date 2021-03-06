import React, { useState, useContext } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import { GlobalUserContext } from "../GlobalUserContext";
import logo from "../../assets/img/HW_LogoBlue-large.png";

export default function Form() {
  const userContext = useContext(GlobalUserContext);
  const setUser = userContext.user[1];
  const navigate = useNavigate();
  const [firstname, setFirstname] = userContext.firstname;
  const [lastname, setLastname] = userContext.lastname;
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warning, setWarning] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setWarning("Les mots de passes ne correspondent pas !");
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/create/user`, {
          firstName: firstname,
          lastName: lastname,
          email: mail,
          avatar_url: "",
          password,
          favourites: "",
        })
        .then((response) => response.status);
      navigate("/", { replace: true });
      setUser(true);
    }
  };

  return (
    <div className="main-container">
      <img className="logo-form" src={logo} alt="logo" />
      <div className="container-form">
        <form className="form" onSubmit={HandleSubmit}>
          <h2 className="title-account-form">Inscription</h2>
          <h3 className="warning-account-creation">{warning}</h3>
          <div className="input-container">
            <label htmlFor={firstname}>
              <span className="label-text">Prénom :</span>
              <span className="span-icon">
                <div className="icon">
                  <FaUserAlt />
                </div>
              </span>
              <input
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                type="text"
                id="firstname"
                name="firstname"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label htmlFor={lastname}>
              <span className="label-text">Nom :</span>
              <div className="icon">
                <FaUserAlt />
              </div>
              <input
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                type="text"
                id="lastname"
                name="lastname"
                required
              />
            </label>
          </div>

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
          <div className="input-container">
            <label htmlFor={confirmPassword}>
              <span className="label-text">Confirmer mot de passe :</span>
              <div className="icon">
                <FaLock />
              </div>
              <input
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
              />
            </label>
          </div>
          <button type="submit" className="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
