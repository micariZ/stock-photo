import React, { useState, useEffect } from "react";
import navData from "../data/navData";
import logo from "../images/logo.png";
import "../style/navBar.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";
import { useHistory, useLocation } from "react-router-dom";
import SearchBar from "./common/SearchBar";

function NavBar() {
  const {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
  } = useGlobalContext();
  const history = useHistory();
  const path = useLocation();
  const [showDetailedVersion, setshowDetailedVersion] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 300) {
      setshowDetailedVersion(true);
    } else if (path.pathname === "/") {
      setshowDetailedVersion(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    setshowDetailedVersion(path.pathname !== "/");
  }, [path.pathname]);

  const handleSidebarClick = () => {
    isSidebarOpen ? closeSidebar() : openSidebar();
  };

  const handleMouseOver = (e) => {
    if (
      !e.target.classList.contains("nav-link") &&
      !e.target.classList.contains("nav-item")
    ) {
      closeSubmenu();
    }
  };

  const handleMouseOverItem = (e) => {
    const temp = e.target.getBoundingClientRect();
    const left = (temp.left + temp.right) / 2;
    const bottom = temp.bottom;
    openSubmenu(e.target.innerHTML, { left, bottom });
  };

  const directHome = () => {
    history.push(`/`);
    closeSidebar();
    setshowDetailedVersion(false);
  };

  return (
    <nav
      onMouseOver={handleMouseOver}
      className={showDetailedVersion ? "nav nav-dark" : "nav"}
    >
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
          <li onMouseOver={handleMouseOverItem} key={idx} className="nav-item">
            {item.page}
          </li>
        ))}
      </ul>
      <button className="btn sign-btn">Sign in</button>
    </nav>
  );
}

export default NavBar;
