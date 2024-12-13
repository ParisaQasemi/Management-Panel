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
import { useLocation } from "react-router-dom";

const AddProduct = () => {
  const loaction = useLocation();
  const productToEdit = loaction.state?.productToEdit || {};
  const [reInitialValues, setReInitialValues] = useState(initialValues);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedGuarantees, setSelectedGuarantees] = useState([]);

  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);

  const [pageTitle, setPageTitle] = useState("افزودن محصول جدید"); 
  useEffect(() => {
    if (location.state?.pageTitle) {
      setPageTitle(location.state.pageTitle); 
    }
  }, [location.state]);

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
    if (res.status === 200 && Array.isArray(res.data.data)) {
      setBrands(
        res.data.data.map((d) => {
          return { id: d.id, value: d.original_name };
        })
      );
    } else {
      setBrands([]);
    }
  };

  const getAllColors = async () => {
    const res = await getAllColorsService();
    if (res.status === 200 && Array.isArray(res.data.data)) {
      setColors(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    } else {
      setColors([]);
    }
  };

  const getAllGuarantees = async () => {
    const res = await getAllGuaranteesService();
    if (res.status === 200 && Array.isArray(res.data.data)) {
      setGuarantees(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    } else {
      setGuarantees([]);
    }
  };

  const setInitialSelectValues = () => {
    if (productToEdit) {
      setSelectedCategories(
        Array.isArray(productToEdit.categories)
          ? productToEdit.categories.map((c) => ({ id: c.id, value: c.title }))
          : []
      );
      setSelectedColor(
        Array.isArray(productToEdit.colors)
          ? productToEdit.colors.map((c) => ({ id: c.id, value: c.title }))
          : []
      );
      setSelectedGuarantees(
        Array.isArray(productToEdit.guarantees)
          ? productToEdit.guarantees.map((c) => ({ id: c.id, value: c.title }))
          : []
      );
    }
  };

  useEffect(() => {
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
    setInitialSelectValues();

    for (const key in productToEdit) {
      if (productToEdit[key] === null || productToEdit[key] === undefined) {
        productToEdit[key] = "";
      }
    }

    setReInitialValues({
      ...initialValues,
      ...productToEdit,
      category_ids: productToEdit.categories
        ? productToEdit.categories.map((c) => c.id).join("_")
        : "",
      color_ids: productToEdit.color
        ? productToEdit.color.map((c) => c.id).join("_")
        : "",
      guarantees_ids: productToEdit.guarantees
        ? productToEdit.guarantees.map((c) => c.id).join("_")
        : "",
    });
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
    <>
      <Formik
        initialValues={reInitialValues || initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions, productToEdit)}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <div>
              <div className="flex justify-end">
                <PrevPageButton />
              </div>
              <Form className="w-3/4 lg:w-3/5 my-20 mx-auto">
                <FormikControl
                  control="select"
                  options={parentCategories}
                  name="parentCats"
                  label="دسته والد"
                  firstItem="دسته مورد نظر را انتخاب کنید"
                  handleOnchange={handleSetMainCategories}
                  value={formik.values.parentCats || ""}
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
                  initialItems={selectedCategories}
                  value={formik.values.category_ids || ""}
                />

                <FormikControl
                  control="input"
                  name="title"
                  type="text"
                  label="عنوان *"
                  firstItem="فقط از حروف و اعداد استفاده کنید"
                  value={formik.values.title || ""}
                />

                <FormikControl
                  control="input"
                  name="price"
                  type="number"
                  label="قیمت *"
                  firstItem="(تومان) فقط از اعداد استفاده کنید"
                  value={formik.values.price || ""}
                />

                <FormikControl
                  control="input"
                  name="weight"
                  type="number"
                  label="وزن"
                  firstItem="(گرم) فقط از اعداد استفاده کنید"
                  value={formik.values.weight || ""}
                />

                <FormikControl
                  control="select"
                  options={brands}
                  name="brand_id"
                  label="برند"
                  firstItem="برند مورد نظر را انتخاب کنید"
                  value={formik.values.brand_id || ""}
                />

                <FormikControl
                  control="searchableSelect"
                  options={colors}
                  name="color_ids"
                  label="رنگ"
                  firstItem="رنگ مورد نظر را انتخاب کنید"
                  resultType="string"
                  initialItems={selectedColor}
                  value={formik.values.color_ids || []}
                />

                <FormikControl
                  control="searchableSelect"
                  options={guarantees}
                  name="guarantee_ids"
                  label="گارانتی"
                  firstItem="گارانتی مورد نظر را انتخاب کنید"
                  resultType="string"
                  value={formik.values.guarantee_ids || []}
                  initialItems={selectedGuarantees}
                />

                <FormikControl
                  control="ckeditor"
                  name="descriptions"
                  label="توضیحات"
                  firstItem="فقط از حروف و اعداد استفاده شود"
                  value={formik.values.descriptions || []}
                />

                <FormikControl
                  control="textarea"
                  name="short_descriptions"
                  label="توضیحات کوتاه"
                  firstItem="فقط از حروف و اعداد استفاده شود"
                  value={formik.values.short_descriptions || []}
                />

                <FormikControl
                  control="textarea"
                  name="cart_descriptions"
                  label="توضیحات سبد"
                  firstItem="فقط از حروف و اعداد استفاده شود"
                  value={formik.values.cart_descriptions || []}
                />

                {!productToEdit ? (
                  <FormikControl
                    control="file"
                    name="image"
                    label="تصویر"
                    firstItem="تصویر"
                    value={formik.values.image || ""}
                  />
                ) : null}

                <FormikControl
                  control="input"
                  type="text"
                  name="alt_image"
                  label=" تصویر"
                  firstItem="نوضیح تصویر"
                  value={formik.values.alt_image || ""}
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="keywords"
                  label="کلمات کلیدی"
                  firstItem="مثلا: تست1 - تست2 - تست3"
                  value={formik.values.keywords || ""}
                />

                <FormikControl
                  control="input"
                  type="number"
                  name="stock"
                  label="موجودی"
                  firstItem="فقط از اعداد استفاده کنید (عدد)"
                  value={formik.values.stock || ""}
                />

                <FormikControl
                  control="input"
                  type="number"
                  name="discount"
                  label="درصد تخفیف"
                  firstItem="فقط از اعداد استفاده کنید (درصد)"
                  value={formik.values.discount || ""}
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
    </>
  );
};

export default AddProduct;
