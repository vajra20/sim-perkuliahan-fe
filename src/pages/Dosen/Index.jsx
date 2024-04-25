import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Global Function
import { apiUrl } from "../../function/globalFunction";

// External Components
import axios from "axios";
import Swal from "sweetalert2";

// Data
import getMahasiswaData from "../../data/admin/listMahasiswa";
import getDosenMatkulData from "../../data/dosen/dosenMatkul";

// Icons
import { Icon } from "@iconify/react";
import usersIcon from "@iconify/icons-ci/users";

const Index = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("accessToken");
	const currentYear = new Date().getFullYear();
	const nextYear = new Date().getFullYear() + 1;

	// Matkul State
	const [matkulData, setMatkulData] = useState([]);
	const [mahasiswaData, setMahasiswaData] = useState([]);

	useEffect(() => {
		const fetchAllData = async () => {
			const MatkulData = await getDosenMatkulData();
			const MahasiswaData = await getMahasiswaData();

			setMatkulData(MatkulData);
			setMahasiswaData(MahasiswaData);
		};

		fetchAllData();
	}, [token]);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token]);

	return (
		<div className="w-full h-full">
			<div
				className="md:px-7 lg:py-6 android:p-3"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-duration="0"
				data-aos-offset="0"
			>
				<div className="flex flex-wrap gap-6">
					{matkulData.map((item, index) => (
						<Link
							to={`/dosen/tugas/${item.id}`}
							className="flex flex-col flex-custom max-w-sm shadow rounded-3xl hover:shadow-md transition-all duration-300"
							key={`${item} - ${index}`}
						>
							<div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex sm:flex-row android:flex-col w-full justify-between overflow-hidden">
								<div className="text-white flex flex-col justify-start z-10">
									<span className="font-normal text-2xl w-20">
										{item?.namaMatkul ?? ""}
									</span>

									<span className="font-light text-sm">
										{`${currentYear} - ${nextYear}`}
									</span>
								</div>

								<div className="flex android:justify-center sm:justify-end">
									<img
										src="/public/book.png"
										alt="Book Icon"
										className="sm:object-cover android:object-contain w-full h-full android:w-60 android:h-60 sm:w-full sm:h-full"
									/>
								</div>
							</div>

							<div className="bg-white flex justify-end rounded-b-3xl p-4">
								<div className="flex items-center gap-1 text-color-page ">
									<Icon
										icon={usersIcon}
										className="w-5 h-5"
									/>

									<span className="font-medium">
										{Number(mahasiswaData?.length ?? 0)}
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Index;
