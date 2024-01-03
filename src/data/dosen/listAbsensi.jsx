import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getAbsensiData = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl}/getAbsen`, {
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

const absensiData = async () => {
	try {
		const apiData = await getAbsensiData();

		const dataAbsensi = apiData.map((item, index) => ({
			number: index + 1,
			name: item.dosen_name,
			nip: item.nip,
			matkul: item.matkul,
		}));

		return dataAbsensi;
	} catch (error) {
		console.error("Error getting absensi data:", error);
		return [];
	}
};

export default absensiData;
