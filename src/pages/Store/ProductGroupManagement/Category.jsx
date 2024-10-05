import React, { useState } from "react";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CategoryTable from "./CategoryTable";
import Pagination from "../../../component/Pagination/Pagination";
import AddCategory from "./AddCategory";


const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      {/* Search and Modal Button */}
      <div className="flex justify-between">
        <Search />
        <ModalBtn onClick={toggleModal}/>
        {isModalOpen && <AddCategory />}
      </div>

      {/* Table */}
      <CategoryTable />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Category;
