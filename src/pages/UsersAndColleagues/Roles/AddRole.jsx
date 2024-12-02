import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitButton from "../../../component/form/SubmitButton";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import ModalContent from "../../../component/Modal/ModalContent";

const AddRole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const roleToEdit = location.state?.roleToEdit;

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
        <Formik>
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
