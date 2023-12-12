import LiveDate from "../components/LiveDate";
import React from "react";
import { Dropdown } from "antd";
import { Icon } from "@iconify/react";
import logoutIcon from "@iconify/icons-mdi/logout";
import { useNavigate } from "react-router-dom";
import profileFill from "@iconify/icons-iconamoon/profile-fill";

const NavbarDashboard = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="flex gap-1 items-center text-gray-sub">
          <Icon icon={profileFill} className="w-5 h-5"></Icon>
          <span
            className="android:block sm:hidden"
            style={{ pointerEvents: "none" }}
          >
            Ryan Gosling
          </span>
        </div>
      ),
    },
    {
      key: "2",
      label: <span>Dosen Teknologi Informasi</span>,
    },
    {
      key: "3",
      danger: true,
      label: (
        <span
          className="flex flex-row items-center gap-1.5"
          onClick={handleLogoutClick}
        >
          Logout
          <Icon icon={logoutIcon} />
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-row w-full justify-between items-center px-7 py-3 border-gray-300 border-b-2">
      <LiveDate />
      <button onClick={(e) => e.preventDefault()}>
        <Dropdown
          menu={{
            items,
          }}
        >
          <div className="flex items-center md:gap-3 android:gap-1">
            <img
              src="/public/profile.png"
              alt=""
              className="rounded-full android:w-10 android:h-10 sm:w-8 sm:h-8 object-cover"
            ></img>
            <a className="android:hidden sm:block">
              <span className="sm:text-base md:text-lg">Ryan Gosling</span>
            </a>
          </div>
        </Dropdown>
      </button>
    </div>
  );
};

export default NavbarDashboard;
