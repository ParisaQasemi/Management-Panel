import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import FormikError from "./FormikError";
import { IoIosClose } from "react-icons/io";

const MultiSelect = ({ resultType, options, name, label, firstItem }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItems = (selectedId, formik) => {
    setSelectedItems((oldData) => {
      if (
        oldData.findIndex((d) => d.id == selectedId) == -1 &&
        selectedId > 0
      ) {
        const newData = [
          ...oldData,
          options.filter((o) => o.id == selectedId)[0],
        ];

        const selectedIds = newData.map((nd) => nd.id);
        const nameValue =
          resultType === "string" ? selectedIds.join("-") : selectedIds;
        formik.setFieldValue(name, nameValue);
        return newData;
      } else {
        return oldData;
      }
    });
  };

  const handleRemoveFromSelectedItems = (selectedId, formik) => {
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id !== selectedId);
      const selectedIds = newData.map((nd) => nd.id);
      const nameValue =
        resultType === "string" ? selectedIds.join("-") : selectedIds;
      formik.setFieldValue(name, nameValue);
      return newData;
    });
  };

  return (
    <Field>
      {({ form }) => {
        return (
          <>
            <div className="w-full flex -mt-12 mb-12">
              <span className="block text-white font-bold w-32"> {label} </span>
              <select
                className="w-full mt-1 p-1 border-b-[1px] border-white text-white text-sm focus:outline-none bg-transparent"
                id={name + "select"}
                onChange={(e) => handleSelectItems(e.target.value, form)}
              >
                <option value="" className="text-black"> {firstItem}</option>
                {options &&
                  options.length > 0 &&
                  options.map((o) => (
                    <option
                      className="bg-white text-black"
                      key={o.id}
                      value={o.id}
                    >
                      {o.value}
                    </option>
                  ))}
              </select>
            </div>

            <ErrorMessage name={name} component={FormikError} />

            <div className="w-full flex  -mt-12 mb-12">
              {selectedItems.map((selectedItem) => (
                <span
                  key={selectedItem.id}
                  className="flex m-1 bg-blue-950 rounded-lg p-1"
                >
                  <IoIosClose
                    className="text-red-600 w-6 h-6"
                    onClick={() =>
                      handleRemoveFromSelectedItems(selectedItem.id, form)
                    }
                  />
                  {typeof selectedItem.value === "object"
                    ? JSON.stringify(selectedItem.value)
                    : selectedItem.value}
                </span>
              ))}
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default MultiSelect;
