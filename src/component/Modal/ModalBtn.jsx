import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const ModalBtn = ({ onClick }) => {
  return (
    <div>
      <GoPlus className="h-10 w-10 p-1 bg-[#0075ff] hover:bg-blue-600 text-white rounded-lg cursor-pointer" 
      onClick={onClick} />
    </div>
  );
};

export default ModalBtn;
