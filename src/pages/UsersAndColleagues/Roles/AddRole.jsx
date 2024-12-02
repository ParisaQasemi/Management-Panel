import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import SubmitButton from "../../../component/form/SubmitButton";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import ModalContent from "../../../component/Modal/ModalContent";
import { getAllPermissionsService } from "../../../services/users";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddRole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roleToEdit = location.state?.roleToEdit;
  const { setData } = useOutletContext();

  const [permissions, setPermissions] = useState([]);

  const handleGetAllPermissions = async () => {
    const res = await getAllPermissionsService();
    if (res.status === 200) {
      setPermissions(
        res.data.data.map((p) => {
          return { id: p.id, title: p.description };
        })
      );
    }
  };

  useEffect(() => {
    handleGetAllPermissions();
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <ModalContent size="full" className="">
      <ModalContentHeader
        title={roleToEdit ? "ویرایش نقش" : "افزودن نقش"}
        closeFunction={() => navigate(-1)}
      />
      <div>
        <button onClick={handleCloseModal}>
          <CloseModalBtn />
        </button>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(valuse, actions) => onSubmit(valuse, actions, setData)}
          validationSchema={validationSchema}
        >
          <Form className="w-3/5 my-20 mx-auto ">
            <FormikControl
              control="input"
              type="text"
              name="title"
              label="عنوان نقش"
              placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
            />

            <FormikControl
              control="textarea"
              name="description"
              label="توضیحات نقش"
              placeholder="فقط از حروف لاتین و اعداداستفاده کنید"
            />

            <FormikControl
              control="checkbox"
              name="permissions_id"
              label="دسترسی ها"
              options={permissions}
            />

            <div className="flex justify-center my-5">
              <SubmitButton className="my-5" />
            </div>
          </Form>
        </Formik>
      </div>
    </ModalContent>
  );
};

export default AddRole;
