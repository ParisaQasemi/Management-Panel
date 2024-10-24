import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PaginationTable from "../../../../component/Pagination/PaginationTable";
import PrevPageButton from "../../../../component/authForm/PrevPageButton";
import {
  AddCategoryAttrsService,
  getCategoryAttrsService,
} from "../../../../services/categoryAttr";
import { Form, Formik } from "formik";
import FormikControl from "../../../../component/form/FormikControl";
import * as Yup from "yup";
import SubmitButton from "../../../../component/form/SubmitButton";
import { Alert } from "../../../../utils/alert";

const AddAttributes = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
  ];

  const additionField = [
    {
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <AttrAction rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(location.state.categoryData.id);
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategoryAttrs();
    console.log(data); // برای بررسی داده‌ها
  }, []);

  const initialValues = {
    title: "",
    unit: "",
    in_filter: true,
  };

  const onSubmit = async (values, actions, catId, setData) => {
    try {
      values = {
        ...values,
        in_filter: values.in_filter ? 1 : 0,
      };
      const res = await AddCategoryAttrsService(catId, values);
      if (res.status == 201) {
        Alert("انجام شد", res.data.message, "success");
        setData((oldData) => [...oldData, res.data.data]);
      }
    } catch (error) {}
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    unit: Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    is_filter: Yup.boolean(),
  });

  return (
    <>
      <h3 className="font-bold text-xl text-center">
        مدیریت ویژگی های دسته بندی
      </h3>
      <h6 className="text-center my-3">
        ویژگی:
        <span className="text-blue-400">
          {" "}
          {location.state.categoryData.title}{" "}
        </span>
      </h6>

      <div className="p-6 ">
        {/* <!-- بخش بالای فرم --> */}
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, location.state.categoryData.id, setData)
          }
          validationSchema={validationSchema}
        >
          {/* {({ isSubmitting }) => ( */}
          <Form>
            <div className="flex items-start justify-between mb-2 border-b-[1px] border-gray-500">
              <FormikControl
                control="input"
                type="text"
                name="title"
                label="عنوان :"
                placeholder="عنوان ویژگی جدید"
              />

              <FormikControl
                control="input"
                type="text"
                name="unit"
                label="واحد :"
                placeholder="واحد ویژگی جدید"
              />

              <div className="flex items-start justify-between w-80">
                {/* <span className="ml-2 text-sm">نمایش در فیلتر</span>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 focus:ring-green-500"
                /> */}
                <FormikControl
                  control="switch"
                  name="in_filter"
                  label=" نمایش در فیلتر "
                />

                <SubmitButton />
              </div>
            </div>
          </Form>
        </Formik>

        <div className="flex justify-end">
          <PrevPageButton />
        </div>

        {/* <!-- جدول --> */}
        <PaginationTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          numOfPage={5}
          searchParams={searchParams}
          loading={loading}
        />
      </div>
    </>
  );
};

export default AddAttributes;
