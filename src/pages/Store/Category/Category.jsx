import React from "react";
import Search from "../../../layout/Navbar/Search";
import OpenModalBtn from "../../../component/Modal/OpenModalBtn";
import CategoryTable from "./CategoryTable";

const Category = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Search />
        <OpenModalBtn  modalType="category"/>
      </div>
      <CategoryTable />
    </div>
  );
};

export default Category;
