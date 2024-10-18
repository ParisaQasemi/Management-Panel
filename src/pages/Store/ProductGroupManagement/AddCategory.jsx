import React, { useEffect, useState } from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import { Alert } from "../../../utils/alert";
import { createNewCategoryService, getCategoriesService } from "../../../services/category";

const initialValues = {
  parent_id: "",
  title: "",
  description: "",
  image: null,
  is_active: true,
  show_in_menu: true,
};

const onSubmit = async (values, actions) => {
  try {
    values= {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    }
    const res = await createNewCategoryService(values)
    console.log(res);
    
    if (res.status === 201) {
      Alert('رکورد ثبت شد', res.data.message, 'success')
      actions.resetForm()
      setForceRender(prev => prev + 1);
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(values)
}

const validationSchema = Yup.object({
  parent_id: Yup.number(),
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  description: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),
  // image: Yup.mixed()
  //   .required("آپلود تصویر اجباری است")
  //   .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
  //     !value ? true : value.size < 500 * 1024
  //   )
  //   .test("format", "فرمت فایل باید jpg باشد", (value) =>
  //     !value ? true : value.type === "image/jpeg"
  //   ),
  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
});

const AddCategory = ({setForceRender}) => {
  const [parents, setParents] = useState([]);
  const handleGetParentsCategorty = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status === 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map(p => {
            return { id:p.id , value:p.title };
          })
        )
      }
    } catch (errors) {
      Alert("مشکل !", "متاسفانه دسته بندی های والد دریافت نشد", "warning");
    }
  };
  useEffect(() => {
    handleGetParentsCategorty();
  }, []);

  return (
    <ModalContent>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions)=> onSubmit(values, actions, setForceRender)}
        validationSchema={validationSchema}
      >
        {/* Form Inputs */}
        <Form className="w-3/5 mt-20 mx-auto ">
          {parents.length > 0 ? (
            <FormikControl
              control="select"
              options={parents}
              name="parent_id"
              label="دسته والد"
            />
          ) : null}

          <FormikControl
            control="input"
            type="text"
            name="title"
            label="عنوان دسته"
            placeholder="عنوان دسته"
          />

          <FormikControl
            control="textarea"
            name="description"
            label="توضیحات"
            placeholder="توضیحات"
          />

          <FormikControl control="file" name="image" label="تصویر" />

          <div className="flex justify-around">
            <FormikControl
              control="switch"
              name="is_active"
              label="وضعیت فعال"
            />
            <FormikControl
              control="switch"
              name="show_in_menu"
              label="نمایش در منو"
            />
          </div>

          <div className="flex justify-center mb-24 ">
            <button className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]">
              ذخیره
            </button>
          </div>
        </Form>
      </Formik>
    </ModalContent>
  );
};

export default AddCategory;
