import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AttrAction = ({rowData, attrToEdit, setAttrToEdit, handleDeleteCategoryAttr}) => {
  return (
    <div className={`${attrToEdit && attrToEdit.id == rowData.id ? 'alert_danger' : ''}`}>
        <button
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش"
        onClick={()=> setAttrToEdit(rowData)}
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
