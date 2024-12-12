import React from "react";
import { NavLink } from "react-router-dom";
import { useHasPermission } from "../../hooks/permissionsHook";

const SidebarItem = ({ title, icon, path, pTitle, onClick }) => {
  const hasPerm = useHasPermission(pTitle)

  return hasPerm && (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `flex p-3 rounded-lg  ${isActive ? "bg-[#1F2B54]" : ""}`
          }
          onClick={onClick}
        >
          {({ isActive }) => (
            <>
              <span
                className={`p-2 rounded-xl w-8 h-8 ${
                  isActive
                    ? "text-white bg-[#0075ff]"
                    : "bg-[#1F2B54] text-[#0075ff]"
                }`}
              >
                {icon}
              </span>
              <span className="px-2 mt-1 text-sm mx-1">{title}</span>
            </>
          )}
        </NavLink>
  );
};

export default SidebarItem;
