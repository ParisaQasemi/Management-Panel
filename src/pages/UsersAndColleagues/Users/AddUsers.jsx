import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import ModalContent from "../../../component/Modal/ModalContent";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { initialValues, onSubmit, validationSchema } from "./core";

const AddUser = () => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <ModalContent>
      <ModalContentHeader
        title={"افزودن کاربر"}
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
          onSubmit={(values, actions) => onSubmit(values, actions)}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form className="w-3/5 my-20 mx-auto ">
                <>
                  <FormikControl
                    control="input"
                    type="text"
                    name="user_name"
                    label="نام کاربری"
                    placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="first_name"
                    label="نام "
                    placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="last_name"
                    label="نام خانوادگی"
                    placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="phone"
                    label="شماره موبایل"
                    placeholder="فقط از اعداد استفاده کنید"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="email"
                    label="ایمیل"
                    placeholder="فقط فرمت ایمیل (email@yourhost.com)"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="password"
                    label="کلمه عبور"
                    placeholder="فقط از حروف فارسی و لاتین استفاده کنید"
                  />

                  <FormikControl
                    control="date"
                    formik={formik}
                    name="birth_date"
                    label="تاریخ تولد"
                    initialDate={undefined}
                    yearsLimit={{ from: 100, to: -10 }}
                  />

                  <FormikControl
                    control="select"
                    options={[
                      { id: 1, value: "آقا" },
                      { id: 0, value: "خانم" },
                    ]}
                    name="gender"
                    label="جنسیت"
                  />

                  <FormikControl
                    label="نقش ها"
                    control="searchableSelect"
                    options={[{ id: 1, value: "تست" }]}
                    name="roles_id"
                    firstItem="لطفا نقش های مورد نظر را انتخاب کنید"
                    resultType="array"
                    initialItems={[]}
                  />

                  <div className="flex justify-center my-12">
                    <SubmitButton />
                  </div>
                </>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalContent>
  );
};

export default AddUser;
