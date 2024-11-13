import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Textarea = ({ name, label, placeholder }) => {
  return (
    <div className="h-14 mb-12">
      <div className={`flex justify-between items-center`}>
        <span className="block text-white font-bold w-32">
          {label}
        </span>

        <FastField
          as="textarea"
          name={name}
          placeholder={placeholder}
          className="w-full p-1 border-b-[1px] border-white text-white text-sm focus:outline-none bg-transparent"
        />
      </div>
      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Textarea;
