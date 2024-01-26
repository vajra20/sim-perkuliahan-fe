import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Icons
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

// Data
import getTugasByTopik from "../../../data/mahasiswa/tugasByTopik";

const ListTugas = () => {
	const [tugasByTopikId, setTugasByTopikId] = useState([]);

	const params = useParams();
	const topikId = params.id;

	console.log("params", params.topik);

	console.log("tugas", tugasByTopikId);
	console.log("tugasId", topikId);

	// Render Data
	useEffect(() => {
		const fetchAllData = async () => {
			const TugasByTopik = await getTugasByTopik(params.topik);
			setTugasByTopikId(TugasByTopik);
		};

		fetchAllData();
	}, [params.topik]);

	return (
		<div
			className="w-full h-full "
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
						className=" rounded-l-3xl pl-6 py-5 border border-[#828282] w-full border-r-0"
						placeholder="Cari Topik..."
					></input>
					<div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
						<Icon className="w-6 h-6" icon={searchIcon}></Icon>
					</div>
				</div>

				<div>
					<Link to={"/mahasiswa/penugasan"}>
						<div className="bg-[#3E9DC71A] rounded-3xl border border-dark-gray shadow-2xl sm:mb-16 android:mb-8">
							<div className="flex py-4 android:px-5 sm:px-10 ">
								<div className="flex gap-3 items-center w-full justify-start">
									<img
										src="/public/task.png"
										alt=""
										className=" w-32 h-20 object-cover sm:block android:hidden"
									/>
									<div className="flex android:flex-col lg:flex-row md:items-center android:items-start justify-between w-full">
										<span className="sm:text-4xl android:text-3xl text-black font-medium">
											{tugasByTopikId[0]?.topik}
										</span>
										<span className=" font-medium sm:text-base android:text-xs text-dark-gray">
											{tugasByTopikId[0]?.dosen.dosenName}
										</span>
									</div>
								</div>
							</div>
						</div>
					</Link>

					<Link
						to={"/mahasiswa/penugasan/list-tugas/detail-tugas"}
						className="flex flex-wrap gap-8"
					>
						{tugasByTopikId.map((item, index) => {
							return (
								<div
									className="flex flex-col flex-custom max-w-[23rem]"
									key={index}
								>
									<div className="bg-[#00535B57] justify-between flex p-6 rounded-t-3xl items-center border border-black border-b-0 h-screen max-h-40 w-full overflow-hidden">
										<div className="flex flex-col text-white gap-2">
											<span className=" text-2xl font-medium leading-normal w-40">
												{item?.judul}
											</span>
											<span className="font-medium">
												0/100
											</span>
										</div>
										<img
											src="/public/classroom1.png"
											alt=""
											className="w-40 h-40 object-contain"
										/>
									</div>
									<div className="bg-[#00535B0D] p-6 rounded-b-3xl flex justify-end h-screen max-h-36 items-end  border border-black border-t-0">
										<button className="px-8 py-3 w-fit h-fit rounded-full bg-white border border-black">
											New
										</button>
									</div>
								</div>
							);
						})}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ListTugas;
