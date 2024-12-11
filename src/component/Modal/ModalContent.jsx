import React from "react";
import { createPortal } from "react-dom";
import ModalContentFooter from "./ModalContentFooter";

const ModalContent = ({ children, editId, editCategory, size = "full" }) => {
  const title = editId
    ? editCategory
      ? "ویرایش : " + editCategory.title
      : ""
    : "افزودن دسته محصولات";

  const modalSizeClass =
    size === "small"
      ? "fixed inset-0 z-30 max-w-xl mx-auto md:my-5 p-2 md:h-fit rounded-lg shadow-lg bg-[#090e24]" 
      : "fixed inset-0 z-30 w-full h-full bg-[#090e24]";
     
  return createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-30 " />
      <div className={`${modalSizeClass} h-full   overflow-y-auto`}>
        {children}
        <ModalContentFooter modalSizeClass={modalSizeClass} />
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default ModalContent;
