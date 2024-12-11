import React from "react";
import CategoryTable from "./CategoryTable";
import CategoryContextContainer from "@/context/CategoryContext";


const Category = () => {
  return (
    <CategoryContextContainer>

      {/* Table */}
      <CategoryTable />

    </CategoryContextContainer>
  );
};

export default Category;
