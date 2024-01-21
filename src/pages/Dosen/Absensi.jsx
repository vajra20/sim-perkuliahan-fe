import React, { useState } from "react";
import { Table } from "antd";
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
      <div className="md:px-7 lg:py-6 android:p-3">
        <div className="bg-color-page md:px-8 android:px-4 md:py-4 android:py-2 md:rounded-3xl android:rounded-xl">
          <div className="md:mb-3 android:mb-1.5">
            <span className="text-white md:text-2xl android:text-xl font-medium ">
              Pertemuan - 1
            </span>
          </div>
          <div className="bg-[#DCE9FE]">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="flex justify-end md:mt-5 android:mt-2">
            <button className="bg-white flex flex-row items-center gap-2 pl-6 pr-3 py-1 rounded-lg">
              <span className="text-color-page md:text-lg android:text-base font-medium">
                Kirim
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
