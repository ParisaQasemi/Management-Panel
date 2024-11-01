import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Actions = ({ rowData }) => {
  return (
    <>
      <button
        className="mx-1 cursor-pointer text-yellow-500"
        title=" ویرایش برند"
      >
        <FaEdit />
      </button>

      <button className="mx-1 cursor-pointer text-red-500" title="حذف برند">
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
