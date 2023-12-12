import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";


// Icons
import usersIcon from "@iconify/icons-ci/users";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex flex-row w-full justify-between">
              <div className="text-white flex flex-col justify-start">
                <span className="font-normal text-2xl">Matematika</span>
                <span className="font-light text-sm">2023-2024</span>
              </div>
              <img src="/public/book.png" alt="" className="object-cover" />
            </div>
            <div className="bg-white flex justify-end rounded-b-3xl p-4">
              <div className="flex items-center gap-1 text-color-page ">
                <Icon icon={usersIcon} className="w-5 h-5" />
                <span className="font-medium">35</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex flex-row w-full justify-between">
              <div className="text-white flex flex-col justify-start">
                <span className="font-normal text-2xl">Sejarah</span>
                <span className="font-light text-sm">2023-2024</span>
              </div>
              <img src="/public/book.png" alt="" className="object-cover" />
            </div>
            <div className="bg-white flex justify-end rounded-b-3xl p-4">
              <div className="flex items-center gap-1 text-color-page ">
                <Icon icon={usersIcon} className="w-5 h-5" />
                <span className="font-medium">35</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex flex-row w-full justify-between">
              <div className="text-white flex flex-col justify-start">
                <span className="font-normal text-2xl">Bahasa Indonesia</span>
                <span className="font-light text-sm">2023-2024</span>
              </div>
              <img src="/public/book.png" alt="" className="object-cover" />
            </div>
            <div className="bg-white flex justify-end rounded-b-3xl p-4">
              <div className="flex items-center gap-1 text-color-page ">
                <Icon icon={usersIcon} className="w-5 h-5" />
                <span className="font-medium">35</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
