import { Form, Formik } from 'formik';
import React from 'react';
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../../../component/form/FormikControl';
import SubmitButton from '../../../../component/form/SubmitButton';

const AddAtrrs = ({reInitValues, location, setData, }) => {
    return (
        <Formik
          initialValues={reInitValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, location.state.categoryData.id, setData)
          }
          validationSchema={validationSchema}
        >
          <Form>
            <div className="flex items-start justify-between mb-2 border-b-[1px] border-gray-500">
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
              </div>
            </div>
          </Form>
        </Formik>
    );
}

export default AddAtrrs;
