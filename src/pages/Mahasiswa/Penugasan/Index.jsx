import React from "react";
import Sidebar from "../../../components/Sidebar";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";
import { Link } from "react-router-dom";

const penugasan = () => {
  return (
    <div className="w-full h-full ">
      <div className="md:px-7 sm:py-6 android:p-3">
        <div className="flex flex-col justify-start sm:gap-4 android:gap-2">
          <span className=" sm:text-5xl android:text-4xl text-black font-medium w-full">
            Penugasan
          </span>
          <span className=" sm:text-xl android:text-lg text-color-page font-medium">
            Dasar Sistem Informasi
          </span>
        </div>
        <div className="flex sm:my-16 android:my-8 w-full items-center">
          <input
            className=" rounded-l-3xl pl-6 py-5 border border-[#828282] w-full border-r-0"
            placeholder="Cari Topik..."
          ></input>
          <div className="bg-white border border-[#828282] border-l-0 rounded-r-3xl px-6 py-5">
            <Icon className="w-6 h-6" icon={searchIcon}></Icon>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Link
            to={"/mahasiswa/penugasan/list-tugas"}
            className="flex p-8 items-center bg-[#3E9DC71A] rounded-3xl border border-dark-gray shadow-2xl sm:gap-10 android:gap-12 md:flex-row android:flex-col"
          >
            <img
              src="/public/task.png"
              alt=""
              className=" w-80 h-40 md:object-contain android:object-cover"
            />
            <div className="flex flex-col gap-5">
              <span className=" text-4xl text-black font-medium">Software</span>
              <span className="text-gray-sub font-medium text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi necessitatibus laborum, cum minus, ea eaque ipsa itaque
                similique doloribus quae provident quo et rerum repellat
                voluptate ad magnam aut. Doloribus.
              </span>
              <div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
                <span className=" font-medium text-base text-dark-gray">
                  Dr. H. Adinda M . Prilia, M. Kom.
                </span>
                <div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
                  <div className="text-white text-4xl font-medium">&gt;</div>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex p-8 items-center bg-[#F6D8FB] rounded-3xl border border-dark-gray sm:gap-10 android:gap-12 md:flex-row android:flex-col">
            <img
              src="/public/task.png"
              alt=""
              className=" w-80 h-40 md:object-contain android:object-cover"
            />
            <div className="flex flex-col gap-5">
              <span className=" text-4xl text-black font-medium">Topic</span>
              <span className="text-gray-sub font-medium text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi necessitatibus laborum, cum minus, ea eaque ipsa itaque
                similique doloribus quae provident quo et rerum repellat
                voluptate ad magnam aut. Doloribus.
              </span>
              <div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
                <span className=" font-medium text-base text-dark-gray">
                  Dr. H. Devina Diva S, M. Kom.
                </span>
                <div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
                  <div className="text-white text-4xl font-medium">&gt;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-8 items-center bg-[#D6EBE0] rounded-3xl border border-dark-gray sm:gap-10 android:gap-12 md:flex-row android:flex-col">
            <img
              src="/public/task.png"
              alt=""
              className=" w-80 h-40 md:object-contain android:object-cover"
            />
            <div className="flex flex-col gap-5">
              <span className=" text-4xl text-black font-medium">Topic</span>
              <span className="text-gray-sub font-medium text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi necessitatibus laborum, cum minus, ea eaque ipsa itaque
                similique doloribus quae provident quo et rerum repellat
                voluptate ad magnam aut. Doloribus.
              </span>
              <div className="flex w-full justify-between items-center sm:gap-4 android:gap-8">
                <span className=" font-medium text-base text-dark-gray">
                  Dr. H. Ryan Pratama H, M. Kom.
                </span>
                <div className=" rounded-full p-5 bg-[#98DDF9] flex justify-center items-center w-12 h-12">
                  <div className="text-white text-4xl font-medium">&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default penugasan;
