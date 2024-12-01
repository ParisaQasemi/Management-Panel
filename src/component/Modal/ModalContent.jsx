import React from "react";
import { createPortal } from "react-dom";
import ModalContentHeader from "./ModalContentHeader";
import ModalContentFooter from "./ModalContentFooter";

const ModalContent = ({ children, editId, editCategory, size = "full" }) => {
  const title = editId
    ? editCategory
      ? "ویرایش : " + editCategory.title
      : ""
    : "افزودن دسته محصولات";

  const modalSizeClass =
    size === "small"
      ? "fixed inset-0 z-30 max-w-xl mx-auto my-5 p-2 bg-[#090e24] rounded-lg shadow-lg"
      : "fixed inset-0 z-30 w-full h-full overflow-y-auto bg-[#090e24]";

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-30 " />
      <div className={`${modalSizeClass} h-fit`}>
        {/* <ModalContentHeader title={title} /> */}
        {children}
        <ModalContentFooter modalSizeClass={modalSizeClass} />
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default ModalContent;
