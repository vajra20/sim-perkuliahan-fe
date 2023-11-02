import React from "react";
import { Icon } from "@iconify/react";

const SideMenuItem = ({ icon, label, path }) => {
  return (
    <div className="w-full px-5 py-3 bg-white rounded-lg">
      <div className="flex flex-row gap-8 text-color-page items-center w-full">
        <a href={path}>
          {icon && <Icon className="w-8 h-8" icon={icon}></Icon>}
        </a>
        <span className="text-lg font-medium">{label}</span>
      </div>
    </div>
  );
};

export default SideMenuItem;
