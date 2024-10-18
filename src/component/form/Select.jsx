import { ErrorMessage, FastField } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Select = ({ options, name, label }) => {
  return (
    <div className="h-14 mb-12">
      <div className={`flex justify-between items-center`}>
        <span className="block text-white font-bold w-32">{label}</span>
        <FastField
          as="select"
          className=" w-full mt-1 p-1 border-b-[1px] border-white text-white text-sm focus:outline-none bg-transparent"
          id={name}
          name={name}
        >
          <option value="">دسته والد را انتخاب کنید</option>
          {options.map((o) => (
            <option className="bg-white text-black" key={o.id} value={o.id}>
              {o.value}
            </option>
          ))}
        </FastField>
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Select;
