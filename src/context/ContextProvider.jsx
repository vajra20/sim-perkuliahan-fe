// context/SidebarContext.js
import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const toggleEvent = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        toggleEvent,
        sidebarOpen,
        setSidebarOpen,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
