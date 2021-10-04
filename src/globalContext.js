import React, { useState, useContext, useEffect } from "react";
import { SCREEN_SIZE_BREAKPOINT } from "./config";
import navData from "./data/navData";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth >= 1024 ? true : false
  );
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [menuContent, setmenuContent] = useState({ page: "", links: [] });
  const [searchTerm, setSearchTerm] = useState([]);

  const listenResizeEvent = () => {
    if (window.innerWidth < SCREEN_SIZE_BREAKPOINT) {
      return setIsWideScreen(false);
    } else {
      return setIsWideScreen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", listenResizeEvent);
    return () => window.removeEventListener("resize", listenResizeEvent);
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (page, location) => {
    const content = navData.find((item) => item.page === page);
    setLocation(location);
    setmenuContent(content);
    setisSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };

  const cleanAll = () => {
    setSearchTerm([]);
    setisSubmenuOpen(false);
    setisSubmenuOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        isSubmenuOpen,
        isWideScreen,
        isSidebarOpen,
        location,
        menuContent,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        setSearchTerm,
        cleanAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
