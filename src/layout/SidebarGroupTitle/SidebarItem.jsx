import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon, path }) => {
  return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `flex p-3 rounded-lg  ${isActive ? "bg-[#1F2B54]" : ""}`
          }
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
