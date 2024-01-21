import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/ContextProvider";

const { screenSize } = useSidebar;

const SideMenuItem = ({ icon, label, path, onClick, sidebar }) => {
  const IsUrlActive = window.location.href.includes(path)
    ? "!bg-color-page"
    : "";

  const IsUrlActiveText = window.location.href.includes(path)
    ? "!text-white"
    : "";

  return (
    <NavLink
      to={path}
      className={`w-full px-5 py-3 hover:bg-color-page/10 transition-all duration-300 bg-white rounded-xl ${IsUrlActive}`}
      onClick={onClick}
    >
      <div
        className={`flex flex-row gap-8 text-color-page items-center w-full transition-all duration-500 flex-nowrap overflow-hidden ${IsUrlActiveText} ${
          sidebar || screenSize <= 768
            ? ""
            : "flex-col !gap-2 px-2 android:opacity-0 md:opacity-100 android:h-8 android:w-0 md:w-auto md:h-auto"
        }`}
      >
        {icon && <Icon className="w-8 h-8" icon={icon}></Icon>}

        <span
          className={`text-lg text-center font-medium overflow-hidden whitespace-nowrap text-clip ${
            sidebar || screenSize <= 768
              ? ""
              : "android:hidden sm:block android:w-0 android:opacity-0 md:opacity-100 md:w-auto"
          }`}
        >
          {label}
        </span>
      </div>
    </NavLink>
  );
};

export default SideMenuItem;
