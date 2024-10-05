import React, { useState } from "react";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";
import Pagination from "../../../component/Pagination/Pagination";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Search and Modal Button */}
      <div className="flex justify-between">
        <Search />
        <ModalBtn onClick={toggleModal} />
        {isModalOpen && <AddProduct />}
      </div>

      {/* Table */}
      <ProductTable />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Product;
