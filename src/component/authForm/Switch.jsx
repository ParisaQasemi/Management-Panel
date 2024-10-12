import { FastField } from "formik";
import React from "react";

const Switch = ({name, label}) => {
  return (
    <div>
      <FastField
        type="checkbox"
        name={name}
        className="toggle toggle-sm toggle-info"
      />
      <label className="text-sm m-1">{label}</label>
    </div>
  );
};

export default Switch;
