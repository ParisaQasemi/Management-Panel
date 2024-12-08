import React from "react";
import { useHasPermission } from "../../hooks/permissionsHook";

const SidebarGroupTitle = ({ title, pTitles }) => {
  const hasPerm = useHasPermission(pTitles);
  return hasPerm && (
      <div>
        <p className="text-white text-lg font-bold mt-6 mb-1">{title}</p>
      </div>
    )
  
};

export default SidebarGroupTitle;
