import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ErrorMessage, Field, Formik } from "formik";
import PrevPageButton from "../../../../component/authForm/PrevPageButton";
import SpinnerLoad from "../../../../component/SpinnerLoad";
import SubmitButton from "../../../../component/form/SubmitButton";
import * as Yup from "yup";
import FormikError from "../../../../component/form/FormikError";
import { initializingData } from "./core";

const SetAttribute = () => {
  const location = useLocation();
  const { selectedProduct } = location.state;
  console.log(selectedProduct);
  

  const [attrs, setAttrs] = useState();
  const [initialValues, setInitialValues] = useState(null);
  const [validationSchema, setValidationSchema] = useState({});

  const handleGetAttributes = async () => {
    const {attrsVar, initials, rules} = await initializingData(selectedProduct)
      setAttrs(attrsVar)
      setInitialValues(initials)
      setValidationSchema(Object.keys(initials).length > 0 ? Yup.object(rules) : {})
  };

  useEffect(() => {
    handleGetAttributes();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h4 className="text-center py-1">
          {" "}
          افزودن ویژگی محصول:{" "}
          <span className="text-blue-400">{selectedProduct.title}</span>{" "}
        </h4>
        <PrevPageButton />
      </div>

      <div className="my-2">
        {initialValues ? (
          <Formik
           initialValues={initialValues}
           onSubmit={(values, actions)=>onSubmit(values,actions, selectedProduct.id)}
           validationSchema={validationSchema}
          >
            <form>
              {attrs.map((attr, index) => (
                <div key={"group" + index} className="w-full ">
                  <h6 className="text-center font-bold">
                    گروه: {attr.groupTitle}
                  </h6>

                  {attr.data.length > 0 ? (
                    attr.data.map((attrData) => (
                      <div
                        className="rounded-lg border-[1px] border-white justify-between my-10"
                        key={attrData.id}
                      >
                        <div className="flex justify-between">
                          <span className="rounded-lg bg-blue-950 text-white p-2 w-36 text-center">
                            {attrData.unit}
                          </span>
                          <Field
                            name={attrData.id}
                            type="text"
                            className="w-full bg-transparent focus:outline-none p-1"
                            placeholder=""
                          />
                          <span className="rounded-lg bg-blue-950 text-white p-2 w-36 text-center">
                            {attrData.title}
                          </span>
                        </div>
                        <ErrorMessage name={attrData.id} component={FormikError} />

                      </div>
                    ))
                  ) : (
                    <small>
                      هیچ ویژگی برای گروه های این محصول ایجاد نشده است
                    </small>
                  )}
                </div>
              ))}
              <div className="flex justify-center">
                <SubmitButton />
                <PrevPageButton />
              </div>
            </form>
          </Formik>
        ) : (
          <SpinnerLoad />
        )}
      </div>
    </div>
  );
};

export default SetAttribute;
