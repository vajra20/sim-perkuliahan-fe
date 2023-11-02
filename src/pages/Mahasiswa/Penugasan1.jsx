import React from "react";
import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard";

const penugasan1 = () => {
  return (
    <div className="w-full h-full ">
      <Sidebar />
      <div className="bg-color-dashboard w-full overflow-auto h-screen pl-[300px]">
        <NavbarDashboard />
      </div>
    </div>
  );
};

export default penugasan1;
