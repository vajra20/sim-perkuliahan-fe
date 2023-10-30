import "../layout/index.css";
import Navbar from "../components/Navbar";
import React from "react";
import Icons from "../components/Icons";
import peopleIcon from "@iconify/icons-formkit/people";
import documentOutline from "@iconify/icons-basil/document-outline";
import taskListSquare16Regular from "@iconify/icons-fluent/task-list-square-16-regular";
import rulerPenLinear from "@iconify/icons-solar/ruler-pen-linear";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white md:px-24 android:px-6">
        <div className="flex lg:flex-row items-center justify-center md:flex-col-reverse">
          <div className="flex flex-col gap-4 justify-center android:items-center lg:items-start md:w-full lg:w-4/6 android:w-full">
            <h1 className="text-color-page font-semibold lg:text-left android:text-center w-full">
              E-learning
            </h1>
            <span className="text-color-page md:text-2xl android:text-lg font-light android:text-center lg:text-left">
              Menjadi penyelenggara pendidikan tinggi yang unggul di bidang
              teknologi dan bisnis ditingkat nasional yang menghasilkan lulusan
              berdaya saing tinggi dan berjiwa teknopreneurship.
            </span>
            <button className="px-8 py-1 rounded-3xl bg-color-page w-fit flex ">
              <span className="text-white font-medium text-lg">
                Get Started
              </span>
            </button>
          </div>
          <img
            className="w-full h-full object-cover android:hidden md:block"
            src="public/landing-page.png"
            alt=""
          ></img>
        </div>

        <div className="lg:px-16 android:px-0">
          <div className="flex flex-col my-28">
            <div className="flex justify-center flex-col items-center mb-7">
              <h1 className="text-black font-semibold text-center android:mb-4 md:mb-0">
                Semua dalam Satu Platform
              </h1>
              <span className="text-center text-black font-light w-full max-w-screen-md">
                "Sistem informasi pendidikan terintegrasi dalam satu platform
                yang dapat diakses secara bersama-sama kapan saja dan di mana
                saja."
              </span>
            </div>
            <div className="flex justify-center w-full">
              <div className="bg-[#D5ECED] flex justify-center w-max h-fit rounded-lg px-3 md:py-1 android:py-3">
                <div className="flex android:flex-wrap lg:flex-wrap gap-3 md:grid md:grid-cols-2 lg:flex">
                  <div className="bg-white flex justify-center gap-x-7 items-center rounded-lg pl-6 pr-16 py-3 android:w-full lg:w-fit">
                    <Icons icon={peopleIcon} backgroundColor="#8CDDE2" />
                    <span className="text-color-page text-2xl font-medium">
                      Absensi
                    </span>
                  </div>
                  <div className="bg-white flex justify-center gap-x-7 items-center rounded-lg pl-6 pr-16 py-3 android:w-full lg:w-fit">
                    <Icons icon={documentOutline} backgroundColor="#8CDDE2" />
                    <span className="text-color-page text-2xl font-medium">
                      Jadwal
                    </span>
                  </div>
                  <div className="bg-white flex justify-center gap-x-7 items-center rounded-lg pl-6 pr-16 py-3 android:w-full lg:w-fit">
                    <Icons
                      icon={taskListSquare16Regular}
                      backgroundColor="#8CDDE2"
                    />
                    <span className="text-color-page text-2xl font-medium">
                      Penilaian
                    </span>
                  </div>
                  <div className="bg-white flex justify-center gap-x-7 items-center rounded-lg pl -6 pr-16 py-3 android:w-full lg:w-fit">
                    <Icons icon={rulerPenLinear} backgroundColor="#8CDDE2" />
                    <span className="text-color-page text-2xl font-medium">
                      Penugasan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-5 android:grid-cols-1 mb-44">
            <div className="flex lg:justify-end android:justify-center android:mb-8 lg:mb-0">
              <div className="relative max-w-fit overflow-hidden ">
                <img
                  className=" relative z-10 left-2/4 -translate-x-2/4"
                  src="public/landing-page-1.png"
                  alt=""
                ></img>
                <div className="absolute bottom-0 -translate-x-2/4 left-1/2 w-full">
                  <div className="bg-color-page w-full h-full rounded-b-xl">
                    <img
                      className=" w-full h-full max-h-60 opacity-0"
                      src="public/landing-page-1.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="absolute -top-10">
                    <div className="flex flex-col">
                      <div className="relative w-full max-w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="597"
                          height="52"
                          viewBox="0 0 597 52"
                          fill="none"
                        >
                          <path
                            d="M0 15.0798C0 15.0798 11.903 1.31198 28.3073 0.118068C47.556 -1.28286 47.3404 14.7623 66.8051 15.0798C87.1348 15.4115 87.7936 0.242917 108.134 0.118068C128.826 -0.00894416 129.924 15.5441 150.595 15.0798C170.049 14.6428 169.648 0.641924 189.092 0.118068C210.019 -0.445723 211.443 15.2052 232.403 15.0798C253.007 14.9566 253.978 0.301395 274.58 0.118068C295.716 -0.0700084 297.408 16.0074 318.457 15.0798C337.177 14.2548 336.049 1.27559 354.69 0.118068C376.82 -1.25607 379.932 14.8288 402.246 15.0798C425.394 15.3403 429.198 -0.0534344 452.35 0.118068C474.944 0.28544 478.191 14.5038 500.755 15.0798C525.387 15.7087 530.986 -1.58495 555.388 0.118068C576.622 1.59993 597 17.0836 597 17.0836V24.2428V52H0V15.0798Z"
                            fill="#00B4BF"
                          />
                        </svg>
                        <div className="absolute top-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="597"
                            height="52"
                            viewBox="0 0 597 52"
                            fill="none"
                          >
                            <path
                              d="M0 15.0798C0 15.0798 11.903 1.31198 28.3073 0.118068C47.556 -1.28286 47.3404 14.7623 66.8051 15.0798C87.1348 15.4115 87.7936 0.242917 108.134 0.118068C128.826 -0.00894416 129.924 15.5441 150.595 15.0798C170.049 14.6428 169.648 0.641924 189.092 0.118068C210.019 -0.445723 211.443 15.2052 232.403 15.0798C253.007 14.9566 253.978 0.301395 274.58 0.118068C295.716 -0.0700084 297.408 16.0074 318.457 15.0798C337.177 14.2548 336.049 1.27559 354.69 0.118068C376.82 -1.25607 379.932 14.8288 402.246 15.0798C425.394 15.3403 429.198 -0.0534344 452.35 0.118068C474.944 0.28544 478.191 14.5038 500.755 15.0798C525.387 15.7087 530.986 -1.58495 555.388 0.118068C576.622 1.59993 597 17.0836 597 17.0836V24.2428V52H0V15.0798Z"
                              fill="#00535B"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:justify-center">
              <div className="flex flex-col justify-end w-full max-w-xl">
                <h1 className="font-semibold text-black mb-8 android:text-left md:text-left">
                  Lihat perkembangan nilai Anda di platform kami.
                </h1>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row items-center gap-8">
                    <Icons
                      textColor="white"
                      icon={peopleIcon}
                      backgroundColor="#00535B"
                    />
                    <span className="text-black opacity-[0.45] font-medium">
                      Penilaian dan Umpan Balik yang Lebih Sistematis
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <Icons
                      textColor="white"
                      icon={peopleIcon}
                      backgroundColor="#00535B"
                    />
                    <span className="text-black opacity-[0.45] font-medium">
                      Pemantauan dan Evaluasi yang Lebih Baik
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <Icons
                      textColor="white"
                      icon={peopleIcon}
                      backgroundColor="#00535B"
                    />
                    <span className="text-black opacity-[0.45] font-medium">
                      Pengelolaan Sumber Daya yang Efisien
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-center w-full md:mb-52 android:mb-40">
            <h1 className="text-black font-semibold text-center md:mb-16 android:mb-8">
              Siapa saja yang bisa akses?
            </h1>
            <div className="bg-[#99D1D569] px-8 py-8 rounded-2xl">
              <div className="flex lg:flex-nowrap android:flex-wrap gap-8">
                <div className="bg-white p-8 flex flex-col justify-center rounded-xl">
                  <img
                    className="w-full h-full max-h-44 object-contain"
                    src="public/dosen.png"
                    alt=""
                  ></img>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-black font-semibold text-center">
                      Dosen
                    </h2>
                    <span className="text-black font-medium text-center">
                      Sistem e-learning memungkinkan dosen memberikan tugas
                      dengan efisien, memantau kemajuan siswa, dan berinteraksi
                      dengan mereka secara langsung.
                    </span>
                  </div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center rounded-xl">
                  <img
                    className="w-full h-full object-contain  max-h-44 object-top"
                    src="public/mahasiswa.png"
                    alt=""
                  ></img>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-black font-semibold text-center">
                      Mahasiswa
                    </h2>
                    <span className="text-black font-medium text-center">
                      Siswa mendapat manfaat dari fleksibilitas belajar, akses
                      absensi yang mudah, dan pengembangan keterampilan
                      teknologi melalui platform e-learning.
                    </span>
                  </div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center rounded-xl">
                  <img
                    className="w-full h-full object-contain  max-h-44 object-top"
                    src="public/admin.png"
                    alt=""
                  ></img>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-black font-semibold text-center">
                      Admin
                    </h2>
                    <span className="text-black font-medium text-center">
                      Admin perlu mengakses e-learning untuk mengelola sistem,
                      memantau aktivitas, dan memastikan keamanan data.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:gap-10 lg:gap-20 android:gap-8 mb-40 android:grid-cols-1">
            <div className="relative">
              <img
                className="relative z-10 h-full w-full"
                src="public/video.png"
                alt=""
              ></img>
              <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85"
                  height="86"
                  viewBox="0 0 85 86"
                  fill="none"
                >
                  <path
                    d="M31.2884 1.62238C9.28519 7.48989 -4.36807 30.8471 1.27377 52.8503C8.15683 79.367 36.8174 92.7946 61.5287 80.9467C69.7658 76.9974 78.9056 66.955 82.1778 58.3794C91.2048 34.3451 77.7772 7.94124 53.2916 1.50954C45.1673 -0.52153 39.4127 -0.52153 31.2884 1.62238ZM47.7626 31.5242C55.4355 37.166 61.7544 42.1308 61.7544 42.695C61.7544 43.5977 34.335 64.134 33.0938 64.134C32.7553 64.134 32.4168 54.4301 32.4168 42.695C32.4168 30.8471 32.7553 21.256 33.0938 21.256C33.4323 21.256 40.0897 25.8823 47.7626 31.5242Z"
                    fill="white"
                  />
                </svg>
              </div>
              <img
                src="public/gimmick-1.png"
                className="android:hidden md:block absolute top-0 -translate-y-2/4 -translate-x-2/4 "
                alt=""
              ></img>
              <img
                src="public/gimmick-1.png"
                className="android:hidden md:block absolute bottom-0 right-0 translate-y-2/4 translate-x-2/4 "
                alt=""
              ></img>
              <div className="android:hidden md:block bg-color-page w-80 h-72 absolute top-0 -translate-x-2/4 translate-y-2/4"></div>
            </div>

            <div className="flex justify-center flex-col md:items-start relative z-10">
              <h1 className="text-black font-medium">
                Fleksibel & Terjangkau Untuk Siswa
              </h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                expedita harum consequuntur commodi iure laboriosam praesentium
                facilis quam sequi necessitatibus nisi accusantium, minima omnis
                voluptatibus sed nostrum natus aliquid quis!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
