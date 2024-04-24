import React, { useState, useEffect } from "react";
import Time from "../../components/Time";
import { useNavigate } from "react-router-dom";

// Icons
import { Icon } from "@iconify/react";
import saveSolid from "@iconify/icons-la/save-solid";
import locationIcon from "@iconify/icons-mdi/location";

// Function
import { formatDateTime } from "../../function/globalFunction";

// Data
import getEventData from "../../data/admin/listEvent";
import getMahasiswaById from "../../data/mahasiswa/mahasiswaById";

// External Components
import { Button, Modal } from "antd";

const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const mahasiswaId = localStorage.getItem("mahasiswaId");

  const [search, setSearch] = useState("");
  const [eventData, setEventData] = useState([]);
  const [mahasiswaById, setMahasiswaById] = useState([]);
  const [eventDetail, seteventDetail] = useState({});

  // Time
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [waktuMulai, setWaktuMulai] = useState("");
  const [bulanMulai, setBulanMulai] = useState("");
  const [tahunMulai, setTahunMulai] = useState("");

  const [tanggalSelesai, setTanggalSelesai] = useState("");
  const [waktuSelesai, setWaktuSelesai] = useState("");

  const formatDateDetail = () => {
    if (eventDetail && eventDetail.start_date) {
      const startDateTime = new Date(eventDetail.start_date);
      const endDateTime = new Date(eventDetail.end_date);

      const startTanggal = startDateTime.getDate();
      const startBulan = startDateTime.getMonth() + 1;
      const startTahun = startDateTime.getFullYear();

      console.log("startBulan", startBulan);
      console.log("startTahun", startTahun);

      const startWaktu = startDateTime.getDate();

      const endTanggal = endDateTime.getDate();
      const endWaktu = endDateTime.toLocaleTimeString();

      setTanggalMulai(startTanggal);
      setBulanMulai(startTanggal);
      setTahunMulai(startTanggal);
      setWaktuMulai(startWaktu);

      setTanggalSelesai(`${endTanggal} ${startBulan} ${startTahun}`); // Ganti startBulan ke endBulan jika ingin menampilkan bulan dari endDateTime
      setWaktuSelesai(endWaktu);
    }
  };

  useEffect(() => {
    formatDateDetail();
  }, [eventDetail]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredEventData = eventData.filter((item) => {
    const eventName = item?.eventName ? item.eventName.toLowerCase() : "";
    const places = item?.places ? item.places.toLowerCase() : "";

    return (
      eventName.includes(search.toLowerCase()) ||
      places.includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const EventData = await getEventData();
        const MahasiswaData = await getMahasiswaById(mahasiswaId);

        setEventData(EventData);
        setMahasiswaById(MahasiswaData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllData();
  }, [mahasiswaId]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const username = localStorage.getItem("username");

  console.log("mahasiswaById", mahasiswaById.nim);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (data) => {
    setIsModalOpen(true);
    seteventDetail(data);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("eventDetail", eventDetail);

  return (
    <div className="w-full h-full">
      <div className="md:px-7 lg:py-6 android:px-3">
        <div className="lg:grid md:flex md:flex-col lg:gap-0 xl:gap-10 grid-cols-dashboard mb-2">
          <div className="md:px-0 lg:pl-0 lg:pr-10 android:px-0">
            <div className="flex android:justify-center md:justify-start my-6 white">
              <div className="flex flex-col ">
                <span className="lg:text-2xl font-normal sm:text-2xl xl:text-start android:text-center android:text-2xl text-black md:text-start">
                  Halo! Selamat datang,
                  <br className="md:hidden android:block " />
                  <span className="font-bold text-black"> {username}</span>.
                </span>
                <div className="flex android:flex-row lg:flex-col gap-0 items-center android:justify-center md:justify-start android:text-center md:text-start android:items-center md:items-start android:text-sm lg:text-base">
                  <span>NIP {mahasiswaById.nim} </span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center sm:gap-10 android:gap-5 sm:mb-0 android:mb-10 android:flex-row">
              <div className="flex flex-col lg:max-w-sm android:max-w-full w-full">
                <div className="sm:p-6 android:p-2 border border-dark-gray bg-[#FFC80466] sm:rounded-t-3xl android:rounded-t-xl justify-center flex text-center h-1/2 items-center">
                  <span className="text-black font-medium sm:text-2xl android:text-lg">
                    Belum Selesai
                  </span>
                </div>
                <div className="bg-white border sm:rounded-b-3xl android:rounded-b-xl border-dark-gray border-t-0 flex justify-center items-center sm:h-32 android:h-24">
                  <span className="text-red sm:text-6xl android:text-4xl font-medium">
                    2
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:max-w-sm android:max-w-full w-full">
                <div className="sm:p-6 android:p-2 border border-dark-gray bg-[#45FF044D] sm:rounded-t-3xl android:rounded-t-xl justify-center flex h-1/2 items-center">
                  <span className="text-black font-medium sm:text-2xl android:text-lg">
                    Selesai
                  </span>
                </div>
                <div className="bg-white border sm:rounded-b-3xl android:rounded-b-xl border-dark-gray border-t-0 flex justify-center items-center sm:h-32 android:h-24">
                  <span className="text-black sm:text-6xl android:text-4xl font-medium">
                    12
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full sm:my-6 android:mb-10">
              <div className="bg-[#AC98F933] border border-dark-gray sm:rounded-3xl android:rounded-2xl sm:py-6 sm:px-8 android:py-4 android:px-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-dashboard-line sm:text-2xl android:text-base sm:font-medium android:font-bold text-center">
                    Download PDF KRS disini!
                  </span>
                  <Icon
                    icon={saveSolid}
                    className="sm:block android:hidden text-black android:w-10 android:h-10 stroke-1"
                  ></Icon>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <Time />

            <div className="flex flex-col gap-3 w-full android:mb-10 lg:mb-0">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search Acara"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full px-5 py-3 border border-event-color rounded-lg"
                ></input>
              </div>
              <div className="w-full border-black border-b ">
                <span className=" font-medium sm:text-3xl android:text-2xl text-black">
                  List Acara
                </span>
              </div>

              <div className="w-full flex flex-col gap-3 max-h-[420px] overflow-y-scroll overscroll-contain">
                {filteredEventData.map((item, index) => (
                  <div
                    className="bg-white rounded-lg text-black p-3 hover:shadow-md hover:shadow-gray-400 transition-shadow cursor-pointer"
                    key={`${item} - ${index}`}
                    onClick={() => showModal(item)}
                  >
                    <div className="flex flex-row gap-3 sm:mb-3 android:mb-0 items-center">
                      <div className="bg-event-color w-12 h-12 rounded-md sm:block android:hidden lg:hidden xl:block"></div>
                      <div className="flex justify-between w-full sm:items-center android:items-left gap-2.5 sm:flex-row android:flex-col">
                        <div className="flex flex-col gap-0 justify-between w-4/5">
                          <span className="text-xs font-medium">
                            {item?.places ??
                              "Tempat belum ditentukan oleh panitia"}
                          </span>
                          <span className="sm:text-xl android:text-lg font-medium">
                            {item?.eventName ??
                              "Nama event belum ditentukan oleh panitia"}
                          </span>
                        </div>
                        <div className="android:w-full sm:w-fit md:w-max bg-event-color sm:rounded-2xl android:rounded-lg sm:px-2.5 android:px-3 sm:py-0.5 android:py-1 h-fit text-center text-nowrap whitespace-nowrap">
                          <span className=" sm:text-sm android:text-xs text-black font-normal ">
                            {item?.status ?? "Draft"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="sm:flex md:flex-row lg:flex-col xl:flex-row lg:gap-1 xl:gap-4 android:flex-col md:gap-4 android:gap-1 android:mt-3 md:mt-0 items-center mb-3 android:hidden ">
                      <span className="text-xs font-medium text-black">
                        Start Date :{" "}
                        {formatDateTime(new Date(item?.start_date))}
                      </span>
                      <span className="text-xs font-medium text-black">
                        End Date : {formatDateTime(new Date(item?.end_date))}
                      </span>
                    </div>
                  </div>
                ))}
                <Modal
                  title="Modal List Event"
                  open={isModalOpen}
                  onCancel={handleCancel}
                  footer={null}
                  centered
                  width={720}
                >
                  <div className="bg-white pt-6 pb-8">
                    <div className="flex flex-row gap-5">
                      <div className=" w-60 h-60 bg-[#D9D9D9]"></div>
                      <div className="flex flex-col justify-start gap-1 w-full">
                        <span className="text-2xl font-medium text-black">
                          {eventDetail.eventName}
                        </span>
                        <div className="flex flex-col gap-6">
                          <div className="flex flex-row gap-2 items-center">
                            <Icon
                              icon={locationIcon}
                              className="w-6 h-6"
                            ></Icon>
                            <span className="text-lg font-medium">
                              {eventDetail.places}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 items-start">
                            <div className="flex flex-col justify-center items-center w-full">
                              <div className="flex flex-col shadow-md rounded-xl">
                                <div className="bg-[#61CE70] text-center text-white rounded-t-xl py-0.5 px-10">
                                  <span>Start Date</span>
                                </div>
                                <div className="bg-white flex justify-center items-center h-28 rounded-b-xl">
                                  <div className="flex flex-col items-center gap-4">
                                    <span className="text-4xl font-medium text-black">
                                      13
                                    </span>
                                    <span className="texl-xl font-medium text-black text-center">
                                      Oktober 2024
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span>07.00</span>
                            </div>

                            <div className="flex flex-col justify-center items-center w-full">
                              <div className="flex flex-col shadow-md rounded-xl">
                                <div className="bg-red text-center text-white rounded-t-xl py-0.5 px-10">
                                  <span>End Date</span>
                                </div>
                                <div className="bg-white flex justify-center items-center h-28 rounded-b-xl">
                                  <div className="flex flex-col items-center gap-4">
                                    <span className="text-4xl font-medium text-black">
                                      13
                                    </span>
                                    <span className="texl-xl font-medium text-black text-center">
                                      Oktober 2023
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span>17.00</span>
                            </div>

                            <div className="bg-event-color px-5 py-10 rounded-xl h-32 flex justify-center items-center shadow-md">
                              <span className="text-black font-medium text-lg text-center">
                                On Progress
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
