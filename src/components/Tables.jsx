import React from "react";
import { Space, Table, Tag } from "antd";

const Tables = () => {
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nama Dosen",
      dataIndex: "dosen",
      key: "dosen",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "NIP",
      key: "nip",
      dataIndex: "nip",
    },
    {
      title: "Mata Kuliah",
      key: "pelajaran",
      dataIndex: "pelajaran",
      render: (text) => <a>{text}</a>,
    },
  ];
  const data = [
    {
      key: "1",
      no: "1",
      dosen: "Devina Diva S.",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "2",
      no: "2",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "3",
      no: "3",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "4",
      no: "4",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "5",
      no: "5",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "6",
      no: "6",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "7",
      no: "7",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "8",
      no: "8",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "9",
      no: "9",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "10",
      no: "10",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "11",
      no: "11",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "12",
      no: "12",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "13",
      no: "13",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "14",
      no: "14",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "15",
      no: "15",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "16",
      no: "16",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "17",
      no: "17",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "18",
      no: "18",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "19",
      no: "19",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "20",
      no: "20",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
    {
      key: "21",
      no: "21",
      dosen: "Jim Green",
      nip: 12023043,
      pelajaran: "Aljabar Linear",
    },
  ];

  const paginationConfig = {
    pageSize: 10,
    showTotal: (total, range) =>
      `Showing ${range[0]} - ${range[1]} of ${total} list`,
  };

  return (
    <Table
      className=" w-full"
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
    />
  );
};

export default Tables;
