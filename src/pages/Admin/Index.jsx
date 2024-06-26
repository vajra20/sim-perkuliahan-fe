import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { useSidebar } from "../../context/ContextProvider";
import Tables from "../../components/Tables";
import Time from "../../components/Time";
import { Image } from "antd";

// Function
import { apiUrl, formatDateTime } from "../../function/globalFunction";

// Data
import getAdminData from "../../data/admin/listAdmin";
import getDosenData from "../../data/admin/listDosen";
import getMahasiswaData from "../../data/admin/listMahasiswa";
import getEventData from "../../data/admin/listEvent";

// Icons
import { Icon } from "@iconify/react";
import graduationCap from "@iconify/icons-fa/graduation-cap";

const Index = () => {
	const { sidebarOpen } = useSidebar();
	const navigate = useNavigate();
	const token = localStorage.getItem("accessToken");

	const [adminData, setAdminData] = useState([]);
	const [dosenData, setDosenData] = useState([]);
	const [mahasiswaData, setMahasiswaData] = useState([]);
	const [eventData, setEventData] = useState([]);
	const [search, setSearch] = useState("");

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredEventData = eventData.filter((item) => {
		const eventName = item?.eventName ? item.eventName.toLowerCase() : "";
		const places = item?.places ? item.places.toLowerCase() : "";

		return (
			eventName.includes(search.toLowerCase()) ||
			places.includes(search.toLowerCase())
		);
	});

	useEffect(() => {
		const fetchAllData = async () => {
			const AdminData = await getAdminData();
			const DosenData = await getDosenData();
			const MahasiswaData = await getMahasiswaData();
			const EventData = await getEventData();

			setAdminData(AdminData);
			setDosenData(DosenData);
			setMahasiswaData(MahasiswaData);
			setEventData(EventData);
		};

		fetchAllData();
	}, [token]);

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token]);

	// Table Settings
	const columns = [
		{
			title: "No",
			dataIndex: "no",
			key: "no",
		},
		{
			title: "Nama",
			dataIndex: "dosen_name",
			key: "dosen_name",
		},
		{
			title: "Mata Pelajaran",
			dataIndex: "matkul",
			key: "matkul",
		},
		{
			title: "NIP",
			dataIndex: "nip",
			key: "nip",
		},
	];

	const DosenList = dosenData.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			dosen_name: item?.dosenName ?? "",
			nip: item?.nip ?? "",
			matkul: item?.matkul?.namaMatkul ?? "",
		};

		return data;
	});

	const paginationConfig = {
		pageSize: 10,
		showTotal: (total, range) =>
			`Showing ${range[0]} - ${range[1]} of ${total} list`,
	};

	return (
		<div className="w-full h-full">
			<div className="md:px-7 lg:py-6 android:p-3">
				<div
					className="grid android:gap-5 lg:gap-10 lg:grid-cols-dashboard android:grid-cols-1 mb-16"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="550"
				>
					<div className="bg-blue-dashboard px-5 py-4 rounded-xl border-dashboard-line border">
						<h1 className=" font-medium text-black mb-8 android:hidden lg:block">
							Dashboard
						</h1>

						<span className=" lg:font-medium android:font-bold text-black mb-8 text-3xl android:block lg:hidden">
							Dashboard
						</span>

						<div
							className={`flex md:flex-row android:flex-col gap-6 w-full ${
								sidebarOpen ? "md:flex-wrap xl:flex-nowrap" : ""
							}`}
						>
							<div className="flex flex-col android:w-full">
								<div className="flex justify-between border-b-2 border-black items-start md:mb-5 android:mb-0">
									<span className="w-full android:text-lg md:text-xl text-black android:font-semibold md:font-medium">
										Admin
									</span>
									<div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center android:hidden sm:block">
										<Icon
											className="w-4 h-4 "
											icon={graduationCap}
										/>
									</div>
								</div>

								<div className="text-black md:font-medium android:font-normal flex items-center justify-between gap-2">
									<span className="md:text-3xl android:text-xl">
										{Number(adminData?.length ?? 0)}
									</span>
									<span className="md:text-lg android:text-base">
										Orang
									</span>
								</div>
							</div>

							<div className="flex flex-col android:w-full">
								<div className="flex justify-between border-b-2 border-black items-start w-full md:mb-5 android:mb-0">
									<span className="w-full android:text-lg md:text-xl text-black android:font-semibold md:font-medium">
										Dosen
									</span>
									<div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center android:hidden sm:block">
										<Icon
											className="w-4 h-4 "
											icon={graduationCap}
										/>
									</div>
								</div>

								<div className="text-black md:font-medium android:font-normal flex items-center justify-between gap-2">
									<span className="md:text-3xl android:text-xl">
										{Number(dosenData?.length ?? 0)}
									</span>
									<span className="md:text-lg android:text-base">
										Orang
									</span>
								</div>
							</div>

							<div className="flex flex-col android:w-full">
								<div className="flex justify-between border-b-2 border-black items-start w-full md:mb-5 android:mb-0">
									<span className="w-full android:text-lg md:text-xl text-black android:font-semibold md:font-medium">
										Mahasiswa
									</span>

									<div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center android:hidden sm:block">
										<Icon
											className="w-4 h-4"
											icon={graduationCap}
										/>
									</div>
								</div>

								<div className="text-black md:font-medium android:font-normal flex items-center justify-between gap-2">
									<span className="md:text-3xl android:text-xl">
										{Number(mahasiswaData?.length ?? 0)}
									</span>

									<span className="md:text-lg android:text-base">
										Orang
									</span>
								</div>
							</div>
						</div>
					</div>

					<Time />

					<div className="flex justify-center items-center rounded-xl h-fit max-h-full">
						<Tables
							className="w-full"
							columns={columns}
							dataSource={DosenList}
							paginationConfig={paginationConfig}
						/>
					</div>

					<div className="flex flex-col gap-3">
						<div className="w-full border-black border-b ">
							<span className=" font-medium text-3xl text-black">
								List Acara
							</span>
						</div>

						<div className="w-full flex flex-col gap-3 max-h-[420px] overflow-y-scroll overscroll-contain">
							{filteredEventData.map((item, index) => (
								<div
									className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer mr-2"
									key={`${item} - ${index}`}
								>
									<div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
										{item.file ? (
											<Image
												className="w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"
												width={100}
												height="auto"
												src={`${apiUrl()}/api/image/${
													item.file
												}`}
											/>
										) : (
											<Image
												width={100}
												className="m-0 object-contain"
												src="https://ih1.redbubble.net/image.3203944270.2367/st,small,507x507-pad,600x600,f8f8f8.jpg"
											/>
										)}

										<div className="flex justify-between w-full sm:items-center android:items-left gap-2.5 sm:flex-row android:flex-col">
											<div className="flex flex-col gap-0 justify-between w-4/5">
												<span className="text-xs font-medium">
													{item?.places ??
														"Tempat belum ditentukan oleh panitia"}
												</span>

												<span className="sm:text-xl android:text-lg font-medium">
													{item?.eventName ??
														"Nama event belum ditentukan oleh panitia"}
												</span>
											</div>

											<div className="android:w-full sm:w-fit md:w-max bg-event-color sm:rounded-2xl android:rounded-lg sm:px-2.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center text-nowrap whitespace-nowrap">
												<span className=" sm:text-sm android:text-xs text-black font-normal ">
													{item?.status ?? "Draft"}
												</span>
											</div>
										</div>
									</div>

									<div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
										<span className="text-xs font-medium text-black">
											Start Date :{" "}
											{formatDateTime(
												new Date(item?.start_date)
											)}
										</span>
										<span className="text-xs font-medium text-black">
											End Date :{" "}
											{formatDateTime(
												new Date(item?.end_date)
											)}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
