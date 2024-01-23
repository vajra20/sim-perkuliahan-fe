import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Global Function
import { apiUrl } from "../../../function/globalFunction";

// Components
import Sidebar from "../../../components/Sidebar";

// External Components

// Icon
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

// Data
import getPenugasanData from "../../../data/mahasiswa/penugasan";

const penugasan = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("accessToken");

	const [penugasanData, setPenugasanData] = useState([]);

	useEffect(() => {
		const fetchAllData = async () => {
			const PenugasanData = await getPenugasanData();
			setPenugasanData(PenugasanData);
		};

		fetchAllData();
	}, [token]);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token]);

	return (
		<div className="w-full h-full ">
			<div className="md:px-7 sm:py-6 android:p-3">
				<div className="flex flex-col justify-start sm:gap-4 android:gap-2">
					<span className=" sm:text-5xl android:text-4xl text-black font-medium w-full">
						Penugasan
					</span>
				</div>

				<div className="flex sm:my-16 android:my-8 w-full items-center">
					<input
						className=" rounded-l-3xl pl-6 py-4 border border-[#828282] w-full border-r-0 focus:outline-none text-lg"
						placeholder="Cari Topik..."
					></input>
					<div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
						<Icon className="w-5 h-5" icon={searchIcon}></Icon>
					</div>
				</div>

				{penugasanData.map((item, index) => (
					<div
						className="flex flex-col gap-10 mb-5"
						key={`${item} - ${index}`}
					>
						<Link
							to={"/mahasiswa/penugasan/list-tugas"}
							className="flex p-8 items-center bg-[#3E9DC71A] rounded-3xl border border-dark-gray shadow-2xl sm:gap-10 android:gap-12 md:flex-row android:flex-col"
						>
							<img
								src="/public/task.png"
								alt=""
								className=" w-80 h-40 md:object-contain android:object-cover"
							/>
							<div className="flex flex-col gap-5">
								<span className=" text-4xl text-black font-medium">
									{item?.topik ?? "Topik belum tersedia"}
								</span>
								<span className="text-gray-sub font-medium text-base">
									{item?.deskripsi ?? "Deskripsi belum ada"}
								</span>
								<div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
									<span className=" font-medium text-base text-dark-gray">
										Dr. H. Adinda M . Prilia, M. Kom.
									</span>
									<div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
										<div className="text-white text-4xl font-medium">
											&gt;
										</div>
									</div>
								</div>
							</div>
						</Link>

						{/* <div className="flex p-8 items-center bg-[#F6D8FB] rounded-3xl border border-dark-gray sm:gap-10 android:gap-12 md:flex-row android:flex-col">
						<img
							src="/public/task.png"
							alt=""
							className=" w-80 h-40 md:object-contain android:object-cover"
						/>
						<div className="flex flex-col gap-5">
							<span className=" text-4xl text-black font-medium">
								Topic
							</span>
							<span className="text-gray-sub font-medium text-base">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Commodi necessitatibus
								laborum, cum minus, ea eaque ipsa itaque
								similique doloribus quae provident quo et rerum
								repellat voluptate ad magnam aut. Doloribus.
							</span>
							<div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
								<span className=" font-medium text-base text-dark-gray">
									Dr. H. Devina Diva S, M. Kom.
								</span>
								<div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
									<div className="text-white text-4xl font-medium">
										&gt;
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex p-8 items-center bg-[#D6EBE0] rounded-3xl border border-dark-gray sm:gap-10 android:gap-12 md:flex-row android:flex-col">
						<img
							src="/public/task.png"
							alt=""
							className=" w-80 h-40 md:object-contain android:object-cover"
						/>
						<div className="flex flex-col gap-5">
							<span className=" text-4xl text-black font-medium">
								Topic
							</span>
							<span className="text-gray-sub font-medium text-base">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Commodi necessitatibus
								laborum, cum minus, ea eaque ipsa itaque
								similique doloribus quae provident quo et rerum
								repellat voluptate ad magnam aut. Doloribus.
							</span>
							<div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
								<span className=" font-medium text-base text-dark-gray">
									Dr. H. Ryan Pratama H, M. Kom.
								</span>
								<div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
									<div className="text-white text-4xl font-medium">
										&gt;
									</div>
								</div>
							</div>
						</div>
					</div> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default penugasan;
