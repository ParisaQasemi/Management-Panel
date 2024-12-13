import React, { useEffect, useState } from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import SubmitButton from "../../../component/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";

const AddGuaranty = ({
  children,
  setData,
  guaranteeToEdit,
}) => {
  const [reInitValues, setReInitValues] = useState(null);

  useEffect(() => {
    if (guaranteeToEdit)
      setReInitValues({
        title: guaranteeToEdit.title,
        descriptions: guaranteeToEdit.descriptions || "",
        length: guaranteeToEdit.length || "",
        length_unit: guaranteeToEdit.length_unit || "",
      });
    else setReInitValues(null);
  }, [guaranteeToEdit]);

  return (
    <>
      <ModalContent size="small">
        <ModalContentHeader
          title={guaranteeToEdit ? "ویرایش گارانتی" : "افزودن گارانتی"}
        />
        {children}
        <Formik
          initialValues={reInitValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setData, guaranteeToEdit)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          {/* Form Inputs */}
          <Form className="w-3/4 lg:w-3/5 my-20 mx-auto">
            <FormikControl
              control="input"
              type="text"
              name="title"
              label="عنوان"
              placeholder="فقط حروف و اعداد"
            />

            <FormikControl
              control="textarea"
              type="text"
              name="descriptions"
              label="توضبحات"
              placeholder="فقط حروف و اعداد"
            />

            <FormikControl
              control="input"
              type="number"
              name="length"
              label="مدت گارانتی"
              placeholder="فقط اعداد"
            />

            <FormikControl
              control="input"
              type="text"
              name="length_unit"
              label="واحد"
              placeholder="فقط حروف"
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

export default AddGuaranty;
