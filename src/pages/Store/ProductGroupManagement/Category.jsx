import React, { useState } from "react";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";


const Category = ({setSearchChar}) => {
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
        {isModalOpen && <AddCategory />}
      </div>

      {/* Table */}
      <CategoryTable />

    </>
  );
};

export default Category;
