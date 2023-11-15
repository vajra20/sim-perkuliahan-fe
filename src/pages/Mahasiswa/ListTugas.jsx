import React from "react";
import Sidebar from "../../components/Sidebar";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

const ListTugas = () => {
  return (
    <div className="w-full h-full ">
      <Sidebar />
      <div className="bg-color-dashboard w-full overflow-auto h-screen pl-[300px]">
        <NavbarDashboard />
        <div className="px-7 py-6">
          <div className="flex flex-col justify-start gap-4">
            <span className=" text-5xl text-black font-medium w-full">
              Penugasan
            </span>
            <span className=" text-xl text-color-page font-medium">
              Dasar Sistem Informasi
            </span>
          </div>
          <div className="flex my-16 w-full items-center">
            <input
              className=" rounded-l-3xl pl-6 py-5 border border-[#828282] w-full border-r-0"
              placeholder="Cari Topik..."
            ></input>
            <div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
              <Icon className="w-6 h-6" icon={searchIcon}></Icon>
            </div>
          </div>
          <div>
            <div className="bg-[#3E9DC71A] rounded-3xl border border-dark-gray shadow-2xl mb-16">
              <div className="flex flex-row items-center w-full justify-between py-4 px-10">
                <div className="flex gap-3 items-center ">
                  <img
                    src="/public/task.png"
                    alt=""
                    className=" w-32 h-20 object-cover"
                  />
                  <span className="text-4xl text-black font-medium">
                    Software
                  </span>
                </div>
                <span className=" font-medium text-base text-dark-gray">
                  Dr. H. Adinda M . Prilia, M. Kom.
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col flex-custom max-w-[23rem]">
                <div className="bg-[#00535B57] justify-between flex p-6 rounded-t-3xl items-center border border-black border-b-0 h-screen max-h-40 w-full">
                  <div className="flex flex-col text-white gap-2">
                    <span className=" text-2xl font-medium leading-normal ">
                      Membuat Web Static
                    </span>
                    <span className="font-medium">0/100</span>
                  </div>
                  <img
                    src="/public/classroom1.png"
                    alt=""
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="bg-[#00535B0D] p-6 rounded-b-3xl flex justify-end h-screen max-h-36 items-end  border border-black border-t-0">
                  <button className="px-8 py-3 w-fit h-fit rounded-full bg-white border border-black">
                    New
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-custom max-w-[23rem]">
                <div className="bg-[#46C28782] justify-between flex p-6 rounded-t-3xl items-center border border-black border-b-0 h-screen max-h-40 w-full">
                  <div className="flex flex-col text-white gap-2">
                    <span className=" text-2xl font-medium leading-normal ">
                      Task 2
                    </span>
                    <span className="font-medium">0/100</span>
                  </div>
                  <img
                    src="/public/classroom2.png"
                    alt=""
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="bg-[#00535B0D] p-6 rounded-b-3xl flex justify-end h-screen max-h-36 items-end  border border-black border-t-0">
                  <button className="px-8 py-3 w-fit h-fit rounded-full bg-white border border-black text-red">
                    Not Completed
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-custom max-w-[23rem]">
                <div className="bg-[#4696C28A] justify-between flex p-6 rounded-t-3xl items-center border border-black border-b-0 h-screen max-h-40 w-full">
                  <div className="flex flex-col text-white gap-2">
                    <span className=" text-2xl font-medium leading-normal ">
                      Task 3
                    </span>
                    <span className="font-medium">0/100</span>
                  </div>
                  <img
                    src="/public/classroom3.png"
                    alt=""
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="bg-[#00535B0D] p-6 rounded-b-3xl flex justify-end h-screen max-h-36 items-end  border border-black border-t-0">
                  <button className="px-8 py-3 w-fit h-fit rounded-full bg-white border border-black">
                    New
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-custom max-w-[23rem]">
                <div className="bg-[#8446C24F] justify-between flex p-6 rounded-t-3xl items-center border border-black border-b-0 h-screen max-h-40 w-full">
                  <div className="flex flex-col text-white gap-2">
                    <span className=" text-2xl font-medium leading-normal ">
                      Task 4
                    </span>
                    <span className="font-medium">0/100</span>
                  </div>
                  <img
                    src="/public/classroom4.png"
                    alt=""
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="bg-[#00535B0D] p-6 rounded-b-3xl flex justify-end h-screen max-h-36 items-end  border border-black border-t-0">
                  <button className="px-8 py-3 w-fit h-fit rounded-full bg-white border border-black">
                    New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTugas;
