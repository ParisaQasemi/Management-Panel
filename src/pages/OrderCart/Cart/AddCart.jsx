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

import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { numberWithCommas } from "../../../utils/numbers";
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
    console.log(res);
    if (res.status === 201 || res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      handleGetCarts();
      navigate(-1);
    }
    setIsSubmitting(false);
  };

  const handleDeleteProduct = (id) => {
    setSelectedProductsInfo((old) => old.filter((o) => o.id != id));
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
            {(formik) => {
              return (
                <Form className="w-11/12 my-20 mx-auto ">
                  <div >
                    <div className="flex flex-wrap gap-4 w-full h-20">
                      {/* آی دی مشتری */}
                      <div className="flex-1 min-w-[200px] max-w-[300px] ">
                        <Field
                          type="text"
                          name="user_id"
                          className="w-full border border-white rounded-lg p-3 text-white text-sm focus:outline-none bg-transparent"
                          placeholder="آی دی مشتری"
                        />
                        <ErrorMessage name="user_id" component={FormikError} />
                      </div>

                      {/* محصول */}
                      <div className="flex-1 min-w-[200px] max-w-[300px] ">
                        <SelectSearch
                          options={allProducts}
                          search={true}
                          placeholder="محصول"
                          onChange={(e) =>
                            handleChangeSelectedProduct(e, formik)
                          }
                        />
                        <ErrorMessage
                          name="product_id"
                          component={FormikError}
                        />
                      </div>

                      {/* رنگ */}
                      <div className="flex-1 min-w-[200px] max-w-[300px]">
                        <SelectSearch
                          options={colors}
                          placeholder="رنگ"
                          onChange={(e) => formik.setFieldValue("color_id", e)}
                        />
                        <ErrorMessage name="color_id" component={FormikError} />
                      </div>

                      {/* گارانتی */}
                      <div className="flex-1 min-w-[200px] max-w-[300px] ">
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

                      {/* تعداد */}
                      <div className="flex-1 min-w-[200px] max-w-[300px] ">
                        <Field
                          type="number"
                          name="count"
                          className="w-full border border-white rounded-lg p-3 text-white text-sm focus:outline-none bg-transparent"
                          placeholder="تعداد"
                        />
                        <ErrorMessage name="count" component={FormikError} />
                      </div>

                      {/* دکمه ثبت */}
                      <div className="flex justify-center items-center flex-1 w-50 ">
                        <FaCheck
                          className="text-white bg-green-500 rounded-full p-2 cursor-pointer hover:bg-green-600"
                          title="ثبت فرم"
                          onClick={() => formik.submitForm()}
                        />
                      </div>
                    </div>

                    <hr className="my-5 bg-white" />
                  </div>

                    <div className=" flex flex-wrap justify-center w-full p-3">
                      {selectedProductsInfo.map((product) => (
                        <div
                          className="w-full sm:w-1/2 lg:w-1/3 p-2"
                          key={product.id}
                        >
                          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                            <span className="flex text-sm text-gray-700 truncate">
                              <IoTimeSharp
                                className="text-red-600 cursor-pointer ml-2 hover:text-red-800"
                                title="حذف محصول از سبد"
                                onClick={() => handleDeleteProduct(product.id)}
                              />
                              {product.product.title} (قیمت واحد:{" "}
                              {numberWithCommas(product.product.price)})
                              (گارانتی: {product.guarantee?.title}) (
                              {product.count} عدد)
                              <FaCheckCircle
                                className="ml-2"
                                style={{ color: product.color?.code }}
                              />
                            </span>
                          </div>
                        </div>
                      ))}

                      {selectedProductsInfo.length > 0 ? (
                        <>
                          <div className="w-full sm:w-1/2 p-2">
                            <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                              <span className="w-3/4 text-center text-gray-900">
                                {numberWithCommas(
                                  selectedProductsInfo
                                    .map((p) => p.count * p.product.price)
                                    .reduce((a, b) => a + b)
                                )}
                              </span>
                              <span className="w-1/4 text-center text-blue-950 font-bold">
                                جمع کل
                              </span>
                            </div>
                          </div>
                          <div className="w-full sm:w-1/2 lg:w-2/3 p-2 text-center">
                            <button
                              type="button"
                              className="bg-blue-500 w-36 py-2 my-5 text-white rounded-lg shadow-md"
                              onClick={() => handleConfirmAddCart(formik)}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "صبر کنید..." : "ذخیره"}
                            </button>
                          </div>
                        </>
                      ) : (
                        <h6 className="w-full text-center text-white mt-4">
                          محصولات خود را مشخص کنید
                        </h6>
                      )}
                    </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalContent>
    </>
  );
};

export default AddCart;
