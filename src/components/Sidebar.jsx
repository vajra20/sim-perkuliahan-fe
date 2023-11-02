import React from "react";
import SideMenuItem from "./SideMenuItem";
import homeIcon from "@iconify/icons-tabler/home";
import scheduleIcon from "@iconify/icons-akar-icons/schedule";

const Sidebar = () => {
  const menus = [
    { icon: homeIcon, label: "Beranda", path: "/path" },
    { icon: scheduleIcon, label: "Jadwal", path: "/path" },
    { icon: scheduleIcon, label: "Penugasan", path: "/path" },
  ];
  return (
    <div className="px-5 py-4 absolute w-[300px] h-screen bg-white border-r-2 border-gray-300">
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

      <div className="flex flex-col gap-4">
        {menus.map((menu, index) => (
          <SideMenuItem key={index} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
