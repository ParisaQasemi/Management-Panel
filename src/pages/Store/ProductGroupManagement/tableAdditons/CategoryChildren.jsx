import React from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../../../component/authForm/PrevPageButton";

const CategoryChildren = () => {
  const location = useLocation();
  return (
    <div className="py-3 flex justify-between">
      <h5 className="text-center">
        <span>زیرمجموعه :</span>
        <span className="text-blue-400">
          {location.state.parentData.title}
        </span>
      </h5>
      <PrevPageButton />
    </div>
  );
};

export default CategoryChildren;
