import React from "react";
import { Table } from "antd";

const Tables = ({ className, columns, dataSource, paginationConfig }) => {
	return (
		<Table
			className={className}
			columns={columns}
			dataSource={dataSource}
			pagination={paginationConfig}
		/>
	);
};

export default Tables;
