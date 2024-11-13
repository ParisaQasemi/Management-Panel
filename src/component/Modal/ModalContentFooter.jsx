import React from "react";

const ModalContentFooter = ({ modalSizeClass }) => {
  const isFullSize =  modalSizeClass.includes('full')

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
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default ModalContentFooter;
