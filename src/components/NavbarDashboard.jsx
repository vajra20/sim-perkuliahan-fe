import React from "react";
import LiveDate from "../components/LiveDate";

const NavbarDashboard = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center px-7 py-3 border-gray-300 border-b-2">
      <LiveDate />
      <div className="flex items-center gap-6">
        <img
          src="/public/profile.png"
          alt=""
          className="rounded-full w-8 h-8 object-cover"
        ></img>
        <span>Ryan Gosling</span>
      </div>
    </div>
  );
};

export default NavbarDashboard;
