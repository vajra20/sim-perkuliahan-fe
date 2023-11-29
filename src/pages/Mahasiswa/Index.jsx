import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";

// Icons
import { Icon } from "@iconify/react";
import saveSolid from "@iconify/icons-la/save-solid";

const Index = () => {
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="grid gap-10 grid-cols-dashboard mb-16">
          <div className="px-10">
            <div className="flex justify-center my-6">
              <span className="text-3xl text-black font-medium ">
                Halo! Selamat datang di Beranda.
              </span>
            </div>

            <div className="w-full flex justify-center gap-10">
              <div className="flex flex-col max-w-sm w-full">
                <div className="p-6 border border-dark-gray bg-[#FFC80466] rounded-t-3xl justify-center flex text-center">
                  <span className="text-black font-medium text-2xl">
                    Belum Selesai
                  </span>
                </div>
                <div className="bg-white border rounded-b-3xl border-dark-gray border-t-0 h-32 flex justify-center items-center ">
                  <span className="text-red text-6xl font-medium">2</span>
                </div>
              </div>
              <div className="flex flex-col max-w-sm w-full">
                <div className="p-6 border border-dark-gray bg-[#45FF044D] rounded-t-3xl justify-center flex">
                  <span className="text-black font-medium text-2xl">
                    Selesai
                  </span>
                </div>
                <div className="bg-white border rounded-b-3xl border-dark-gray border-t-0 h-32 flex justify-center items-center ">
                  <span className="text-black text-6xl font-medium">12</span>
                </div>
              </div>
            </div>

            <div className=" w-full my-6">
              <div className="bg-[#AC98F933] border border-dark-gray rounded-3xl py-6 px-8">
                <div className="flex items-center justify-between">
                  <span className="text-dashboard-line text-2xl font-medium">
                    Download PDF KRS disini!
                  </span>
                  <Icon
                    icon={saveSolid}
                    className=" text-black w-10 h-10 stroke-1"
                  ></Icon>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-black font-medium text-3xl">Galeri</span>
              <div className=" ">
                <img
                  src="/public/galeri.png"
                  alt=""
                  className="rounded-3xl h-full max-h-64 w-full object-cover"
                ></img>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="flex justify-center items-center w-full bg-blue-dashboard rounded-xl border border-dashboard-line">
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

            <div className="flex flex-wrap flex-row gap-2">
              <div className="border border-dashboard-line bg-absent-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  M
                </span>
              </div>
              <div className="border border-dashboard-line bg-absent-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  S
                </span>
              </div>
              <div className="border border-dashboard-line bg-absent-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  S
                </span>
              </div>
              <div className="border border-dashboard-line bg-absent-green-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  R
                </span>
              </div>
              <div className="border border-dashboard-line bg-absent-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  K
                </span>
              </div>
              <div className="border border-dashboard-line bg-absent-color py-3 px-5 rounded-xl">
                <span className="font-medium text-center text-black text-2xl">
                  J
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
