import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getDosenData = async () => {
	try {
		const response = await axios.get(`${apiUrl()}/getDosen`, {
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				"Access-Control-Allow-Origin": "*",
				"ngrok-skip-browser-warning": "true",
			},
		});

		const data = response.data;
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
};

export default getDosenData;
