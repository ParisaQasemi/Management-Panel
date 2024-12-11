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
  const { setEditId } = useContext(CategoryContext); //دکمه ویرایش

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
      ) : // <button
      //   className="mx-1 cursor-pointer text-blue-500"
      //   title="زیرمجموعه"
      //   onClick={() =>
      //     navigate(`/Category/${rowData.id}`, {
      //       state: {
      //         parentData: rowData,
      //       },
      //     })
      //   }
      // >
      //   <PiSubsetProperOf />
      // </button>
      null}

      {/* دکمه ویرایش */}
      <ActionIcon
        icon={<FaEdit className="text-yellow-500" />}
        pTitle="update_category"
        title="ویرایش"
        onClick={() => {
          setEditId(rowData.id);
          setshowModal();
        }}
      />
      {/* <button
        onClick={() => {
          setEditId(rowData.id);
          setshowModal();
        }}
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش"
      >
        <FaEdit />
      </button> */}

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
      ) : // <button
      //   onClick={() =>
      //     navigate(`/Category/${rowData.id}/attributes`, {
      //       state: {
      //         categoryData: rowData,
      //       },
      //     })
      //   }
      //   className="mx-1 cursor-pointer text-green-500"
      //   title="افزودن"
      // >
      //   <SiGoogledocs />
      // </button>
      null}

      <ActionIcon
        icon={<MdDelete className="text-red-500"/>}
        pTitle="delete_category"
        title="حذف"
        onClick={() => handleDeleteCategory(rowData)}
      />

      {/* <button
        onClick={() => handleDeleteCategory(rowData)}
        className="mx-1 cursor-pointer text-red-500"
        title="حذف"
      >
        <MdDelete />
      </button> */}
    </>
  );
};

export default Actions;
