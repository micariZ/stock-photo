import React from "react";
import navData from "../data/navData";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import { useGlobalContext } from "../globalContext";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <section className={isSidebarOpen ? "sidebar show" : "sidebar"}>
      <div className="sidebar-content">
        <h2 className="title nav-section">
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
        </h2>

        {navData.map((item, idx) => {
          const { page, links } = item;
          return (
            <div key={idx} className="nav-section">
              <h2 className="title">{page}</h2>
              <ul>
                {links.map((link, id) => {
                  return (
                    <li key={id}>
                      {link.icon}{" "}
                      <Link onClick={closeSidebar} to={link.url}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
