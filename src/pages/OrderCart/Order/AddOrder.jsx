import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { Alert } from "../../../utils/alert";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import { getSinglrOrderService } from "../../../services/order";
import { convertDateToJalali } from "../../../utils/convertDate";
import { getAllDeliveriesService } from "../../../services/deliveries";
import { getSinglrCartService } from "../../../services/cart";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";

const AddOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOrderId = location.state?.orderId;
  const { handleGetOrders } = useOutletContext();
  const [reInitialValues, setReInitialValues] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [allDeliveries, setAllDeliveries] = useState([]);
  const [selectedCartItemsInfo, setSelectedCartItemsInfo] = useState([]);

  const getAllDeliveries = async () => {
    const res = await getAllDeliveriesService();
    if (res.status === 200)
      setAllDeliveries(
        res.data.data.map((d) => ({
          id: d.id,
          value: d.title + "-" + d.amount,
        }))
      );
  };

  const handleGetCartsInfo = async (cartId) => {
    if (!cartId) return setSelectedCartItemsInfo([]);
    const res = await getSinglrCartService(cartId);
    console.log(res.data);
    if (res.status === 200) {
      console.log(res);
      let products = [];
      const cart = res.data.data;
      if (cart.is_ordered) {
        setSelectedCartItemsInfo([]);
        return Alert("خطا", "این سبد در سفارش دیگری قرار دارد", "warning");
      }
      for (const item of cart.items) {
        products.push({
          id: item.id,
          product: item.product,
          guarantee: item.guarantee,
          color: item.color,
          count: item.count,
        });
      }
      setSelectedCartItemsInfo(products);
    }
  };

  const handleDiscountInfo = async (discountId) => {
    if (!discountId) return setDiscountPercent(0);
    const res = await getOneDiscountService(discountId);
    if (res.status === 200) setDiscountPercent(res.data.data.percent);
  };

  const getSelectedOrderInfo = async () => {
    const res = await getSinglrOrderService(selectedOrderId);
    if (res.status == 200) {
      const order = res.data.data;
      setReInitialValues({
        cart_id: order.cart_id,
        discount_id: order.discount_id || "",
        delivery_id: order.delivery_id,
        address: order.address,
        phone: order.phone,
        email: order.email || "",
        pay_at: order.pay_at ? convertDateToJalali(order.pay_at) : "",
        pay_card_number: order.pay_card_number || "",
        pay_bank: order.pay_bank || "",
      });
      let products = [];
      const cart = order.cart;
      console.log(order);
      for (const item of cart.items) {
        products.push({
          id: item.id,
          product: item.product,
          guarantee: item.guarantee,
          color: item.color,
          count: item.count,
          unit_price: item.unit_price,
        });
      }
      setSelectedCartItemsInfo(products);
    }
  };

  useEffect(() => {
    getAllDeliveries();
    selectedOrderId && getSelectedOrderInfo();
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <ModalContent size="full">
        <ModalContentHeader
          title={selectedOrderId ? "جزئیات سفارش" : "افزودن سفارش"}
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
              onSubmit(values, actions, navigate, handleGetOrders)
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className="w-3/4 lg:w-3/5 my-20 mx-auto">
                  <>
                    <div className="flex justify-between bg-red-00">
                      <FormikControl
                        control="input"
                        type="number"
                        name="cart_id"
                        placeholder="کد سبد"
                        onBlur={(e) => handleGetCartsInfo(e.target.value)}
                      />

                      <FormikControl
                        control="date"
                        formik={formik}
                        name="pay_at"
                        placeholder="تاریخ پرداخت"
                        initialDate={undefined}
                        yearsLimit={{ from: 10, to: 0 }}
                      />

                      <div className="">
                        <input
                          type="text"
                          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm"
                          value={`مبلغ سبد: ${
                            selectedCartItemsInfo.length > 0
                              ? numberWithCommas(
                                  selectedCartItemsInfo
                                    .map(
                                      (p) =>
                                        p.count *
                                        (p.unit_price || p.product.price)
                                    )
                                    .reduce((a, b) => a + b)
                                )
                              : 0
                          }`}
                          disabled
                        />
                      </div>

                      <FormikControl
                        control="input"
                        type="number"
                        name="discount_id"
                        placeholder="آی دی تخفیف"
                        onBlur={(e) => handleDiscountInfo(e.target.value)}
                      />

                      <div>
                        <input
                          type="text"
                          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm"
                          value={"درصد تخفیف: " + discountPercent}
                          disabled
                        />
                      </div>
                    </div>
                    
                    <FormikControl
                      control="input"
                      type="text"
                      name="address"
                      placeholder="آدرس"
                    />

                    <div className="flex justify-between bg-yellow-30">
                      <FormikControl
                        control="select"
                        options={allDeliveries}
                        name="delivery_id"
                        firstItem="روش ارسال"
                      />

                      <FormikControl
                        control="input"
                        type="text"
                        name="phone"
                        placeholder="شماره تماس"
                      />

                      <FormikControl
                        control="input"
                        type="text"
                        name="email"
                        placeholder="ایمیل"
                      />

                      <FormikControl
                        control="input"
                        type="number"
                        name="pay_card_number"
                        placeholder="شماره کارت"
                      />

                      <FormikControl
                        control="input"
                        type="text"
                        name="pay_bank"
                        placeholder="نام بانک"
                      />
                    </div>

                    <hr className="my-5 bg-white" />
                  </>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCartItemsInfo.map((item) => (
                      <div key={item.id} className="w-full">
                        <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start text-sm text-gray-700">
                          <span className="w-full text-right font-medium truncate">
                            {item.product.title}
                          </span>
                          <span className="w-full text-right text-gray-500 text-xs">
                            (قیمت واحد:{" "}
                            {numberWithCommas(
                              item.unit_price || item.product.price
                            )}
                            )
                          </span>
                          <span className="w-full text-right text-gray-500 text-xs">
                            (گارانتی: {item.guarantee?.title})
                          </span>
                          <span className="w-full text-right text-gray-500 text-xs">
                            ({item.count} عدد)
                          </span>
                          <i
                            className="fas fa-circle"
                            style={{ color: item.color?.code }}
                          ></i>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedCartItemsInfo.length > 0 && !selectedOrderId && (
                    <div className="flex justify-center">
                      <SubmitButton />
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalContent>
    </>
  );
};

export default AddOrder;
