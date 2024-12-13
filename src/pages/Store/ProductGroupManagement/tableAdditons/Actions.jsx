import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "@/context/categoryContext";
import { SiGoogledocs } from "react-icons/si";
import ActionIcon from "../../../../component/ActionIcon";

const Actions = ({ rowData, handleDeleteCategory, setshowModal }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { setEditId } = useContext(CategoryContext); 

  return (
    <>
      {!params.categoryId ? (
        <ActionIcon
          icon={<PiSubsetProperOf className="text-blue-500"/>}
          pTitle="read_category"
          title="زیرمجموعه"
          onClick={() =>
            navigate(`/Category/${rowData.id}`, {
              state: {
                parentData: rowData,
              },
            })
          }
        />
      ) :  null}

      <ActionIcon
        icon={<FaEdit className="text-yellow-500" />}
        pTitle="update_category"
        title="ویرایش"
        onClick={() => {
          setEditId(rowData.id);
          setshowModal();
        }}
      />

      {params.categoryId ? (
        <ActionIcon
          icon={<SiGoogledocs className="text-green-500"/>}
          pTitle="create_category_attr"
          title="افزودن"
          onClick={() =>
            navigate(`/Category/${rowData.id}/attributes`, {
              state: {
                categoryData: rowData,
              },
            })
          }
        />
      ) :  null}

      <ActionIcon
        icon={<MdDelete className="text-red-500"/>}
        pTitle="delete_category"
        title="حذف"
        onClick={() => handleDeleteCategory(rowData)}
      />
    </>
  );
};

export default Actions;
