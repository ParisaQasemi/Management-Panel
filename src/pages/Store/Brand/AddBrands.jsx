import React from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";

const AddBrands = ({ setData, children }) => {
  return (
    <>
      <ModalContent size="small" > 
        <ModalContentHeader title="برند"/>
        {children}
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => onSubmit(values, actions, setData)}
          validationSchema={validationSchema}
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
