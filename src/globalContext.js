import React, { useState, useContext, useEffect } from "react";
import { SCREEN_SIZE_BREAKPOINT } from "./config";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth >= 1024 ? true : false
  );

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

  return (
    <GlobalContext.Provider
      value={{ isWideScreen, isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
