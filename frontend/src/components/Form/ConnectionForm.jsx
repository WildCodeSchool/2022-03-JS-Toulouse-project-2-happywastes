import React, { useState, useContext, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GlobalUserContext } from "../GlobalUserContext";
import logo from "../../assets/img/HW_LogoBlue-large.png";

function ConnectionForm() {
  const userContext = useContext(GlobalUserContext);
  const setAvatarLink = userContext.avatarLink[1];
  const [userMail, setUserMail] = userContext.userMail;
  const [mail, setMail] = useState("");
  const setUser = userContext.user[1];
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    const notify = () => {
      toast.error("Identifiants invalide", {
        className: "black-background",
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/${mail}`,
        { email: mail, password },
        [mail, password]
      )
      .then(() => {
        setUserMail(mail);
        setUser(true);
        navigate("/");
      })
      .catch(() => {
        notify();
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/avatar/obtain/${userMail}`)
      .then((response) => {
        setAvatarLink(response.data.avatar_url);
      });
  }, [userMail]);

  return (
    <div className="main-container">
      <ToastContainer />
      <img className="logo-form-connection" src={logo} alt="logo" />
      <div className="container-form">
        <form className="form-connection" onSubmit={HandleSubmit}>
          <h2 className="title-account-form">Connection</h2>
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
          <Link className="account-connection-link" to="/create-account">
            Créer un compte ici
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ConnectionForm;
