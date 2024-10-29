import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../../../../component/form/FormikControl";
import SubmitButton from "../../../../component/form/SubmitButton";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddAtrrs = ({
  reInitValues,
  location,
  setData,
  attrToEdit,
  setAttrToEdit,
}) => {
  return (
    <Formik
      initialValues={reInitValues || initialValues}
      onSubmit={(values, actions) =>
        onSubmit(
          values,
          actions,
          location.state.categoryData.id,
          setData,
          attrToEdit,
          setAttrToEdit
        )
      }
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ resetForm }) => ( 
        <Form>
          <div
            className={`${attrToEdit ? "alert_attributes" : ""} 
              flex items-start justify-between h-16 p-2 `}
          >
            <FormikControl
              control="input"
              type="text"
              name="title"
              label="عنوان :"
              placeholder="عنوان ویژگی جدید"
            />

            <FormikControl
              control="input"
              type="text"
              name="unit"
              label="واحد :"
              placeholder="واحد ویژگی جدید"
            />

            <FormikControl
              control="switch"
              name="in_filter"
              label=" نمایش در فیلتر "
            />

            <div className="flex">
              {attrToEdit ? (
                <button
                  type="button"  
                  className="flex items-center text-sm text-white bg-gray-500 hover:bg-gray-600 font-bold py-2 px-5 rounded-lg focus:outline-none focus:ring focus:border-gray-600 me-2"
                  onClick={() => {
                    setAttrToEdit(null); 
                    resetForm(); 
                  }}
                >
                  انصراف
                </button>
              ) : null}
              <SubmitButton />
            </div>
          </div>
          <hr className="my-2" />
        </Form>
              )}

    </Formik>
  );
};

export default AddAtrrs;
