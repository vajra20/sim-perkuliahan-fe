import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Global Function
import { apiUrl } from "../../function/globalFunction";

// Components

// External Components
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

// Icons
import { Icon } from "@iconify/react";
import fileImage from "@iconify/icons-mdi/file-image";
import trashIcon from "@iconify/icons-ion/trash";
import cameraBold from "@iconify/icons-solar/camera-bold";

const CreateEvent = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	// Event State
	const [eventData, setEventData] = useState({
		eventName: "",
		places: "",
		status: "",
		start_date: "",
		end_date: "",
	});

	// Upload Document
	const [uploadDocument, setUploadDocument] = useState([]);
	const [image, setImage] = useState({
		blob: "",
		fileName: "",
	});

	// Upload Document
	const handleDocumentChange = (e) => {
		const files = e.target.files;

		if (files && files[0]) {
			setUploadDocument(files);

			setImage({
				blob: URL.createObjectURL(files[0]),
				fileName: files[0].name,
			});
		}
	};

	const handleImageClick = () => {
		const inputField = document.querySelector(".input-field-image");
		inputField.click();
	};

	const handleRemoveFile = () => {
		setImage({
			blob: "",
			fileName: "",
		});

		setUploadDocument([]);
	};

	// Status Option
	const statusOptions = [
		{ value: "On Progress", label: "On Progress" },
		{ value: "Pending", label: "Pending" },
		{ value: "Done", label: "Done" },
		{ value: "Cancel", label: "Cancel" },
	];

	// Change Handler
	const eventChangeHandler = (e) => {
		setEventData({
			...eventData,
			[e.target.name]: e.target.value,
		});
	};

	// Form Validation
	const FormValidation = () => {
		let valid = true;

		if (!eventData.eventName) {
			Swal.fire({
				title: "Warning",
				text: "Event Name cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!eventData.places) {
			Swal.fire({
				title: "Warning",
				text: "Places cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!eventData.status) {
			Swal.fire({
				title: "Warning",
				text: "Status event cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!eventData.start_date) {
			Swal.fire({
				title: "Warning",
				text: "Start date cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!eventData.end_date) {
			Swal.fire({
				title: "Warning",
				text: "End Date cannot be empty",
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

		formData.append("eventName", eventData.eventName);
		formData.append("places", eventData.places);
		formData.append("status", eventData.status);
		formData.append("start_date", eventData.start_date);
		formData.append("end_date", eventData.end_date);

		if (uploadDocument?.length) {
			formData.append("file", uploadDocument[0]);
		}

		await axios
			.post(`${apiUrl()}/createEvent`, formData, {
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
					"Access-Control-Allow-Origin": "*",
					"ngrok-skip-browser-warning": "true",
				},
			})
			.then((response) => {
				if (response.status === 200 || response.status === 201) {
					Swal.fire({
						title: "Success",
						text: "Success Create Event",
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

				navigate("/admin/beranda");
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
				<div className="bg-white border rounded-xl shadow">
					<div className="w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex android:justify-center justify-start items-center">
						<span className="text-color-page text-2xl font-medium">
							Buat Acara
						</span>
					</div>

					<div className="md:px-10 android:px-5 py-6 ">
						<div className="flex android:flex-col xl:flex-row w-full android:gap-5 xl:gap-20 mb-10">
							<div className="flex android:justify-center xl:justify-start w-full xl:max-w-xs  ">
								<form
									className="flex flex-col gap-y-3 w-full android:max-w-full sm:max-w-xs h-screen max-h-[360px] form-input-image"
									onClick={handleImageClick}
								>
									{!image.blob ? (
										<div className="rounded-lg bg-event-color flex h-full items-center justify-center relative cursor-pointer">
											<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
												<Icon
													icon={cameraBold}
													className=" w-24 h-24 text-dark-gray"
												/>
											</div>
										</div>
									) : null}

									<input
										className="flex h-full items-center justify-center input-field-image hidden"
										type="file"
										accept="image/*"
										onChange={handleDocumentChange}
									></input>

									{image.blob ? (
										<>
											<img
												src={image.blob}
												alt={image.fileName}
												className="rounded-lg bg-event-color flex h-full items-center justify-center image-preview object-cover cursor-pointer"
											/>

											<div className="w-full items-center flex justify-between uploaded-row">
												<div className="flex flex-row items-center">
													<Icon
														icon={fileImage}
														color="#858585"
														className="w-full h-full min-w-[5px] max-w-[25px]"
													/>

													<span className="upload-content pe-5 pl-2.5 text-xs cursor-pointer">
														{image.fileName
															? image.fileName
															: ""}
													</span>
												</div>

												<Icon
													icon={trashIcon}
													className="w-full h-full min-w-[5px] max-w-[20px] cursor-pointer"
													color="#ed2b2a"
													onClick={handleRemoveFile}
												/>
											</div>
										</>
									) : (
										<div className="w-full items-center flex justify-center input-image-text">
											<div className="px-2.5 py-1 rounded-lg hover:text-color-page hover:bg-blue-100 w-fit transition-all duration-500 cursor-pointer">
												<p>Add File</p>
											</div>
										</div>
									)}
								</form>
							</div>

							<div className="py-2 w-full flex flex-col gap-3">
								<div className="flex flex-col gap-0">
									<label className="text-sm pl-3">
										Judul
									</label>

									<input
										name="eventName"
										type="text"
										placeholder=""
										className="border-2 rounded-lg px-5 py-2.5 shadow-sm"
										onChange={(e) => eventChangeHandler(e)}
									/>
								</div>

								<div className="flex flex-col gap-0">
									<label className="text-sm pl-3">
										Tempat
									</label>

									<input
										name="places"
										type="text"
										placeholder=""
										className="border-2 rounded-lg px-5 py-2.5 shadow-sm"
										onChange={(e) => eventChangeHandler(e)}
									/>
								</div>

								<div className="flex flex-col gap-0">
									<label
										className="text-sm pl-3"
										htmlFor="Judul"
									>
										Waktu
									</label>

									<RangePicker
										className="border-2 rounded-lg px-5 py-2.5"
										onChange={(values) => {
											setEventData((prev) => {
												const cache = { ...prev };

												if (
													values &&
													values.length === 2
												) {
													const dateFromFormatted =
														values[0]?.format(
															"YYYY-MM-DD"
														);

													const dateToFormatted =
														values[1]?.format(
															"YYYY-MM-DD"
														);

													cache.start_date =
														dateFromFormatted ?? "";

													cache.end_date =
														dateToFormatted ?? "";
												} else {
													cache.start_date = "";
													cache.end_date = "";
												}

												return cache;
											});
										}}
									/>
								</div>

								<div className="flex flex-col gap-0">
									<label
										className="text-sm pl-3"
										htmlFor="Judul"
									>
										Status
									</label>

									<Select
										className="w-full py-2.5 rounded-lg"
										name="status"
										isClearable
										isSearchable
										placeholder=""
										options={statusOptions}
										onChange={(newValues) => {
											setEventData((prev) => {
												const cache = { ...prev };

												if (newValues) {
													cache.status =
														newValues.value;
												} else {
													cache.status = "";
												}

												return cache;
											});
										}}
									/>
								</div>
							</div>
						</div>

						<div className="w-full flex justify-end ">
							<button
								className="bg-color-page py-2.5 px-12 h-fit rounded-lg text-white hover:bg-[#4096ff] transition-all duration-200 font-medium text-base shadow-none border-none flex justify-center"
								onClick={handleSubmit}
							>
								<span className="text-base">
									{isLoading ? "Saving.." : "Save"}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
