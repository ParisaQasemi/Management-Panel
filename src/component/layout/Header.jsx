import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoHomeSharp, IoMenu, IoNotifications } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "داشبورد";

      // case "/Table":
      //   return "جدول ها";

      // case "/Profile":
      //   return "پروفایل";

      // case "/Register":
      //   return "ثبت نام";

      case "/ListProducts":
        return "لیست محصولات";

      case "/ProductGroupManagement":
        return "مدیریت گروه محصول";

      case "/ProductManagement":
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
    <header
      className="sticky top-5 z-20 mb-6 border rounded-xl p-4
        backdrop-blur-lg bg-blue-950/30"
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
          <h3 className="font-semibold text-sm">{getTitle()}</h3>
        </div>
        {/* Search section and buttons*/}
        <div className="flex flex-col-2 md:flex-row items-start justify-between w-full md:w-auto p-0 h-10">
          <div className="relative w-32 md:w-auto mb-4 md:mb-0">
            <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-gray-400" />
            <input
              type="text"
              placeholder="جستجو ..."
              className="w-full ps-8 py-2 rounded-xl bg-[#0f1535] text-sm text-white focus:outline-none border-[1px] border-gray-500"
            />
          </div>
          {/* Buttons section*/}
          <div className="w-36 flex items-center justify-center">
            <NavLink
              to="/Login"
              className="px-2 py-2 text-sm flex items-center mx-1"
            >
              <FaUserCircle className="cursor-pointer" />
              <span className="px-1 ">ورود</span>
            </NavLink>
            <IoMenu
              className="mx-1 cursor-pointer md:hidden"
              onClick={toggleSidebar}
            />
            <IoMdSettings className="mx-1 cursor-pointer" />
            <IoNotifications className="mx-1 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
