import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import Tables from "../../components/Tables";

// Icons
import graduationCap from "@iconify/icons-fa/graduation-cap";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="grid gap-10 grid-cols-dashboard mb-16">
          <div className="bg-blue-dashboard px-5 py-4 rounded-xl border-dashboard-line border">
            <h1 className=" font-medium text-black mb-8">Dashboard</h1>
            <div className="flex flex-row gap-6 w-full">
              <div className="flex flex-col w-full">
                <div className="flex justify-between border-b-2 border-black items-start  mb-5">
                  <span className="w-full text-xl text-black font-medium">
                    Admin
                  </span>
                  <div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center">
                    <Icon className="w-4 h-4" icon={graduationCap} />
                  </div>
                </div>
                <div className="text-black font-medium flex items-center justify-between">
                  <span className="text-3xl">45</span>
                  <span className="text-lg">Orang</span>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between border-b-2 border-black items-start w-full mb-5">
                  <span className="w-full text-xl text-black font-medium">
                    Dosen
                  </span>
                  <div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center">
                    <Icon className="w-4 h-4" icon={graduationCap} />
                  </div>
                </div>
                <div className="text-black font-medium flex items-center justify-between">
                  <span className="text-3xl">1.745 </span>
                  <span className="text-lg">Orang</span>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex justify-between border-b-2 border-black items-start w-full mb-5">
                  <span className="w-full text-xl text-black font-medium">
                    Mahasiswa
                  </span>
                  <div className="bg-[#D9D9D9] p-1 rounded-full h-min justify-center flex items-center">
                    <Icon className="w-4 h-4" icon={graduationCap} />
                  </div>
                </div>
                <div className="text-black font-medium flex items-center justify-between">
                  <span className="text-3xl">20.745 </span>
                  <span className="text-lg">Orang</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center bg-blue-dashboard rounded-xl border border-dashboard-line">
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col justify-start items-start gap-4">
                <span className="text-5xl text-[#314B8D] font-bold text-center">
                  08.30 AM
                </span>
                <span className="text-center text-dark-gray font-medium text-3xl">
                  Selamat Pagi!
                </span>
              </div>
              <img src="/public/sun.png" alt="" className="w-32 h-32" />
            </div>
          </div>

          <div className="flex justify-center items-center rounded-xl h-fit max-h-full">
            <Tables />
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full border-black border-b ">
              <span className=" font-medium text-3xl text-black">
                List Acara
              </span>
            </div>
            <div className="bg-white rounded-lg text-black p-3 shadow-md shadow-gray-400">
              <div className="flex flex-row gap-3 mb-3">
                <div className="bg-event-color w-12 h-12 rounded-md"></div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col gap-0 justify-between">
                    <span className="text-xs font-medium">Aula Kampus</span>
                    <span className="text-xl font-medium">Lomba E-Sport</span>
                  </div>
                  <div className="bg-event-color rounded-full px-1.5 py-0.5 h-fit">
                    <span className=" text-base text-black font-normal">
                      On Progress
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center mb-3">
                <span className="text-xs font-medium text-black">
                  Start Date : 13/10/2023 || 10:00:00
                </span>
                <span className="text-xs font-medium text-black">
                  End Date : 14/10/2023 || 17:00:00
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg text-black p-3 shadow-md shadow-gray-400">
              <div className="flex flex-row gap-3 mb-3">
                <div className="bg-event-color w-12 h-12 rounded-md"></div>
                <div className="flex flex-col gap-0 justify-between w-full">
                  <span className="text-xs font-medium">Aula Kampus</span>
                  <span className="text-xl font-medium">Lomba E-Sport</span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center mb-3">
                <span className="text-xs font-medium text-black">
                  Start Date : 13/10/2023 || 10:00:00
                </span>
                <span className="text-xs font-medium text-black">
                  End Date : 14/10/2023 || 17:00:00
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg text-black p-3 shadow-md shadow-gray-400">
              <div className="flex flex-row gap-3 mb-3">
                <div className="bg-event-color w-12 h-12 rounded-md"></div>
                <div className="flex flex-col gap-0 justify-between w-full">
                  <span className="text-xs font-medium">Aula Kampus</span>
                  <span className="text-xl font-medium">Lomba E-Sport</span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center mb-3">
                <span className="text-xs font-medium text-black">
                  Start Date : 13/10/2023 || 10:00:00
                </span>
                <span className="text-xs font-medium text-black">
                  End Date : 14/10/2023 || 17:00:00
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg text-black p-3 shadow-md shadow-gray-400">
              <div className="flex flex-row gap-3 mb-3">
                <div className="bg-event-color w-12 h-12 rounded-md"></div>
                <div className="flex flex-col gap-0 justify-between w-full">
                  <span className="text-xs font-medium">Aula Kampus</span>
                  <span className="text-xl font-medium">Lomba E-Sport</span>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center mb-3">
                <span className="text-xs font-medium text-black">
                  Start Date : 13/10/2023 || 10:00:00
                </span>
                <span className="text-xs font-medium text-black">
                  End Date : 14/10/2023 || 17:00:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">{/* <Tables /> */}</div>
      </div>
    </div>
  );
};

export default Index;
