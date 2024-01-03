import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getDosenData = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl}/getDosen`, {
				headers: {
					Accept: "application/json",
					Authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
					"Access-Control-Allow-Origin": "*",
					"ngrok-skip-browser-warning": "true",
				},
			});

			const data = response.data.data;
			allData = [...allData, ...data];
		}
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
};

const dosenData = async () => {
	try {
		const apiData = await getDosenData();

		const dataDosens = apiData.map((item, index) => ({
			number: index + 1,
			name: item.dosen_name,
			nip: item.nip,
			matkul: item.matkul,
		}));

		return dataDosens;
	} catch (error) {
		console.error("Error getting dosen data:", error);
		return [];
	}
};

export default dosenData;
