import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Actions = ({ rowData }) => {
  const navigation = useNavigate();

  return (
    <>
      <button
        className="mx-1 cursor-pointer text-blue-500"
        title="ثبت ویژگی"
        onClick={() =>
          navigation('/products/set-attr', {
            state: { selectedProduct: rowData },
          })
        }
      >
        <PiSubsetProperOf />
      </button>
      <button
        className="mx-1 cursor-pointer text-yellow-500"
        title="ویرایش"
        onClick={() => {
          // setshowModal(true);
          navigation("/products/add-product", {
            state: { productToEdit: rowData },
          });
        }}
      >
        <FaEdit />
      </button>
      <button
        className="mx-1 cursor-pointer text-green-600"
        title="مدیریت گالری"
        onClick={() => navigation('/products/gallery', {state:{selectedProduct:rowData}})}
      >
        <GrGallery />
      </button>
      <button
        className="mx-1 cursor-pointer text-red-500"
        title="حذف"
        onClick={() => {}}
      >
        <MdDelete />
      </button>
    </>
  );
};

export default Actions;
