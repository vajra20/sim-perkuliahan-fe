import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../context/ContextProvider";

// Global Function
import { apiUrl, formatDate, formatTime } from "../../function/globalFunction";

// Data
import getBeritaAcara from "../../data/dosen/listAcara";

// External Components
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import { Button, Modal } from "antd";
import Swal from "sweetalert2";
import { DatePicker, TimePicker } from "antd";

// Icons
import { Icon } from "@iconify/react";
import plusIcon from "@iconify/icons-mdi/plus";
import clockOutline from "@iconify/icons-mdi/clock-outline";
import calendarBold from "@iconify/icons-solar/calendar-bold";
import profileFill from "@iconify/icons-iconamoon/profile-fill";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

const BeritaAcara = () => {
	const dosenId = localStorage.getItem("dosen_id");
	const navigate = useNavigate();
	const { sidebarOpen } = useSidebar();
	const [isLoading, setIsLoading] = useState(false);
	const [listEvent, setListEvent] = useState([]);

	// Fetching Data
	useEffect(() => {
		const fetchAllData = async () => {
			const EventData = await getBeritaAcara();
			setListEvent(EventData);
		};

		fetchAllData();
	}, []);

	// Canvas
	const sigCanvas = useRef();
	const clear = () => sigCanvas.current.clear();

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSignatureOpen, setIsSignature] = useState(false);

	const showModal = () => {
		setIsSignature(true);
	};

	const handleOk = () => {
		setIsSignature(false);
	};

	const handleCancel = () => {
		setIsSignature(false);
	};

	// Berita Acara State
	const [beritaAcara, setBeritaAcara] = useState({
		dosenId: Number(dosenId),
		pertemuanKe: "",
		date: "",
		jamMasuk: "",
		jamKeluar: "",
		descMateri: "",
		jmlMhsHadir: "",
	});

	// Change Handler
	const formChangeHandler = (e) => {
		setBeritaAcara({
			...beritaAcara,
			[e.target.name]: e.target.value,
		});
	};

	// Form Validation
	const FormValidation = () => {
		let valid = true;

		if (!beritaAcara.pertemuanKe) {
			Swal.fire({
				title: "Warning",
				text: "Judul Pertemuan cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!beritaAcara.descMateri) {
			Swal.fire({
				title: "Warning",
				text: "Deskripsi cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!beritaAcara.date) {
			Swal.fire({
				title: "Warning",
				text: "Tanggal acara cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!beritaAcara.jamMasuk && !beritaAcara.jamKeluar) {
			Swal.fire({
				title: "Warning",
				text: "Waktu acara cannot be empty",
				icon: "warning",
			});
			valid = false;
		}

		return valid;
	};

	// Handle Submit
	const handleSubmit = async () => {
		setIsLoading(true);

		if (!FormValidation()) {
			setIsLoading(false);
			return false;
		}

		const formData = new FormData();

		formData.append("pertemuanKe", beritaAcara.pertemuanKe);
		formData.append("date", beritaAcara.date);
		formData.append("jamMasuk", beritaAcara.jamMasuk);
		formData.append("jamKeluar", beritaAcara.jamKeluar);
		formData.append("descMateri", beritaAcara.descMateri);
		formData.append("jmlMhsHadir", beritaAcara.jmlMhsHadir);

		// if (uploadDocument?.length) {
		// 	formData.append("file", uploadDocument[0]);
		// }

		await axios
			.post(
				`${apiUrl()}/createAcaraBerita?dosenId=${dosenId}`,
				formData,
				{
					headers: {
						Accept: "application/json",
						Authorization: `Bearer ${localStorage.getItem(
							"accessToken"
						)}`,
						"Access-Control-Allow-Origin": "*",
						"ngrok-skip-browser-warning": "true",
					},
				}
			)
			.then((response) => {
				if (response.status === 200 || response.status === 201) {
					Swal.fire({
						title: "Success",
						text: "Success Create Berita Acara",
						icon: "success",
						showConfirmButton: false,
						timer: 2000,
					}).then(() => {
						setIsLoading(false);
					});
				} else {
					Swal.fire({
						title: "Error",
						text: response.data.message,
						icon: "error",
					});
					setIsLoading(false);
				}

				window.location.reload();
			})
			.catch((error) => {
				Swal.fire({
					title: "Error",
					text: error.response.data.message,
					icon: "error",
				});

				setIsLoading(false);
			});
	};

	return (
		<div
			className="w-full h-full"
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-duration="0"
			data-aos-offset="0"
		>
			<div className="md:px-7 lg:py-6 android:p-3">
				<div className="flex flex-col gap-5">
					<button
						className="bg-color-page rounded-full px-5 sm:py-3 android:py-1.5 text-white w-fit hover:bg-[#4096ff] transition-all duration-300"
						onClick={() => setIsModalOpen(true)}
					>
						<div className="flex flex-row md:gap-6 android:gap-3 items-center">
							<span className="android:text-base md:text-lg font-medium">
								Buat
							</span>

							<Icon
								icon={plusIcon}
								className="md:w-6 md:h-6 android:w-5 android:h-5"
							></Icon>
						</div>
					</button>

					<Modal
						title="Berita Acara"
						centered
						open={isModalOpen}
						onOk={() => setIsModalOpen(false)}
						onCancel={() => setIsModalOpen(false)}
						footer={[
							<Button
								key="ok"
								className="bg-color-page py-2.5 pl-7 pr-3 h-fit text-white font-medium text-base shadow-md hover:bg-[#4096ff] transition-all duration-300 hover:!text-white"
								onClick={() => setIsModalOpen(false)}
							>
								<div className="flex items-center gap-0">
									<span
										className="text-lg"
										disabled={isLoading}
										onClick={handleSubmit}
									>
										{isLoading ? "Menyimpan.." : "Simpan"}
									</span>

									<Icon
										icon={arrowRight2}
										className="w-8 h-8"
									></Icon>
								</div>
							</Button>,
						]}
					>
						<div className="flex flex-col gap-2 mt-8 mb-8">
							<input
								placeholder="Judul Pertemuan"
								name="pertemuanKe"
								type="text"
								className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
								onChange={(e) => formChangeHandler(e)}
							/>

							<DatePicker
								placeholder="Tanggal acara"
								format="DD-MM-YYYY"
								className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
								onChange={(values) => {
									setBeritaAcara((prev) => {
										const cache = { ...prev };

										if (values) {
											const dateFormatted =
												values?.format("YYYY-MM-DD");

											cache.date = dateFormatted ?? "";
										} else {
											cache.date = "";
										}

										return cache;
									});
								}}
							/>

							<div className="grid grid-cols-2 gap-2">
								<TimePicker
									placeholder="Jam Masuk"
									format="HH:mm"
									className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
									onChange={(values) => {
										setBeritaAcara((prev) => {
											const cache = { ...prev };

											if (values) {
												const timeFormatted =
													values?.format("HH:mm");

												cache.jamMasuk =
													timeFormatted ?? "";
											} else {
												cache.jamMasuk = "";
											}

											return cache;
										});
									}}
								/>

								<TimePicker
									placeholder="Jam Keluar"
									format="HH:mm"
									className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
									onChange={(values) => {
										setBeritaAcara((prev) => {
											const cache = { ...prev };

											if (values) {
												const timeFormatted =
													values?.format("HH:mm");

												cache.jamKeluar =
													timeFormatted ?? "";
											} else {
												cache.jamKeluar = "";
											}

											return cache;
										});
									}}
								/>
							</div>

							<input
								placeholder="Jumlah Mahasiswa Hadir"
								name="jmlMhsHadir"
								type="number"
								className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
								onChange={(e) => formChangeHandler(e)}
							/>

							<textarea
								type="text"
								name="descMateri"
								className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 min-h-[200px]"
								placeholder="Deskripsi"
								onChange={(e) => formChangeHandler(e)}
							/>
						</div>
					</Modal>

					{/* List Berita Acara */}
					{listEvent.map((item) => (
						<div className="bg-white md:rounded-3xl android:rounded-xl shadow border shadow-black/25">
							<div
								className={`flex items-center android:flex-col ${
									sidebarOpen
										? "md:flex-col lgs:flex-row"
										: "md:flex-row"
								}`}
							>
								<div className="flex flex-col md:gap-1 android:gap-2 w-full md:p-8 android:p-3">
									<div className="">
										<span className="text-black font-semibold text-lg font-inter">
											{item?.pertemuanKe ?? ""}
										</span>

										<div className="border-b-2 w-full border-event-color">
											<div className="flex android:flex-col md:flex-row md:items-center android:items-start md:gap-4 android:gap-2 md:mb-10 android:mb-2">
												<div className="flex flex-row gap-1 text-gray-sub items-center">
													<Icon
														icon={clockOutline}
													></Icon>

													<span className="  text-xs font-inter font-normal">
														{item?.jamMasuk} -{" "}
														{item?.jamKeluar}
													</span>
												</div>

												<div className="flex flex-row gap-1 text-gray-sub items-center">
													<Icon
														icon={calendarBold}
													></Icon>
													<span className="  text-xs font-inter font-normal">
														{formatDate(
															new Date(item?.date)
														)}
													</span>
												</div>

												<div className="flex flex-row gap-1 text-gray-sub items-center">
													<Icon
														icon={profileFill}
													></Icon>

													<span className="  text-xs font-inter font-normal">
														{item?.jmlMhsHadir ?? 0}
													</span>
												</div>
											</div>
										</div>

										<div className="md:mt-3 android:mt-0 w-full android:text-justify md:text-start">
											<span className=" font-inter text-black font-medium md:text-lg android:text-sm w-full">
												{item?.descMateri ?? ""}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BeritaAcara;
