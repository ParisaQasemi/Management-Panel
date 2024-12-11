import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import FormikControl from "../../../component/form/FormikControl";
import { initialValues, onSubmit, validationSchema } from "./core";
import { getAllProductTitlesService } from "../../../services/products";
import SubmitButton from "../../../component/form/SubmitButton";
import { Form, Formik } from "formik";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { useOutletContext } from "react-router-dom";
import { convertDateToJalali } from "../../../utils/convertDate";

const AddDiscount = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const discountToEdit = location.state?.discountToEdit

  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { setData } = useOutletContext();

  const [reInitialValues, setReInitialValues] = useState(null)

  const handleGetAllProductTitles = async () => {
    const res = await getAllProductTitlesService();
    if (res.status === 200) {
      setAllProducts(
        res.data.data.map((p) => {
          return { id: p.id, value: p.title };
        })
      );
    }
  };

  const handleSetProductSelectBox = (formik) => {
    const idsArr = formik.values.product_ids.split("-").filter((id) => id); // فیلتر کردن آیتم‌های خالی
    const selectedProductArr = idsArr
      .map((id) => allProducts.find((p) => p.id == id)) // از find به جای filter برای پیدا کردن اولین آیتم استفاده کنید
      .filter((product) => product); // فیلتر کردن آیتم‌های undefined یا null
  
    console.log(selectedProductArr);
  
    return (
      <FormikControl
        label="برای"
        control="select"
        options={allProducts}
        name="product_ids"
        firstItem="محصول مورد نظر را انتخاب کنید..."
        resultType="string"
        initialItems={
          selectedProductArr.length > 0 ? selectedProductArr : selectedProducts
        }
      />
    );
  };
  

  useEffect(() => {
    handleGetAllProductTitles();
    if (discountToEdit) {
      setSelectedProducts(
        discountToEdit.products.map((p) => {
          return { id: p.id, value: p.title };
        })
      );
      const productIds = discountToEdit.products.map(p=>p.id).join('-')
      console.log(productIds)
      setReInitialValues({
        ...discountToEdit,
        expire_at: convertDateToJalali(discountToEdit.expire_at, 'jD / jM / jYYYY'),
        for_all: discountToEdit.for_all ? true : false,
        product_ids: productIds
      })
    }
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <ModalContent size="small" className="">
      <ModalContentHeader
        title={discountToEdit ? "ویرایش تخفیف" : "افزودن تخفیف"}
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
          onSubmit={(valuse, actions) => onSubmit(valuse, actions, setData, discountToEdit)}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="w-3/4 lg:w-3/5 my-20 mx-auto">
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان تخفیف"
                  placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="code"
                  label="کد تخفیف"
                  placeholder="فقط از حروف لاتین و اعداداستفاده کنید"
                />

                <FormikControl
                  control="input"
                  type="number"
                  name="percent"
                  label="درصد تخفیف"
                  placeholder="فقط از اعداداستفاده کنید"
                />

                <FormikControl
                  control="date"
                  formik={formik}
                  name="expire_at"
                  label="تاریخ انقضا"
                  initialDate={discountToEdit?.expire_at || undefined}
                  yearsLimit={{ from: 10, to: 10 }}
                />

                <div className="w-full my-5 flex justify-start">
                  <FormikControl
                    control="switch"
                    name="for_all"
                    label="برای همه"
                  />
                </div>

                {!formik.values.for_all
                  ? handleSetProductSelectBox(formik)
                  : null}

                <div className="flex justify-center my-5">
                  <SubmitButton className="my-5" />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalContent>
  );
};

export default AddDiscount;
