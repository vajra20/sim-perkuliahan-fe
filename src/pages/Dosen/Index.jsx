import React from "react";

// Icons
import usersIcon from "@iconify/icons-ci/users";
import { Icon } from "@iconify/react";

const Index = () => {
  return (
    <div className="w-full h-full">
      <div
        className="md:px-7 lg:py-6 android:p-3"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="0"
        data-aos-offset="0"
      >
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex sm:flex-row android:flex-col w-full justify-between overflow-hidden">
              <div className="text-white flex flex-col justify-start z-10">
                <span className="font-normal text-2xl w-20">Matematika</span>
                <span className="font-light text-sm">2023-2024</span>
              </div>
              <div className="flex android:justify-center sm:justify-end">
                <img
                  src="/public/book.png"
                  alt=""
                  className="sm:object-cover android:object-contain w-full h-full android:w-60 android:h-60 sm:w-full sm:h-full"
                />
              </div>
            </div>
            <div className="bg-white flex justify-end rounded-b-3xl p-4">
              <div className="flex items-center gap-1 text-color-page ">
                <Icon icon={usersIcon} className="w-5 h-5" />
                <span className="font-medium">35</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex sm:flex-row android:flex-col w-full justify-between overflow-hidden">
              <div className="text-white flex flex-col justify-start z-10">
                <span className="font-normal text-2xl w-20">Sejarah</span>
                <span className="font-light text-sm">2023-2024</span>
              </div>
              <div className="flex android:justify-center sm:justify-end">
                <img
                  src="/public/book.png"
                  alt=""
                  className="sm:object-cover android:object-contain w-full h-full android:w-60 android:h-60 sm:w-full sm:h-full"
                />
              </div>
            </div>
            <div className="bg-white flex justify-end rounded-b-3xl p-4">
              <div className="flex items-center gap-1 text-color-page ">
                <Icon icon={usersIcon} className="w-5 h-5" />
                <span className="font-medium">35</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-custom max-w-sm">
            <div className="bg-[#26577C] px-4 py-5 rounded-t-3xl flex sm:flex-row android:flex-col w-full justify-between overflow-hidden">
              <div className="text-white flex flex-col justify-start z-10">
                <span className="font-normal text-2xl w-20">
                  Bahasa Indonesia
                </span>
                <span className="font-light text-sm">2023-2024</span>
              </div>

              <div className="flex android:justify-center sm:justify-end">
                <img
                  src="/public/book.png"
                  alt=""
                  className="sm:object-cover android:object-contain w-full h-full android:w-60 android:h-60 sm:w-full sm:h-full"
                />
              </div>
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
