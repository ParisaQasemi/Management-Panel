import { FastField } from "formik";
import React from "react";

const Input = ({ formik, type, name, label }) => {
  return (
    <>
      <div
        className={`w-full h-10 my-10 px-2 rounded-xl text-sm focus:outline-none border-[1px] border-gray-500`}
      >
        <FastField
          className={`w-full h-10 bg-transparent rounded-xl text-white
        ${
          formik.errors[name] && formik.touched[name]
            ? "text-red-500 text-sm"
            : null
        }`}
          type={type}
          name={name}
          placeholder={label}
        />

        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-500 text-xs">{formik.errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default Input;
