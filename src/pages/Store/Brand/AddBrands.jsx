import React, { useEffect, useState } from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import { apiPath } from "../../../services/httpService";

const AddBrands = ({ setData, children, brandToEdit }) => {
  const [reInitValues, setReInitValues] = useState(null);

  useEffect(() => {
    if (brandToEdit)
      setReInitValues({
        original_name: brandToEdit.original_name,
        persian_name: brandToEdit.persian_name || '',
        descriptions: brandToEdit.descriptions || '',
        logo: null
      })
      else setReInitValues(null)
  }, [brandToEdit]);

  return (
    <>
      <ModalContent size="small">
        <ModalContentHeader title={brandToEdit ? "ویرایش برند" : "افزودن برند"} />
        {children}
        <Formik
          initialValues={reInitValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setData, brandToEdit)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          {/* Form Inputs */}
          <Form className="w-3/5 mt-20 mx-auto ">
            <FormikControl
              control="input"
              type="text"
              name="original_name"
              label="عنوان لاتین"
              placeholder="کیبورد رو در حالت لاتین قرار دهید"
            />

            <FormikControl
              control="input"
              type="text"
              name="persian_name"
              label="عنوان فارسی"
              placeholder="کیبورد رو در حالت لاتین قرار دهید"
            />

            <FormikControl
              control="textarea"
              name="description"
              label="توضیحات"
              placeholder="توضیحات"
            />

            {brandToEdit ? (
              <div className="w-full flex justify-center items-center p-2">
                <img src={apiPath + "/" + brandToEdit.logo} width="60" alt="" />
              </div>
            ) : null}

            <FormikControl
              control="file"
              name="logo"
              label="تصویر"
              placeholder="تصویر"
            />

            <div className="flex justify-center mb-24 ">
              <SubmitButton />
            </div>
          </Form>
        </Formik>
      </ModalContent>
    </>
  );
};

export default AddBrands;
