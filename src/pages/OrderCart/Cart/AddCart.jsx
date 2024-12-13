import "react-select-search/style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import SelectSearch from "react-select-search";
import {
  addNewCartService,
  editCartService,
  getSinglrCartService,
} from "../../../services/cart";
import { Alert } from "../../../utils/alert";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikError from "../../../component/form/FormikError";

import { IoTimeSharp } from "react-icons/io5";
import {
  getAllProductTitlesService,
  getOneProductService,
} from "../../../services/products";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";

const AddCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartToEditId = location.state?.cartId;
  const { handleGetCarts } = useOutletContext();
  const [allProducts, setAllProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);
  const [selectedProductsInfo, setSelectedProductsInfo] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetAllProductTitles = async () => {
    const res = await getAllProductTitlesService();
    res.status === 200 &&
      setAllProducts(
        res.data.data.map((p) => {
          return { name: p.title, value: p.id };
        })
      );
  };

  const handleChangeSelectedProduct = async (e, formik) => {
    formik.setFieldValue("product_id", e);
    const res = await getOneProductService(e);
    if (res.status === 200) {
      const product = res.data.data;
      setCurrentProduct(product);
      setColors(product.colors.map((c) => ({ name: c.title, value: c.id })));
      setGuarantees(
        product.guarantees.map((g) => ({ name: g.title, value: g.id }))
      );
    }
  };

  const handleConfirmAddCart = async (formik) => {
    setIsSubmitting(true);
    let products = [];
    for (const p of selectedProductsInfo) {
      products.push({
        product_id: p.product.id,
        color_id: p.color?.id || "",
        guarantee_id: p.guarantee?.id || "",
        count: p.count,
      });
    }
    let res;
    if (cartToEditId) {
      res = await editCartService(cartToEditId, {
        user_id: formik.values.user_id,
        products,
      });
    } else {
      res = await addNewCartService({
        user_id: formik.values.user_id,
        products,
      });
    }
    if (res.status === 201 || res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      handleGetCarts();
      navigate(-1);
    }
    setIsSubmitting(false);
  };

  const handleDeleteProduct = (id) => {
    setSelectedProductsInfo((old) => old.filter((o) => o.id !== id));
  };

  const handleGetCartToEditInfo = async () => {
    const res = await getSinglrCartService(cartToEditId);
    if (res.status === 200) {
      let products = [];
      const cart = res.data.data;
      setReInitialValues({ ...initialValues, user_id: cart.user_id });
      for (const item of cart.items) {
        products.push({
          id: item.id,
          product: item.product,
          guarantee: item.guarantee,
          color: item.color,
          count: item.count,
        });
      }
      setSelectedProductsInfo(products);
    }
  };

  useEffect(() => {
    handleGetAllProductTitles();
    cartToEditId && handleGetCartToEditInfo();
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <ModalContent size="full">
        <ModalContentHeader
          title={cartToEditId ? "جزئیات و ویرایش سبد خرید" : "افزودن سبد خرید"}
          closeFunction={() => navigate(-1)}
        />
        <div>
          <button onClick={handleCloseModal}>
            <CloseModalBtn />
          </button>
        </div>

        <div>
          <Formik
            initialValues={reInitialValues || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(values, actions, setSelectedProductsInfo, currentProduct)
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => (
              <Form className="w-full lg:w-3/5 mx-auto mt-10">
                <div className="flex flex-wrap gap-6 justify-between mx-auto">
                  <div className="flex flex-col w-96 sm:w-1/2 lg:w-full mx-auto">
                    <Field
                      type="text"
                      name="user_id"
                      className="w-full p-3 border rounded-lg text-sm bg-transparent focus:outline-none"
                      placeholder="آی دی مشتری"
                    />
                    <ErrorMessage name="user_id" component={FormikError} />
                  </div>

                  <div className="lg:flex justify-between">
                    <div className="flex flex-col w-96 sm:w-1/2 lg:w-1/3 mx-2 lg:mx-auto my-1">
                      <SelectSearch
                        options={allProducts}
                        search={true}
                        placeholder="محصول"
                        onChange={(e) => handleChangeSelectedProduct(e, formik)}
                      />
                      <ErrorMessage name="product_id" component={FormikError} />
                    </div>

                    <div className="flex flex-col w-96 sm:w-1/2 lg:w-1/3 mx-2 my-1 ">
                      <SelectSearch
                        options={colors}
                        placeholder="رنگ"
                        onChange={(e) => formik.setFieldValue("color_id", e)}
                      />
                      <ErrorMessage name="color_id" component={FormikError} />
                    </div>

                    <div className="flex flex-col w-96 sm:w-1/2 lg:w-1/3 mx-2 lg:mx-auto my-1 ">
                      <SelectSearch
                        options={guarantees}
                        placeholder="گارانتی"
                        onChange={(e) =>
                          formik.setFieldValue("guarantee_id", e)
                        }
                      />
                      <ErrorMessage
                        name="guarantee_id"
                        component={FormikError}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-96 sm:w-1/2 lg:w-full mx-auto">
                    <Field
                      type="number"
                      name="count"
                      className="w-full p-3 border rounded-lg text-sm bg-transparent focus:outline-none"
                      placeholder="تعداد"
                    />
                    <ErrorMessage name="count" component={FormikError} />
                  </div>

                  <div className="flex justify-center items-center w-full  sm:w-auto lg:w-full">
                    <button
                      type="button"
                      className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
                      onClick={() => formik.submitForm()}
                    >
                      {isSubmitting ? "صبر کنید..." : "ثبت"}
                    </button>
                  </div>
                </div>

                <hr className="my-5 border-t-2 border-gray-300" />

                <div className="space-y-4">
                  {selectedProductsInfo.map((product) => (
                    <div
                      className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
                      key={product.id}
                    >
                      <div>
                        <span className="text-sm text-gray-700">
                          {product.product.title} - گارانتی:{" "}
                          {product.guarantee?.title} - تعداد: {product.count}
                        </span>
                      </div>
                      <div>
                        <IoTimeSharp
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 cursor-pointer hover:text-red-800"
                          title="حذف محصول"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {selectedProductsInfo.length > 0 && (
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="bg-blue-500 py-2 px-6 rounded-lg text-white"
                      onClick={() => handleConfirmAddCart(formik)}
                    >
                      تایید و اضافه کردن سبد خرید
                    </button>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </ModalContent>
    </>
  );
};

export default AddCart;
