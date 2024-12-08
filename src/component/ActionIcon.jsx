import React from "react";
import { useHasPermission } from "../hooks/permissionsHook";

const ActionIcon = ({ icon, pTitle, ...props }) => {
  const hasPerm = useHasPermission(pTitle);
  return (
    hasPerm && (
      <button
        // onClick={() => handleDeleteCategory(rowData)}
        className="mx-1 cursor-pointer"
        // title="حذف"
        {...props}
      >
        {/* <MdDelete /> */}
        {icon}
      </button>
    )
  );
};

export default ActionIcon;
