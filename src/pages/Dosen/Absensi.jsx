import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Function
import { apiUrl } from "../../function/globalFunction";

// External Components
import axios from "axios";
import Swal from "sweetalert2";
import { Table, Dropdown, Menu, Radio } from "antd";

// Data
import getMahasiswaData from "../../data/admin/listMahasiswa";

// Icons
import { Icon } from "@iconify/react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";
import caretDownFill from "@iconify/icons-ph/caret-down-fill";

const Absensi = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	// Mahasiswa State
	const [mahasiswaData, setMahasiswaData] = useState([]);

	useEffect(() => {
		const fetchAllData = async () => {
			const MahasiswaData = await getMahasiswaData();
			setMahasiswaData(MahasiswaData);
		};

		fetchAllData();
	}, []);

	// Mahasiswa List
	const MahasiswaList = mahasiswaData.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			key: item?.id ?? null,
			mahasiswa_id: item?.id ?? null,
			mhsName: item?.mhsName ?? "",
			nim: item?.nim ?? "",
		};

		return data;
	});

	const paginationConfig = {
		pageSize: 10,
		showTotal: (total, range) =>
			`Showing ${range[0]} - ${range[1]} of ${total} Mahasiswa`,
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
			dataIndex: "mhsName",
			key: "mhsName",
		},
		{
			title: "NIM",
			dataIndex: "nim",
			key: "nim",
		},
		{
			title: "Keterangan",
			align: "center",
			render: (record) => {
				const id = record.mahasiswa_id;

				return (
					<>
						<Radio.Group name="kehadiran">
							<Radio
								value={1}
								onChange={() => handleRadioChange(id, 1)}
							>
								Hadir
							</Radio>

							<Radio
								value={2}
								onChange={() => handleRadioChange(id, 2)}
							>
								Izin
							</Radio>

							<Radio
								value={3}
								onChange={() => handleRadioChange(id, 3)}
							>
								Sakit
							</Radio>

							<Radio
								value={4}
								onChange={() => handleRadioChange(id, 4)}
							>
								Alpha
							</Radio>
						</Radio.Group>
					</>
				);
			},
		},
	];

	// Absen Pertemuan
	const items = [
		{
			key: 1,
			label: <span>Pertemuan Ke - 1</span>,
		},
		{
			key: 2,
			label: <span>Pertemuan Ke - 2</span>,
		},
		{
			key: 3,
			label: <span>Pertemuan Ke - 3</span>,
		},
	];

	// Absensi State
	const [pertemuanKe, setPertemuanKe] = useState("");
	const [absensiMahasiswa, setAbsensiMahasiswa] = useState({
		pertemuanKe: null,
		absensiData: [],
	});

	useEffect(() => {
		setAbsensiMahasiswa((prevState) => ({
			...prevState,
			absensiData: mahasiswaData.map((item) => ({
				mahasiswaId: item.id,
				statusId: null,
			})),
		}));
	}, [mahasiswaData]);

	console.log(absensiMahasiswa);

	// Change Handler
	const handleDropdownSelect = (item) => {
		setPertemuanKe(item.key);
		setAbsensiMahasiswa((prev) => ({
			...prev,
			pertemuanKe: item.key,
		}));
	};

	// Menu Dropdown
	const menu = (
		<Menu onClick={handleDropdownSelect}>
			{items.map((item) => (
				<Menu.Item key={item.key}>{item.label}</Menu.Item>
			))}
		</Menu>
	);

	const handleRadioChange = (mahasiswaId, status) => {
		setAbsensiMahasiswa((prevAbsensi) => {
			const updatedAbsensiData = prevAbsensi.absensiData.map((item) => {
				if (item.mahasiswa_id === mahasiswaId) {
					return {
						...item,
						status_id: status,
					};
				}
				return item;
			});

			return {
				...prevAbsensi,
				absensiData: updatedAbsensiData,
			};
		});
	};

	// Handle Submit
	const handleSubmit = async () => {
		setIsLoading(true);

		await axios
			.post(`${apiUrl()}/inputAbsen`, absensiMahasiswa, {
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
						text: "Success Create Absent",
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

				navigate("/dosen/beranda");
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
				<div className="bg-color-page md:px-8 android:px-4 md:py-4 android:py-2 md:rounded-3xl android:rounded-xl">
					<div className="md:mb-3 android:mb-1.5">
						<Dropdown
							overlay={menu}
							className="cursor-pointer "
							trigger={["click", "contextMenu"]}
						>
							<a onClick={(e) => e.preventDefault()}>
								<div className="flex flex-row items-center gap-3">
									<span className="text-white md:text-2xl android:text-xl font-medium ">
										Absensi Mahasiswa
									</span>

									<Icon
										icon={caretDownFill}
										className="text-white"
									/>

									{pertemuanKe && (
										<span className="text-white md:text-2xl android:text-xl font-medium ">
											Pertemuan Ke - {pertemuanKe}
										</span>
									)}
								</div>
							</a>
						</Dropdown>
					</div>

					<div className="bg-[#DCE9FE]">
						<Table
							className="w-full"
							columns={columns}
							dataSource={MahasiswaList}
							rowKey={(record) => record.key}
							paginationConfig={paginationConfig}
						/>
					</div>

					<div className="flex justify-end md:mt-5 android:mt-2">
						<button
							onClick={handleSubmit}
							disabled={isLoading}
							className="bg-white flex flex-row items-center gap-2 pl-6 pr-3 py-1 rounded-lg"
						>
							<span className="text-color-page md:text-lg android:text-base font-medium">
								{isLoading ? "Submitting.." : "Submit"}
							</span>

							<Icon
								icon={arrowRight2}
								className="md:w-6 android:w-4 md:h-6 android:h-4"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Absensi;
