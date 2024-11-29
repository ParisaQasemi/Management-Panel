import { ErrorMessage, Field } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Select = ({ options = [], name, label, firstItem, handleOnchange }) => {
  const setOptions = () => {
    return (
      <>
        <option value="" className="text-black">{firstItem}</option>
        {options.map((o) => {
          return (
            <option key={o.id} value={o.id} className="text-blue-950">
              {o.value}
            </option>
          );
        })}
      </>
    );
  };

  return (
    <div className="h-14 mb-12">
      <div className={`flex justify-between items-center`}>
        <span className="block text-white font-bold w-32">{label}</span>
        <Field>
          {({ form }) => {
            return (
              <>
                {handleOnchange ? (
                  <Field
                    as="select"
                    id={name}
                    name={name}
                    onChange={(e) => handleOnchange(e.target.value, form)}
                    // onChange={(e) => form.setFieldValue(name, e.target.value)} // استفاده از form.setFieldValue

                    className="w-full mt-1 p-1 border-white border-b-[1px] text-white text-sm focus:outline-none bg-transparent  "
                  >
                    {setOptions()}
                  </Field>
                ) : (
                  <Field
                    as="select"
                    id={name}
                    name={name}
                    className="w-full mt-1 p-1 border-white border-b-[1px] text-white text-sm focus:outline-none bg-transparent  "
                  >
                    {setOptions()}
                  </Field>
                )}
              </>
            );
          }}
        </Field>
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Select;
