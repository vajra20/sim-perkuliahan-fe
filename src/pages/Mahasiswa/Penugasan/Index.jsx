import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Data
import getMahasiswaData from "../../../data/admin/listMahasiswa";
import getAllMatkul from "../../../data/mahasiswa/matkulData";

// Icons
import { Icon } from "@iconify/react";
import usersIcon from "@iconify/icons-ci/users";
import searchIcon from "@iconify/icons-mdi/search";

const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  // Date
  const currentYear = new Date().getFullYear();
  const nextYear = new Date().getFullYear() + 1;

  // Matkul State
  const [matkulData, setMatkulData] = useState([]);
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredEventData = matkulData.filter((item) => {
    const matkul = item.namaMatkul ? item.namaMatkul.toLowerCase() : "";
    const dosen =
      item.dosen && Array.isArray(item.dosen) && item.dosen.length > 0
        ? item.dosen[0].dosenName.toLowerCase()
        : "";

    return (
      matkul.includes(search.toLowerCase()) ||
      dosen.includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    const fetchAllData = async () => {
      const MatkulData = await getAllMatkul();
      const MahasiswaData = await getMahasiswaData();

      setMatkulData(MatkulData);
      setMahasiswaData(MahasiswaData);
    };

    fetchAllData();
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return (
    <div className="w-full h-full">
      <div
        className="md:px-7 lg:py-6 android:p-3"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="0"
        data-aos-offset="0"
      >
        <div className="flex flex-col justify-start sm:gap-4 android:gap-2">
          <span className="  sm:text-5xl android:text-4xl text-black font-medium w-full">
            Penugasan
          </span>
          <span className=" sm:text-xl android:text-lg text-color-page font-medium">
            Dasar Sistem Informasi
          </span>
        </div>

        <div className="flex sm:my-16 android:my-8 w-full items-center">
          <input
            className=" rounded-l-3xl pl-6 py-4 border border-[#828282] w-full border-r-0 focus:outline-none text-lg"
            placeholder="Cari Matkul / Dosen"
            onChange={handleSearchChange}
          ></input>
          <div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
            <Icon className="w-5 h-5" icon={searchIcon}></Icon>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredEventData.map((item, index) => {
            return (
              <Link
                to={`/mahasiswa/penugasan/${item.id}`}
                className="flex flex-col flex-custom max-w-sm shadow rounded-3xl hover:shadow-md transition-all duration-300"
                key={`${item} - ${index}`}
              >
                <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex sm:flex-row android:flex-col w-full justify-between overflow-hidden">
                  <div className="text-white flex flex-col justify-start z-10">
                    <span className="font-normal text-2xl w-20">
                      {item?.namaMatkul ?? ""}
                    </span>

                    <span className="font-light text-sm">
                      {`${currentYear} - ${nextYear}`}
                    </span>
                  </div>

                  <div className="flex android:justify-center sm:justify-end">
                    <img
                      src="/public/book.png"
                      alt="Book Icon"
                      className="sm:object-cover android:object-contain w-full h-full android:w-60 android:h-60 sm:w-full sm:h-full"
                    />
                  </div>
                </div>

                <div className="bg-white flex justify-between rounded-b-3xl p-4">
                  <div className="flex items-center gap-1 text-color-page ">
                    <span>
                      {Array.isArray(item.dosen) && item.dosen.length > 0
                        ? item.dosen[0].dosenName
                        : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-color-page ">
                    <Icon icon={usersIcon} className="w-5 h-5" />

                    <span className="font-medium">
                      {Number(mahasiswaData.length)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
