import React, { useState, useEffect } from "react";

// Global Function
import { apiUrl, formatDate } from "../../function/globalFunction";

// Components
import NavbarDashboard from "../../components/NavbarDashboard";
import ModalForm from "../../components/ModalForm";
import Tables from "../../components/Tables";

// External Components
import axios from "axios";
import Swal from "sweetalert2";
import { Space } from "antd";

// Data
import getMahasiswaData from "../../data/admin/listMahasiswa";

// Icons
import { Icon } from "@iconify/react";
import todoAdd from "@iconify/icons-pajamas/todo-add";
import editIcon from "@iconify/icons-tabler/edit";
import trashIcon from "@iconify/icons-ion/trash";

const Mahasiwa = () => {
	// Modal
	const [isLoading, setIsLoading] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		id: null,
		mhsName: "",
		nim: "",
		tempatLahir: "",
		tanggalLahir: "",
		alamat: "",
	});

	// Mahasiswa
	const [mahasiswaData, setMahasiswaData] = useState([]);

	// Fetching Mahasiswa Data ( find All )
	useEffect(() => {
		const fetchAllData = async () => {
			const MahasiswaData = await getMahasiswaData();
			setMahasiswaData(MahasiswaData);
		};

		fetchAllData();
	}, []);

	// Fetching Api Data ( find One )
	const getMahasiswaValue = async (id) => {
		try {
			const response = await axios.get(
				`${apiUrl()}/getMahasiswaById/${id}`,
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
			);

			const data = response.data;

			if (data) {
				setFormData((prev) => ({
					...prev,
					id: data?.id ?? null,
					mhsName: data?.mhsName ?? "",
					nim: data?.nim ?? "",
					tempatLahir: data?.tempatLahir ?? "",
					tanggalLahir: data?.tanggalLahir ?? "",
					alamat: data?.alamat ?? "",
				}));
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Modal Config
	const modalConfig = {
		title: isUpdate ? "Update Data Mahasiswa" : "Buat Akun Mahasiswa",
		fields: [
			{ label: "Nama", type: "text", name: "mhsName" },
			{ label: "NIM", type: "text", name: "nim" },
			{ label: "Tempat Lahir", type: "text", name: "tempatLahir" },
			{ label: "Tanggal Lahir", type: "date", name: "tanggalLahir" },
			{ label: "Alamat", type: "text", name: "alamat" },
		],
	};

	// Modal Change Handler
	const handleChange = (fieldName, value) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldName]: value,
		}));
	};

	const handleCreate = () => {
		setIsUpdate(false);
		setModalOpen(true);

		setFormData({
			id: null,
			mhsName: "",
			nim: "",
			tempatLahir: "",
			tanggalLahir: "",
			alamat: "",
		});
	};

	// Table
	const columns = [
		{
			title: "No",
			dataIndex: "no",
			key: "no",
		},
		{
			title: "Nama",
			dataIndex: "mhsName",
			key: "mhsName",
		},
		{
			title: "NIM",
			dataIndex: "nim",
			key: "nim",
		},
		{
			title: "Tanggal Lahir",
			dataIndex: "tanggalLahir",
			key: "tanggalLahir",
		},
		{
			title: "Tempat Lahir",
			dataIndex: "tempatLahir",
			key: "tempatLahir",
		},
		{
			title: "Action",
			key: "action",
			render: (record) => {
				const id = record.mahasiswa_id;

				const handleEdit = async () => {
					if (id) {
						await getMahasiswaValue(id);
					}

					setModalOpen(true);
					setIsUpdate(true);
				};

				const handleDelete = () => {
					Swal.fire({
						title: `Apakah anda yakin akan menghapus data Mahasiswa ini ?`,
						icon: "warning",
						showConfirmButton: true,
						showDenyButton: true,
						confirmButtonText: "Ya",
						denyButtonText: "Cancel",
					})
						.then((willDelete) => {
							if (willDelete.value) {
								axios
									.delete(
										`${apiUrl()}/deleteMahasiswa/${id}`,
										{
											headers: {
												Accept: "application/json",
												Authorization: `Bearer ${localStorage.getItem(
													"accessToken"
												)}`,
												"Access-Control-Allow-Origin":
													"*",
												"ngrok-skip-browser-warning":
													"true",
											},
										}
									)
									.then((response) => {
										Swal.fire({
											title: "Success",
											text: response.data.message,
											icon: "success",
										}).then(() => {
											window.location.reload();
										});
									})
									.catch((error) => {
										Swal.fire({
											title: "Error",
											text: error.response.data.message,
											icon: "error",
										});
									});
							}
						})
						.catch((error) => {
							Swal.fire({
								title: "Error",
								text: error.response.data.message,
								icon: "error",
							});
						});
				};

				return (
					<Space size="middle">
						<button
							className="bg-[#FFC006] p-1 rounded"
							onClick={handleEdit}
						>
							<Icon icon={editIcon} className=" w-5 h-5"></Icon>
						</button>

						<button
							className="bg-[#DA3442] p-1 rounded "
							onClick={handleDelete}
						>
							<Icon
								icon={trashIcon}
								className="text-white w-5 h-5"
							></Icon>
						</button>
					</Space>
				);
			},
		},
	];

	const MahasiswaList = mahasiswaData.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			mahasiswa_id: item?.id ?? null,
			mhsName: item?.mhsName ?? "",
			nim: item?.nim ?? "",
			tanggalLahir: formatDate(new Date(item?.tanggalLahir ?? "")),
			tempatLahir: item?.tempatLahir ?? "",
			alamat: item?.alamat ?? "",
		};

		return data;
	});

	const paginationConfig = {
		pageSize: 10,
		showTotal: (total, range) =>
			`Showing ${range[0]} - ${range[1]} of ${total} list`,
	};

	// Form Validation
	const FormValidation = () => {
		let valid = true;

		if (!formData.mhsName) {
			Swal.fire({
				title: "Warning",
				text: "Mahasiswa Name cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.nim) {
			Swal.fire({
				title: "Warning",
				text: "NIM cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.tanggalLahir) {
			Swal.fire({
				title: "Warning",
				text: "Birth Date cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.tempatLahir) {
			Swal.fire({
				title: "Warning",
				text: "Place of Birth cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.alamat) {
			Swal.fire({
				title: "Warning",
				text: "Address cannot be empty",
				icon: "warning",
			});
			valid = false;
		}

		return valid;
	};

	// Handle Submit
	const handleSubmit = async () => {
		const url = !isUpdate
			? `${apiUrl()}/createMahasiswa`
			: `${apiUrl()}/updateMahasiswa/${formData.id}`;

		setIsLoading(true);

		if (!FormValidation()) {
			setIsLoading(false);
			return false;
		}

		await axios
			.request({
				method: isUpdate ? "patch" : "post",
				url,
				data: formData,
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
				if (
					response.data.statusCode === 200 ||
					response.data.statusCode === 201
				) {
					Swal.fire({
						title: "Success",
						text: `${
							isUpdate
								? "Success Update Mahasiswa Data"
								: "Success Create Mahasiswa Data"
						}`,
						icon: "success",
						showConfirmButton: false,
						timer: 2000,
					}).then(() => {
						setIsLoading(false);
						window.location.reload();
					});
				} else {
					Swal.fire({
						title: "Error",
						text: response.data.message,
						icon: "error",
					});
					setIsLoading(false);
				}
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
		<div className="w-full h-full">
			<NavbarDashboard />

			<div className="md:px-7 lg:py-6 android:p-3">
				<div className="bg-white border rounded-xl shadow ">
					<div className=" w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex justify-between items-center">
						<span className="text-color-page text-2xl font-medium">
							Akun Mahasiswa
						</span>

						<button onClick={handleCreate}>
							<div className="flex flex-row items-center">
								<div className="md:px-6 android:px-4 shadow rounded-l border border-event-color android:h-7 md:h-9 flex items-center">
									<span className="md:text-lg android:text-sm text-color-page font-medium">
										Add
									</span>
								</div>

								<div className="bg-color-page text-white flex items-center rounded-r p-2 shadow">
									<Icon
										icon={todoAdd}
										className="md:w-5 md:h-5 android:w-3 android:h-3"
									></Icon>
								</div>
							</div>
						</button>
					</div>

					<ModalForm
						showModals={modalOpen}
						onClose={() => setModalOpen(false)}
						modalConfig={modalConfig}
						formDataValue={formData}
						isUpdate={isUpdate}
						onChange={handleChange}
						buttonLabel={isLoading ? "Saving.." : "Save"}
						onSubmit={() => handleSubmit()}
					/>

					<div className="w-full md:px-10 android:px-5 py-8">
						<Tables
							className="w-full"
							columns={columns}
							dataSource={MahasiswaList}
							paginationConfig={paginationConfig}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mahasiwa;
