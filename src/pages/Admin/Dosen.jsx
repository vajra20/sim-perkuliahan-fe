import React, { useState } from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Space, Table } from "antd";
import { Button, Modal } from "antd";

// Icons
import { Icon } from "@iconify/react";
import todoAdd from "@iconify/icons-pajamas/todo-add";
import editIcon from "@iconify/icons-tabler/edit";
import trashIcon from "@iconify/icons-ion/trash";

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
          <Icon icon={trashIcon} className="text-white w-5 h-5"></Icon>
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
      <div className="px-7 py-6">
        <div className="bg-white border rounded-xl shadow ">
          <div className=" w-full border-b-2 border-event-color px-10 py-3 flex justify-between items-center">
            <span className="text-color-page text-2xl font-medium">
              Akun Dosen
            </span>

            <button onClick={showModal}>
              <div className="flex flex-row items-center">
                <div className="px-6 shadow rounded-l border border-event-color h-9 flex items-center">
                  <span className="text-lg text-color-page font-medium">
                    Add
                  </span>
                </div>
                <div className="bg-color-page text-white flex items-center rounded-r p-2 shadow">
                  <Icon icon={todoAdd} className="w-5 h-5"></Icon>
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
                  <span className="text-black font-normal text-lg">Nama</span>
                  <div className="flex items-center gap-4 col-span-2">
                    <span className="text-black font-normal text-lg">: </span>
                    <input
                      type="text"
                      name="nama"
                      className="border-2 rounded-md p-1.5 w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <span className="text-black font-normal text-lg">NIP</span>
                  <div className="flex items-center gap-4 col-span-2">
                    <span className="text-black font-normal text-lg">: </span>
                    <input
                      type="text"
                      name="nip"
                      className="border-2 rounded-md p-1.5 w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <span className="text-black font-normal text-lg">
                    Mata pelajaran
                  </span>
                  <div className="flex items-center gap-4 col-span-2">
                    <span className="text-black font-normal text-lg">: </span>
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

          <div className="w-full px-10 py-8">
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
