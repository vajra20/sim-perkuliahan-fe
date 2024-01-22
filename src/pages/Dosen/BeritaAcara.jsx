import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import SignatureCanvas from "react-signature-canvas";
import { useSidebar } from "../../context/ContextProvider";

// Icons
import plusIcon from "@iconify/icons-mdi/plus";
import clockOutline from "@iconify/icons-mdi/clock-outline";
import calendarBold from "@iconify/icons-solar/calendar-bold";
import profileFill from "@iconify/icons-iconamoon/profile-fill";
import { Icon } from "@iconify/react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

const BeritaAcara = () => {
  const { sidebarOpen } = useSidebar();
  const sigCanvas = useRef();
  const clear = () => sigCanvas.current.clear();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignatureOpen, setIsSignature] = useState(false);
  const showModal = () => {
    setIsSignature(true);
  };
  const handleOk = () => {
    setIsSignature(false);
  };
  const handleCancel = () => {
    setIsSignature(false);
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
        <div className="flex flex-col gap-5">
          <button
            className="bg-color-page rounded-full px-5 sm:py-3 android:py-1.5 text-white w-fit"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex flex-row md:gap-10 android:gap-3 items-center">
              <span className="android:text-base md:text-lg font-medium">
                Buat
              </span>
              <Icon
                icon={plusIcon}
                className="md:w-6 md:h-6 android:w-5 android:h-5"
              ></Icon>
            </div>
          </button>
          <Modal
            title="Berita Acara"
            centered
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            footer={[
              <Button
                key="ok"
                className="bg-color-page py-2.5 pl-10 pr-6 h-fit text-white font-medium text-base shadow-none border-none"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="flex items-center gap-0">
                  <span className="text-lg">Simpan</span>
                  <Icon icon={arrowRight2} className="w-8 h-8"></Icon>
                </div>
              </Button>,
            ]}
          >
            <div className="flex flex-col gap-2 mt-8 mb-8">
              <input
                type="text"
                name="nama"
                className="rounded-md py-4 px-6 border-b-2 border-gray-sub  w-full text-base bg-[#F1F3F4] "
                placeholder="Judul"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  name="tanggal"
                  className="rounded-md py-4 px-6 border-b-2 border-gray-sub  w-full text-base bg-[#F1F3F4] "
                  placeholder="Tanggal"
                />
                <input
                  type="time"
                  name="jam"
                  className="rounded-md py-4 px-6 border-b-2 border-gray-sub  w-full text-base bg-[#F1F3F4] "
                  placeholder="Jam"
                />
              </div>
              <textarea
                type="text"
                name="nama"
                className="rounded-md py-4 px-6 border-b-2 border-gray-sub min-h-[200px] items-start w-full text-base bg-[#F1F3F4] "
                placeholder="Deskripsi"
              />
            </div>
          </Modal>
          <div className="bg-white md:rounded-3xl android:rounded-xl shadow border border-black/40 shadow-black/25 ">
            <div
              className={`flex items-center android:flex-col ${
                sidebarOpen ? "md:flex-col lgs:flex-row" : "md:flex-row"
              }`}
            >
              <div className="flex flex-col md:gap-1 android:gap-2 w-full md:p-8 android:p-3">
                <span className="text-black font-semibold text-lg font-inter">
                  #Kuliah Ke - 1
                </span>
                <div className="border-b-2 w-full border-event-color">
                  <div className="flex android:flex-col md:flex-row md:items-center android:items-start md:gap-4 android:gap-2 md:mb-10 android:mb-2">
                    <div className="flex flex-row gap-1 text-gray-sub items-center">
                      <Icon icon={clockOutline}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        08.45 -15.15
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-gray-sub items-center">
                      <Icon icon={calendarBold}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        8 Oktober 2023
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 text-gray-sub items-center">
                      <Icon icon={profileFill}></Icon>
                      <span className="  text-xs font-inter font-normal">
                        36
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:mt-3 android:mt-0 w-full android:text-justify md:text-start">
                  <span className=" font-inter text-black font-medium md:text-lg android:text-sm w-full">
                    Pengenalan sistem informasi dan Konsep dasar sistem
                    informasi
                  </span>
                </div>
              </div>

              <div className="flex flex-col p-4 ">
                <button onClick={showModal}>
                  <div className="bg-white border border-black/30 rounded-t-xl w-full h-32"></div>
                  <div className="bg-color-page w-full px-14 py-1 rounded-b-xl">
                    <span className="text-white text-sm font-inter font-medium whitespace-nowrap">
                      PARAF DOSEN
                    </span>
                  </div>
                </button>
                <Modal
                  title="Tanda Tangan"
                  centered
                  open={isSignatureOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button
                      key="reset"
                      className="bg-white py-2.5 pl-10 pr-10 h-fit text-color-page hover:!text-white hover:!border-black font-medium text-base shadow-none border-2 !border-color-page hover:bg-color-page "
                      onClick={clear}
                    >
                      <span className="text-lg ">Reset</span>
                    </Button>,
                    <Button
                      key="ok"
                      className="bg-color-page py-2.5 pl-10 pr-6 h-fit text-white font-medium text-base shadow-none border-none "
                      onClick={handleOk}
                    >
                      <div className="flex items-center gap-0">
                        <span className="text-lg">Simpan</span>
                        <Icon icon={arrowRight2} className="w-8 h-8"></Icon>
                      </div>
                    </Button>,
                  ]}
                >
                  <div className="border-b-2 border-event-color">
                    <SignatureCanvas
                      ref={sigCanvas}
                      penColor="black"
                      canvasProps={{
                        width: 450,
                        height: 200,
                        className: "sigCanvas",
                      }}
                    />
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaAcara;
