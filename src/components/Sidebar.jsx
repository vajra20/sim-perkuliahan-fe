import React, { useState } from "react";
import { NavLink as NavLinkSide, Link, Route } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import routes from "../routes";

const Sidebar = () => {
  const userRole = "dosen";
  const [collapseOpen, setCollapseOpen] = useState();
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
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
            ></SideMenuItem>
          </>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="px-5 py-4 absolute w-[300px] h-screen bg-white border-r-2 border-gray-300">
      <Link to="/mahasiswa/beranda">
        <div className="flex flex-row gap-5 items-center mb-20">
          <img className=" w-14 h-14" src="/public/logo.png" alt="logo" />
          <div className="flex flex-col text-left android:hidden md:flex">
            <span className="text-color-page text-xl font-medium -mb-1.5">
              ITB SWARDHARMA
            </span>
            <span className="text-color-page text-xs font-normal italic">
              E-Learning
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-4">{createLinks()}</div>
    </div>
  );
};

export default Sidebar;
