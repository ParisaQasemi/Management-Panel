import React from "react";

import {
  FaComment,
  FaLuggageCart,
  FaShoppingCart,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosColorPalette, IoMdClose } from "react-icons/io";
import { AiOutlineAppstore, AiOutlineProduct } from "react-icons/ai";
import { TbBrandAsana } from "react-icons/tb";
import { MdShoppingCartCheckout, MdVerifiedUser } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const user = useSelector((state) => state.userReducer.data);

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
        {/* <div className="text-2xl font-bold mt-7 mb-2 text-center  border-gray-100">
          پنل مدیریت
        </div> */}

        <Avatar
          name={user.user_name || user.full_name}
          imagePath={user.image || "/src/assets/img/Avatar/user.png"}
        />

        {/* Navigation Links Section */}
        <SidebarItem title="داشبورد" icon={<IoHomeSharp />} path="/" pTitle='read_' />

        <div className="sidebar_items_container">
          {/* ---------- Store ---------- */}
          <SidebarGroupTitle
            title="فروشگاه"
            pTitles={[
              "read_categories",  "read_products",  "read_brands",  "read_guaranties",  "read_colors", "read_discounts"
             ]}
          />
          <SidebarItem
            title="مدیریت گروه محصول"
            icon={<AiOutlineProduct />}
            path="/Category"
            pTitle="read_categories"
          />
          <SidebarItem
            title="مدیریت محصول"
            icon={<AiOutlineProduct />}
            path="/Product"
            pTitle="read_products"
          />
          <SidebarItem
            title="مدیریت برند ها"
            icon={<TbBrandAsana />}
            path="/Brand"
            pTitle="read_brands"
          />
          <SidebarItem
            title="مدیریت گارانتی ها"
            icon={<AiOutlineAppstore />}
            path="/Guaranties"
            pTitle="read_guaranties"
          />
          <SidebarItem
            title="مدیریت رنگ ها"
            icon={<IoIosColorPalette />}
            path="/Color"
            pTitle="read_colors"
          />
          <SidebarItem
            title="مدیریت تخفیف ها"
            icon={<RiDiscountPercentFill />}
            path="/Discount"
            pTitle="read_discounts"
          />

          {/* ---------- Orde And Cart ---------- */}
          <SidebarGroupTitle
            title=" سفارشات و سبد "
            pTitles={["read_carts",  "read_orders",  "read_deliveries"]}
          />
          <SidebarItem
            title="مدیریت سبد ها"
            icon={<FaShoppingCart />}
            path="/Cart"
            pTitle="read_carts"
          />
          <SidebarItem
            title="مدیریت سفارشات"
            icon={<FaLuggageCart />}
            path="/Order"
            pTitle="read_orders"
          />
          <SidebarItem
            title="مدیریت نحوه ارسال"
            icon={<MdShoppingCartCheckout />}
            path="/deliveries"
            pTitle="read_deliveries"
          />

          {/* ---------- Users And Partners ---------- */}
          <SidebarGroupTitle
            title="کاربران و همکاران "
            pTitles={["read_users",  "read_roles",  "read_permissions"]}
          />
          <SidebarItem
            title="مشاهده کاربران"
            icon={<FaUsers />}
            path="/Users"
            pTitle="read_users"
          />
          <SidebarItem
            title="نقش ها "
            icon={<FaUserCog />}
            path="/Roles"
            pTitle="read_roles"
          />

          <SidebarItem
            title="مجوز ها "
            icon={<MdVerifiedUser />}
            path="/permissions"
            pTitle="read_permissions"
          />

          {/* ---------- Communications ---------- */}
          <SidebarGroupTitle
            title=" ارتباطات "
            pTitles={["read_questions",  "read_comments"]}
          />
          <SidebarItem
            title="سوال ها "
            icon={<BsFillQuestionSquareFill />}
            path="/Questions"
            pTitle="read_questions"
          />
          <SidebarItem
            title="نظرات "
            icon={<FaComment />}
            path="/Feedback"
            pTitle="read_comments"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
