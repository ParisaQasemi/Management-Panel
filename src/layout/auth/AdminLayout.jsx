import React, { useState } from "react";
import Sidebar from "../SidebarGroupTitle/Sidebar";
import Mainbar from "../Mainbar/Mainbar";
import { Navigate } from 'react-router-dom';
import { useIsLogin } from "../../hooks/authHooks";

const AdminLayout = () => {
  const [loading, isLogin] = useIsLogin()
  // Responsive Menu Item
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {
        loading ? (
          <h1 className='text-center font-bold text-3xll pt-20'>لطفا صبر کنید ...</h1>
        ) : isLogin ? (
          <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Mainbar toggleSidebar={toggleSidebar} />
          </>
        ) : (
          <Navigate to={'/auth/login'} />
        )
      }
    </div>
  );
};

export default AdminLayout;
