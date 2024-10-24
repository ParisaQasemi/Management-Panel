import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../../../context/CategoryContext";
import { SiGoogledocs } from "react-icons/si";

const Actions = ({ rowData, handleDeleteCategory }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { setEditId } = useContext(CategoryContext);

  return (
    <>
      {!params.categoryId ? (
        <button
          className="mx-1 cursor-pointer text-blue-500"
          title="زیرمجموعه"
          onClick={() =>
            navigate(`/Category/${rowData.id}`, {
              state: {
                parentData: rowData,
              },
            })
          }
        >
          <PiSubsetProperOf />
        </button>
      ) : null}

      <button
        onClick={() => setEditId(rowData.id)}
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش"
      >
        <FaEdit />
      </button>

      {params.categoryId ? (
        <button
          onClick={() =>
            navigate(`/Category/${rowData.id}/attributes`, {
              state: {
                categoryData: rowData,
              },
            })
          }
          className="mx-1 cursor-pointer text-green-500"
          title="افزودن"
        >
          <SiGoogledocs />
        </button>
      ) : null}

      <button
        onClick={() => handleDeleteCategory(rowData)}
        className="mx-1 cursor-pointer text-red-500"
        title="حذف"
      >
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
