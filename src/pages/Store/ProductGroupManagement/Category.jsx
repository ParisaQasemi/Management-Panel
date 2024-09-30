import React from "react";
import Search from "../../../layout/Navbar/Search";
import OpenModalBtn from "../../../component/Modal/OpenModalBtn";
import ProductGroupManagementTable from "./ProductGroupManagementTable";

const Category = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Search />
        <OpenModalBtn />
      </div>
      <ProductGroupManagementTable />
    </div>
  );
};

export default Category;
