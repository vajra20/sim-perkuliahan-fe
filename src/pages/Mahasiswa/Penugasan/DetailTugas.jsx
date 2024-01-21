import React from "react";
import Icons from "../../../components/Icons";

// Icons
import attachmentIcon from "@iconify/icons-grommet-icons/attachment";
import folderOpenOutline from "@iconify/icons-solar/folder-open-outline";
import driveLine from "@iconify/icons-ri/drive-line";
import paperPlane from "@iconify/icons-system-uicons/paper-plane";

const DetailTugas = () => {
  return (
    <div>
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
          <div className="sm:my-20 android:my-8 border border-dark-gray rounded-3xl">
            <div className="bg-[#00535B57] flex flex-row justify-between items-center rounded-t-3xl py-6 android:px-6 overflow-hidden">
              <div className="flex flex-col gap-2 text-white">
                <span className="font-medium sm:text-3xl android:text-2xl android:w-40 sm:w-full">
                  Membuat Web Statik
                </span>
                <span className="sm:font-medium android:font-normal sm:text-lg android:text-base">
                  0/100
                </span>
              </div>
              <img
                src="/public/classroom1.png"
                alt=""
                className=" w-40 h-24 object-contain"
              />
            </div>

            <div className="bg-[#00535b0d] p-6">
              <div className="flex flex-col sm:gap-12 android:gap-6">
                <div className="border border-dark-gray bg-white sm:rounded-3xl android:rounded-xl sm:p-6 android:p-3">
                  <div className="flex flex-col gap-2 sm:mb-10 android:mb-5">
                    <span className="text-[#337CCF] font-medium sm:text-lg android:text-base">
                      Deskripsi tugas
                    </span>
                    <span className="text-black font-medium sm:text-sm android:text-xs leading-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam cursus, nunc id imperdiet faucibus, dolor nibh
                      ullamcorper diam, eget consectetur elit quam a magna. In
                      hac habitasse platea dictumst. Aenean euismod euismod orci
                      id auctor. Curabitur urna enim, interdum eu lacus a,
                      lacinia egestas dolor. Quisque mattis convallis tellus, a
                      consectetur ante posuere ac. Curabitur vitae egestas erat,
                      vitae placerat nibh. Sed sodales leo risus, eu ornare
                      magna gravida id.
                    </span>
                  </div>
                  <div className="border border-dark-gray lg:px-10 sm:px-5 android:px-2 whitespace-break-spaces py-2 md:rounded-full android:rounded-xl bg-[#F4F4F4] lg:mb-24 android:mb-0">
                    <a
                      href=""
                      className="text-[#337CCF] font-medium sm:text-sm lg:text-base android:text-xs break-all"
                    >
                      https://youtu.be/MVsKzefq1no?si=88SlVNlFob5KWEu2
                    </a>
                  </div>
                </div>
                <div className="border border-dark-gray bg-white sm:rounded-3xl android:rounded-xl sm:p-6 android:p-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      <Icons
                        icon={attachmentIcon}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" sm:w-7 android:w-5"
                        height="sm:h-7 android:h-5"
                      ></Icons>
                      <Icons
                        icon={folderOpenOutline}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" sm:w-7 android:w-5"
                        height="sm:h-7 android:h-5"
                      ></Icons>
                      <Icons
                        icon={driveLine}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" sm:w-7 android:w-5"
                        height="sm:h-7 android:h-5"
                      ></Icons>
                    </div>
                    <Icons
                      icon={paperPlane}
                      backgroundColor={"#EAEAEA"}
                      textColor={"#000  "}
                      width="sm:w-7 android:w-5"
                      height="sm:h-7 android:h-5"
                    ></Icons>
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

export default DetailTugas;
