import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/ContextProvider";

const Admin = (props) => {
  const { sidebarOpen, screenSize, setScreenSize } = useSidebar();
  const [layer, setLayer] = useState("");

  const roles = localStorage.getItem("role");
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    (document.scrollingElement.scrollTop = 0),
      (document.documentElement.scrollTop = 0),
      (mainContent.current.scrollTop = 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (sidebarOpen === true && screenSize <= 768) {
      setLayer(
        "absolute left-0 top-0 bottom-0 right-0 bg-black opacity-50 z-50"
      );
    } else {
      setLayer("");
    }
  }, [setLayer, sidebarOpen, screenSize]);

  const getRoutes = (routes, layout) => {
    return routes
      .filter((prop) => prop.layout === layout.toLowerCase())
      .map((prop, key) => (
        <Route path={prop.path} element={prop.component} key={key} exact />
      ));
  };

  return (
    <div>
      <div className={`${layer}`}></div>
      <Sidebar {...props} routes={routes} />
      <div
        className={`bg-color-dashboard w-full h-screen overflow-auto transition-all duration-500 ${
          sidebarOpen
            ? "android:pl-[0px] md:pl-[300px]"
            : "android:!pl-[0px] md:!pl-[200px]"
        }`}
        ref={mainContent}
      >
        <Routes>{getRoutes(routes, `/${roles}`)}</Routes>
      </div>
    </div>
  );
};

export default Admin;
