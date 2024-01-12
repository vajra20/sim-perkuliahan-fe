import React from "react";
import { Table } from "antd";

const Tables = ({ dosenDatas }) => {
	const columns = [
		{
			title: "No.",
			dataIndex: "no",
			key: "no",
		},
		{
			title: "Nama Dosen",
			dataIndex: "dosen_name",
			key: "dosen_name",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "NIP",
			key: "nip",
			dataIndex: "nip",
		},
		{
			title: "Mata Kuliah",
			key: "matkul",
			dataIndex: "matkul",
			render: (text) => <a>{text}</a>,
		},
	];

	const DosenList = dosenDatas.map((item, index) => {
		let data;

		data = {
			no: `${index + 1}.`,
			dosen_name: item.dosenName,
			nip: item.nip,
			matkul: item.matkul.namaMatkul,
		};

		return data;
	});

	const paginationConfig = {
		pageSize: 10,
		showTotal: (total, range) =>
			`Showing ${range[0]} - ${range[1]} of ${total} list`,
	};

	return (
		<Table
			className=" w-full"
			columns={columns}
			dataSource={DosenList}
			pagination={paginationConfig}
		/>
	);
};

export default Tables;
