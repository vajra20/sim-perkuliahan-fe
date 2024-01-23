import React, { useState } from "react";
import { Button, Modal } from "antd";

// Icons
import { Icon } from "@iconify/react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

const ListSiswa = () => {
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
    <div
      className="w-full h-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="0"
      data-aos-offset="0"
    >
      <div className="md:px-7 lg:py-6 android:p-3">
        <div className="bg-white shadow-md p-10 flex sm:flex-row android:flex-col gap-6 w-full justify-between rounded-xl">
          <div className="flex flex-col justify-center w-full">
            <span className="text-2xl font-medium text-black">
              Latihan Kalkulus 1
            </span>
            <span className="text-black/40 text-sm font-medium">
              Tugas Pertemuan - 1
            </span>
          </div>
          <div className="flex flex-row gap-3 w-full android flex-1 sm:flex-auto">
            <div className=" w-full border border-[#61CE70] rounded-3xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-24 sm:h-32 ">
              <span className="sm:text-5xl lg:text-7xl android:text-3xl flex justify-center  w-full text-[#61CE70] font-semibold">
                5
              </span>
              <span className="sm:text-[16px] android:text-sm flex justify-center gap-10 w-full text-[#61CE70]">
                Menyerahkan
              </span>
            </div>
            <div className=" w-full border border-[#EC613E] rounded-3xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-24 sm:h-32 ">
              <span className="sm:text-5xl lg:text-7xl android:text-3xl flex justify-center  w-full text-[#EC613E] font-semibold">
                30
              </span>
              <span className="sm:text-[16px] lg:text-[18px] android:text-sm flex justify-center gap-10 w-full text-[#EC613E]">
                Ditugaskan
              </span>
            </div>
          </div>
        </div>

        <div className=" px-10 py-6 text-[#61CE70] text-lg font-medium">
          Menyerahkan
        </div>

        <div className="flex-col flex w-full gap-3">
          <button
            className="rounded-xl border-2 shadow w-full bg-white px-6 py-4"
            onClick={showModal}
          >
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </button>
          <Modal
            title="Muhammad Gaza Alfarizi"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                key="ok"
                className="bg-color-page py-2.5 pr-3 pl-6 h-fit text-white hover:!text-white font-medium text-base hover:bg-[#4096ff] transition-all duration-300"
                onClick={handleOk}
              >
                <div className="flex items-center gap-0">
                  <span className="text-lg">Kirim</span>
                  <Icon icon={arrowRight2} className="w-8 h-8"></Icon>
                </div>
              </Button>,
            ]}
          >
            <div className="py-8 flex flex-col gap-5">
              <div className="flex android:flex-col sm:flex-row rounded-xl shadow-md border">
                <div className="bg-[#EDEDED] p-6 sm:rounded-l-xl sm:rounded-tr-none android:rounded-t-xl w-full android:w-full sm:max-w-[30%] min-w-[30%] ">
                  <img
                    className="w-full h-full sm:max-h-full android:max-h-[100px] m-0 object-contain"
                    src="/public/pdf.png"
                  ></img>
                </div>
                <div className="flex flex-col justify-between px-7">
                  <div className="rounded-r-xl w-full ">
                    <span className="text-black font-medium text-lg leading-6 pt-10 w-full flex justify-start gap-10">
                      Jawaban Latihan Kimia Fisika dan Kalkulus
                    </span>
                    <span className="text-black font-medium opacity-50 text-sm ">
                      PDF
                    </span>
                  </div>
                  <div className="flex justify-end w-full mb-5">
                    <span className="text-black font-normal opacity-50 text-xs">
                      19.22
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-sub rounded-2xl bg-white px-7 py-3">
                <div className="flex flex-row justify-between text-color-page text-2xl font-bold">
                  <span>Nilai</span>
                  <span>_ _ _ /100</span>
                </div>
              </div>

              <div className="border border-gray-sub rounded-2xl bg-white ">
                <textarea
                  type="text"
                  placeholder="Komentar"
                  className="min-h-[150px] w-full px-7 py-3 rounded-2xl text-base focus:outline-none max-h-[150px]"
                />
              </div>
            </div>
          </Modal>

          <div className="rounded-xl border-2 shadow w-full bg-white px-6 py-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 shadow w-full bg-white px-6 py-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-10 py-6 text-red text-lg font-medium">
          Ditugaskan
        </div>

        <div className="flex-col flex w-full gap-3">
          <div className="rounded-xl border-2 shadow w-full bg-white px-6 py-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 shadow w-full bg-white px-6 py-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 shadow w-full bg-white px-6 py-4">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 w-8 bg-event-color rounded-full"></div>
              <div className="flex flex-row w-full justify-between items-center">
                <span className="font-medium text-base text-black">
                  Muhammad Gaza Alfarizi
                </span>
                <Icon
                  icon={arrowRight2}
                  className="text-gray-sub w-8 h-8"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSiswa;
