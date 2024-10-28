import { Form, Formik } from "formik";
import React from "react";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../../component/form/FormikControl";
import SubmitButton from "../../../../component/form/SubmitButton";

const AddAtrrs = ({ reInitValues, location, setData, attrToEdit, setAttrToEdit }) => {
  return (
    <Formik
      initialValues={reInitValues || initialValues}
      onSubmit={(values, actions) =>
        onSubmit(values, actions, location.state.categoryData.id, setData, attrToEdit, setAttrToEdit)
      }
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form>
        <div
          className={`${attrToEdit ? "alert_danger" : ""} 
            flex items-start justify-between p-2`}
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

          <div className="flex items-start justify-between w-80">
            <FormikControl
              control="switch"
              name="in_filter"
              label=" نمایش در فیلتر "
            />

            <SubmitButton />
            {attrToEdit ? (
              <button
                className="flex items-center text-white bg-gray-500 hover:bg-gray-600 font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring focus:border-gray-600"
                // disabled={form.isSubmitting}
                onClick={()=> setAttrToEdit(null)}
              >
                انصراف
              </button>
            ) : null}
          </div>
        </div>
        <hr className="my-2" />
      </Form>
    </Formik>
  );
};

export default AddAtrrs;
