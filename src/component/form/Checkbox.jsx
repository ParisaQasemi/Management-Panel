import { ErrorMessage, Field } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Checkbox = (props) => {
  const { name, label, options } = props;
  return (
    <div className="w-full">
  <span className="block text-white font-bold w-32 my-2">{label}</span>

  <ErrorMessage name={name} component={FormikError} />
  <Field id={name} name={name}>
    {({ field }) => {
      return (
        <div className="grid grid-cols-3 gap-4 text-white rounded">
          {options.map((o) => (
            <div className="flex items-center gap-2" key={o.id}>
              <input
                className="cursor-pointer"
                type="checkbox"
                id={`${name}_${o.id}`}
                {...field}
                value={o.id}
                checked={field.value.includes("" + o.id)}
              />
              <label
                htmlFor={`${name}_${o.id}`}
                className="cursor-pointer"
              >
                {o.title}
              </label>
            </div>
          ))}
        </div>
      );
    }}
  </Field>
</div>
  );
};

export default Checkbox;
