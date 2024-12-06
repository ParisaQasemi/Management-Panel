import React, { useEffect, useState } from "react";
import Sidebar from "../SidebarGroupTitle/Sidebar";
import Mainbar from "../Mainbar/Mainbar";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/authHooks";
import { useDispatch, useSelector } from "react-redux";
import { getRolesActionRedux } from "../../redux/user/userActions";

const AdminLayout = () => {
  const [loading, isLogin] = useIsLogin();
  const { roles, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRolesActionRedux());
  }, []);

  // Responsive Menu Item
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {loading ? (
        <h1 className="text-center font-bold text-3xll pt-20">
          لطفا صبر کنید ...
        </h1>
      ) : isLogin ? (
        <>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Mainbar toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </div>
  );
};

export default AdminLayout;
