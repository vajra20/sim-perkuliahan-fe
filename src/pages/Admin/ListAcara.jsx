import React from "react";

const ListAcara = () => {
  return (
    <div className="w-full h-full">
      <div className="md:px-7 lg:py-6 android:p-3">
        <div className="bg-white border rounded-xl shadow">
          <div className="w-full border-b-2 border-event-color md:px-10 android:px-5 py-3 flex android:justify-center justify-start items-center">
            <span className="text-color-page text-2xl font-medium">
              List Acara
            </span>
          </div>

          <div className="md:px-10 android:px-5 py-6 ">
            <div className="flex android:flex-col xl:flex-row w-full android:gap-5 xl:gap-20 mb-10">
              <div className="flex android:justify-center xl:justify-start w-full xl:max-w-xs  ">
                <div className="flex flex-col gap-y-3 w-full android:max-w-full sm:max-w-xs h-screen max-h-[360px]">
                  <div className="rounded-lg bg-event-color flex h-full items-center justify-center"></div>
                  <div className="w-full items-center flex justify-center">
                    <button className="text-dashboard-line font-normal text-base">
                      Add Foto
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2 w-full flex flex-col gap-3">
                <div className="flex flex-col gap-0">
                  <label className="text-sm pl-3" htmlFor="Judul">
                    Judul
                  </label>
                  <input
                    name="judul"
                    type="text"
                    placeholder=""
                    className="border-2 border-black rounded-lg px-5 py-1.5 shadow"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <label className="text-sm pl-3" htmlFor="Judul">
                    Lokasi
                  </label>
                  <input
                    name="lokasi"
                    type="text"
                    placeholder=""
                    className="border-2 border-black rounded-lg px-5 py-1.5 shadow"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <label className="text-sm pl-3" htmlFor="Judul">
                    Waktu
                  </label>
                  <input
                    name="waktu"
                    type="text"
                    placeholder=""
                    className="border-2 border-black rounded-lg px-5 py-1.5 shadow"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <label className="text-sm pl-3" htmlFor="Judul">
                    Status
                  </label>
                  <select
                    name=""
                    id=""
                    className="border-2 border-black rounded-lg px-5 py-1.5 shadow"
                  >
                    <option>On Progress</option>
                    <option>Pending</option>
                    <option>Done</option>
                    <option>Cancel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end ">
              <button className="bg-color-page py-2.5 px-12 h-fit rounded-lg text-white hover:text-blue-600 font-medium text-base shadow-none border-none flex justify-center">
                <span className="text-base">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAcara;
