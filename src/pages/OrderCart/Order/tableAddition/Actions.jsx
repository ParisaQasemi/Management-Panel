import React from "react";
import { useNavigate } from "react-router-dom";
import ActionIcon from "../../../../component/ActionIcon";
import { FaCartShopping } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";

const Actions = ({ rowData, handleDeleteOrder }) => {
  const navigation = useNavigate();
  return (
    <>
      <ActionIcon
        icon={<FaCartShopping className="text-blue-400" />}
        pTitle="read_order"
        title="جزئیات سفارش"
        onClick={() =>
          navigation("add-order", { state: { orderId: rowData.id } })
        }
      />
      <ActionIcon
        icon={<TiTimes className="text-red-500" />}
        pTitle="delete_order"
        title="حذف سبد"
        onClick={() => handleDeleteOrder(rowData)}
      />
    </>
  );
};

export default Actions;
