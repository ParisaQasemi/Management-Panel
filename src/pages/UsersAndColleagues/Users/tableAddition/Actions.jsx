import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Actions = ({ rowData, handleDeleteUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش کاربر"
        onClick={() =>
          navigate("add-user", {state: { userId: rowData.id}})
        }
      >
        <FaEdit />
      </button>
      
      <button
        className="mx-1 cursor-pointer text-red-500"
        title="حذف کاریر "
        onClick={() => handleDeleteUser(rowData)}
      >
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
