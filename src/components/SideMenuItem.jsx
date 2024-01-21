import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

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
        to={path}
        className={`flex flex-row gap-8 text-color-page items-center w-full transition-all duration-500 ${IsUrlActiveText} ${
          sidebar ? "" : "flex-col !gap-2 px-2"
        }`}
      >
        {icon && <Icon className="w-8 h-8" icon={icon}></Icon>}

        <span
          className={`text-lg text-center font-medium ${
            sidebar ? "" : "android:hidden sm:block"
          }`}
        >
          {label}
        </span>
      </div>
    </NavLink>
  );
};

export default SideMenuItem;
