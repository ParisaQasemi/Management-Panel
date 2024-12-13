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
        <button
          className="relative top-3 left-3 md:hidden p-2"
          onClick={toggleSidebar}
        >
          <IoMdClose className="text-2xl" />
        </button>

        <Avatar
          name={user.user_name || user.full_name}
          imagePath={user.image || "/src/assets/img/Avatar/user.png"}
        />

        <SidebarItem
          title="داشبورد"
          icon={<IoHomeSharp />}
          path="/"
          pTitle="read_"
          onClick={toggleSidebar}
        />

        <div className="sidebar_items_container">
          {/* ---------- Store ---------- */}
          <SidebarGroupTitle
            title="فروشگاه"
            pTitles={[
              "read_categories",
              "read_products",
              "read_brands",
              "read_guaranties",
              "read_colors",
              "read_discounts",
            ]}
          />
          <SidebarItem
            title="مدیریت گروه محصول"
            icon={<AiOutlineProduct />}
            path="/Category"
            pTitle="read_categories"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت محصول"
            icon={<AiOutlineProduct />}
            path="/Product"
            pTitle="read_products"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت برند ها"
            icon={<TbBrandAsana />}
            path="/Brand"
            pTitle="read_brands"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت گارانتی ها"
            icon={<AiOutlineAppstore />}
            path="/Guaranties"
            pTitle="read_guaranties"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت رنگ ها"
            icon={<IoIosColorPalette />}
            path="/Color"
            pTitle="read_colors"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت تخفیف ها"
            icon={<RiDiscountPercentFill />}
            path="/Discount"
            pTitle="read_discounts"
            onClick={toggleSidebar}
          />

          {/* ---------- Orde And Cart ---------- */}
          <SidebarGroupTitle
            title=" سفارشات و سبد "
            pTitles={["read_carts", "read_orders", "read_deliveries"]}
          />
          <SidebarItem
            title="مدیریت سبد ها"
            icon={<FaShoppingCart />}
            path="/carts"
            pTitle="read_carts"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت سفارشات"
            icon={<FaLuggageCart />}
            path="/orders"
            pTitle="read_orders"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="مدیریت نحوه ارسال"
            icon={<MdShoppingCartCheckout />}
            path="/deliveries"
            pTitle="read_deliveries"
            onClick={toggleSidebar}
          />

          {/* ---------- Users And Partners ---------- */}
          <SidebarGroupTitle
            title="کاربران و همکاران "
            pTitles={["read_users", "read_roles", "read_permissions"]}
          />
          <SidebarItem
            title="مشاهده کاربران"
            icon={<FaUsers />}
            path="/Users"
            pTitle="read_users"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="نقش ها "
            icon={<FaUserCog />}
            path="/Roles"
            pTitle="read_roles"
            onClick={toggleSidebar}
          />

          <SidebarItem
            title="مجوز ها "
            icon={<MdVerifiedUser />}
            path="/permissions"
            pTitle="read_permissions"
            onClick={toggleSidebar}
          />

          {/* ---------- Communications ---------- */}
          <SidebarGroupTitle
            title=" ارتباطات "
            pTitles={["read_questions", "read_comments"]}
          />
          <SidebarItem
            title="سوال ها "
            icon={<BsFillQuestionSquareFill />}
            path="/Questions"
            pTitle="read_questions"
            onClick={toggleSidebar}
          />
          <SidebarItem
            title="نظرات "
            icon={<FaComment />}
            path="/Feedback"
            pTitle="read_comments"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
