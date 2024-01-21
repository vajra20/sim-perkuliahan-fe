import React, { useState, useEffect } from "react";

// Components
import NavbarDashboard from "../../components/NavbarDashboard";
import Tables from "../../components/Tables";

// External Components
import { Space } from "antd";
import { Button, Modal } from "antd";

// Data
import getMahasiswaData from "../../data/admin/listMahasiswa";

// Icons
import { Icon } from "@iconify/react";
import todoAdd from "@iconify/icons-pajamas/todo-add";
import editIcon from "@iconify/icons-tabler/edit";
import trashIcon from "@iconify/icons-ion/trash";

const Mahasiwa = () => {
	// Mahasiswa
	const [mahasiswaData, setMahasiswaData] = useState([]);

	// Fetching Mahasiswa Data ( find All )
	useEffect(() => {
		const fetchMahasiwaData = async () => {
			const MahasiswaData = await getMahasiswaData();
			setMahasiswaData(MahasiswaData);
		};

		fetchMahasiwaData();
	}, []);

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
 const [isModalEditOpen, setIsModalEditOpen] = useState(false);
 const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

 const showModal = () => {
   setIsModalOpen(true);
 };

 const handleOk = () => {
   setIsModalOpen(false);
 };

 const handleCancel = () => {
   setIsModalOpen(false);
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
     dataIndex: "nama",
     key: "nama",
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
     render: (_, record) => (
       <Space size="middle">
         <button
           className="bg-[#FFC006] p-1 rounded "
           onClick={() => setIsModalEditOpen(true)}
         >
           <Icon icon={editIcon} className=" w-5 h-5"></Icon>
         </button>
         <Modal
           title="Edit Akun"
           centered
           open={isModalEditOpen}
           onOk={() => setIsModalEditOpen(false)}
           onCancel={() => setIsModalEditOpen(false)}
           footer={[
             <Button
               key="ok"
               className="bg-color-page py-2.5 px-6 h-fit text-white font-medium text-base shadow-none border-none"
               onClick={() => setIsModalEditOpen(false)}
             >
               <div className="flex items-center gap-0">
                 <span className="text-sm">Simpan</span>
               </div>
             </Button>,
           ]}
         >
           <div className="flex flex-col gap-2 mt-5 mb-2">
             <div className="grid grid-cols-3 items-center">
               <span className="text-black font-normal sm:text-lg android:text-base">
                 Nama
               </span>
               <div className="flex items-center gap-4 col-span-2">
                 <span className="text-black font-normal sm:text-lg android:text-base">
                   :{" "}
                 </span>
                 <input
                   type="text"
                   name="nama"
                   className="border-2 rounded-md p-1.5 w-full"
                 />
               </div>
             </div>
             <div className="grid grid-cols-3 items-center">
               <span className="text-black font-normal sm:text-lg android:text-base">
                 NIP
               </span>
               <div className="flex items-center gap-4 col-span-2">
                 <span className="text-black font-normal sm:text-lg android:text-base">
                   :{" "}
                 </span>
                 <input
                   type="text"
                   name="nip"
                   className="border-2 rounded-md p-1.5 w-full"
                 />
               </div>
             </div>
             <div className="grid grid-cols-3 items-center">
               <span className="text-black font-normal sm:text-lg android:text-base">
                 Mata pelajaran
               </span>
               <div className="flex items-center gap-4 col-span-2">
                 <span className="text-black font-normal sm:text-lg android:text-base">
                   :{" "}
                 </span>
                 <input
                   type="text"
                   name="mapel"
                   className="border-2 rounded-md p-1.5 w-full"
                 />
               </div>
             </div>
           </div>
         </Modal>

         <button
           className="bg-[#DA3442] p-1 rounded "
           onClick={() => setIsModalDeleteOpen(true)}
         >
           <Icon icon={trashIcon} className="text-white w-5 h-5"></Icon>
         </button>
         <Modal
           title="Hapus Akun"
           centered
           open={isModalDeleteOpen}
           onOk={() => setIsModalDeleteOpen(false)}
           onCancel={() => setIsModalDeleteOpen(false)}
           footer={[
             <Button
               key="ok"
               className="bg-[#DA3442] py-2.5 px-6 h-fit text-white font-medium text-base shadow-none border-none"
               onClick={() => setIsModalDeleteOpen(false)}
             >
               <div className="flex items-center gap-0">
                 <span className="text-sm">Hapus</span>
               </div>
             </Button>,
           ]}
         >
           <div className="italic text-center">
             <span className="text-base ">
               Apakah anda yakin ingin menghapus akun <br />
               <b>Vito Aleandra S. Kom</b>?
             </span>
           </div>
         </Modal>
       </Space>
     ),
   },
 ];

	const MahasiswaList = mahasiswaData.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			nama: item.mhsName,
			nim: item.nim,
			tanggalLahir: item.tanggalLahir,
			tempatLahir: item.tempatLahir,
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
			<NavbarDashboard />
			<div className="md:px-7 lg:py-6 android:p-3">
				<div className="bg-white border rounded-xl shadow ">
					<div className=" w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex justify-between items-center">
						<span className="text-color-page text-2xl font-medium">
							Akun Mahasiswa
						</span>

						<button onClick={showModal}>
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

						<Modal
							title="Buat Akun"
							centered
							open={isModalOpen}
							onOk={handleOk}
							onCancel={handleCancel}
							footer={[
								<Button
									type="primary"
									key="ok"
									className="px-10 text-white bg-color-page text-lg flex items-center font-medium py-1.5"
									onClick={handleOk}
								>
									Save
								</Button>,
							]}
						>
							<div className="flex flex-col gap-2 mt-5 mb-2">
								<div className="grid grid-cols-3 items-center">
									<span className="text-black font-normal sm:text-lg android:text-base">
										Nama
									</span>
									<div className="flex items-center gap-4 col-span-2">
										<span className="text-black font-normal sm:text-lg android:text-base">
											:{" "}
										</span>
										<input
											type="text"
											name="nama"
											className="border-2 rounded-md p-1.5 w-full"
										/>
									</div>
								</div>
								<div className="grid grid-cols-3 items-center">
									<span className="text-black font-normal sm:text-lg android:text-base">
										NIP
									</span>
									<div className="flex items-center gap-4 col-span-2">
										<span className="text-black font-normal sm:text-lg android:text-base">
											:{" "}
										</span>
										<input
											type="text"
											name="nip"
											className="border-2 rounded-md p-1.5 w-full"
										/>
									</div>
								</div>
								<div className="grid grid-cols-3 items-center">
									<span className="text-black font-normal sm:text-lg android:text-base">
										Mata pelajaran
									</span>
									<div className="flex items-center gap-4 col-span-2">
										<span className="text-black font-normal sm:text-lg android:text-base">
											:{" "}
										</span>
										<input
											type="text"
											name="mapel"
											className="border-2 rounded-md p-1.5 w-full"
										/>
									</div>
								</div>
							</div>
						</Modal>
					</div>

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
