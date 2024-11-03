import React from "react";

import {FaComment, FaLuggageCart, FaShoppingCart, FaThList, FaUserCog, FaUsers,} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosColorPalette, IoMdClose } from "react-icons/io";
import { AiFillProduct, AiOutlineAppstore, AiOutlineProduct} from "react-icons/ai";
import { TbBrandAsana } from "react-icons/tb";
import { MdShoppingCartCheckout, MdVerifiedUser} from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

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
          <SidebarItem title='داشبورد' icon={<IoHomeSharp />} path='/'/>

          {/* ---------- Store ---------- */}
          <SidebarGroupTitle title='فروشگاه'/>
          <SidebarItem title='مدیریت گروه محصول' icon={<AiOutlineProduct />} path='/Category'/>
          <SidebarItem title='مدیریت محصول' icon={<AiOutlineProduct />} path='/Product'/>
          <SidebarItem title='مدیریت برند ها' icon={<TbBrandAsana />} path='/Brand'/>
          <SidebarItem title='مدیریت گارانتی ها' icon={<AiOutlineAppstore />} path='/Guaranties'/>
          <SidebarItem title='مدیریت رنگ ها' icon={<IoIosColorPalette />} path='/ColorManagement'/>
          <SidebarItem title='مدیریت تخفیف ها' icon={<RiDiscountPercentFill />} path='/DiscountManagement'/>
          
          {/* ---------- Orde And Cart ---------- */}
          <SidebarGroupTitle title=' سفارشات و سبد خرید '/>
          <SidebarItem title='مدیریت سبد ها' icon={<FaShoppingCart />} path='/CartManagement'/>
          <SidebarItem title='مدیریت سفارشات' icon={<FaLuggageCart />} path='/OrderManagement'/>
          <SidebarItem title='مدیریت نحوه ارسال' icon={<MdShoppingCartCheckout />} path='/ShoppingMethodManagement'/>
          {/* <SidebarItem title='صورت حساب ' icon={<MdShoppingCartCheckout />} path='/Billing'/> */}

          {/* ---------- Users And Partners ---------- */}
          <SidebarGroupTitle title='کاربران و همکاران '/>
          <SidebarItem title='مشاهده کاربران' icon={<FaUsers />} path='/ViewUsers'/>
          <SidebarItem title='نقش ها ' icon={<FaUserCog />} path='/UserRoles'/>
          <SidebarItem title='مجوز ها ' icon={<MdVerifiedUser />} path='/UserPermissions'/>

          {/* ---------- Communications ---------- */}
          <SidebarGroupTitle title=' ارتباطات '/>
          <SidebarItem title='سوال ها ' icon={<BsFillQuestionSquareFill />} path='/Questions'/>
          <SidebarItem title='نظرات ' icon={<FaComment />} path='/Feedback'/>

      </div>
    </div>
  );
};

export default Sidebar;
