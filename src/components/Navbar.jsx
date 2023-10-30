import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className=" w-full bg-white inline-flex md:px-20 android:px-8 py-12 border-b border-white">
      <div className="flex flex-row justify-between items-center w-full ">
        <Link to="/">
          <div className="flex flex-row gap-5 items-center">
            <img
              className=" w-14 h-14 bg-contain"
              src="public/logo.png"
              alt=""
            />
            <div className="flex flex-col text-left android:hidden md:flex">
              <span className="text-color-page text-xl font-medium -mb-1.5">
                ITB SWARDHARMA
              </span>
              <span className="text-[#00535B] text-xs font-normal italic">
                E-Learning
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-center md:gap-10 android:gap-4 text-color-page">
          <NavLink href="/tentang-kami">Tentang Kami</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
