import React, { useEffect, useState } from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import { FastField, Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddColor = ({ children, setData, colorToEdit, setColorToEdit }) => {
  const [reInitValues, setReInitValues] = useState(null);
  const [colorPickerValue, setColorPickerValue] = useState("#000");

  useEffect(() => {
    if (colorToEdit) {
        setColorPickerValue(colorToEdit.code)
      setReInitValues({
        title: colorToEdit.title,
        code: colorToEdit.code,
      });
    } else {
      setColorPickerValue("#000000");
      setReInitValues(null);
    }
  }, [colorToEdit]);

  const handleChangeColorCodeField = (e, form) => {
    setColorPickerValue(e.target.value);
    form.setFieldValue("code", e.target.value);
  };

  return (
    <>
      <ModalContent size="small">
        <ModalContentHeader title={colorToEdit ? "ویرایش رنگ" : "افزودن رنگ"} />
        {children}
        <Formik
          initialValues={reInitValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setData, colorToEdit)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          {/* Form Inputs */}
          <Form className="w-3/5 mt-20 mx-auto ">
            <FormikControl
              control="input"
              type="text"
              name="title"
              label="عنوان"
              placeholder="فقط حروف و اعداد"
            />

            <FastField>
              {({ form }) => {
                return (
                  <div className="w-full flex justify-start items-center mb-8">
                    <label htmlFor="">انتخاب رنگ</label>
                    <input
                      type="color"
                      id="code"
                      name="code"
                      title="انتخاب رنگ"
                      className="mx-3"
                      value={colorPickerValue}
                      onChange={(e) => handleChangeColorCodeField(e, form)}
                    />
                  </div>
                );
              }}
            </FastField>

            <div className="flex justify-center mb-24 ">
              <SubmitButton />
            </div>
          </Form>
        </Formik>
      </ModalContent>
    </>
  );
};

export default AddColor;
