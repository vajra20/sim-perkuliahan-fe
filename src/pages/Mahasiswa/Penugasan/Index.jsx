import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Global Function
import { apiUrl } from "../../../function/globalFunction";

// Components
import Sidebar from "../../../components/Sidebar";

// External Components

// Icon
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

// Data
import getPenugasanData from "../../../data/mahasiswa/penugasan";

const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const [penugasanData, setPenugasanData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredEventData = penugasanData.filter((item) => {
    const topik = item.topik ? item.topik.toLowerCase() : "";
    const deskripsi = item.deskripsi ? item.deskripsi.toLowerCase() : "";
    const dosen = item.dosen.dosenName
      ? item.dosen.dosenName.toLowerCase()
      : "";

    return (
      topik.includes(search.toLowerCase()) ||
      dosen.includes(search.toLowerCase()) ||
      deskripsi.includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    const fetchAllData = async () => {
      const PenugasanData = await getPenugasanData();
      setPenugasanData(PenugasanData.updatedTugass);

      AOS.refresh();
    };

    fetchAllData();
  }, [token, search]);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [filteredEventData, search]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div
      className="w-full h-fit "
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="0"
      data-aos-offset="0"
    >
      <div className="md:px-7 sm:py-6 android:p-3">
        <div className="flex flex-col justify-start sm:gap-4 android:gap-2">
          <span className=" sm:text-5xl android:text-4xl text-black font-medium w-full">
            Penugasan
          </span>
        </div>

        <div className="flex sm:my-16 android:my-8 w-full items-center">
          <input
            className=" rounded-l-3xl pl-6 py-4 border border-[#828282] w-full border-r-0 focus:outline-none text-lg"
            placeholder="Cari Topik..."
            onChange={handleSearchChange}
          ></input>
          <div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
            <Icon className="w-5 h-5" icon={searchIcon}></Icon>
          </div>
        </div>

        {filteredEventData.map((item, index) => (
          <div key={index} id="parent">
            <Link
              to={`/mahasiswa/penugasan/${item.id}`}
              data-aos="fade-down"
              data-aos-anchor="#parent"
              data-aos-offset="0"
              className="flex p-8 items-center bg-[#3E9DC71A] rounded-3xl border border-gray-sub shadow-md hover:shadow-lg transition-all duration-300 sm:gap-10 android:gap-12 md:flex-row android:flex-col mb-8"
            >
              <img
                src="/public/task.png"
                alt=""
                className=" w-80 h-40 md:object-contain android:object-cover"
              />
              <div className="flex flex-col gap-5 w-full">
                <span className=" text-4xl text-black font-medium">
                  {item.topik ?? "Topik belum tersedia"}
                </span>
                <span className="text-gray-sub font-medium text-base">
                  {item.deskripsi ?? "Deskripsi belum ada"}
                </span>
                <div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
                  <span className=" font-medium text-base text-dark-gray">
                    {item.dosen.dosenName ?? "Dosen belum tersedia"}
                  </span>
                  <div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
                    <div className="text-white text-4xl font-medium">&gt;</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
