import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// External Components
import axios from "axios";
import Swal from "sweetalert2";
import { Table, Space, Dropdown } from "antd";

// Data
import getMahasiswaData from "../../data/admin/listMahasiswa";

// Icons
import { Icon } from "@iconify/react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";
import caretDownFill from "@iconify/icons-ph/caret-down-fill";

const Absensi = () => {
  const navigate = useNavigate();

  // Mahasiswa State
  const [mahasiswaData, setMahasiswaData] = useState([]);

  console.log(mahasiswaData);

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
      key: item?.id ?? null,
      no: `${index + 1}.`,
      mahasiswa_id: item?.id ?? null,
      mhsName: item?.mhsName ?? "",
      nim: item?.nim ?? "",
    };

    return data;
  });

  console.log(MahasiswaList);

  const paginationConfig = {
    pageSize: 10,
    showTotal: (total, range) =>
      `Showing ${range[0]} - ${range[1]} of ${total} Mahasiswa`,
  };

  // Table Settings
  const columns = [
    {
      title: "Data Mahasiswa",
      children: [
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
      ],
    },

    {
      title: "Keterangan",
      children: [
        {
          title: "Hadir",
          dataIndex: "hadir",
          key: "hadir",
          width: 200,
          align: "center",
          render: (record) => (
            <input
              type="radio"
              value="hadir"
              onChange={() => handleRadioChange(record?.key, "hadir")}
            />
          ),
        },
        {
          title: "Izin",
          dataIndex: "izin",
          key: "izin",
          width: 200,
          align: "center",
          render: (record) => (
            <input
              type="radio"
              value="izin"
              onChange={() => handleRadioChange(record?.key, "izin")}
            />
          ),
        },
        {
          title: "Sakit",
          dataIndex: "sakit",
          key: "sakit",
          width: 200,
          align: "center",
          render: (record) => (
            <input
              type="radio"
              value="sakit"
              onChange={() => handleRadioChange(record?.key, "sakit")}
            />
          ),
        },
        {
          title: "Alpha",
          dataIndex: "alpha",
          key: "alpha",
          width: 200,
          align: "center",
          render: (record) => (
            <input
              type="radio"
              value="alpha"
              onChange={() => handleRadioChange(record?.key, "alpha")}
            />
          ),
        },
      ],
    },
  ];

  // Absen Pertemuan
  const items = [
    {
      key: "1",
      label: <span>Pertemuan Ke - 1</span>,
    },
    {
      key: "2",
      label: <span>Pertemuan Ke - 2</span>,
    },
    {
      key: "3",
      label: <span>Pertemuan Ke - 3</span>,
    },
  ];

  // Absensi State
  const [absensiMahasiswa, setAbsensiMahasiswa] = useState({
    pertemuanKe: "",
    absensiData: MahasiswaList.map((item) => ({
      mahasiswa_id: item.id,
      status_id: null,
    })),
  });

  console.log(absensiMahasiswa);

  // Change Handler
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
              className="cursor-pointer "
              menu={{ items }}
              trigger={["click", "contextMenu"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className="flex flex-row items-center gap-3">
																	<span className="text-white md:text-2xl android:text-xl font-medium ">
                    Absensi Mahasiswa
                  </span>
                  <Icon icon={caretDownFill} className="text-white" />
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
