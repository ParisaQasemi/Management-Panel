import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Modal from "./Modal";
import AddCategory from "../../pages/Store/Category/AddCategory";
import AddProduct from "../../pages/Store/Product/AddProduct";

const OpenModalBtn = ({modalType}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    if (modalType === "category") {
      return <AddCategory />;
    } else if (modalType === "product") {
      return <AddProduct />;
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={openModal} className="w-10 h-10 text-white">
        <BsFillPlusSquareFill className="w-full h-full" />
      </button>

      <Modal isOpenModal={isModalOpen} closeModal={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default OpenModalBtn;
