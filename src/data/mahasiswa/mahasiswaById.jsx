import axios from "axios";
import { apiUrl } from "../../function/globalFunction";

const getMahasiswaById = async (id) => {
  console.log(id);
  try {
    const response = await axios.get(`${apiUrl()}/getMahasiswaById/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": "*",
        "ngrok-skip-browser-warning": "true",
      },
    });

    const data = response.data;
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default getMahasiswaById;
