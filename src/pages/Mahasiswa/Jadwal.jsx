import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../layout/index.css";
import Icons from "../../components/Icons";
import fileTypeExcel from "@iconify/icons-vscode-icons/file-type-excel";

const Jadwal = () => {
  return (
    <div className="w-full h-full ">
      <NavbarDashboard />
      <div className="md:px-7 android:px-3 sm:py-6 android:py-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper android:!mb-8 sm:!mb-10"
        >
          <SwiperSlide>
            <div className="h-full w-full">
              <img src="/public/slide2.png" alt="" className="rounded-xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/video.png" alt="" className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/itb.png" alt="" className="rounded-xl"></img>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col sm:gap-6 android:gap-4">
          <span className=" android:text-2xl sm:text-3xl text-black font-semibold w-full">
            Mata Pelajaran Hari Ini
          </span>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex flex-row gap-4 items-center">
                  <Icons icon={fileTypeExcel} backgroundColor="#1F3161" />
                  <div className="flex android:flex-col sm:flex-row justify-between sm:items-center android:items-left w-full">
                    <div className="flex flex-col justify-start">
                      <span className=" sm:text-xl android:text-base font-medium text-black -mb-1">
                        Excel Course
                      </span>
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-normal">
                        Benediktus Vajra sagara S.Pd
                      </span>
                    </div>
                    <span className="sm:text-xl android:text-[10px] whitespace-nowrap font-medium text-black ">
                      08.00 - 09.30
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex flex-row gap-4 items-center">
                  <Icons icon={fileTypeExcel} backgroundColor="#1F3161" />
                  <div className="flex android:flex-col sm:flex-row justify-between sm:items-center android:items-left w-full">
                    <div className="flex flex-col justify-start">
                      <span className=" sm:text-xl android:text-base font-medium text-black -mb-1">
                        Excel Course
                      </span>
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-normal">
                        Benediktus Vajra sagara S.Pd
                      </span>
                    </div>
                    <span className="sm:text-xl android:text-[10px] whitespace-nowrap font-medium text-black ">
                      08.00 - 09.30
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex flex-row gap-4 items-center">
                  <Icons icon={fileTypeExcel} backgroundColor="#1F3161" />
                  <div className="flex android:flex-col sm:flex-row justify-between sm:items-center android:items-left w-full">
                    <div className="flex flex-col justify-start">
                      <span className=" sm:text-xl android:text-base font-medium text-black -mb-1">
                        Excel Course
                      </span>
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-normal">
                        Benediktus Vajra sagara S.Pd
                      </span>
                    </div>
                    <span className="sm:text-xl android:text-[10px] whitespace-nowrap font-medium text-black ">
                      08.00 - 09.30
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-3 rounded-lg">
                <div className="flex flex-row gap-4 items-center">
                  <Icons icon={fileTypeExcel} backgroundColor="#1F3161" />
                  <div className="flex android:flex-col sm:flex-row justify-between sm:items-center android:items-left w-full">
                    <div className="flex flex-col justify-start">
                      <span className=" sm:text-xl android:text-base font-medium text-black -mb-1">
                        Excel Course
                      </span>
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-normal">
                        Benediktus Vajra sagara S.Pd
                      </span>
                    </div>
                    <span className="sm:text-xl android:text-[10px] whitespace-nowrap font-medium text-black ">
                      08.00 - 09.30
                    </span>
                  </div>
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
