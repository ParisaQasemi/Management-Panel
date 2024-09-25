import React from "react";
import { NavLink } from "react-router-dom";

import {FaComment, FaLuggageCart, FaShoppingCart, FaThList, FaUserCog, FaUsers,} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosColorPalette, IoMdClose } from "react-icons/io";
import { AiFillProduct, AiOutlineAppstore, AiOutlineProduct} from "react-icons/ai";
import { TbBrandAsana } from "react-icons/tb";
import { MdShoppingCartCheckout, MdVerifiedUser} from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex">
      <div
        className={`w-60 flex-shrink-0 p-6 fixed top-0 right-0 max-h-screen overflow-y-auto scrollbar-hide z-10 transition-transform transform bg-transparent shadow-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 shadow-lg backdrop-blur-lg bg-blue-950/30 rounded-l-3xl z-30 `}
      >
        {/* Toggle sidebar visibility */}
        <button
          className="relative top-3 left-3 md:hidden p-2"
          onClick={toggleSidebar}
        >
          <IoMdClose className="text-2xl" />
        </button>
        {/* SideBar Title */}
        <div className="text-2xl font-bold mt-7 mb-12 border-gray-100">
          پنل مدیریت
        </div>
        {/* Navigation Links Section */}
        <ul className="">
          <li>
            <NavLink
              to="/"
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
                    <IoHomeSharp />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">داشبورد</span>
                </>
              )}
            </NavLink>
          </li>
          {/* Store */}
          <p className="text-white text-lg font-bold mt-6 mb-1">فروشگاه</p>
          <li>
            <NavLink
              to="/ListProducts"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
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
                    <FaThList />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> لیست محصولات</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ProductGroupManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
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
                    <AiOutlineProduct />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">
                    مدیریت گروه محصول
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ProductManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <AiFillProduct />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">مدیریت محصول</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/BrandManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <TbBrandAsana />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">مدیریت برند ها</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/WarrantyManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <AiOutlineAppstore />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">
                    مدیریت گارانتی ها
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ColorManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <IoIosColorPalette />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">مدیریت رنگ ها</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/DiscountManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <RiDiscountPercentFill />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">
                    مدیریت تخفیف ها
                  </span>
                </>
              )}
            </NavLink>
          </li>
          {/* Orde And Cart */}
          <p className="text-white text-lg font-bold mt-6 mb-1">سفارشات و سبد خرید</p>
          <li>
            <NavLink
              to="/CartManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <FaShoppingCart />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">مدیریت سبد ها</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/OrderManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <FaLuggageCart />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">مدیریت سفارشات</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ShoppingMethodManagement"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <MdShoppingCartCheckout />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">
                    مدیریت نحوه ارسال
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Billing"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <MdShoppingCartCheckout />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> صورت حساب </span>
                </>
              )}
            </NavLink>
          </li>
          {/* Users And Partners */}
          <p className="text-white text-lg font-bold mt-6 mb-1"> کاربران و همکاران </p>
          <li>
            <NavLink
              to="/ViewUsers"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <FaUsers />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1">
                    {" "}
                    مشاهده کاربران{" "}
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UserRoles"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <FaUserCog />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> نقش ها </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UserPermissions"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <MdVerifiedUser />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> مجوز ها </span>
                </>
              )}
            </NavLink>
          </li>
          {/* Communications */}
          <p className="text-white text-lg font-bold mt-6 mb-1"> ارتیاطات </p>
          <li>
            <NavLink
              to="/Questions"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <BsFillQuestionSquareFill />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> سوال ها </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Feedback"
              className={({ isActive }) =>
                `flex p-3 rounded-lg ${isActive ? "bg-[#1F2B54]" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-xl w-8 h-8${
                      isActive
                        ? "text-white bg-[#0075ff]"
                        : "bg-[#1F2B54] text-[#0075ff]"
                    }`}
                  >
                    <FaComment />
                  </span>
                  <span className="px-2 mt-1 text-sm mx-1"> نظرات </span>
                </>
              )}
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
