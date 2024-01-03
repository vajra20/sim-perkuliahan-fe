import React, { useState } from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import Icons from "../../components/Icons";
import { Button, Modal } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";

// Icons
import plusIcon from "@iconify/icons-mdi/plus";
import rulerPenLinear from "@iconify/icons-solar/ruler-pen-linear";
import dotsThreeVerticalBold from "@iconify/icons-ph/dots-three-vertical-bold";
import attachmentIcon from "@iconify/icons-grommet-icons/attachment";
import folderOpenOutline from "@iconify/icons-solar/folder-open-outline";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";
import { Icon } from "@iconify/react";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const Tugas = () => {
  const [url, setUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAttach, setIsModalOpenAttach] = useState(false);
  const showModal2 = () => {
    setIsModalOpenAttach(true);
  };
  const handleOk2 = () => {
    setIsModalOpenAttach(false);
  };
  const handleCancel2 = () => {
    setIsModalOpenAttach(false);
  };

  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const isValidURL = (string) => {
    const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(string);
  };

  return (
    <div className="w-full h-full">
      <NavbarDashboard />
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
            title="Tugas Baru"
            centered
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            className="!w-3/5"
            footer={[
              <Button
                type="primary"
                key="ok"
                className=" text-white bg-color-page text-lg flex items-center font-medium p-6"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="flex items-center gap-2 ">
                  Tugaskan
                  <Icon icon={arrowRight2} className="w-8 h-8"></Icon>
                </div>
              </Button>,
            ]}
          >
            <div className="flex flex-col gap-2 mt-5 mb-20">
              <input
                type="text"
                name="nama"
                className="rounded-md py-4 px-6 border-b-2 border-gray-sub  w-full text-base bg-[#F1F3F4] "
                placeholder="Judul"
              />
              <textarea
                type="text"
                name="nama"
                className="rounded-md py-4 px-6 border-b-2 border-gray-sub min-h-[180px] items-start w-full text-base bg-[#F1F3F4] "
                placeholder="Petunjuk (Opsional)"
              />
              <Space direction="vertical" size={12}>
                <RangePicker
                  className="p-4 border-gray-sub border-b-2 border-t-0 border-x-0 text-base bg-[#F1F3F4]"
                  defaultValue={[
                    dayjs("2015/01/01", dateFormat),
                    dayjs("2015/01/01", dateFormat),
                  ]}
                  format={dateFormat}
                />
              </Space>
            </div>

            <div className="absolute bottom-0 mb-5">
              <div className="flex flex-col gap-2">
                <span className="text-black font-normal text-lg">
                  Lampirkan
                </span>
                <div className="flex items-center">
                  <div className="flex flex-row gap-4 pr-10 border-r-2 border-dark-gray">
                    <button onClick={showModal2}>
                      <Icons
                        icon={attachmentIcon}
                        backgroundColor="#EAEAEA"
                        textColor="#337CCF"
                      ></Icons>
                    </button>
                    <Modal
                      title="Tambah Link"
                      centered
                      open={isModalOpenAttach}
                      onOk={handleOk2}
                      onCancel={handleCancel2}
                      footer={[
                        <Button
                          key="batal"
                          className="text-black font-medium text-base shadow-none border-none"
                          onClick={handleCancel2}
                        >
                          Batal
                        </Button>,
                        <Button
                          key="ok"
                          className="text-black font-medium text-base shadow-none border-none"
                          onClick={handleOk2}
                        >
                          Tambahkan Link
                        </Button>,
                      ]}
                    >
                      <div className="mt-5 mb-2">
                        <input
                          type="url"
                          name="link"
                          value={url}
                          onChange={handleChange}
                          placeholder="Masukkan Link"
                          className="w-full border border-event-color p-2.5 rounded-md bg-[#F1F3F4]"
                        />
                        {url && isValidURL(url) && (
                          <div className="flex flex-col gap-0 mt-5">
                            <span className="text-black text-sm font-medium">
                              Preview :
                            </span>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-dashboard-line underline"
                            >
                              {url}
                            </a>
                          </div>
                        )}
                      </div>
                    </Modal>
                    <label htmlFor="upload-file" className="cursor-pointer">
                      <Icons
                        htmlFor="upload-file"
                        icon={folderOpenOutline}
                        backgroundColor="#EAEAEA"
                        textColor="#337CCF"
                      ></Icons>
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      name="file"
                      id="upload-file"
                    />
                  </div>
                  <div className="ml-10 border border-black px-10 py-2">
                    Halo
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-xl">
              <div className="w-full border-b border-dark-gray">
                <div className=" w-full android:px-3 sm:px-6 py-3 flex android:gap-0 sm:gap-5 flex-row flex-wrap justify-between items-center">
                  <span className="text-black text-base font-normal">
                    Tugas Pertemuan - 1
                  </span>
                  <div className="flex flex-row gap-6 items-center">
                    <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                      Diposting 11.24
                    </span>
                    <Icon
                      className="android:hidden sm:block"
                      icon={dotsThreeVerticalBold}
                    ></Icon>
                  </div>
                </div>
              </div>
              <div className="sm:px-6 android:px-3 sm:py-5 android:py-3 flex flex-row sm:gap-8 android:gap-3 items-center">
                <div className="">
                  <Icons
                    icon={rulerPenLinear}
                    backgroundColor="#565656"
                    textColor="white"
                    width="sm:w-6 android:w-4"
                    height="sm:h-6 android:h-4"
                  ></Icons>
                </div>
                <div className="flex flex-col">
                  <span className="text-black md:text-xl android:text-lg font-medium">
                    Latihan Kalkulus 1
                  </span>
                  <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                    Tenggat : 14 Oktober 23.59{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl">
              <div className="w-full border-b border-dark-gray">
                <div className=" w-full android:px-3 sm:px-6 py-3 flex android:gap-0 sm:gap-5 flex-row flex-wrap justify-between items-center">
                  <span className="text-black text-base font-normal">
                    Tugas Pertemuan - 2
                  </span>
                  <div className="flex flex-row gap-6 items-center">
                    <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                      Diposting 11.24
                    </span>
                    <Icon
                      className="android:hidden sm:block"
                      icon={dotsThreeVerticalBold}
                    ></Icon>
                  </div>
                </div>
              </div>
              <div className="sm:px-6 android:px-3 sm:py-5 android:py-3 flex flex-row sm:gap-8 android:gap-3 items-center">
                <div className="">
                  <Icons
                    icon={rulerPenLinear}
                    backgroundColor="#565656"
                    textColor="white"
                    width="sm:w-6 android:w-4"
                    height="sm:h-6 android:h-4"
                  ></Icons>
                </div>
                <div className="flex flex-col">
                  <span className="text-black md:text-xl android:text-lg font-medium">
                    Latihan Kalkulus 2
                  </span>
                  <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
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
