import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Actions = ({ rowData, setBrandToEdit, handleDeleteBrand, setshowModal }) => {
  return (
    <>
      <button
        className="mx-1 cursor-pointer text-yellow-500"
        title=" ویرایش برند"
        onClick={() => {
          setBrandToEdit(rowData);
          setshowModal(true);
        }}
      >
        <FaEdit />
      </button>

      <button className="mx-1 cursor-pointer text-red-500" title="حذف برند"
      onClick={()=> {handleDeleteBrand(rowData)}} >
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
