import * as Yup from "yup";
import {
  addNewGuaranteesService,
  editGuaranteesService,
} from "../../../services/guarantiese";
import { Alert } from "../../../utils/alert";

export const initialValues = {
  title: "",
  descriptions: "",
  length: "",
  length_unit: "",
};

export const onSubmit = async (values, actions, setData, guaranteeToEdit) => {
  if (guaranteeToEdit) {
    const res = await editGuaranteesService(guaranteeToEdit.id, values);
    if (res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
      setData((lastData) => {
        let newData = [...lastData];
        let index = newData.findIndex((d) => d.id == guaranteeToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
    }
  } else {
    const res = await addNewGuaranteesService(values);
    console.log(res);
    if (res.status === 201) {
      Alert("انجام شد", res.data.message, "success");
      setData((lastData) => [...lastData, res.data.data]);
    }
  }
};

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9\s@!%$?&]+$/, "فقط از اعداد و حروف لاتین استفاده شود"),
  length: Yup.number(),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف استفاده شود"
  ),
  length_unit: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف لاتین استفاده شود"
  ),
});
