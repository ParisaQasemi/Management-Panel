import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { PiSubsetProperOf } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ActionIcon from "../../../../component/ActionIcon";

const Actions = ({ rowData }) => {
  const navigation = useNavigate();

  return (
    <>
      <ActionIcon
        icon={<PiSubsetProperOf className="text-blue-500" />}
        pTitle="create_product_attr"
        title="ثبت ویژگی"
        onClick={() =>
          navigation("/products/set-attr", {
            state: { selectedProduct: rowData },
          })
        }
      />

      <ActionIcon
        icon={<FaEdit className="text-yellow-500" />}
        pTitle="update_product"
        title="ویرایش"
        onClick={() => {
          // setshowModal(true);
          navigation("/products/add-product", {
            state: { productToEdit: rowData },
          });
        }}
      />

      <ActionIcon
        icon={<GrGallery className="text-green-600" />}
        pTitle="create_product_image"
        title="مدیریت گالری"
        onClick={() =>
          navigation("/products/gallery", {
            state: { selectedProduct: rowData },
          })
        }
      />

      <ActionIcon
        icon={<MdDelete className="text-red-500" />}
        pTitle="delete_product"
        title="حذف"
        onClick={() => {}}
      />
    </>
  );
};

export default Actions;
