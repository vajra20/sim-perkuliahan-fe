import React, { useState } from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import Icons from "../../components/Icons";
import { Button, Modal } from "antd";

// Icons
import plusIcon from "@iconify/icons-mdi/plus";
import rulerPenLinear from "@iconify/icons-solar/ruler-pen-linear";
import dotsThreeVerticalBold from "@iconify/icons-ph/dots-three-vertical-bold";
import { Icon } from "@iconify/react";

const Tugas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-full">
      <NavbarDashboard />
      <div className="px-7 py-6">
        <div className="flex flex-col gap-5">
          <button
            className="bg-color-page rounded-full px-5 py-3 text-white w-fit"
            onClick={showModal}
          >
            <div className="flex flex-row gap-10 items-center">
              <span className="text-lg font-medium">Buat</span>
              <Icon icon={plusIcon} className="w-6 h-6"></Icon>
            </div>
          </button>
          <Modal
            title="Tugas Baru"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                type="primary"
                key="ok"
                className="px-10 text-white bg-color-page text-lg flex items-center font-medium py-1.5"
                onClick={handleOk}
              >
                Save
              </Button>,
            ]}
          >
            <div className="flex flex-col gap-2 mt-5 mb-2">
              <div className="grid grid-cols-3 items-center">
                <span className="text-black font-normal text-lg">Nama</span>
                <div className="flex items-center gap-4 col-span-2">
                  <span className="text-black font-normal text-lg">: </span>
                  <input
                    type="text"
                    name="nama"
                    className="border-2 rounded-md p-1.5 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <span className="text-black font-normal text-lg">NIP</span>
                <div className="flex items-center gap-4 col-span-2">
                  <span className="text-black font-normal text-lg">: </span>
                  <input
                    type="text"
                    name="nip"
                    className="border-2 rounded-md p-1.5 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <span className="text-black font-normal text-lg">
                  Mata pelajaran
                </span>
                <div className="flex items-center gap-4 col-span-2">
                  <span className="text-black font-normal text-lg">: </span>
                  <input
                    type="text"
                    name="mapel"
                    className="border-2 rounded-md p-1.5 w-full"
                  />
                </div>
              </div>
            </div>
          </Modal>

          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-xl">
              <div className="w-full border-b border-dark-gray">
                <div className=" w-full px-6 py-3 flex justify-between items-center">
                  <span className="text-black text-base font-normal ">
                    Tugas Pertemuan - 1
                  </span>
                  <div className="flex flex-row gap-6 items-center">
                    <span className="text-black opacity-50 text-sm font-light">
                      Diposting 11.24
                    </span>
                    <Icon icon={dotsThreeVerticalBold}></Icon>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 flex flex-row gap-8 items-center">
                <Icons
                  icon={rulerPenLinear}
                  backgroundColor="#565656"
                  textColor="white"
                  width="w-6"
                  height="h-6"
                ></Icons>
                <div className="flex flex-col">
                  <span className="text-black text-xl font-medium">
                    Latihan Kalkulus 1
                  </span>
                  <span className="text-black opacity-50 text-sm font-light">
                    Tenggat : 14 Oktober 23.59{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl ">
              <div className="w-full border-b border-dark-gray">
                <div className=" w-full px-6 py-3 flex justify-between items-center">
                  <span className="text-black text-base font-normal ">
                    Tugas Pertemuan - 2
                  </span>
                  <div className="flex flex-row gap-6 items-center">
                    <span className="text-black opacity-50 text-sm font-light">
                      Diposting 11.24
                    </span>
                    <Icon icon={dotsThreeVerticalBold}></Icon>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 flex flex-row gap-8 items-center">
                <Icons
                  icon={rulerPenLinear}
                  backgroundColor="#565656"
                  textColor="white"
                  width="w-6"
                  height="h-6"
                ></Icons>
                <div className="flex flex-col">
                  <span className="text-black text-xl font-medium">
                    Latihan Kalkulus 2
                  </span>
                  <span className="text-black opacity-50 text-sm font-light">
                    Tenggat : 14 Oktober 23.59{" "}
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

export default Tugas;
