import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const File = ({ name, label, placeholder }) => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <div className="h-14 mb-12">
            <div className={`flex justify-between items-center `}>
              <span className="block text-white font-bold w-32">
                {label}
              </span>
              <input
                type="file"
                name={name}
                placeholder={placeholder}
                onClick={(e) => form.setFieldValue(name, e.target.files[0])}
                className="w-full p-1 border-b-[1px] border-white text-white text-sm focus:outline-none bg-transparent"
              />
            </div>

            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </FastField>
  );
};

export default File;
