import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getAdminData = async () => {
	try {
		let allData = [];

		while (true) {
			const response = await axios.get(`${apiUrl()}/getAdmin`, {
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

const adminData = async () => {
	try {
		const apiData = await getAdminData();

		const dataAdmins = apiData.map((item, index) => ({
			number: index + 1,
			name: item.adminData,
			nip: item.nip,
			matkul: item.matkul,
		}));

		return dataAdmins;
	} catch (error) {
		console.error("Error getting admin data:", error);
		return [];
	}
};

export default adminData;
