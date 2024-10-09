import React, { useState } from "react";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";

const Product = ({setSearchChar}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <>
      {/* Search and Modal Button */}
      <div className="flex justify-between">
        <Search setSearchChar={setSearchChar} />
        <ModalBtn onClick={toggleModal} />
        {isModalOpen && <AddProduct />}
      </div>

      <div>
        {/* Table and Search item and Modal button */}
        <ProductTable />
      </div>
    </>
  );
};

export default Product;
