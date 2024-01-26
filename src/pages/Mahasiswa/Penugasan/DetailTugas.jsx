import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components
import Icons from "../../../components/Icons";

// External Components
import { Button, Modal, Image } from "antd";

// Icons
import { Icon } from "@iconify/react";
import attachmentIcon from "@iconify/icons-grommet-icons/attachment";
import folderOpenOutline from "@iconify/icons-solar/folder-open-outline";
import paperPlane from "@iconify/icons-system-uicons/paper-plane";
import fileImage from "@iconify/icons-mdi/file-image";
import trashIcon from "@iconify/icons-ion/trash";

// Data
import getTugasData from "../../../data/mahasiswa/tugasData";

const DetailTugas = () => {
  const params = useParams();
  console.log("params", params.id);

  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const [detailData, setDetailData] = useState([]);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAttach, setIsModalOpenAttach] = useState(false);

  // Image
  const [uploadDocument, setUploadDocument] = useState([]);
  const [image, setImage] = useState({
    blob: "",
    fileName: "",
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      const DetailData = await getTugasData(params.id);
      setDetailData(DetailData);
      console.log(DetailData);
    };

    fetchAllData();
  }, [params.id]);

  console.log(detailData);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // Handle Image
  const handleImageClick = () => {
    const inputField = document.querySelector(".input-field-image");
    inputField.click();
  };

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

  const handleRemoveFile = () => {
    setImage({
      blob: "",
      fileName: "",
    });

    setUploadDocument([]);
  };

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
                  {detailData?.judul}
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
              <div className="flex flex-col sm:gap-8 android:gap-6">
                <div className="border border-dark-gray bg-white sm:rounded-3xl android:rounded-xl sm:p-6 android:p-3">
                  <div className="flex flex-col gap-2 sm:mb-10 android:mb-5">
                    <span className="text-[#337CCF] font-medium sm:text-lg android:text-base">
                      Deskripsi tugas
                    </span>
                    <span className="text-black font-medium sm:text-sm android:text-xs leading-normal">
                      {detailData.deskripsi}
                    </span>
                  </div>
                  <div className="border border-dark-gray lg:px-10 sm:px-5 android:px-2 whitespace-break-spaces py-2 md:rounded-full android:rounded-xl bg-[#F4F4F4] mb-0">
                    <a
                      href=""
                      className="text-[#337CCF] font-medium sm:text-sm lg:text-base android:text-xs break-all"
                    >
                      {detailData.link}
                    </a>
                  </div>
                </div>
                <div className="border border-dark-gray bg-white sm:rounded-3xl android:rounded-xl sm:p-6 android:p-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      <button onClick={() => setIsModalOpenAttach(true)}>
                        <Icons
                          icon={attachmentIcon}
                          backgroundColor={"#EAEAEA"}
                          textColor={"#337CCF"}
                          width=" sm:w-7 android:w-5"
                          height="sm:h-7 android:h-5"
                        ></Icons>
                      </button>
                      <Modal
                        title="Tambah Link"
                        centered
                        open={isModalOpenAttach}
                        onOk={() => setIsModalOpenAttach(false)}
                        onCancel={() => setIsModalOpenAttach(false)}
                        footer={[
                          <Button
                            key="batal"
                            className="text-black font-medium text-base shadow-none border-none"
                            onClick={() => setIsModalOpenAttach(false)}
                          >
                            Batal
                          </Button>,

                          <Button
                            key="ok"
                            className="text-black font-medium text-base shadow-none border-none"
                            onClick={() => setIsModalOpenAttach(false)}
                          >
                            Tambahkan Link
                          </Button>,
                        ]}
                      >
                        <div className="mt-5 mb-2">
                          <input
                            type="url"
                            name="link"
                            placeholder="Masukkan Link"
                            className="w-full border border-event-color p-2.5 rounded-md bg-[#F1F3F4]"
                          />
                        </div>
                      </Modal>

                      <form
                        htmlFor="upload-file"
                        className="cursor-pointer "
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
                          icon={folderOpenOutline}
                          backgroundColor={"#EAEAEA"}
                          textColor={"#337CCF"}
                          width=" sm:w-7 android:w-5"
                          height="sm:h-7 android:h-5"
                        ></Icons>
                      </form>
                    </div>

                    <div
                      className="mx-10 border rounded-full border-event-color hover:shadow-md transition-all duration-300 bg-[#EAEAEA] px-10 py-2 cursor-pointer"
                      onClick={() => setVisible(true)}
                    >
                      {image.blob ? (
                        <>
                          <div className="w-full items-center flex justify-center  uploaded-row">
                            <Icon icon={fileImage} color="#858585" size="sm" />

                            <span className="upload-content pe-5 pl-5 text-sm">
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

                    {/* Submit */}
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
