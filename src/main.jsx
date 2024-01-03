import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./custom.css";

// import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";

// Import Layout
import Admin from "./layout/LayAdmin";
import Mahasiswa from "./layout/LayMahasiswa";
import Dosen from "./layout/LayDosen";

AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ContextProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />

				{/* Layout Route */}
				<Route path="/mahasiswa/*" element={<Mahasiswa />}></Route>
				<Route path="/admin/*" element={<Admin />}></Route>
				<Route path="/dosen/*" element={<Dosen />}></Route>
			</Routes>
		</ContextProvider>
	</BrowserRouter>
);
