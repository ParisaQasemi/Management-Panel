import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../component/form/FormikControl";
import { getCategoriesService } from "../../../services/category";
import SpinnerLoad from "../../../component/SpinnerLoad";
import PrevPageButton from "../../../component/authForm/PrevPageButton";

const AddProduct = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getAllParentCategories = async () => {
    const res = await getCategoriesService();
    console.log(res);

    if (res.status === 200 && Array.isArray(res.data.data)) {
      setParentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    } else {
      setParentCategories([]);
    }
  };
  useEffect(() => {
    getAllParentCategories();
  }, []);

  const handleSetMainCategories = async (value) => {
    console.log(value);
    setMainCategories("waiting");
    if (value > 0) {
      const res = await getCategoriesService(value);
      if (res.status === 200) {
        setMainCategories(
          res.data.data.map((d) => {
            return { id: d.id, value: d.title };
          })
        );
      }
    } else {
      setMainCategories(null);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div>
            <div className="flex justify-end">
              <PrevPageButton />
            </div>
            <Form className="w-3/5 mt-20 mx-auto ">
              <FormikControl
                control="select"
                options={parentCategories}
                name="parentCats"
                label="دسته والد"
                firstItem="دسته مورد نظر را انتخاب کنید"
                handleOnchange={handleSetMainCategories}
              />

              {mainCategories === "waiting" ? (
                <SpinnerLoad colorClass={"text-white"} isSmall={true} />
              ) : mainCategories !== null ? (
                <FormikControl
                  control="searchableSelect"
                  options={mainCategories}
                  name="category_ids"
                  label="دسته اصلی"
                  firstItem="دسته مورد نظر را انتخاب کنید"
                  resultType="string"
                />
              ) : null}



              <div className="mb-10">
                <label className="block text-white text-sm font-bold">
                  عنوان محصول
                </label>
                <input
                  type="text"
                  className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
                  placeholder="عنوان محصول را وارد کنید"
                />
              </div>
              <div className="mb-10">
                <label className="block text-white text-sm font-bold">
                  قیمت
                </label>
                <input
                  type="number"
                  className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
                  placeholder="قیمت را وارد کنید"
                />
              </div>
              <div className="mb-10">
                <label className="block text-white text-sm font-bold">
                  وزن محصول (کیلوگرم)
                </label>
                <input
                  type="number"
                  className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
                  placeholder="وزن را وارد کنید"
                />
              </div>
              <div className="flex justify-center mb-24">
                <button className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]">
                  ذخیره
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
