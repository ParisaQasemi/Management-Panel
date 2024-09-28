import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";
// import Register from "../pages/Register";
import Table from "../../pages/Table/Table";
// import Profile from "../pages/Profile";
import ListProducts from "../../pages/Store/ListProducts/ListProducts";
import ProductGroupManagement from "../../pages/Store/ProductGroupManagement/ProductGroupManagement";
import ProductManagement from "../../pages/Store/ProductManagement/ProductManagement";
import BrandManagement from "../../pages/Store/BrandManagement/BrandManagement";
import WarrantyManagement from "../../pages/Store/WarrantyManagement/WarrantyManagement";
import ColorManagement from "../../pages/Store/ColorManagement/ColorManagement";
import DiscountManagement from "../../pages/Store/DiscountManagement/DiscountManagement";
import CartManagement from "../../pages/OrderCart/CartManagement/CartManagement";
import OrderManagement from "../../pages/OrderCart/OrderManagement/OrderManagement";
import ShoppingMethodManagement from "../../pages/OrderCart/ShoppingMethodManagement/ShoppingMethodManagement";
import Billing from "../../pages/OrderCart/Billing/Billing";
import ViewUsers from "../../pages/UsersAndColleagues/ViewUsers/ViewUsers";
import UserRoles from "../../pages/UsersAndColleagues/UserRoles/UserRoles";
import UserPermissions from "../../pages/UsersAndColleagues/UserPermissions/UserPermissions";
import Questions from "../../pages/Communications/Questions/Questions";
import Feedback from "../../pages/Communications/Feedback/Feedback";



const Mainbar = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col p-6 md:mr-60">
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Table" element={<Table />} />
        {/* <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/ListProducts" element={<ListProducts />} />
        <Route
          path="/ProductGroupManagement"
          element={<ProductGroupManagement />}
        />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        <Route path="/BrandManagement" element={<BrandManagement />} />
        <Route path="/WarrantyManagement" element={<WarrantyManagement />} />
        <Route path="/ColorManagement" element={<ColorManagement />} />
        <Route path="/DiscountManagement" element={<DiscountManagement />} />
        <Route path="/CartManagement" element={<CartManagement />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
        <Route
          path="/ShoppingMethodManagement"
          element={<ShoppingMethodManagement />}
        />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/ViewUsers" element={<ViewUsers />} />
        <Route path="/UserRoles" element={<UserRoles />} />
        <Route path="/UserPermissions" element={<UserPermissions />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default Mainbar;
