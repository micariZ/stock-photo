import React from "react";
import navData from "../data/navData";
import logo from "../images/logo.png";
import "../style/navBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-header">
        <img src={logo} alt="logo" className="nav_logo" />
        <p className="nav_title">PhotoStock</p>
      </div>
      <ul className="nav-link">
        {navData.map((item, idx) => (
          <li key={idx} className="nav_item">
            {item.page}
          </li>
        ))}
      </ul>
      <button className="btn">Sign in</button>
    </nav>
  );
}

export default NavBar;
