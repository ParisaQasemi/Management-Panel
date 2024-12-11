import React, { useContext, useEffect, useState } from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import { Alert } from "../../../utils/alert";
import {
  getCategoriesService,
  getSingleCategoryService,
} from "../../../services/category";
import SubmitButton from "../../../component/form/SubmitButton";
import { useParams } from "react-router-dom";
import { CategoryContext } from "@/context/categoryContext";
import { initialValues, onSubmit, validationSchema } from "./core";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";

const AddCategory = ({ setForceRender, children }) => {
  const params = useParams();
  const { editId, setEditId } = useContext(CategoryContext); //دکمه ویرایش
  const [editCategory, setEditCategory] = useState(null); // دکمه ویرایش
  const [parents, setParents] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);

  // دکمه ویرایش
  const handleGetSingleCategory = async () => {
    try {
      const res = await getSingleCategoryService(editId);
      console.log(res);
      if (res.status == 200) {
        const oldCategory = res.data.data;
        setEditCategory(oldCategory);
      }
    } catch (error) {
      Alert("مشکل !", "متاسفانه دسته مورد نظر دریافت نشد", "warning");
    }
  };
  useEffect(() => {
    if (editId) handleGetSingleCategory();
    else setEditCategory(null);
  }, [editId]);

  const handleGetParentsCategorty = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status == 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (errors) {
      Alert("مشکل !", "متاسفانه دسته بندی های والد دریافت نشد", "warning");
    }
  };
  useEffect(() => {
    handleGetParentsCategorty();
  }, []);

  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title,
        description: editCategory.description,
        image: null,
        is_active: editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      });
    } else if (params.categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(null);
    }
  }, [params.categoryId, editCategory]);

  return (
    <ModalContent size="full" editId={editId} editCategory={editCategory}>
      <ModalContentHeader 
      title={editCategory ? " ویرایش دسته محصولات" : " افزودن دسته محصولات"} />

      {children}
      <Formik
        initialValues={reInitialValues || initialValues}
        onSubmit={(values, actions) =>
          onSubmit(values, actions, setForceRender, editId)
        }
        validationSchema={validationSchema}
        enableReinitialize
      >
        {/* Form Inputs */}
        <Form className="w-3/4 lg:w-3/5 my-20 mx-auto ">
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

          {!editId ? (
            <FormikControl control="file" name="image" label="تصویر" />
          ) : null}

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
            <SubmitButton />
          </div>
        </Form>
      </Formik>
    </ModalContent>
  );
};

export default AddCategory;
