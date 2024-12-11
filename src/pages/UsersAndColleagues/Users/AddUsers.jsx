import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { Formik, Form } from "formik";
import ModalContent from "../../../component/Modal/ModalContent";
import FormikControl from "../../../component/form/FormikControl";
import SubmitButton from "../../../component/form/SubmitButton";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { initialValues, onSubmit, validationSchema } from "./core";
import {
  getAllRolesService,
  getSinglrUserService,
} from "../../../services/users";
import { convertDateToJalali } from "../../../utils/convertDate";

const AddUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userId = location.state?.userId;
  const { setData } = useOutletContext();

  const [userToEdit, setUserToEdit] = useState(null);
  const [allRoles, setAllRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);

  const handleGetAllRoles = async () => {
    const res = await getAllRolesService();
    if (res.status === 200) {
      setAllRoles(
        res.data.data.map((r) => {
          return { id: r.id, value: r.title };
        })
      );
    }
  };

  const handleGetUserData = async () => {
    const res = await getSinglrUserService(userId);
    if (res.status === 200) {
      setUserToEdit(res.data.data);
    }
  };

  useEffect(() => {
    handleGetAllRoles();
    if (userId) {
      handleGetUserData();
    }
  }, []);

  // useEffect(() => {
  //   if (userToEdit) {
  //     setSelectedRoles(
  //       userToEdit.roles.map((r) => {
  //         return { id: r.id, value: r.title };
  //       })
  //     );
  //     const roles_id = userToEdit.roles.map((p) => p.id);
  //     setReInitialValues({
  //       birth_date: userToEdit.birth_date
  //         ? convertDateToJalali(userToEdit.birth_date, "jD / jM / jYYYY")
  //         : "",
  //       roles_id,
  //       password: "",
  //       user_name: userToEdit.user_name || "",
  //       first_name: userToEdit.first_name || "",
  //       last_name: userToEdit.last_name || "",
  //       phone: userToEdit.phone || "",
  //       email: userToEdit.email || "",
  //       gender: userToEdit.gender || 1,
  //       isEditing: true,
  //     });
  //   }
  // }, [userToEdit]);

  useEffect(() => {
    if (userToEdit) {
      setReInitialValues({
        ...initialValues, // استفاده از مقدار پیش‌فرض
        birth_date: userToEdit.birth_date
          ? convertDateToJalali(userToEdit.birth_date, "jD / jM / jYYYY")
          : "",
        roles_id: userToEdit.roles.map((p) => p.id),
        user_name: userToEdit.user_name || "",
        first_name: userToEdit.first_name || "",
        last_name: userToEdit.last_name || "",
        phone: userToEdit.phone || "",
        email: userToEdit.email || "",
        gender: userToEdit.gender || 1,
        isEditing: true, // تنظیم مقدار برای ویرایش
      });
    }
  }, [userToEdit]);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <ModalContent>
      <ModalContentHeader
        title={userToEdit ? "ویرایش کاربر" : "افزودن کاربر"}
        closeFunction={() => navigate(-1)}
      />
      <div>
        <button onClick={handleCloseModal}>
          <CloseModalBtn />
        </button>
      </div>

      <div>
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) =>
            onSubmit(values, actions, setData, userId)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="w-3/4 lg:w-3/5 my-20 mx-auto ">
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
                    options={allRoles}
                    name="roles_id"
                    firstItem="لطفا نقش های مورد نظر را انتخاب کنید"
                    resultType="array"
                    initialItems={selectedRoles}
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
