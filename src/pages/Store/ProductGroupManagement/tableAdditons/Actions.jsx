import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../../../context/categoryContext";

const Actions = ({ rowData , handleDeleteCategory}) => {
  const navigate = useNavigate();
  const params = useParams();
  const { setEditId } = useContext(CategoryContext)


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






      <button onClick={()=> setEditId(rowData.id)}
      className="mx-1 cursor-pointer text-yellow-500" title="ویرایش">
        <FaEdit />
      </button>









      <button className="mx-1 cursor-pointer text-green-500" title="افزودن">
        <IoMdAdd />
      </button>

      <button onClick={()=> handleDeleteCategory(rowData)} 
      className="mx-1 cursor-pointer text-red-500" title="حذف">
        <MdDelete />
      </button>

    </>
  );
};

export default Actions;
