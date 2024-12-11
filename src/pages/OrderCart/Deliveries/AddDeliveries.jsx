import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";

const AddDelivery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deliveryToEdit = location.state?.deliveryToEdit;
  const [reInitialValues, setReInitialValues] = useState(null);
  const { setData } = useOutletContext();

  useEffect(() => {
    if (deliveryToEdit) setReInitialValues(deliveryToEdit);
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <>
      <ModalContent size="small">
        <ModalContentHeader
          title={deliveryToEdit ? "ویرایش روش ارسال" : "افزودن روش ارسال"}
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
              onSubmit(values, actions, setData, deliveryToEdit)
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="w-3/4 lg:w-3/5 my-20 mx-auto">
                    <FormikControl
                      control="input"
                      type="text"
                      name="title"
                      label="عنوان"
                      placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                    />
                    <FormikControl
                      control="input"
                      type="number"
                      name="amount"
                      label="مبلغ"
                      placeholder="فقط از اعداد استفاده کنید"
                    />
                    <FormikControl
                      control="input"
                      type="number"
                      name="time"
                      label="مدت ارسال"
                      placeholder="فقط از اعداد استفاده کنید"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="time_unit"
                      label="واحد مدت"
                      placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                    />
                    <div className="flex justify-center my-5">
                      <SubmitButton className="my-5" />
                    </div>
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

export default AddDelivery;
