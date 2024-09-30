import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";

const Modal = ({ isOpenModal, closeModal, children }) => {
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);
  if (!isOpenModal) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-gradient-custom backdrop-blur-[100px] p-6 w-full max-h-screen overflow-auto relative">
        <button
          className="absolute top-8 left-8 text-white"
          onClick={closeModal}
        >
          <CgClose className="text-2xl" />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
