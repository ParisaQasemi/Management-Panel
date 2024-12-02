import * as Yup from "yup";
import { addNewRolesService } from "../../../services/users";
import { Alert } from "../../../utils/alert";

export const initialValues = {
  title: "",
  description: "",
  permissions_id: [],
};

export const onSubmit = async (values, actions, setData) => {
  const res = await addNewRolesService(values);
  if (res.status === 201) {
    Alert("انجام شد", res.data.message, "success");
    setData((old) => [...old, res.data.data]);
  }
};

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  description: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  permissions_id: Yup.array().min(1, "حد اقل یک مورد انتخاب کنید"),
});
