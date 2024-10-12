import { FastField, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import AuthFormikControl from "../../component/authForm/AuthFormikControl";
import axios from "axios";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

const onSubmit = (values) => {
  axios
    .post("https://ecomadminapi.azhadev.ir/api/auth/login", {
      ...values,
      remember: values.remember ? 1 : 0
    })
    .then((res) => {
      console.log(res);
    });
};

const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "فقظ از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
  return (
    <div
      className="bg-gradient-to-bl from-[#181682] via-[#0d081d] text-white h-screen
     flex items-center justify-center"
    >
      <div className="flex w-full">
        {/* Left Section */}
        <div
          className="w-1/2 h-screen flex items-center justify-center rounded-l-3xl
          bg-[url('/src/assets/img/ImageLogin.png')]
          bg-cover bg-center "
        >
          <div className="text-center">
            <h3 className="text-gray-200 text-2xl font-bold py-2">خوش آمدید</h3>
            <h2 className="text-3xl font-bold mb-3 ">فروشگاه پنل مدیریت</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-screen p-10 rounded-lg flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-xl text-white font-bold mb-1">
              از دیدنت خوشحالم !
            </h2>
            <p className="text-gray-400 text-md mb-20">
              برای ورود شماره موبایل و رمز عبور خود را وارد کنید
            </p>

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                console.log(formik);
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
                        <button className="w-full h-10 my-6 rounded-xl text-sm text-white bg-[#0075ff]">
                          ورود
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
