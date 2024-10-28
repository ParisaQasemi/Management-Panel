import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContentHeader from "./ModalContentHeader";
import ModalContentFooter from "./ModalContentFooter";

const ModalContent = ({ children, editId, editCategory }) => {
  const title = editId 
    ? (editCategory ? "ویرایش : " +  editCategory.title : "")
    : "افزودن دسته محصولات"

    // `ویرایش ${editCategory.title}`

  return createPortal(
    <div className="absolute z-30 top-0 w-full h-full overflow-y-auto bg-[#090e24]">
      <ModalContentHeader title={title} />
      {children}
      <ModalContentFooter />
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalContent;
