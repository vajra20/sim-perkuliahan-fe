import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Penugasan1 from "../pages/Mahasiswa/Penugasan1";
import Jadwal from "../pages/Mahasiswa/Jadwal";

const getUserRole = () => {
  return "mahasiswa";
};

export default function Router() {
  const userRole = getUserRole();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {userRole === "mahasiswa" && (
        <Route path="/mahasiswa/jadwal" element={<Jadwal />} />
        // <Route path="/mahasiswa/penugasan1" element={<Penugasan1 />} />
      )}

      {/* <Route path="gallery" element={<Gallery />} /> */}
    </Routes>
  );
}
