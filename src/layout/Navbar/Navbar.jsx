import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoHomeSharp, IoMenu, IoNotifications } from "react-icons/io5";
import { FaGripVertical, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false); // برای نمایش یا مخفی کردن منو
  const menuRef = useRef(null); // برای تشخیص کلیک بیرون

  const user = useSelector((state) => state.userReducer.data);

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "داشبورد";

      case "/Table":
        return "جدول ها";

      case "/ListProducts":
        return "لیست محصولات";

      case "/Category":
        return "مدیریت گروه محصول";

      case "/Product":
        return "مدیریت محصول";

      case "/products/add-product":
        return "افزودن محصول جدید";

      case "/products/gallery":
        return "مدیریت گالری تصاویر";

      case "/Brand":
        return "مدیریت برند ها";

      case "/Guaranties":
        return "مدیریت گارانتی ها";

      case "/Color":
        return "مدیریت رنگ ها";

      case "/Discount":
        return "مدیریت تخفیف ها";

      case "/CartManagement":
        return "مدیریت سبد ها";

      case "/OrderManagement":
        return "مدیریت سفارشات";

      case "/ShoppingMethodManagement":
        return "مدیریت نحوه ارسال";

      case "/Billing":
        return "صورت حساب";

      case "/Users":
        return "مشاهده کاربران";

      case "/Users/add-user":
        return "افزودن محصول جدید";

      case "/Roles":
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false); // منو را مخفی کن
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            &nbsp; / &nbsp; {getTitle()}
          </span>
          <h3 className="font-semibold text-sm hidden md:block">
            {getTitle()}
          </h3>
        </div>
        {/* Search section and buttons*/}
        <div className="flex flex-col-2 md:flex-row items-center justify-between w-full md:w-auto p-0 h-10">
          {/* Buttons section*/}

          <div className="flex items-center justify-end ">
            {/* منو */}
            {isVisible && (
              <div
                ref={menuRef}
                className="w-44 h-32 bg-white text-blue-950 absolute top-28 right-0 rounded-lg p-2 md:right-auto md:left-0 md:top-20"
              >
                <span className="block text-center h-8 font-bold text-blue-900">
                  {user.user_name || user.full_name}
                </span>
                <NavLink to="/logout" className="text-sm flex items-center">
                  <FaUserCircle className="w-6 h-6 ms-2 my-1 cursor-pointer" />
                  <span className="ps-1">خروج</span>
                </NavLink>
                <IoMdSettings className="w-6 h-6 ms-2 my-1 cursor-pointer" />
              </div>
            )}
            <IoMenu
              className="w-6 h-6 ms-2 cursor-pointer md:hidden"
              onClick={toggleSidebar}
            />
            <IoNotifications className="w-6 h-6 ms-2 cursor-pointer" />
            <FaGripVertical
              className="w-6 h-6 ms-2 cursor-pointer"
              onClick={() => setIsVisible((prev) => !prev)} // نمایش یا مخفی کردن منو با کلیک
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
