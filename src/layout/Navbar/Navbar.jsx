import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoHomeSharp, IoMenu, IoNotifications } from "react-icons/io5";
import { FaGripVertical, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({ toggleSidebar, productToEdit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false); // برای نمایش یا مخفی کردن منو
  const menuRef = useRef(null); // برای تشخیص کلیک بیرون

  const user = useSelector((state) => state.userReducer.data);


  const [pageTitle, setPageTitle] = useState("افزودن محصول جدید"); // عنوان پیش‌فرض
  
  useEffect(() => {
    if (location.state?.pageTitle) {
      setPageTitle(location.state.pageTitle); // تنظیم عنوان بر اساس state
    }
  }, [location.state]);

  const getTitle = () => {


    switch (location.pathname) {
      case "/":
        return "داشبورد";

      case "/Category":
        return "مدیریت گروه محصول";

      case "/Product":
        return "مدیریت محصول";

      case "/products/add-product":
        return  <h3>{pageTitle}</h3> ;
          

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

      case "/carts":
        return "مدیریت سبد ها";

      case "/orders":
        return "مدیریت سفارشات";

      case "/deliveries":
        return "مدیریت نحوه ارسال";

      case "/Users":
        return "مشاهده کاربران";

      case "/Users/add-user":
        return "افزودن محصول جدید";

      case "/Roles":
        return "نقش ها";

      case "/permissions":
        return "مجوز ها";

      case "/Questions":
        return "سوال ها";

      case "/Feedback":
        return "نظرات";

      case "/Login":
        return "ورود";

      case "/products/set-attr":
        return "افزودن ویژگی محصول";

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
      className="sticky top-5 z-20 mb-10 border rounded-xl p-2 md:p-4
        backdrop-blur-lg bg-blue-950/30 "
    >
      {/* Dashboard section*/}
      <div className="flex  flex-col md:flex-row w-full justify-between items-start md:items-center">
        <div className="mb-1 md:mb-0">
          <span className="flex">
            <IoHomeSharp
              className="mx-1 text-gray-400 text-sm cursor-pointer"
              onClick={goToDashboard}
            />
            &nbsp; / &nbsp; {getTitle()}
          </span>
        </div>
        {/* Search section and buttons*/}
        <div className="flex flex-col-2 md:flex-row items-center justify-between w-full md:w-auto p-0">
          {/* Buttons section*/}

          <div className="flex w-full items-center justify-between lg:justify-start">
            {/* منو */}
            {isVisible && (
              <div
                ref={menuRef}
                className="w-44 h-fit bg-white text-blue-950 absolute top-28 right-0 rounded-lg p-2 md:right-auto md:left-0 md:top-20"
              >
                <span className="block text-center h-8 font-bold text-blue-900">
                  {user.user_name || user.full_name}
                </span>
                <NavLink to="/logout" className="text-sm flex items-center">
                  <FaUserCircle className="w-6 h-6 ms-2 my-1 cursor-pointer" />
                  <span className="ps-1">خروج</span>
                </NavLink>
              </div>
            )}
            <IoMenu
              className="w-5 h-5 ms-2 cursor-pointer md:hidden"
              onClick={toggleSidebar}
            />
            <div className="flex">
            
            <IoNotifications className="w-5 h-5 ms-2 cursor-pointer" />
            <FaGripVertical
              className="w-5 h-5 ms-2 cursor-pointer "
              onClick={() => setIsVisible((prev) => !prev)} // نمایش یا مخفی کردن منو با کلیک
            />
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
