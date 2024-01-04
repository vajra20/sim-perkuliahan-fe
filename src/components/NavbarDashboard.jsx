import LiveDate from "../components/LiveDate";
import React from "react";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../context/ContextProvider";

import { Icon } from "@iconify/react";
import logoutIcon from "@iconify/icons-mdi/logout";
import profileFill from "@iconify/icons-iconamoon/profile-fill";
import hamburgerLg from "@iconify/icons-ci/hamburger-lg";

const NavbarDashboard = () => {
	const { toggleEvent } = useSidebar();

	const navigate = useNavigate();

	const handleLogoutClick = () => {
		localStorage.clear();
		navigate("/");
	};

	const username = localStorage.getItem("username");
	const roles = localStorage.getItem("role");

	const items = [
		{
			key: "1",
			label: (
				<div className="flex gap-1 items-center text-gray-sub android:block sm:hidden">
					<Icon icon={profileFill} className="w-5 h-5"></Icon>
					<span style={{ pointerEvents: "none" }}>{username}</span>
				</div>
			),
		},
		{
			key: "2",
			label: <span>{roles}</span>,
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
					<Icon icon={logoutIcon} onClick={handleLogoutClick} />
				</span>
			),
		},
	];

	return (
		<div className="flex flex-row w-full justify-between items-center md:px-7 android:px-3 sm:py-3 android:py-1.5 border-gray-300 border-b-2 android:gap-6">
			<button onClick={toggleEvent}>
				<Icon icon={hamburgerLg} />
			</button>

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
							className="rounded-full android:w-8 android:h-8 object-cover"
						></img>

						<a className="android:hidden md:block">
							<span className="md:text-base lg:text-lg">
								{username}
							</span>
						</a>
					</div>
				</Dropdown>
			</button>
		</div>
	);
};

export default NavbarDashboard;
