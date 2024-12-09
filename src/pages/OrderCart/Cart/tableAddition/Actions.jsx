import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ActionIcon from "../../../../component/ActionIcon";
const Actions = ({ rowData, handleDeleteCart }) => {
  const navigation = useNavigate();
  return (
    <>
      <ActionIcon
        icon={<FaEdit className="text-yellow-500" />}
        pTitle="update_cart"
        title="ویرایش سبد"
        onClick={() =>
          navigation("add-cart", { state: { cartId: rowData.id } })
        }
      />
      <ActionIcon
        icon={<MdDelete className="text-red-500" />}
        pTitle="delete_cart"
        title="حذف سبد"
        onClick={() => handleDeleteCart(rowData)}
      />
    </>
  );
};

export default Actions;
