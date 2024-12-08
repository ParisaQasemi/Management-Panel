import React from "react";
import { useNavigate } from "react-router-dom";

const ModalContentFooter = ({ modalSizeClass }) => {
  const isFullSize =  modalSizeClass.includes('full')
  const navigate = useNavigate()

  return (
    <div>
      <div
        className={`flex justify-end items-center w-full h-20 p-6 shadow-top rounded-t-xl bg-[#090e24] z-40 -bottom-3 ${
          isFullSize ? "fixed bottom-0" : ""
        }`}
      >
        <button
          className="text-white text-sm bg-red-600 hover:bg-red-700 font-bold py-2 px-5 
            rounded-lg focus:outline-none focus:ring focus:border-red-600"
            onClick={() => navigate(-1)}
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default ModalContentFooter;
