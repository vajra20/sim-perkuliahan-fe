import React, { useState } from "react";
import { Table } from "antd";
import NavbarDashboard from "../../components/NavbarDashboard";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";
import { Icon } from "@iconify/react";

const columns = [
  {
    title: "No",
    dataIndex: "no",
  },
  {
    title: "Nama",
    dataIndex: "nama",
  },
  {
    title: "H",
    dataIndex: "hadir",
    render: () => <input type="checkbox" />,
  },
  {
    title: "S",
    dataIndex: "sakit",
    render: () => <input type="checkbox" />,
  },
  {
    title: "I",
    dataIndex: "izin",
    render: () => <input type="checkbox" />,
  },
  {
    title: "A",
    dataIndex: "alfa",
    render: () => <input type="checkbox" />,
  },
];
const data = [];
for (let i = 1; i < 20; i++) {
  data.push({
    key: i,
    no: `${i}`,
    nama: "Benediktus Vajra Sagara",
  });
}

const Absensi = () => {
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="bg-color-page px-8 pb-4 pt-4 rounded-3xl">
          <div className="mb-3">
            <span className="text-white text-2xl font-medium ">
              Pertemuan - 1
            </span>
          </div>
          <div className="bg-[#DCE9FE]">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="flex justify-end mt-5">
            <button className="bg-white flex flex-row items-center gap-2 pl-6 pr-3 py-1 rounded-lg">
              <span className="text-color-page text-lg font-medium">Kirim</span>
              <Icon icon={arrowRight2} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absensi;
