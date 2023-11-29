import React from "react";
import NavbarDashboard from "../../../components/NavbarDashboard";
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
          <div className="my-20 border border-dark-gray rounded-3xl">
            <div className="bg-[#00535B57] flex flex-row justify-between items-center rounded-t-3xl py-6 px-12">
              <div className="flex flex-col gap-2 text-white">
                <span className="font-medium text-3xl">Membuat Web Statik</span>
                <span className=" font-medium text-lg">0/100</span>
              </div>
              <img
                src="/public/classroom1.png"
                alt=""
                className=" w-40 h-24 object-contain"
              />
            </div>

            <div className="bg-[#00535b0d] p-6">
              <div className="flex flex-col gap-12">
                <div className="border border-dark-gray bg-white rounded-3xl p-6">
                  <div className="flex flex-col gap-2 mb-10">
                    <span className="text-[#337CCF] font-medium text-lg">
                      Deskripsi tugas
                    </span>
                    <span className="text-black font-medium text-sm leading-normal">
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
                  <div className="border border-dark-gray px-10 py-2 rounded-full bg-[#F4F4F4] mb-24">
                    <a href="" className="text-[#337CCF] font-medium text-lg">
                      https://youtu.be/MVsKzefq1no?si=88SlVNlFob5KWEu2
                    </a>
                  </div>
                </div>
                <div className="border border-dark-gray bg-white rounded-3xl p-6">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      <Icons
                        icon={attachmentIcon}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" w-7"
                        height="h-7"
                      ></Icons>
                      <Icons
                        icon={folderOpenOutline}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" w-7"
                        height="h-7"
                      ></Icons>
                      <Icons
                        icon={driveLine}
                        backgroundColor={"#EAEAEA"}
                        textColor={"#337CCF"}
                        width=" w-7"
                        height="h-7"
                      ></Icons>
                    </div>
                    <Icons
                      icon={paperPlane}
                      backgroundColor={"#EAEAEA"}
                      textColor={"#000  "}
                      width=" w-7"
                      height="h-7"
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
