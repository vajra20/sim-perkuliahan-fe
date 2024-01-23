import React, { useState } from "react";
import Icons from "../../../components/Icons";
import { Button, Modal } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import { Link } from "react-router-dom";

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
  const [isActive, setIsActive] = useState(false);

  const data = [
    { title: "Tugas Pertemuan - 1", content: "Latihan Kalkulus - 1" },
    { title: "Tugas Pertemuan - 2", content: "Latihan Kalkulus - 2" },
  ];

  const toggleAccordion = (index) => {
    setIsActive((prevIndex) => (prevIndex === index ? null : index));
  };

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
            className="bg-color-page rounded-full px-5 sm:py-3 android:py-1.5 text-white w-fit shadow-md hover:bg-[#4096ff] transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex flex-row md:gap-6 android:gap-3 items-center ">
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
                className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
                placeholder="Judul"
              />
              <textarea
                type="text"
                name="nama"
                className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus min-h-[180px] max-h-[350px] items-start w-full text-base border-2 "
                placeholder="Petunjuk (Opsional)"
              />
              <Space direction="vertical" size={12}>
                <RangePicker
                  className="p-4 border-2 text-base w-full"
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
            {data.map((item, index) => (
              <div key={index} className="w-full ">
                <button
                  className={`bg-white rounded-xl w-full z-50 relative shadow " ${
                    isActive === index
                      ? "shadow-lg transition-all duration-500"
                      : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="w-full border-b border-dark-gray">
                    <div className=" w-full android:px-3 sm:px-6 py-3 flex android:gap-0 sm:gap-5 flex-row flex-wrap justify-between items-center">
                      <span className="text-black text-base font-normal">
                        {item.title}
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
                        {item.content}
                      </span>
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                        Tenggat : 14 Oktober 23.59{" "}
                      </span>
                    </div>
                  </div>
                </button>
                {isActive === index && (
                  <div
                    className={` w-full bg-light-gray border-2 transition-all duration-500 rounded-lg ${
                      isActive === index ? "" : ""
                    }`}
                    data-aos="fade-down"
                    data-duration="1000"
                  >
                    <Link to={"/dosen/tugas/siswa-tugas"} className="">
                      <div className="flex flex-col sm:p-6 android:p-3 sm:gap-5 android:gap-2.5">
                        <span className="text-black opacity-50 sm:text-sm android:text-xs font-light ">
                          Diposting 12.24
                        </span>
                        <div className="det-pdf flex android:flex-row android:flex-wrap lg:flex-nowrap android:gap-3 sm:gap-6 justify-between items-center">
                          <div className="flex flex-row shadow rounded-xl android:flex-initial lg:flex-auto sm:w-full android:w-fit">
                            <div className="bg-white sm:px-6 android:px-3 sm:py-3 android:py-1.5 border-r-event-color border-r rounded-l-xl android:w-full sm:w-fit lg:w-full sm:min-w-[20%] android:min-w-[20%] sm:max-w-[30%] android:h-auto android:max-w-[25%] ">
                              <img
                                src="/public/pdf.png"
                                className="w-full h-full m-0 object-contain"
                              ></img>
                            </div>
                            <div className="flex flex-col gap-0 rounded-r-xl justify-center w-full bg-white sm:px-7 android:px-3">
                              <span className="text-black sm:text-lg lg:text-xl android:text-sm w-full flex justify-start gap-10">
                                Latihan Soal Kalkulus 1
                              </span>
                              <span className="text-black opacity-50 sm:text-sm android:text-sm font-light ">
                                PDF
                              </span>
                            </div>
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
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tugas;
