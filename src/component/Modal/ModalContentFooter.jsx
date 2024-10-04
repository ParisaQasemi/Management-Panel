import React from "react";

const ModalContentFooter = () => {
  return (
    <div>
      <div className="fixed w-full bg-[#090e24] z-40 flex justify-end items-center bottom-0 h-20 p-6 shadow-md shadow-gray-400 rounded-t-xl ">
        <button
          className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-10 
            rounded-lg focus:outline-none focus:ring focus:border-red-600"
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default ModalContentFooter;
