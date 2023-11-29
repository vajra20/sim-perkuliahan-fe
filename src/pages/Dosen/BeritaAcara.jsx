import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";

// Icons
import plusIcon from "@iconify/icons-mdi/plus";
import clockOutline from "@iconify/icons-mdi/clock-outline";
import calendarBold from "@iconify/icons-solar/calendar-bold";
import profileFill from "@iconify/icons-iconamoon/profile-fill";
import { Icon } from "@iconify/react";

const BeritaAcara = () => {
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="flex flex-col gap-5">
          <button className="bg-color-page rounded-full px-5 py-3 text-white w-fit">
            <div className="flex flex-row gap-10 items-center">
              <span className="text-lg font-medium">Buat</span>
              <Icon icon={plusIcon} className="w-6 h-6"></Icon>
            </div>
          </button>

          <div className="bg-white rounded-3xl shadow border border-black/40 shadow-black/25 ">
            <div className="flex items-center">
              <div className="flex flex-col gap-1 w-full p-8">
                <span className="text-black font-semibold text-lg font-inter">
                  #Kuliah Ke - 1
                </span>
                <div className="border-b-2 w-full border-event-color">
                  <div className="flex flex-row items-center gap-4 mb-10 ">
                    <div className="flex flex-row gap-1 text-gray-sub">
                      <Icon icon={clockOutline}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        08.45 -15.15
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-gray-sub">
                      <Icon icon={calendarBold}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        8 Oktober 2023
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-gray-sub">
                      <Icon icon={profileFill}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        36
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 w-full">
                  <span className=" font-inter text-black font-medium text-lg">
                    Pengenalan sistem informasi dan Konsep dasar sistem
                    informasi
                  </span>
                </div>
              </div>

              <div className="flex flex-col p-4">
                <div className="bg-white border border-black/30 rounded-t-xl w-full h-32"></div>
                <div className="bg-color-page w-full px-14 py-1 rounded-b-xl">
                  <span className="text-white text-sm font-inter font-medium whitespace-nowrap">
                    PARAF DOSEN
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

export default BeritaAcara;
