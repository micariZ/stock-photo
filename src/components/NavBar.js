import React, { useState, useEffect } from "react";
import navData from "../data/navData";
import logo from "../images/logo.png";
import "../style/navBar.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";
import { useHistory, useLocation } from "react-router-dom";
import SearchBar from "./common/SearchBar";

function NavBar() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  const history = useHistory();
  const path = useLocation();
  const [showDetailedVersion, setshowDetailedVersion] = useState(
    path.pathname !== "/"
  );

  const listenScrollEvent = () => {
    if (window.scrollY > 300) {
      setshowDetailedVersion(true);
    } else {
      setshowDetailedVersion(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleSidebarClick = () => {
    isSidebarOpen ? closeSidebar() : openSidebar();
  };

  const directHome = () => {
    history.push(`/`);
    closeSidebar();
    setshowDetailedVersion(false);
  };

  return (
    <nav className={showDetailedVersion ? "nav nav-dark" : "nav"}>
      <div className="nav-header" onClick={directHome}>
        <img src={logo} alt="logo" className="nav_logo" />
        <p className="nav-title">PhotoStock</p>
        {showDetailedVersion && <SearchBar />}
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
