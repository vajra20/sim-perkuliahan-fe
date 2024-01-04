import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getMahasiswaData = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl()}/getMahasiswa`, {
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

const mahasiswaData = async () => {
	try {
		const apiData = await getMahasiswaData();

		const MahasiswaDatas = apiData.map((item, index) => ({
			number: index + 1,
			name: item.mahasiswa_name,
			matkul: item.matkul,
			nip: item.nip,
		}));

		return MahasiswaDatas;
	} catch (error) {
		console.error("Error getting mahasiswa data:", error);
		return [];
	}
};

export default mahasiswaData;
