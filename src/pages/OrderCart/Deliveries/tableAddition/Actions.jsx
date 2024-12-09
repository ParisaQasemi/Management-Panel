import React from "react";
import { useNavigate } from "react-router-dom";
import ActionIcon from "../../../../component/ActionIcon";
import { FaEdit } from "react-icons/fa";
const Actions = ({ rowData, handleDeleteDelivery }) => {
  const navigate = useNavigate();
  return (
    <>
      <ActionIcon
        icon={<FaEdit className="text-yellow-500" />}
        pTitle="update_delivery"
        title="ویرایش روش ارسال"
        onClick={() =>
          navigate("/deliveries/add-delivery", {
            state: { deliveryToEdit: rowData },
          })
        }
      />
      <ActionIcon
        icon={<MdDelete className="text-red-500" />}
        pTitle="delete_delivery"
        title="حذف روش ارسال"
        onClick={() => handleDeleteDelivery(rowData)}
      />
    </>
  );
};

export default Actions;
