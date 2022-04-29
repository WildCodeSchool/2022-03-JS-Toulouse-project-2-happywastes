import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Form.css";

export default function Form({ setShowMainMenu }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    setShowMainMenu(false);
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
          <h2>Inscription</h2>
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
