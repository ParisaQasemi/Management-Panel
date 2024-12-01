import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ListProducts from "../../pages/Store/ListProducts/ListProducts";
import Brand from "../../pages/Store/Brand/Brand";
import CartManagement from "../../pages/OrderCart/CartManagement/CartManagement";
import OrderManagement from "../../pages/OrderCart/OrderManagement/OrderManagement";
import ShoppingMethodManagement from "../../pages/OrderCart/ShoppingMethodManagement/ShoppingMethodManagement";
import Billing from "../../pages/OrderCart/Billing/Billing";
import ViewUsers from "../../pages/UsersAndColleagues/ViewUsers/ViewUsers";
import UserRoles from "../../pages/UsersAndColleagues/UserRoles/UserRoles";
import UserPermissions from "../../pages/UsersAndColleagues/UserPermissions/UserPermissions";
import Questions from "../../pages/Communications/Questions/Questions";
import Feedback from "../../pages/Communications/Feedback/Feedback";
import Table from "../../pages/Table/Table";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import Category from "../../pages/Store/ProductGroupManagement/Category";
import AddCategory from "../../pages/Store/ProductGroupManagement/AddCategory";
import Product from "../../pages/Store/Product/Product";
import AddProduct from "../../pages/Store/Product/AddProduct";
import Logout from "../../pages/auth/Logout";
import CategoryChildren from "../../pages/Store/ProductGroupManagement/tableAdditons/CategoryChildren";
import Attributes from "../../pages/Store/ProductGroupManagement/attrs/Attributes";
import Guaranties from "../../pages/Store/Guaranties/Guaranties";
import Color from "../../pages/Store/Color/Color";
import SetAttribute from "../../pages/Store/Product/setAttr/SetAttribute";
import ProductGallery from "../../pages/Store/Product/gallery/ProductGallery";
import Discount from "../../pages/Store/Discount/Discount";
import AddDiscount from "../../pages/Store/Discount/AddDiscount";

const Mainbar = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col p-6 md:mr-60">
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Category" element={<Category />}>
          <Route path=":categoryId" element={<CategoryChildren />}/>
        </Route>
        <Route path="/Category/:categoryId/attributes" element={<Attributes />}/>
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/products/set-attr" element={<SetAttribute />} />
        <Route path="/products/gallery" element={<ProductGallery />} />

        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Guaranties" element={<Guaranties />} />
        <Route path="/Color" element={<Color />} />
        <Route path="/Discount" element={<Discount />}>
          <Route path="add-discount-code" element={<AddDiscount />} />
        </Route>

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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/ListProducts" element={<ListProducts />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default Mainbar;
