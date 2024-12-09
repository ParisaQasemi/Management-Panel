import React from "react";
import { useHasPermission } from "../hooks/permissionsHook";

const ActionIcon = ({ icon, pTitle, ...props }) => {
  const hasPerm = useHasPermission(pTitle);
  return (
    hasPerm && (
      <button className="mx-1 cursor-pointer" {...props}>
        {icon}
      </button>
    )
  );
};

export default ActionIcon;
