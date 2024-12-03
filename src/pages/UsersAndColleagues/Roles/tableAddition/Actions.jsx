import React from "react";
import { FaEdit, FaFingerprint } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Actions = ({ rowData, handleDeleteRole }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش نقش "
        onClick={() =>
          navigate("add-role", {
            state: { roleIdToEdit: rowData.id, editType: "role" },
          })
        }
      >
        <FaEdit />
      </button>

      <button
        className="mx-1 cursor-pointer text-blue-300"
        title="دسترسی ها"
        onClick={() =>
          navigate("add-role", {
            state: { roleIdToEdit: rowData.id, editType: "permissions" },
          })
        }
      >
        <FaFingerprint />
      </button>

      <button
        className="mx-1 cursor-pointer text-red-500"
        title="حذف نقش "
        onClick={() => handleDeleteRole(rowData)}
      >
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
