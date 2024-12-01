import { FastField, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import AuthFormikControl from "../../component/authForm/AuthFormikControl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../utils/alert";
import httpService from "../../services/httpService";
import { loginService } from "../../services/auth";


const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

const onSubmit = async (values, submitMethods, navigate) => {
  try {
    const res = await loginService(values)
    if (res.status == 200) {
      localStorage.setItem("loginToken", JSON.stringify(res.data));
      navigate("/");
    } else {
      Alert(" متاسفم! ", res.data.message, "error");
    }
    submitMethods.setSubmitting(false);
  } catch (error) {
    submitMethods.setSubmitting(false);
    Alert("متاسفم", "متاسفم. مشکلی از سمت سرور رخ داده", "error");
  }
}


const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "فقظ از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" h-screen flex items-center justify-center
      bg-gradient-to-bl from-[#181682] via-[#0d081d] text-white "
    >
      <div className="flex w-full">
        {/* Left Section */}
        <div
          className="hidden lg:flex w-1/2 h-screen items-center justify-center rounded-l-3xl
          bg-[url('/src/assets/img/ImageLogin.png')]
          bg-cover bg-center "
        >
          <div className="text-center">
            <h3 className="text-gray-200 text-2xl font-bold py-2">خوش آمدید</h3>
            <h2 className="text-3xl font-bold mb-3 ">فروشگاه پنل مدیریت</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2  h-screen p-10 rounded-lg flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-xl text-white font-bold mb-1">
              از دیدنت خوشحالم :)
            </h2>
            <p className="text-gray-400 text-md mb-20">
              برای ورود شماره موبایل و رمز عبور خود را وارد کنید
            </p>

            <Formik
              initialValues={initialValues}
              onSubmit={(values, submitMethods) =>
                onSubmit(values, submitMethods, navigate)
              }
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <div>
                    <Form>
                      <AuthFormikControl
                        formik={formik}
                        control="input"
                        type="text"
                        name="phone"
                        label="شماره موبایل"
                        icon=""
                      />

                      <AuthFormikControl
                        formik={formik}
                        control="input"
                        type="password"
                        name="password"
                        label="رمزعبور"
                        icon=""
                      />

                      <AuthFormikControl
                        control="switch"
                        name="remember"
                        label="مرا بخاطر بسپارید"
                      />

                      <div>
                        <button
                          disabled={formik.isSubmitting}
                          className="w-full h-10 my-6 rounded-xl text-sm text-white bg-[#0075ff]"
                        >
                          {formik.isSubmitting ? "... لطفا صبر کنید" : "ورود"}
                        </button>
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
