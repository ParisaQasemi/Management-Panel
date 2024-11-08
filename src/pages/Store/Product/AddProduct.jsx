import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../component/form/FormikControl";
import { getCategoriesService } from "../../../services/category";
import SpinnerLoad from "../../../component/SpinnerLoad";
import { IoIosClose } from "react-icons/io";
import FormikError from "../../../component/form/FormikError";
import PrevPageButton from "../../../component/authForm/PrevPageButton";

const AddProduct = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getAllParentCategories = async () => {
    const res = await getCategoriesService();
    console.log(res);

    if (res.status === 200) {
      setParentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
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

  const handleSelectCategory = (value, formik) => {
    setSelectedCategories((oldData) => {
      if (oldData.findIndex((d) => d.id == value) == -1) {
        const newData = [
          ...oldData,
          mainCategories.filter((c) => c.id == value)[0],
        ];

        const selectedIds = newData.map((nd) => nd.id);
        formik.setFieldValue("category_ids", selectedIds.join("-"));

        return newData;
      } else {
        return oldData;
      }
    });
  };

  const handleRemoveformSelectedCategories = (categoryId, formik) => {
    setSelectedCategories((oldData) => {
      let newData = oldData.filter((d) => d.id != categoryId);

      const selectedIds = newData.map((nd) => nd.id);
      formik.setFieldValue("category_ids", selectedIds.join("-"));

      return newData;
    });
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
            <div className="flex justify-between">
              <h3 className="text-white font-bold mb-1">افزودن محصول جدید</h3>
              <PrevPageButton />
            </div>
            <Form className="w-3/5 mt-20 mx-auto ">
              {parentCategories.length > 0 ? (
                <FormikControl
                  control="select"
                  options={parentCategories}
                  name="parentCats"
                  label="دسته والد"
                  firstItem="دسته مورد نظر را انتخاب کنید"
                  handleOnchange={handleSetMainCategories}
                />
              ) : null}
              {mainCategories === "waiting" ? (
                <SpinnerLoad colorClass={"text-white"} isSmall={true} />
              ) : mainCategories !== null ? (
                <FormikControl
                  control="select"
                  options={mainCategories}
                  name="mainCats"
                  label="دسته اصلی"
                  firstItem="دسته مورد نظر را انتخاب کنید"
                  handleOnchange={handleSelectCategory}
                />
              ) : null}
              <ErrorMessage name={"category_ids"} component={FormikError} />
              <div className="flex">
                {selectedCategories.map((category) => (
                  <span
                    className="flex m-1 bg-blue-950 p-2 rounded-xl"
                    key={category.id}
                  >
                    <IoIosClose
                      className="text-red-600 w-6 h-6"
                      onClick={() =>
                        handleRemoveformSelectedCategories(category.id, formik)
                      }
                    />
                    {category.value}
                  </span>
                ))}
              </div>

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
              {/*
          <div className="mb-10">
            <label className="block text-white text-sm font-bold">برند</label>
            <input
              type="text"
              className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
              placeholder="نام برند را وارد کنید"
            />
          </div>
          <div className="mb-10">
            <label className="block text-white text-sm font-bold">رنگ</label>
            <input
              type="text"
              className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
              placeholder="نام رنگ را وارد کنید"
            />
          </div>
          <div className="mb-10">
            <label className="block text-white text-sm font-bold">
              گارانتی
            </label>
            <input
              type="text"
              className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
              placeholder="نام گارانتی را وارد کنید"
            />
            <span className="text-red-500 ml-2">×</span>
          </div>
          <div className="mb-10">
            <label className="block text-white text-sm font-bold">
              توضیحات
            </label>
            <textarea
              className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
              placeholder="توضیحات را وارد کنید"
            />
          </div>*/}
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
