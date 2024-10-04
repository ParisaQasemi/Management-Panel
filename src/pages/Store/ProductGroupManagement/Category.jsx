import React from "react";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CategoryTable from "./CategoryTable";
import Pagination from "../../../component/Pagination/Pagination";

const Category = () => {
  return (
    <div>
      {/* Search and Modal Button */}
      <div className="flex justify-between">
        <Search />
        <ModalBtn />
      </div>

      {/* Table */}
      <CategoryTable />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Category;
