import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AttrAction = ({rowData, handleDeleteCategoryAttr}) => {
  return (
    <div>
        <button
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش"
      >
        <FaEdit />
      </button>

      <button
        className="mx-1 cursor-pointer text-red-500"
        title="حذف"
        onClick={()=> handleDeleteCategoryAttr(rowData)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default AttrAction;
