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
		<div className={`w-full px-5 py-3 bg-white rounded-xl ${IsUrlActive}`}>
			<NavLink
				to={path}
				className={`flex flex-row gap-8 text-color-page items-center w-full ${IsUrlActiveText} ${
					sidebar ? "" : "flex-col !gap-2 px-2"
				}`}
				onClick={onClick}
			>
				{icon && <Icon className="w-8 h-8" icon={icon}></Icon>}

				<span
					className={`text-lg text-center font-medium ${
						sidebar ? "" : "android:hidden sm:block"
					}`}
				>
					{label}
				</span>
			</NavLink>
		</div>
	);
};

export default SideMenuItem;
