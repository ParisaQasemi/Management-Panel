import { FastField } from "formik";
import React from "react";
import SpinnerLoad from "../SpinnerLoad";

const SubmitButton = () => {
  return (
    <FastField>
      {({ form }) => {
        return (
          <button
            className="flex items-center text-sm text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-5 rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]"
            disabled={form.isSubmitting}
          >
            <span>ذخیره</span>
            {form.isSubmitting ? (
              <SpinnerLoad
                colorClass={"text-white"}
                isSmall={true}
                inline={true}
              />
            ) : null}
          </button>
        );
      }}
    </FastField>
  );
};

export default SubmitButton;
