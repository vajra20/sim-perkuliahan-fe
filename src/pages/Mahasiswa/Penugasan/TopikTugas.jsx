import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

// External Components
import AOS from "aos";
import "aos/dist/aos.css";

// Global Function
import { apiUrl } from "../../../function/globalFunction";

// Icon
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

// Data
import getTopikByMatkul from "../../../data/mahasiswa/tugasByMatkul";

const TopikTugas = () => {
	const params = useParams();

	const navigate = useNavigate();
	const token = localStorage.getItem("accessToken");

	const [topikData, setTopikData] = useState([]);
	const [search, setSearch] = useState("");

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredEventData = topikData.filter((item) => {
		const topik = item.topik ? item.topik.toLowerCase() : "";
		const deskripsi = item.deskripsi ? item.deskripsi.toLowerCase() : "";
		const dosen = item.dosen.dosenName
			? item.dosen.dosenName.toLowerCase()
			: "";

		return (
			topik.includes(search.toLowerCase()) ||
			dosen.includes(search.toLowerCase()) ||
			deskripsi.includes(search.toLowerCase())
		);
	});

	useEffect(() => {
		const fetchAllData = async () => {
			const TopikData = await getTopikByMatkul(params.id);
			setTopikData(TopikData);

			AOS.refresh();
		};

		fetchAllData();
	}, [params.id]);

	useEffect(() => {
		AOS.init({ duration: 500 });
	}, []);

	useEffect(() => {
		AOS.refresh();
	}, [filteredEventData, search]);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token]);

	return (
		<div
			className="w-full h-fit "
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-duration="0"
			data-aos-offset="0"
		>
			<div className="md:px-7 sm:py-6 android:p-3">
				<div className="flex flex-col justify-start sm:gap-4 android:gap-2">
					<span className="  sm:text-5xl android:text-4xl text-black font-medium w-full">
						Penugasan
					</span>
					<span className=" sm:text-xl android:text-lg text-color-page font-medium">
						Dasar Sistem Informasi
					</span>
				</div>

				<div className="flex sm:my-16 android:my-8 w-full items-center">
					<input
						className=" rounded-l-3xl pl-6 py-4 border border-[#828282] w-full border-r-0 focus:outline-none text-lg"
						placeholder="Cari Topik / Dosen"
						onChange={handleSearchChange}
					></input>
					<div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
						<Icon className="w-5 h-5" icon={searchIcon}></Icon>
					</div>
				</div>

				{filteredEventData.map((item, index) => (
					<div key={index} id="parent">
						<Link
							to={`/mahasiswa/penugasan/${item.id}/${item.topik}`}
							data-aos="fade-down"
							data-aos-anchor="#parent"
							data-aos-offset="0"
							className="shadow-md hover:shadow-lg transition-all duration-300 sm:gap-10 android:gap-12 md:flex-row android:flex-col mb-8"
						>
							<div className="bg-[#3E9DC71A] rounded-3xl border border-dark-gray shadow-md hover:shadow-lg transition-all duration-300 sm:mb-8 android:mb-4">
								<div className="flex py-4 android:px-5 sm:px-10 ">
									<div className="flex gap-3 items-center w-full justify-start">
										<img
											src="/public/task.png"
											alt=""
											className=" w-32 h-20 object-cover sm:block android:hidden"
										/>

										<div className="flex android:flex-col lg:flex-row md:items-center android:items-start justify-between w-full">
											<span className="sm:text-4xl android:text-3xl text-black font-medium">
												{item.topik ??
													"Topik belum tersedia"}
											</span>

											<span className=" font-medium sm:text-base android:text-xs text-dark-gray">
												{item.dosen.dosenName ??
													"Dosen belum tersedia"}
											</span>
										</div>

										<div className=" rounded-full p-2.5 bg-[#98DDF9] ml-5">
											<div className="text-white text-2xl font-medium flex justify-center items-center w-5 h-5">
												&gt;
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopikTugas;
