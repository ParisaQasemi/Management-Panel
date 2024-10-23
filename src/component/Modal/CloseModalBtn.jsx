import React from "react";
import { IoMdClose } from "react-icons/io";

const CloseModalBtn = () => {
  return (
    <div>
      <IoMdClose className="text-2xl font-bold text-white cursor-pointer absolute left-8 top-8" />
    </div>
  );
};

export default CloseModalBtn;
