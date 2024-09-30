import React from "react";
import Search from "../../../layout/Navbar/Search";
import OpenModalBtn from "../../../component/Modal/OpenModalBtn";
import ProductTable from "./ProductTable";

const Product = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Search />
        <OpenModalBtn modalType="product"/>
      </div>
      <ProductTable />
    </div>
  );
};

export default Product;
