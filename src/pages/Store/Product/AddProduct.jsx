import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../../component/form/FormikControl";
import { getCategoriesService } from "../../../services/category";
import SpinnerLoad from "../../../component/SpinnerLoad";
import PrevPageButton from "../../../component/authForm/PrevPageButton";
import { getAllBrandsService } from "../../../services/Brands";
import { getAllColorsService } from "../../../services/colors";
import { getAllGuaranteesService } from "../../../services/guarantiese";

const AddProduct = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);

  const getAllParentCategories = async () => {
    const res = await getCategoriesService();

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

  const getAllBrands = async () => {
    const res = await getAllBrandsService();
    console.log(res);

    if (res.status === 200) {
      setBrands(
        res.data.data.map((d) => {
          return { id: d.id, value: d.original_name };
        })
      );
    }
  };

  const getAllColors = async () => {
    const res = await getAllColorsService();

    if (res.status === 200) {
      setColors(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };

  const getAllGuarantees = async () => {
    const res = await getAllGuaranteesService();
    if (res.status === 200) {
      setGuarantees(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };

  useEffect(() => {
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
  }, []);

  const handleSetMainCategories = async (value) => {
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
      setMainCategories([]);
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
                value={formik.values.parentCats || ""} // استفاده از مقدار جایگزین
              />

              {mainCategories === "waiting" ? (
                <SpinnerLoad colorClass={"text-white"} isSmall={true} />
              ) : null}

              <FormikControl
                control="searchableSelect"
                options={
                  typeof mainCategories == "object" ? mainCategories : []
                }
                name="category_ids"
                label="دسته اصلی"
                firstItem="دسته مورد نظر را انتخاب کنید"
                resultType="string"
              />

              <FormikControl
                control="input"
                name="title"
                type="text"
                label="عنوان *"
                firstItem="فقط از حروف و اعداد استفاده کنید"
              />

              <FormikControl
                control="input"
                name="price"
                type="number"
                label="قیمت *"
                firstItem="(تومان) فقط از اعداد استفاده کنید"
              />

              <FormikControl
                control="input"
                name="weight"
                type="number"
                label="وزن"
                firstItem="(گرم) فقط از اعداد استفاده کنید"
              />

              <FormikControl
                control="select"
                options={brands}
                name="brand_id"
                label="برند"
                firstItem="برند مورد نظر را انتخاب کنید"
                value={formik.values.brands || ""} // مقدار جایگزین برای جلوگیری از null
              />

              <FormikControl
                control="searchableSelect"
                options={colors}
                name="color_ids"
                label="رنگ"
                firstItem="رنگ مورد نظر را انتخاب کنید"
                resultType="string"
                value={formik.values.colors || ""} // مقدار جایگزین برای جلوگیری از null
              />

              <FormikControl
                control="searchableSelect"
                options={guarantees}
                name="guarantee_ids"
                label="گارانتی"
                firstItem="گارانتی مورد نظر را انتخاب کنید"
                resultType="string"
                value={formik.values.guarantees || ""} // مقدار جایگزین برای جلوگیری از null
              />

              <FormikControl
                control="textarea"
                name="descriptions"
                label="توضیحات"
                firstItem="فقط از حروف و اعداد استفاده شود"
              />

              <FormikControl
                control="textarea"
                name="short_descriptions"
                label="توضیحات کوتاه"
                firstItem="فقط از حروف و اعداد استفاده شود"
              />

              <FormikControl
                control="textarea"
                name="cart_descriptions"
                label="توضیحات سبد"
                firstItem="فقط از حروف و اعداد استفاده شود"
              />

              <FormikControl
                control="file"
                name="image"
                label="تصویر"
                firstItem="تصویر"
              />

              <FormikControl
                control="input"
                type="text"
                name="alt_image"
                label=" تصویر"
                firstItem="نوضیح تصویر"
              />

              <FormikControl
                control="input"
                type="text"
                name="keywords"
                label="کلمات کلیدی"
                firstItem="مثلا: تست1 - تست2 - تست3"
              />

              <FormikControl
                control="input"
                type="number"
                name="stock"
                label="موجودی"
                firstItem="فقط از اعداد استفاده کنید (عدد)"
              />

              <FormikControl
                control="input"
                type="number"
                name="discount"
                label="درصد تخفیف"
                firstItem="فقط از اعداد استفاده کنید (درصد)"
              />

              <div className="flex justify-center mb-24">
                <button className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold p-2 rounded-lg text-sm mx-1 focus:outline-none focus:ring focus:border-[#0075ff]">
                  ذخیره
                </button>
                <PrevPageButton />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
