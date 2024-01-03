import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getPenugasanData = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl}/getTugas`, {
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

const penugasanData = async () => {
	try {
		const apiData = await getPenugasanData();

		const dataTugas = apiData.map((item, index) => ({
			number: index + 1,
			name: item.dosen_name,
			nip: item.nip,
			matkul: item.matkul,
		}));

		return dataTugas;
	} catch (error) {
		console.error("Error getting tugas data:", error);
		return [];
	}
};

export default penugasanData;
