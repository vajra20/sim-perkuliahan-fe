import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./custom.css";

// import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ListTugas from "./pages/Mahasiswa/ListTugas";
import DetailTugas from "./pages/Mahasiswa/DetailTugas";

// Import Layout
import Admin from "./layout/admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list-tugas" element={<ListTugas />} />
      <Route path="/detail-tugas" element={<DetailTugas />} />

      <Route path="/mahasiswa/*" element={<Admin />}></Route>
    </Routes>
  </BrowserRouter>
);
