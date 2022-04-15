import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBottom.css";

function NavBottom() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav-bottom-main">
      <div
        onClick={() => setShowMenu(false)}
        role="button"
        tabIndex="0"
        onKeyDown={() => setShowMenu(false)}
        className={showMenu ? " nav-bottom-on" : "nav-bottom-off"}
      >
        &nbsp;
      </div>
      <div className={showMenu ? "nav-bottom nav-bottom-opened" : "nav-bottom"}>
        <div className="nav-bottom-top">
          <div
            onClick={() => setShowMenu(!showMenu)}
            role="button"
            tabIndex="0"
            onKeyDown={() => setShowMenu(!showMenu)}
          >
            <img
              className={
                showMenu
                  ? "icon-Menu-Btn icon-Menu-Btn-Opened"
                  : "icon-Menu-Btn"
              }
              src="src/assets/img/MENU-BTN.png"
              alt="icon Menu Btn"
            />
          </div>
        </div>
        <ul className="nav-bottom-bottom">
          <li>
            <Link to="/dashboard">
              <img src="src/assets/img/iconRed-small.png" alt="icon Red" />
            </Link>
          </li>
          <li>
            <Link to="/recycler">
              <img src="src/assets/img/iconGreen-small.png" alt="icon Green" />
            </Link>
          </li>
          <li>
            <img src="src/assets/img/iconYellow-small.png" alt="icon Yellow" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBottom;
