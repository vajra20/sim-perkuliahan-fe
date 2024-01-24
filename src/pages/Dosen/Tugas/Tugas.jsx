import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Global Function
import {
	apiUrl,
	formatTime,
	formatDateTime,
	getFileExtension,
	pictureFile,
} from "../../../function/globalFunction";

// Components
import axios from "axios";
import Swal from "sweetalert2";
import Icons from "../../../components/Icons";

// External Components
import { Button, Modal, Image } from "antd";
import { DatePicker, Space } from "antd";
import { Link } from "react-router-dom";

// Data
import getTugasByMatkul from "../../../data/dosen/tugasByMatkul";

// Icons
import { Icon } from "@iconify/react";
import fileImage from "@iconify/icons-mdi/file-image";
import trashIcon from "@iconify/icons-ion/trash";
import plusIcon from "@iconify/icons-mdi/plus";
import rulerPenLinear from "@iconify/icons-solar/ruler-pen-linear";
import dotsThreeVerticalBold from "@iconify/icons-ph/dots-three-vertical-bold";
import attachmentIcon from "@iconify/icons-grommet-icons/attachment";
import folderOpenOutline from "@iconify/icons-solar/folder-open-outline";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

const Tugas = () => {
  const navigate = useNavigate();
  const params = useParams();
  const matkulId = params.id;
  const dosenId = localStorage.getItem("dosen_id");
  const [isLoading, setIsLoading] = useState(false);
  const [isAccordion, setIsAccordion] = useState(false);

  // Tugas State
  const [createTugas, setCreateTugas] = useState({
    dosenId: Number(dosenId),
    judul: "",
    topik: "",
    deskripsi: "",
    dueDate: "",
    link: "",
  });

  const [tugasByMatkulId, setTugasByMatkulId] = useState([]);

  // Toggle Accordion
  const toggleAccordion = (index) => {
    setIsAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  // Upload Document
  const [visible, setVisible] = useState(false);
  const [uploadDocument, setUploadDocument] = useState([]);
  const [image, setImage] = useState({
    blob: "",
    fileName: "",
  });

  // Upload Document
  const handleDocumentChange = (e) => {
    const files = e.target.files;

    if (files && files[0]) {
      setUploadDocument(files);

      setImage({
        blob: URL.createObjectURL(files[0]),
        fileName: files[0].name,
      });
    }
  };

  const handleImageClick = () => {
    const inputField = document.querySelector(".input-field-image");
    inputField.click();
  };

  const handleRemoveFile = () => {
    setImage({
      blob: "",
      fileName: "",
    });

    setUploadDocument([]);
  };

  // Modal
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

  // URL
  const isValidURL = (string) => {
    const urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(string);
  };

  // Render Data
  useEffect(() => {
    const fetchAllData = async () => {
      const MatkulById = await getTugasByMatkul(params.id);
      setTugasByMatkulId(MatkulById);
    };

    fetchAllData();
  }, []);

  // Change Handler
  const tugasChangeHandler = (e) => {
    setCreateTugas({
      ...createTugas,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const FormValidation = () => {
    let valid = true;

    if (!createTugas.judul) {
      Swal.fire({
        title: "Warning",
        text: "Judul cannot be empty",
        icon: "warning",
      });
      valid = false;
    } else if (!createTugas.topik) {
      Swal.fire({
        title: "Warning",
        text: "Topik cannot be empty",
        icon: "warning",
      });
      valid = false;
    } else if (!createTugas.deskripsi) {
      Swal.fire({
        title: "Warning",
        text: "Petunjuk cannot be empty",
        icon: "warning",
      });
      valid = false;
    } else if (!createTugas.dueDate) {
      Swal.fire({
        title: "Warning",
        text: "Deadline cannot be empty",
        icon: "warning",
      });
      valid = false;
    }

    return valid;
  };

  // Handle Submit
  const handleSubmit = async () => {
    setIsLoading(true);

    if (!FormValidation()) {
      setIsLoading(false);
      return false;
    }

    const formData = new FormData();

    formData.append("dosenId", createTugas.dosenId);
    formData.append("judul", createTugas.judul);
    formData.append("topik", createTugas.topik);
    formData.append("deskripsi", createTugas.deskripsi);
    formData.append("dueDate", createTugas.dueDate);

    if (createTugas.link) {
      formData.append("link", createTugas.link);
    }

    if (uploadDocument?.length) {
      formData.append("file", uploadDocument[0]);
    }

    await axios
      .post(`${apiUrl()}/createTugas/${matkulId}`, formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Access-Control-Allow-Origin": "*",
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => {
        if (
          response.data.statusCode === 200 ||
          response.data.statusCode === 201
        ) {
          Swal.fire({
            title: "Success",
            text: "Success Create Tugas	",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            setIsLoading(false);
          });
        } else {
          Swal.fire({
            title: "Error",
            text: response.error,
            icon: "error",
          });
          setIsLoading(false);
        }

        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.error,
          icon: "error",
        });

        setIsLoading(false);
      });
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
                onClick={handleSubmit}
              >
                <div className="flex items-center gap-2 ">
                  {isLoading ? "Creating.." : "Tugaskan"}
                  <Icon icon={arrowRight2} className="w-8 h-8"></Icon>
                </div>
              </Button>,
            ]}
          >
            <div className="flex flex-col gap-2 mt-5 mb-20">
              <input
                type="text"
                name="judul"
                className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
                placeholder="Judul"
                onChange={(e) => tugasChangeHandler(e)}
              />

              <input
                type="text"
                name="topik"
                className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 "
                placeholder="Topik"
                onChange={(e) => tugasChangeHandler(e)}
              />

              <textarea
                type="text"
                name="deskripsi"
                className="rounded-md py-4 px-6 border-b-2 focus:outline-blue-focus w-full text-base border-2 min-h-[180px] max-h-[350px] items-start"
                placeholder="Petunjuk"
                onChange={(e) => tugasChangeHandler(e)}
              />

              <Space direction="vertical" size={12}>
                <DatePicker
                  placeholder="Select Deadline Tugas"
                  showTime={{ format: "HH:mm" }}
                  format="DD-MM-YYYY HH:mm"
                  className="p-4 border-b-2 text-base focus:outline-blue-focus w-full"
                  onChange={(values) => {
                    setCreateTugas((prev) => {
                      const cache = { ...prev };

                      if (values) {
                        const dateFormatted =
                          values?.format("YYYY-MM-DD HH:mm");

                        console.log(dateFormatted);

                        cache.dueDate = dateFormatted ?? "";
                      } else {
                        cache.dueDate = "";
                      }

                      return cache;
                    });
                  }}
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
                          value={createTugas.link}
                          placeholder="Masukkan Link"
                          className="w-full border border-event-color p-2.5 rounded-md bg-[#F1F3F4]"
                          onChange={(e) => tugasChangeHandler(e)}
                        />

                        {createTugas.link && isValidURL(createTugas.link) && (
                          <div className="flex flex-col gap-0 mt-5">
                            <span className="text-black text-sm font-medium">
                              Preview :
                            </span>

                            <a
                              href={createTugas.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-dashboard-line underline"
                            >
                              {createTugas.link}
                            </a>
                          </div>
                        )}
                      </div>
                    </Modal>

                    <form
                      htmlFor="upload-file"
                      className="cursor-pointer"
                      onClick={handleImageClick}
                    >
                      <input
                        type="file"
                        className="input-field-image hidden"
                        name="file"
                        id="upload-file"
                        accept=".pdf, .png, .jpg, .jpeg, .docs, .xls, .xlsx"
                        onChange={handleDocumentChange}
                      />

                      <Icons
                        htmlFor="upload-file"
                        icon={folderOpenOutline}
                        backgroundColor="#EAEAEA"
                        textColor="#337CCF"
                      ></Icons>
                    </form>
                  </div>

                  <div
                    className="ml-10 border border-black px-10 py-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                  >
                    {image.blob ? (
                      <>
                        <div className="w-full items-center flex justify-center  uploaded-row">
                          <Icon icon={fileImage} color="#858585" size="sm" />

                          <span className="upload-content pe-5 pl-5">
                            {image.fileName ? image.fileName : ""}
                          </span>

                          <Icon
                            icon={trashIcon}
                            size="sm"
                            color="#ed2b2a"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={handleRemoveFile}
                          />
                        </div>

                        <Image
                          hidden
                          width={200}
                          src={image.blob}
                          alt={image.fileName}
                          preview={{
                            visible,
                            src: image.blob,
                            onVisibleChange: (value) => {
                              setVisible(value);
                            },
                          }}
                        />
                      </>
                    ) : (
                      <div
                        className="w-full items-center flex justify-center input-image-text"
                        style={{ cursor: "pointer" }}
                      >
                        <p>File Belum Tersedia</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          {/* Tugas Matkul */}
          <div className="flex flex-col gap-5">
            {tugasByMatkulId.map((item, index) => (
              <div className="w-full " key={`${item} - ${index}`}>
                <button
                  className={`bg-white rounded-xl w-full z-50 relative shadow " ${
                    isAccordion === index
                      ? "shadow-lg transition-all duration-500"
                      : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="w-full border-b border-dark-gray">
                    <div className=" w-full android:px-3 sm:px-6 py-3 flex android:gap-0 sm:gap-5 flex-row flex-wrap justify-between items-center">
                      <span className="text-black text-base font-normal">
                        {`Tugas - ${index + 1}`}
                      </span>

                      <div className="flex flex-row gap-6 items-center">
                        <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                          Diposting pada {formatTime(new Date(item?.createdAt))}
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

                    <div className="flex flex-col items-start">
                      <span className="text-black md:text-xl android:text-lg font-medium">
                        {item?.judul ?? "Judul Tugas belum Ditentukan"}
                      </span>

                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-light">
                        Deadline Tugas :{" "}
                        {formatDateTime(new Date(item?.dueDate))}
                      </span>

                      <span className="text-black opacity-50 sm:text-sm android:text-lg font-medium mt-2">
                        {item?.deskripsi ?? "Deskripsi tugas belum tersedia"}
                      </span>
                    </div>
                  </div>
                </button>

                {isAccordion === index && (
                  <div
                    className={` w-full bg-light-gray border-2 transition-all duration-500 rounded-lg ${
                      isAccordion === index ? "" : ""
                    }`}
                    data-aos="fade-down"
                    data-duration="1000"
                  >
                    <div className="flex flex-col sm:p-6 android:p-3 sm:gap-5 android:gap-2.5">
                      <span className="text-black opacity-50 sm:text-sm android:text-xs font-light ">
                        Diposting {formatTime(new Date(item?.createdAt))}
                      </span>

                      <div className="det-pdf flex android:flex-row android:flex-wrap lg:flex-nowrap android:gap-3 sm:gap-6 justify-between items-center">
                        <div className="flex flex-row shadow rounded-xl android:flex-initial lg:flex-auto sm:w-full android:w-fit android:text-sm lg:max-w-[40%]">
                          <div className="bg-white sm:px-6 android:px-3 sm:py-3 android:py-1.5 border-r-event-color border-r rounded-l-xl android:w-full sm:w-fit sm:min-w-[20%] android:min-w-[20%] sm:max-w-[30%] android:h-auto android:max-w-[25%] lg:max-h-24 ">
                            {pictureFile(`${item.lampiran}`)}
                          </div>

                          <div className="flex flex-col gap-0 rounded-r-xl justify-center w-full bg-white sm:px-3 android:px-3 ">
                            <div className="text-black sm:text-lg lg:text-base android:max-w-full ">
                              {item.lampiran !== null
                                ? `${item.lampiran.replace(/\.[^/.]+$/, "")}`
                                : "File tidak tersedia"}
                            </div>

                            <span className="text-black opacity-50 sm:text-sm android:text-sm font-light w-fit uppercase">
                              {item.lampiran !== null
                                ? getFileExtension(item.lampiran)
                                : "File tidak tersedia"}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row gap-3 android:w-full android flex-1 sm:flex-auto lg:max-w-[30%]">
                          <div className=" w-full border border-[#61CE70] rounded-xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-[70px] sm:h-24 lg:h-24 ">
                            <Link
                              to={`/dosen/tugas/siswa-tugas/${item.id}`}
                              className=""
                            >
                              <span className="sm:text-5xl lg:text-5xl android:text-3xl flex justify-center  w-full text-[#61CE70] font-semibold">
                                5
                              </span>

                              <span className="sm:text-[16px] android:text-sm flex justify-center gap-10 w-full text-[#61CE70]">
                                Menyerahkan
                              </span>
                            </Link>
                          </div>

                          <div className=" w-full border border-[#EC613E] rounded-xl sm:p-3 android:p-1.5 flex items-center flex-col justify-center android:h-[70px] sm:h-24 lg:h-24">
                            <Link
                              to={`/dosen/tugas/siswa-tugas/${item.id}`}
                              className=""
                            >
                              <span className="sm:text-5xl lg:text-5xl android:text-3xl flex justify-center  w-full text-[#EC613E] font-semibold">
                                30
                              </span>

                              <span className="sm:text-[16px] lg:text-[18px] android:text-sm flex justify-center gap-10 w-full text-[#EC613E]">
                                Ditugaskan
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
