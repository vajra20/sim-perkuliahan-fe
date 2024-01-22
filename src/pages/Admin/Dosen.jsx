import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Global Function
import { apiUrl } from "../../function/globalFunction";

// Components
import ModalForm from "../../components/ModalForm";
import Tables from "../../components/Tables";

// External Components
import axios from "axios";
import Swal from "sweetalert2";
import { Space } from "antd";

// Data
import getDosenData from "../../data/admin/listDosen";
import getMatkulData from "../../data/dosen/listMatkul";

// Icons
import { Icon } from "@iconify/react";
import todoAdd from "@iconify/icons-pajamas/todo-add";
import editIcon from "@iconify/icons-tabler/edit";
import trashIcon from "@iconify/icons-ion/trash";

const Dosen = () => {
	// Modal
	const [isLoading, setIsLoading] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		id: null,
		dosenName: "",
		nip: "",
		matkulId: null,
	});

	// Dosen
	const [dosenData, setDosenData] = useState([]);

	// Matkul
	const [matkulData, setMatkulData] = useState([]);
	const [selectedMatkul, setSelectedMatkul] = useState(null);

	// Fetching Api Data ( find All )
	useEffect(() => {
		const fetchAllData = async () => {
			const DosenData = await getDosenData();
			const MatkulData = await getMatkulData();
			const MatkulDataOptions = MatkulData.map((item) => ({
				value: item.id,
				label: item.namaMatkul,
			}));

			setDosenData(DosenData);
			setMatkulData(MatkulDataOptions);
		};

		fetchAllData();
	}, []);

	// Fetching Api Data ( find One )
	const getDosenValue = async (id) => {
		try {
			const response = await axios.get(`${apiUrl()}/getDosen/${id}`, {
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
					"Access-Control-Allow-Origin": "*",
					"ngrok-skip-browser-warning": "true",
				},
			});

			const data = response.data.dosen;

			if (data) {
				setFormData((prev) => ({
					...prev,
					id: data?.id ?? null,
					dosenName: data?.dosenName ?? "",
					nip: data?.nip ?? "",
					matkulId: data?.matkul?.id ?? null,
				}));

				setSelectedMatkul((prev) => ({
					...prev,
					value: data?.matkul?.id ?? null,
					label: data?.matkul?.namaMatkul ?? null,
				}));
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Modal Config
	const modalConfig = {
		title: isUpdate ? "Update Data Dosen" : "Buat Akun Dosen",
		fields: [
			{ label: "Nama", type: "text", name: "dosenName" },
			{ label: "NIP", type: "text", name: "nip" },
			{
				label: "Mata Kuliah",
				type: "select",
				name: "matkulId",
				options: matkulData,
			},
		],
	};

	// Modal Change Handler
	const handleChange = (fieldName, value) => {
		if (fieldName === "matkulId" && value) {
			value = value.value;
		}

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
			dosenName: "",
			nip: "",
			matkulId: null,
		});
	};

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
		{
			title: "Action",
			key: "action",
			render: (record) => {
				const id = record.dosen_id;

				const handleEdit = async () => {
					if (id) {
						await getDosenValue(id);
					}

					setModalOpen(true);
					setIsUpdate(true);
				};

				const handleDelete = () => {
					Swal.fire({
						title: `Apakah anda yakin akan menghapus data Dosen ini ?`,
						icon: "warning",
						showConfirmButton: true,
						showDenyButton: true,
						confirmButtonText: "Ya",
						denyButtonText: "Cancel",
					})
						.then((willDelete) => {
							if (willDelete.value) {
								axios
									.delete(`${apiUrl()}/deleteDosen/${id}`, {
										headers: {
											Accept: "application/json",
											Authorization: `Bearer ${localStorage.getItem(
												"accessToken"
											)}`,
											"Access-Control-Allow-Origin": "*",
											"ngrok-skip-browser-warning":
												"true",
										},
									})
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

	const DosenList = dosenData.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			dosen_id: item?.id ?? null,
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

	// Form Validation
	const FormValidation = () => {
		let valid = true;

		if (!formData.dosenName) {
			Swal.fire({
				title: "Warning",
				text: "Dosen Name cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.nip) {
			Swal.fire({
				title: "Warning",
				text: "NIP cannot be empty",
				icon: "warning",
			});
			valid = false;
		} else if (!formData.matkulId) {
			Swal.fire({
				title: "Warning",
				text: "Mata Kuliah cannot be empty",
				icon: "warning",
			});
			valid = false;
		}

		return valid;
	};

	// Handle Submit
	const handleSubmit = async () => {
		const url = !isUpdate
			? `${apiUrl()}/createDosen`
			: `${apiUrl()}/updateDosen/${formData.id}`;

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
								? "Success Update Dosen Data"
								: "Success Create Dosen Data"
						}`,
						icon: "success",
						showConfirmButton: false,
						timer: 4000,
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
    <div
      className="w-full h-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="0"
      data-aos-offset="0"
    >
      <div className="md:px-7 lg:py-6 android:p-3">
        <div className="bg-white border rounded-xl shadow ">
          <div className=" w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex justify-between items-center">
            <span className="text-color-page text-2xl font-medium">
              Akun Dosen
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
            selectedOption={isUpdate ? selectedMatkul : null}
            onChange={handleChange}
            buttonLabel={isLoading ? "Saving.." : "Save"}
            onSubmit={() => handleSubmit()}
          />

          <div className="w-full md:px-10 android:px-5 py-8">
            <Tables
              className="w-full"
              columns={columns}
              dataSource={DosenList}
              paginationConfig={paginationConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dosen;