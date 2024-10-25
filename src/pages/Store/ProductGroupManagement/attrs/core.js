import { AddCategoryAttrsService } from "../../../../services/categoryAttr";
import { Alert } from "../../../../utils/alert";
import * as Yup from "yup";


export const initialValues = {
    title: "",
    unit: "",
    in_filter: true,
  };

export const onSubmit = async (values, actions, catId, setData) => {
    try {
      values = {
        ...values,
        in_filter: values.in_filter ? 1 : 0,
      };
      const res = await AddCategoryAttrsService(catId, values);
      if (res.status == 201) {
        Alert("انجام شد", res.data.message, "success");
        setData((oldData) => [...oldData, res.data.data]);
        actions.resetForm()
      }
    } catch (error) {}
  };

export const validationSchema = Yup.object({
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