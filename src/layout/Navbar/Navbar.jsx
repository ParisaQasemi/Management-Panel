import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoHomeSharp, IoMenu, IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "داشبورد";

      case "/Table":
        return "جدول ها";

      // case "/Profile":
      //   return "پروفایل";

      // case "/Register":
      //   return "ثبت نام";

      case "/ListProducts":
        return "لیست محصولات";

      case "/Category":
        return "مدیریت گروه محصول";

      case "/Product":
        return "مدیریت محصول";

      case "/BrandManagement":
        return "مدیریت برند ها";

      case "/WarrantyManagement":
        return "مدیریت گارانتی ها";

      case "/ColorManagement":
        return "مدیریت رنگ ها";

      case "/DiscountManagement":
        return "مدیریت تخفیف ها";

      case "/CartManagement":
        return "مدیریت سبد ها";

      case "/OrderManagement":
        return "مدیریت سفارشات";

      case "/ShoppingMethodManagement":
        return "مدیریت نحوه ارسال";

      case "/Billing":
        return "صورت حساب";

      case "/ViewUsers":
        return "مشاهده کاربران";

      case "/UserRoles":
        return "نقش ها";

      case "/UserPermissions":
        return "مجوز ها";

      case "/Questions":
        return "سوال ها";

      case "/Feedback":
        return "نظرات";

      case "/Login":
        return "ورود";

      default:
        return "صفحه دیگر";
    }
  };
  
  const goToDashboard = () => {
    navigate("/");
  };

  return (
    <nav
      className="sticky top-5 z-20 mb-10 border rounded-xl p-4
        backdrop-blur-lg bg-blue-950/30 "
    >
      {/* Dashboard section*/}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-2 md:mb-0">
          <span className="flex">
            <IoHomeSharp
              className="mx-1 text-gray-400 text-sm cursor-pointer"
              onClick={goToDashboard}
            />
            / {getTitle()}
          </span>
          <h3 className="font-semibold text-sm hidden md:block">
            {getTitle()}
          </h3>
        </div>
        {/* Search section and buttons*/}
        <div className="flexflex-col-2 md:flex-row items-start justify-between w-full md:w-auto p-0 h-10">
          {/* <Search /> */}
          {/* Buttons section*/}
          <div className="w-24 flex items-center justify-end">
            <NavLink
              to="/logout"
              className="ps-2 py-2 text-sm flex items-center"
            >
              <FaUserCircle className="cursor-pointer" />
              <span className="ps-1 hidden md:block">خروج</span>
            </NavLink>
            <IoMenu
              className="ms-2 cursor-pointer md:hidden"
              onClick={toggleSidebar}
            />
            <IoMdSettings className="ms-2 cursor-pointer" />
            <IoNotifications className="ms-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
