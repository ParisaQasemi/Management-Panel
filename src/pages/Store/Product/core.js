import * as Yup from "yup";
import { createNewProductService, editProductService } from "../../../services/products";
import { Alert } from "../../../utils/alert";

export const initialValues = {
  category_ids: "",
  title: "",
  price: "",
  weight: "",
  brand_id: "",
  color_ids: "",
  guarantee_ids: "",
  descriptions: "",
  short_descriptions: "",
  cart_descriptions: "",
  image: null,
  alt_image: "",
  keywords: "",
  stock: "",
  discount: "",
};

export const onSubmit = async (values, actions, productToEdit) => {
  if(productToEdit){
    const res = await editProductService(productToEdit.id ,values);
    if (res.status === 200) {
      Alert("انجام شد", res.data.message, "success");
    }
  } else {
    const res = await createNewProductService(values);
  if (res.status === 201) {
    Alert("انجام شد", res.data.message, "success");
  }
  }
};

export const validationSchema = Yup.object({
  category_ids: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9\s-]+$/, "فقط از اعداد و خط تیره استفاده شود"),
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  price: Yup.number().required("لطفا این قسمت را پر کنید"),
  weight: Yup.number().nullable(),
  brand_id: Yup.number().nullable(),
  color_ids: Yup.string().matches(
    /[0-9\s-]+$/,
    "فقط از اعداد و خط تیره استفاده شود"
  ),
  guarntee_ids: Yup.string().matches(
    /^[0-9\s-]+$/,
    'فقط از اعداد و خط تیره استفاده شود"'
  ),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-<>/:.$?&]+$/,
    'فقط از حروف و اعداد استفاده شود"'
  ),
  short_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    'فقط از حروف و اعداد استفاده شود"'
  ),
  cart_descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    'فقط از حروف و اعداد استفاده شود"'
  ),
  image: Yup.mixed()
    .test("filesize", "حجم فایل نمیتوانید بیشتر 500 کیلوبایت باشد", (value) =>
      value ? value.size <= 500 * 1024 : true
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      value ? value.type === "image/jpeg" || value.type === "image/png" : true
    ),

  alt_image: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    'فقط از حروف و اعداد استفاده شود"'
  ),
  keywords: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
    'فقط از حروف و اعداد استفاده شود"'
  ),
  stock: Yup.number().nullable(),
  discount: Yup.number().nullable(),
});
