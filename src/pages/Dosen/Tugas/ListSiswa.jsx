import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Global Function
import {
	apiUrl,
	formatTime,
	formatDateTime,
	getFileExtension,
} from "../../../function/globalFunction";

// Components
import axios from "axios";
import Swal from "sweetalert2";
import Icons from "../../../components/Icons";

// External Components
import { Button, Modal, Image } from "antd";

// Data
import getTugasDetail from "../../../data/dosen/getTugasDetail";

// Icons
import { Icon } from "@iconify/react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

const ListSiswa = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	// Tugas Detail
	const [tugasDetail, setTugasDetail] = useState([]);

	// Render Data
	useEffect(() => {
		const fetchAllData = async () => {
			const TugasDetailId = await getTugasDetail(params.id);
			setTugasDetail(TugasDetailId);
		};

		fetchAllData();
	}, []);

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [selectedJawaban, setSelectedJawaban] = useState([]);

	const showModal = (id, name, answer) => {
		setModalTitle(name);
		setSelectedItemId(id);
		setSelectedJawaban(answer);
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	// Update Nilai
	const [updateNilai, setUpdateNilai] = useState({
		points: 0,
		mahasiswa_id: null,
	});

	// Change Handler
	const updateNilaiHandler = (e) => {
		setUpdateNilai({
			...updateNilai,
			[e.target.name]: e.target.value,
		});
	};

	// Change Mahasiswa Id
	useEffect(() => {
		setUpdateNilai((prev) => ({
			...prev,
			mahasiswaId: selectedItemId,
		}));
	}, [selectedItemId]);

	// Handle Submit
	const handleSubmit = async () => {
		setIsLoading(true);

		console.log(updateNilai);

		// const formData = new FormData();

		// formData.append("points", updateNilai.points);

		// await axios
		// 	.put(`${apiUrl()}/updateNilai/${params.id}`, formData, {
		// 		headers: {
		// 			Accept: "application/json",
		// 			Authorization: `Bearer ${localStorage.getItem(
		// 				"accessToken"
		// 			)}`,
		// 			"Access-Control-Allow-Origin": "*",
		// 			"ngrok-skip-browser-warning": "true",
		// 		},
		// 	})
		// 	.then((response) => {
		// 		if (response.status === 200 || response.status === 201) {
		// 			Swal.fire({
		// 				title: "Success",
		// 				text: "Success Update Points",
		// 				icon: "success",
		// 				showConfirmButton: false,
		// 				timer: 2000,
		// 			}).then(() => {
		// 				setIsLoading(false);
		// 				navigate("/dosen/tugas");
		// 			});
		// 		} else {
		// 			Swal.fire({
		// 				title: "Error",
		// 				text: response.data.message,
		// 				icon: "error",
		// 			});
		// 			setIsLoading(false);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		Swal.fire({
		// 			title: "Error",
		// 			text: error.response.data.message,
		// 			icon: "error",
		// 		});

		// 		setIsLoading(false);
		// 	});
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
				<div className="bg-white shadow-md p-10 flex sm:flex-row android:flex-col gap-6 w-full justify-between rounded-xl">
					<div className="flex flex-col justify-center w-full">
						<span className="text-2xl font-medium text-black">
							{tugasDetail?.judul ?? ""}
						</span>

						<span className="text-black/40 text-sm font-medium">
							{tugasDetail?.topik ?? ""}
						</span>
					</div>

					<div className="flex flex-row gap-3 w-full android flex-1 sm:flex-auto">
						<div className=" w-full border border-light-gray rounded-3xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-24 sm:h-32 ">
							{/* <span className="sm:text-5xl lg:text-7xl android:text-3xl flex justify-center  w-full text-[#61CE70] font-semibold">
								5
							</span>
							<span className="sm:text-[16px] android:text-sm flex justify-center gap-10 w-full text-[#61CE70]">
								Menyerahkan
							</span> */}
						</div>

						<div className=" w-full border border-[#EC613E] rounded-3xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-24 sm:h-32 ">
							<span className="sm:text-5xl lg:text-7xl android:text-3xl flex justify-center  w-full text-[#EC613E] font-semibold">
								{tugasDetail?.assignedMahasiswa?.length ?? 0}
							</span>

							<span className="sm:text-[16px] lg:text-[18px] android:text-sm flex justify-center gap-10 w-full text-[#EC613E]">
								Ditugaskan
							</span>
						</div>
					</div>
				</div>

				{/* <div className=" px-10 py-6 text-[#61CE70] text-lg font-medium">
					Menyerahkan
				</div>

				<div className="flex-col flex w-full gap-3">
					<button
						className="rounded-xl border-2 shadow w-full bg-white px-6 py-4"
						onClick={showModal}
					>
						<div className="flex flex-row gap-2 items-center">
							<div className="h-8 w-8 bg-event-color rounded-full"></div>
							<div className="flex flex-row w-full justify-between items-center">
								<span className="font-medium text-base text-black">
									Muhammad Gaza Alfarizi
								</span>
								<Icon
									icon={arrowRight2}
									className="text-gray-sub w-8 h-8"
								></Icon>
							</div>
						</div>
					</button>
				</div> */}

				<div className=" px-10 py-6 text-red text-lg font-medium">
					Ditugaskan
				</div>

				{tugasDetail?.assignedMahasiswa?.map((item) => (
					<button
						className="rounded-xl border-2 shadow w-full bg-white px-6 py-4 mb-3"
						key={item.id}
						onClick={() =>
							showModal(item.id, item.mhsName, item.Jawaban)
						}
					>
						<div className="flex flex-row gap-2 items-center">
							<div className="flex flex-row w-full justify-between items-center">
								<span className="font-medium text-base text-black">
									{item?.mhsName ?? ""}
								</span>

								<Icon
									icon={arrowRight2}
									className="text-gray-sub w-8 h-8"
								></Icon>
							</div>
						</div>
					</button>
				))}

				<Modal
					title={modalTitle}
					centered
					open={isModalOpen}
					onCancel={handleCancel}
					footer={[
						<Button
							key="ok"
							className="bg-color-page py-2.5 pr-3 pl-6 h-fit text-white hover:!text-white font-medium text-base hover:bg-[#4096ff] transition-all duration-300"
							onClick={handleSubmit}
						>
							<div className="flex items-center gap-0">
								<span className="text-lg">
									{isLoading ? "Mengirim.." : "Kirim"}
								</span>

								<Icon
									icon={arrowRight2}
									className="w-8 h-8"
								></Icon>
							</div>
						</Button>,
					]}
				>
					<div className="py-8 flex flex-col gap-5">
						{selectedJawaban.length > 1 ? (
							<>
								{selectedJawaban.map((item) => (
									<div className="flex android:flex-col sm:flex-row rounded-xl shadow-md border">
										<div className="bg-[#EDEDED] p-6 sm:rounded-l-xl sm:rounded-tr-none android:rounded-t-xl w-full android:w-full sm:max-w-[30%] min-w-[30%] ">
											<img
												className="w-full h-full sm:max-h-full android:max-h-[100px] m-0 object-contain"
												src="/public/pdf.png"
											></img>
										</div>

										<div className="flex flex-col justify-between px-7">
											<div className="rounded-r-xl w-full ">
												<span className="text-black font-medium text-lg leading-6 pt-10 w-full flex justify-start gap-10">
													{item.lampiranJawaban}
												</span>

												<span className="text-black font-medium opacity-50 text-sm ">
													PDF
												</span>
											</div>

											<div className="flex justify-end w-full mb-5">
												<span className="text-black font-normal opacity-50 text-xs">
													19.22
												</span>
											</div>
										</div>
									</div>
								))}
							</>
						) : (
							<>
								<label className="text-black font-medium text-lg w-full flex justify-start">
									Siswa Ini Belum Mengumpulkan Tugas
								</label>
							</>
						)}

						<div className="border border-gray-sub rounded-2xl bg-white px-7 py-3">
							<div className="flex justify-between text-color-page text-xl font-bold">
								<label className="me-2">Nilai</label>

								<input
									width={500}
									type="number"
									name="points"
									max="100"
									min="0"
									onChange={(e) => updateNilaiHandler(e)}
								></input>

								<label className="ms-2">/100</label>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default ListSiswa;
