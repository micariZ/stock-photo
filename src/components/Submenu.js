import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../globalContext";

function Submenu() {
  const { isSubmenuOpen, location, menuContent, closeSubmenu } =
    useGlobalContext();
  const submenuRef = useRef(null);
  const offset = 10;

  useEffect(() => {
    const { left, bottom } = location;
    const submenu = submenuRef.current;
    const width = submenu.getBoundingClientRect().width;
    submenu.style.left = `${left - width / 2}px`;
    submenu.style.top = `${bottom + offset}px`;
  }, [location]);

  const handleOnMouseLeave = (e) => {
    if (e.clientY > location.bottom + offset + 10) {
      setTimeout(() => {
        closeSubmenu();
      }, 1000);
    }
  };

  return (
    <aside
      ref={submenuRef}
      onMouseLeave={handleOnMouseLeave}
      className={isSubmenuOpen ? "submenu show" : "submenu"}
    >
      <h4> {menuContent.page}</h4>
      <ul className="submenu-content col-2">
        {menuContent.links.map((link, idx) => {
          const { label, icon, url } = link;
          return (
            <li key={idx}>
              {icon}
              <Link to={url} onClick={closeSubmenu}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Submenu;
