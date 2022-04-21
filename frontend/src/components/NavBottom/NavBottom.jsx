import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBottom.css";

function NavBottom() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav-bottom-main" style={showMenu ? { height: "100%" } : {}}>
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
                  ? "icon-menu-btn icon-menu-btn-opened"
                  : "icon-menu-btn"
              }
              src="src/assets/img/MENU-BTN.png"
              alt="icon Menu Btn"
            />
          </div>
        </div>
        <ul className="nav-bottom-bottom">
          <li>
            <Link to="/dashboard" className="navBottom-btn icon-dashboard">
              <span className="span-dashboard">DASHBOARD</span>
            </Link>
          </li>
          <li>
            <Link to="/recycler" className="navBottom-btn icon-recycler">
              <span className="span-recycler">RECYCLER</span>
            </Link>
          </li>
          <li>
            <div className="navBottom-btn icon-default">
              <span className="span-prochainement">BIENTÔT !</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBottom;
