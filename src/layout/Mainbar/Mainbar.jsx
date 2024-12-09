import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ListProducts from "../../pages/Store/ListProducts/ListProducts";
import Brand from "../../pages/Store/Brand/Brand";
import Users from "../../pages/UsersAndColleagues/Users/Users";
import Roles from "../../pages/UsersAndColleagues/Roles/Roles";
import Permissions from "../../pages/UsersAndColleagues/Permissions/Permissions";
import Questions from "../../pages/Communications/Questions/Questions";
import Feedback from "../../pages/Communications/Feedback/Feedback";
import Table from "../../pages/Table/Table";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
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
import AddRole from "../../pages/UsersAndColleagues/Roles/AddRole";
import AddUser from "../../pages/UsersAndColleagues/Users/AddUsers";
import PermComponent from "../../component/PermComponent";
import { useHasPermission } from "../../hooks/permissionsHook";
import Order from "../../pages/OrderCart/Order/Order";
import Category from "../../pages/Store/ProductGroupManagement/Category";
import Delivery from "../../pages/OrderCart/Deliveries/Delivery";
import AddDelivery from "../../pages/OrderCart/Deliveries/AddDeliveries";
import Cart from "../../pages/OrderCart/Cart/Cart";
import AddCart from "../../pages/OrderCart/Cart/AddCart";

const Mainbar = ({ toggleSidebar }) => {
  const hasCategoryPermission = useHasPermission("read_categories");
  const hasDiscountPermission = useHasPermission("read_discounts");
  const hasUserPermission = useHasPermission("read_users");
  const hasRolePermission = useHasPermission("read_roles");
  const hasDeliveryPermission = useHasPermission("read_deliveries");
  const hasCartPermission = useHasPermission("read_carts");

  return (
    <div className="flex-1 flex flex-col p-6 md:mr-60">
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {hasCategoryPermission && (
          <Route path="/Category" element={<Category />}>
            <Route path=":categoryId" element={<CategoryChildren />} />
          </Route>
        )}
        <Route
          path="/Category/:categoryId/attributes"
          element={
            <PermComponent
              component={<Attributes />}
              pTitle="read_category_attrs"
            />
          }
        />
        <Route
          path="/Product"
          element={
            <PermComponent component={<Product />} pTitle="read_products" />
          }
        />
        <Route
          path="/products/add-product"
          element={
            <PermComponent component={<AddProduct />} pTitle="create_product" />
          }
        />
        <Route
          path="/products/set-attr"
          element={
            <PermComponent
              component={<SetAttribute />}
              pTitle="create_product_attr"
            />
          }
        />
        <Route
          path="/products/gallery"
          element={
            <PermComponent
              component={<ProductGallery />}
              pTitle="create_product_image"
            />
          }
        />
        <Route
          path="/Color"
          element={<PermComponent component={<Color />} pTitle="read_colors" />}
        />
        <Route
          path="/Guaranties"
          element={
            <PermComponent
              component={<Guaranties />}
              pTitle="read_guaranties"
            />
          }
        />
        <Route
          path="/Brand"
          element={<PermComponent component={<Brand />} pTitle="read_brands" />}
        />
        {hasDiscountPermission && (
          <Route path="/Discount" element={<Discount />}>
            <Route
              path="add-discount-code"
              element={
                <PermComponent
                  component={<AddDiscount />}
                  pTitle="create_discount"
                />
              }
            />
          </Route>
        )}
        {hasUserPermission && (
          <Route path="/Users" element={<Users />}>
            <Route
              path="add-user"
              element={
                <PermComponent component={<AddUser />} pTitle="create_user" />
              }
            />
          </Route>
        )}
        {hasRolePermission && (
          <Route path="/roles" element={<Roles />}>
            <Route
              path="add-role"
              element={
                <PermComponent component={<AddRole />} pTitle="create_role" />
              }
            />
          </Route>
        )}
        <Route
          path="/permissions"
          element={
            <PermComponent
              component={<Permissions />}
              pTitle="read_permissions"
            />
          }
        />
        {hasDeliveryPermission && (
          <Route path="/deliveries" element={<Delivery />}>
            <Route
              path="add-delivery"
              element={
                <PermComponent
                  component={<AddDelivery />}
                  pTitle="create_delivery"
                />
              }
            />
          </Route>
        )}

        {hasCartPermission && (
          <Route path="/carts" element={<Cart />}>
            <Route
              path="add-cart"
              element={
                <PermComponent component={<AddCart />} pTitle="create_cart" />
              }
            />
          </Route>
        )}

        <Route path="/Order" element={<Order />} />

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
