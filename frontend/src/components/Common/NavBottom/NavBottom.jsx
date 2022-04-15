import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBottom.css";

function NavBottom() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="NavBottomMain">
      <div
        onClick={() => setShowMenu(false)}
        role="button"
        tabIndex="0"
        onKeyDown={() => setShowMenu(false)}
        className={showMenu ? " NavBottom-On" : "NavBottom-Off"}
      >
        &nbsp;
      </div>
      <div className={showMenu ? "NavBottom NavBottom-Opened" : "NavBottom"}>
        <div className="NavBottom-Top">
          <div
            onClick={() => setShowMenu(!showMenu)}
            role="button"
            tabIndex="0"
            onKeyDown={() => setShowMenu(!showMenu)}
          >
            <img
              className={
                showMenu
                  ? "Icon-Menu-Btn Icon-Menu-Btn-Opened"
                  : "Icon-Menu-Btn"
              }
              src="src/assets/img/MENU-BTN.png"
              alt="icon Menu Btn"
            />
          </div>
        </div>
        <ul className="NavBottom-Bottom">
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
