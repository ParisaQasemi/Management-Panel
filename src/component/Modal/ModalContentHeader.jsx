import React from "react";

const ModalContentHeader = ({title}) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full top-0 h-20 p-6 shadow-md shadow-gray-400 rounded-b-xl ">
        <h2 className="text-2xl font-bold text-white"> {title} </h2>
      </div>
    </div>
  );
};

export default ModalContentHeader;
