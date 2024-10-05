import React from "react";
import { IoMdClose } from "react-icons/io";

const ModalContentHeader = ({onClose}) => {
  return (
    <div>
      <div className="flex justify-between items-center top-0 h-20 p-6 shadow-md shadow-gray-400 rounded-b-xl ">
        <h2 className="text-2xl font-bold text-white">افزودن دسته محصولات</h2>
        <IoMdClose
          className="text-2xl font-bold text-white cursor-pointer "
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalContentHeader;
