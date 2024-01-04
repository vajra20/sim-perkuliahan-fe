import React, { useState, useEffect } from "react";

// Components
import NavbarDashboard from "../../components/NavbarDashboard";
import { Space, Table } from "antd";
import { Button, Modal } from "antd";

// Data
import getDosenData from "../../data/admin/listDosen";

// Icons
import { Icon } from "@iconify/react";
import todoAdd from "@iconify/icons-pajamas/todo-add";
import editIcon from "@iconify/icons-tabler/edit";
import trashIcon from "@iconify/icons-ion/trash";

const Dosen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

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
		title: "Mata Pelajaran",
		dataIndex: "mapel",
		key: "mapel",
	},
	{
		title: "NIP",
		dataIndex: "nip",
		key: "nip",
	},
	{
		title: "Action",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<button className="bg-[#FFC006] p-1 rounded ">
					<Icon icon={editIcon} className=" w-5 h-5"></Icon>
				</button>
				<button className="bg-[#DA3442] p-1 rounded ">
					<Icon
						icon={trashIcon}
						className="text-white w-5 h-5"
					></Icon>
				</button>
			</Space>
		),
	},
];

const data = [
	{
		no: "1",
		nama: "Vito Aleandra S. Kom",
		mapel: "Teknik Komputer",
		nip: 12108545,
	},
	{
		no: "2",
		nama: "Maulana Yusuf S.Pd",
		mapel: "Matematika",
		nip: 12108878,
	},
	{
		no: "3",
		nama: "Benediktus Vajra Sagara S. Kom",
		mapel: "Sejarah",
		nip: 12108356,
	},
];

const paginationConfig = {
	pageSize: 10,
	showTotal: (total, range) =>
		`Showing ${range[0]} - ${range[1]} of ${total} list`,
};

const Dosen = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="md:px-7 lg:py-6 android:p-3">
        <div className="bg-white border rounded-xl shadow ">
          <div className=" w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex justify-between items-center">
            <span className="text-color-page text-2xl font-medium">
              Akun Dosen
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
						<Table
							className="w-full"
							columns={columns}
							dataSource={data}
							pagination={paginationConfig}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dosen;
