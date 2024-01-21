import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFix(true);
      } else {
        setFix(false);
      }
      console.log(fix);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full inline-flex md:px-20 android:px-8 android:py-6 md:py-12 ${
        fix
          ? "sticky top-0 transition-all duration-500 bg-transparent backdrop-blur-sm z-infinity backdrop-brightness-90 rounded-b-3xl"
          : "relative transition-all duration-300"
      }`}
    >
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
              <span className="text-color-page text-xs font-normal italic">
                E-Learning
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-center md:gap-10 android:gap-4 text-color-page">
          <NavLink href="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
