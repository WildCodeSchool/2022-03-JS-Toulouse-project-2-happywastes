import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Form.css";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("j'ai appuyé sur le bouton");
  };
  // TO DO REMOVE !!!!
  useEffect(() => {
    console.warn(firstname, lastname, mail, password, confirmPassword);
  }, []);

  return (
    <form onSubmit={HandleSubmit} className="formulaire">
      <div>
        <label htmlFor="firstname">
          firstname:
          <input
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            type="text"
            id="firstname"
            name="firstname"
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastname">
          lastname :
          <input
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            type="text"
            id="lastname"
            name="lastname"
          />
        </label>
      </div>

      <div>
        <label htmlFor="mail">
          e-mail :
          <input
            onChange={(e) => {
              setMail(e.target.value);
            }}
            type="email"
            id="mail"
            name="mail"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          password :
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            name="password"
          />
        </label>
      </div>
      <div>
        <label htmlFor="confirm-password">
          confirm password :
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </label>
      </div>
      <div>
        <button type="submit" className="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
}
