import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContentHeader from "./ModalContentHeader";
import ModalContentFooter from "./ModalContentFooter";

const ModalContent = ({ children }) => {
  return createPortal(
    <div className="absolute z-30 top-0 w-full h-full overflow-y-auto bg-[#090e24]">
      <ModalContentHeader />
        {children}
      <ModalContentFooter />
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalContent;
