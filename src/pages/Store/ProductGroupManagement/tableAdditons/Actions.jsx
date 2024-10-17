import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";

const Actions = ({ rowData }) => {
  const navigate = useNavigate();
  const params = useParams();
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
      <button className="mx-1 cursor-pointer text-yellow-500" title="ویرایش">
        <FaEdit />
      </button>
      <button className="mx-1 cursor-pointer text-green-500" title="افزودن">
        <IoMdAdd />
      </button>
      <button className="mx-1 cursor-pointer text-red-500" title="حذف">
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
