import React from "react";
import navData from "../data/navData";
import logo from "../images/logo.png";
import "../style/navBar.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";

function NavBar() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  const handleSidebarClick = () => {
    isSidebarOpen ? closeSidebar() : openSidebar();
  };

  return (
    <nav className="nav">
      <div className="nav-header">
        <img src={logo} alt="logo" className="nav_logo" />
        <p className="nav_title">PhotoStock</p>
      </div>

      <button className="sidebar-button" onClick={handleSidebarClick}>
        <FaBars />
      </button>

      <ul className="nav-link">
        {navData.map((item, idx) => (
          <li key={idx} className="nav_item">
            {item.page}
          </li>
        ))}
      </ul>
      <button className="btn sign-btn">Sign in</button>
    </nav>
  );
}

export default NavBar;
