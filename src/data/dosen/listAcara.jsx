import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getBeritaAcara = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl}/getAcaraBerita`, {
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

const beritaAcaraData = async () => {
	try {
		const apiData = await getBeritaAcara();

		const dataAcara = apiData.map((item, index) => ({
			number: index + 1,
			name: item.dosen_name,
			nip: item.nip,
			matkul: item.matkul,
		}));

		return dataAcara;
	} catch (error) {
		console.error("Error getting berita acara data:", error);
		return [];
	}
};

export default beritaAcaraData;
