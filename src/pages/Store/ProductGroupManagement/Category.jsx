import React from "react";
import CategoryTable from "./CategoryTable";
import CategoryContextContainer from "../../../context/categoryContext";


const Category = () => {
  return (
    <CategoryContextContainer>

      {/* Table */}
      <CategoryTable />

    </CategoryContextContainer>
  );
};

export default Category;
