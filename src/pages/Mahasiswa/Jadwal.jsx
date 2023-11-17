import React, { useRef, useState } from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../layout/index.css";
import Icons from "../../components/Icons";
import fileTypeExcel from "@iconify/icons-vscode-icons/file-type-excel";
import networkO from "@iconify/icons-gis/network-o";
import iotIcon from "@iconify/icons-eos-icons/iot";
import mathOperations from "@iconify/icons-ph/math-operations";

const Jadwal = () => {
  return (
    <div className="w-full h-full ">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/public/slide2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/video.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/itb.png" alt=""></img>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col gap-6">
          <span className=" text-2xl text-black font-semibold w-full">
            Mata Pelajaran Hari Ini
          </span>

          <div className="flex flex-col gap-2">
            <div className="bg-white p-3">
              <div className="flex flex-row gap-4 items-center">
                <Icons icon={fileTypeExcel} backgroundColor="#1F3161" />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col justify-start">
                    <span className=" text-xl font-medium text-black">
                      Excel Course
                    </span>
                    <span className="text-black opacity-50 text-sm font-normal">
                      Benediktus Vajra sagara S.Pd
                    </span>
                  </div>
                  <span className="text-xl font-medium text-black">
                    08.00 - 09.30
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-3">
              <div className="flex flex-row gap-4 items-center">
                <Icons
                  icon={networkO}
                  backgroundColor="#351E1A"
                  textColor="#fff"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col justify-start">
                    <span className=" text-xl font-medium text-black">
                      Algoritma
                    </span>
                    <span className="text-black opacity-50 text-sm font-normal">
                      Samuel Andika S.Kom
                    </span>
                  </div>
                  <span className="text-xl font-medium text-black">
                    09.30 - 11.50
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-3">
              <div className="flex flex-row gap-4 items-center">
                <Icons icon={iotIcon} backgroundColor="#A0EDF7" />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col justify-start">
                    <span className=" text-xl font-medium text-black">
                      Internet Of Things
                    </span>
                    <span className="text-black opacity-50 text-sm font-normal">
                      Alif Naufal Hermawan S.Kom
                    </span>
                  </div>
                  <span className="text-xl font-medium text-black">
                    13.00 - 14.30
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-3">
              <div className="flex flex-row gap-4 items-center">
                <Icons icon={mathOperations} backgroundColor="#61CE70" />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col justify-start">
                    <span className=" text-xl font-medium text-black">
                      Matematika
                    </span>
                    <span className="text-black opacity-50 text-sm font-normal">
                      Gaza Alfarizi S.Pd
                    </span>
                  </div>
                  <span className="text-xl font-medium text-black">
                    14.30 - 16.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
