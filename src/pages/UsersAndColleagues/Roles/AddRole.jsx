import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import SubmitButton from "../../../component/form/SubmitButton";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/form/FormikControl";
import ModalContent from "../../../component/Modal/ModalContent";

import { initialValues, onSubmit, validationSchema } from "./core";
import { getAllPermissionsService, getSinglrRoleService } from "../../../services/users";

const AddRole = () => {
  const { setData } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const roleIdToEdit = location.state?.roleIdToEdit;
  const editType = location.state?.editType;

  const [permissions, setPermissions] = useState([]);
  const [roleToEdit, setRoleToEdit] = useState(null);
  const [reInitialValues, setReInitialValues] = useState(null);

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

  const handleGetRoleToEditData = async () => {
    const res = await getSinglrRoleService(roleIdToEdit);
    if (res.status === 200) {
      const role = res.data.data;
      setRoleToEdit(role);
      editType === "role"
        ? setReInitialValues({
            title: role.title,
            description: role.description,
          })
        : setReInitialValues({
            permissions_id: role.permissions.map((p) => "" + p.id),
            editPermissions: true,
          });
    }
  };
  useEffect(() => {
    editType !== "role" && handleGetAllPermissions();
    roleIdToEdit && handleGetRoleToEditData();
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <ModalContent size={editType == 'role' ? 'small' : 'full'} >
      <ModalContentHeader
        title={
          editType === "role"
            ? "ویرایش نقش"
            : editType === "permissions"
            ? 'ویرایش مجوزهای دسترسی :' + roleToEdit?.title || ''
            : "افزودن نقش کاربر"
        }
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
          onSubmit={(valuse, actions) =>
            onSubmit(valuse, actions, setData, roleIdToEdit, editType)
          }
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form className="w-3/4 lg:w-3/5 my-20 mx-auto ">
            {editType !== "permissions" ? (
              <>
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
              </>
            ) : null}

            {editType !== "role" ? (
              <FormikControl
                control="checkbox"
                name="permissions_id"
                label="دسترسی ها"
                options={permissions}
              />
            ) : null}

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
