import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

const Billing = () => {
  return (
    <div>
      <div className="flex gap-3 my-6 h-96  ">
        <div className="w-2/3 h-full  ">
          <div className="flex gap-3">
            <div className="w-1/2 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg"></div>
            <div className="w-1/2 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg"></div>
          </div>
          <div className="w-full bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg      mt-3"></div>
        </div>

        <div className="w-1/3 h-full bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
          <h3> </h3>
        </div>
      </div>

      <div className="flex gap-3 my-6 ">
        <div className="w-3/5 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold py-1 mb-5">اطلاعات صورت حساب</h3>
          <div className="flex w-full h-auto rounded-lg bg-gradient-to-l from-blue-900 to-gray-900 my-6 p-5">
            <div className="w-3/4">
              <h4 className="mb-2">پریسا قاسمی</h4>
              <p className="text-sm text-gray-400">نام شرکت: گوگل </p>
              <p className="text-sm text-gray-400">
                آدرس ایمیل: Parisa.qasemi.1998@gmail.com{" "}
              </p>
              <p className="text-sm text-gray-400">
                شماره مالیات بر ارزش افزوده: FRB1235476{" "}
              </p>
            </div>
            <div className="flex justify-center w-1/4">
              <button className="flex text-gray-400 mx-2">
                <MdEdit className="w-4 h-4" />
                <span className="text-sm mx-1">ویرایش</span>
              </button>

              <button className="flex text-red-600 mx-2">
                <MdDelete className="w-4 h-4" />
                <span className="text-sm mx-1">حذف</span>
              </button>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-lg bg-gradient-to-l from-blue-900 to-gray-900 my-6 p-5">
            <div className="w-3/4">
              <h4 className="mb-2">پریسا قاسمی</h4>
              <p className="text-sm text-gray-400">نام شرکت: گوگل </p>
              <p className="text-sm text-gray-400">
                آدرس ایمیل: Parisa.qasemi.1998@gmail.com{" "}
              </p>
              <p className="text-sm text-gray-400">
                شماره مالیات بر ارزش افزوده: FRB1235476{" "}
              </p>
            </div>
            <div className="flex justify-center w-1/4">
              <button className="flex text-gray-400 mx-2">
                <MdEdit className="w-4 h-4" />
                <span className="text-sm mx-1">ویرایش</span>
              </button>

              <button className="flex text-red-600 mx-2">
                <MdDelete className="w-4 h-4" />
                <span className="text-sm mx-1">حذف</span>
              </button>
            </div>
          </div>
          <div className="flex w-full h-auto rounded-lg bg-gradient-to-l from-blue-900 to-gray-900 my-6 p-5">
            <div className="w-3/4">
              <h4 className="mb-2">پریسا قاسمی</h4>
              <p className="text-sm text-gray-400">نام شرکت: گوگل </p>
              <p className="text-sm text-gray-400">
                آدرس ایمیل: Parisa.qasemi.1998@gmail.com{" "}
              </p>
              <p className="text-sm text-gray-400">
                شماره مالیات بر ارزش افزوده: FRB1235476{" "}
              </p>
            </div>
            <div className="flex justify-center w-1/4">
              <button className="flex text-gray-400 mx-2">
                <MdEdit className="w-4 h-4" />
                <span className="text-sm mx-1">ویرایش</span>
              </button>

              <button className="flex text-red-600 mx-2">
                <MdDelete className="w-4 h-4" />
                <span className="text-sm mx-1">حذف</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/5 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
          <div className="flex justify-between mb-5">
            <h3 className="font-semibold "> معامله ها</h3>
            <p className="flex text-gray-400 ">
              <span className="text-sm">22 - خرداد - 1402</span>
              <MdDateRange className="w-4 h-4 ms-2" />
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-sm text-gray-500 mb-3">تازه ها</h3>
            <div></div>
          </div>
          <div className="my-6">
            <h3 className="text-sm text-gray-500 mb-3">دیروز</h3>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
