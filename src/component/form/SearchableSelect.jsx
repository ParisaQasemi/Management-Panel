import { ErrorMessage, Field } from "formik";
import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import FormikError from "./FormikError";

const SearchableSelect = ({ formik, resultType, options, name, label, firstItem, initialItems }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showItems, setShowItems] = useState(false); // کنترل نمایش لیست آیتم‌ها
  const [copyOptions, setCopyOptions] = useState(options);

  const handleSelectItems = (selectedId, formik) => {
    if (selectedItems.findIndex((d) => d.id == selectedId) == -1 && selectedId > 0) {
      const newData = [...selectedItems, options.filter((o) => o.id == selectedId)[0]];
      setSelectedItems(newData);

      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType == "string" ? selectedIds.join("-") : selectedIds;
      formik.setFieldValue(name, nameValue);
    }
  };

  const handleRemoveFromSelectedItems = (event, selectedId, formik) => {
    event.stopPropagation();
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id !== selectedId);
      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType === "string" ? selectedIds.join("-") : selectedIds;
      formik.setFieldValue(name, nameValue);
      return newData;
    });
  };

  useEffect(()=>{
    setSelectedItems(initialItems)
  }, [initialItems])

  useEffect(() => {
    setCopyOptions(options);
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // بررسی اینکه آیا کلیک خارج از کامپوننت بوده است یا نه
      if (!event.target.closest('.searchable-select')) {
        setShowItems(false); // مخفی کردن لیست
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Field>
      {({ form }) => {
        return (
          <div className="relative">
            <div
              className="flex mb-12"
              onClick={(e) => { e.stopPropagation(); setShowItems(!showItems); }} // نمایش یا مخفی کردن لیست آیتم‌ها
            >
              <span className="block text-white font-bold w-32">{label}</span>
              <div className="w-full mt-1 border-white border-b-[1px] text-white text-sm focus:outline-none bg-transparent">
                <div className="flex w-full">
                  {selectedItems.length > 0 ? (
                    selectedItems.map((selectedItem) => (
                      <span key={selectedItem.id} className="flex m-1 bg-blue-950 rounded-lg p-1">
                        <IoIosClose
                          className="text-red-600 w-6 h-6"
                          onClick={(e) => handleRemoveFromSelectedItems(e, selectedItem.id, form)}
                        />
                        {selectedItem.value}
                      </span>
                    ))
                  ) : (
                    <span className="w-full">{firstItem}</span>
                  )}
                </div>

                {/* لیست آیتم‌ها */}
                {showItems && (
                  <div className="multi_select_items_content mt-2">
                    <input
                      className="w-full p-1 border-b-[1px] border-white text-black text-sm focus:outline-none bg-transparent"
                      type="text"
                      autoFocus={showItems}
                      placeholder="قسمتی از عنوان مورد نظر را وارد کنید"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        setCopyOptions(options.filter((o) => o.value.includes(e.target.value)))
                      }
                    />
                    <ul className="my-1">
                      {copyOptions.map((o) => (
                        <li
                          key={o.id}
                          className="multi_select_items"
                          onClick={() => handleSelectItems(o.id, form)}
                        >
                          {o.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </Field>
  );
};

export default SearchableSelect;
