import React, { useEffect, useState } from "react";
import SideMenuItem from "./SideMenuItem";
import routes from "../routes";
import { useSidebar } from "../context/ContextProvider";
import { Icon } from "@iconify/react";
import arrowLeftBold from "@iconify/icons-ph/arrow-left-bold";

const Sidebar = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    toggleEvent,
    screenSize,
    setScreenSize,
  } = useSidebar();

  const userRole = localStorage.getItem("role");

  const [widthMenu, setWidthMenu] = useState("");

  const handleCloseSideBar = () => {
    if (sidebarOpen !== undefined && screenSize <= 768) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen === false) {
      setWidthMenu("md:!w-[200px] android:!w-[0px]");
    } else {
      setWidthMenu("");
    }
  }, [setWidthMenu, sidebarOpen]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize <= 1100) {
      setSidebarOpen(false);
    } else if (screenSize >= 1100) {
      setSidebarOpen(true);
    }
  }, [screenSize, setSidebarOpen]);

  const createLinks = () => {
    return routes.map((prop, key) => {
      if (prop.allow === true && (!prop.role || prop.role === userRole)) {
        return (
          <>
            <SideMenuItem
              key={key}
              path={prop.layout + prop.path}
              icon={prop.icon}
              label={prop.name}
              sidebar={sidebarOpen}
              onClick={handleCloseSideBar}
            ></SideMenuItem>
          </>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div
      className={`flex  flex-col justify-between md:px-5 py-4 overflow-hidden absolute w-[300px] h-screen bg-white border-r-2 border-gray-300 transition-all duration-500 ${widthMenu} z-infinity ${
        sidebarOpen ? "android:px-2.5" : "android:px-0"
      }`}
    >
      <div className="w-full ">
        <div
          className={`flex flex-row gap-5 items-center mb-20 ${
            sidebarOpen ? "flex-row" : "!flex-col !gap-2.5 !mb-14 "
          }`}
        >
          <div className={`${sidebarOpen ? "" : "flex w-full justify-center"}`}>
            <img className=" w-14 h-14" src="/public/logo.png" alt="logo" />
          </div>
          <div
            className={`flex flex-col text-left ${
              sidebarOpen && screenSize <= 768
                ? ""
                : "!gap-1 android:hidden sm:flex android:opacity-0 md:opacity-100 android:w-0 md:w-auto android:h-0 md:h-auto"
            }`}
          >
            <span
              className={`text-color-page text-xl font-medium -mb-1.5 text-center whitespace-wrap ${
                sidebarOpen ? "" : "!text-base !font-bold "
              }`}
            >
              ITB SWARDHARMA
            </span>
            <span
              className={`text-color-page text-xs font-normal italic ${
                sidebarOpen ? "" : "!text-center"
              }`}
            >
              E-Learning
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">{createLinks()}</div>
      </div>

      {screenSize <= 768 && (
        <div className="w-full flex justify-center">
          <button
            className="flex justify-center items-center text-color-page rounded-full p-2.5 bg-white hover:bg-blue-100 transition-all duration-300"
            onClick={toggleEvent}
          >
            <Icon icon={arrowLeftBold} className="w-5 h-5 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
