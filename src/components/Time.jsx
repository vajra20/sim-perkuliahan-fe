import React, { useState, useEffect } from "react";

const Time = () => {
	const GetCurrentTime = () => {
		const date = new Date();
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		const format = hours >= 12 ? "PM" : "AM";
		const reset = hours % 12 || 12;
		const times = `${reset}.${minutes} ${format}`;
		return times;
	};

	const wordDate = () => {
		const date = new Date();
		const currentHours = date.getHours();

		if (currentHours < 5) {
			return "Selamat Subuh!";
		} else if (currentHours < 12) {
			return "Selamat Pagi!";
		} else if (currentHours < 15) {
			return "Selamat Siang!";
		} else if (currentHours < 18) {
			return "Selamat Sore!";
		} else {
			return "Selamat Malam!";
		}
	};

	const [currentTime, setCurrentTime] = useState(GetCurrentTime());

	useEffect(() => {
		const updated = setInterval(() => {
			setCurrentTime(GetCurrentTime());
		}, 1000);

		return () => clearInterval(updated);
	}, []);

	return (
		<div className="w-full">
			<div className="flex justify-center items-center h-full w-full bg-blue-dashboard rounded-xl border border-dashboard-line md:p-10 android:py-5">
				<div className="flex flex-row items-center gap-8">
					<div className="flex flex-col justify-start md:items-start android:items-center lg:items-center xl:items-start md:gap-0 sm:gap-2 android:gap-0.5">
						<img
							src="/public/sun.png"
							alt=""
							className="sm:block android:hidden w-24 h-24 md:hidden lg:block xl:hidden"
						/>
						<span className="sm:text-5xl android:text-4xl text-[#314B8D] sm:font-bold android:font-extrabold text-center">
							{currentTime}
						</span>
						<span className="text-center text-dark-gray sm:font-medium android:font-bold sm:text-3xl android:text-xl ">
							{wordDate()}
						</span>
					</div>

					<img
						src="/public/sun.png"
						alt=""
						className="android:hidden w-24 h-24 md:block lg:hidden xl:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Time;
