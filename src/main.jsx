import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./custom.css";

// import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";

// Import Layout
import Admin from "./layout/LayAdmin";
import Mahasiswa from "./layout/LayMahasiswa";
import Dosen from "./layout/LayDosen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Layout Route */}
      <Route path="/mahasiswa/*" element={<Mahasiswa />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/dosen/*" element={<Dosen />}></Route>
    </Routes>
  </BrowserRouter>
);
