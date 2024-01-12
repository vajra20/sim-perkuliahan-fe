import React from "react";
import { Icon } from "@iconify/react";


const Modal = () => {
  return (
    <div className="fixed w-full flex justify-center items-center bottom-0 left-0 h-auto">
      <div className="flex flex-col w-1/2">
        <div className="bg-color-page px-8 py-3 rounded-t-lg ">
          <div className="text-white font-semibold text-xl flex justify-between">
            <span>Buat Akun</span>
            <Icon></Icon>
          </div>
        </div>
        <div className="bg-white px-8 py-3">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            corporis beatae, error laborum modi dolorum voluptate tempora.
            Ratione ad totam, molestiae minus eos ab impedit quo blanditiis
            voluptates delectus ipsum?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
