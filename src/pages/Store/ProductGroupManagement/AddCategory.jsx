import React from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import { IoMdClose } from "react-icons/io";

const AddCategory = () => {
  return (
    <ModalContent>
      <div>
        {/* Header */}
        <div
          className="flex justify-between items-center top-0 h-20 p-6 shadow-md shadow-gray-400 rounded-b-xl "
        >
          <h2 className="text-2xl font-bold text-white">افزودن دسته محصولات</h2>
          <IoMdClose className="text-2xl font-bold text-white" />
        </div>

        {/* Form Inputs */}
        <form className="w-3/5 mt-20 mx-auto ">
          <div className="mb-10">
            <label className="block text-white text-sm font-bold">
              دسته والد
            </label>
            <select
              className="w-full p-1 border-b-[1px] border-white text-white 
            focus:outline-none bg-transparent"
            >
              <option>بدون والد</option>
            </select>
          </div>

          <div className="mb-10">
            <label className="block text-white text-sm font-bold">عنوان</label>
            <input
              type="text"
              className="w-full p-1 border-b-[1px] border-white text-white 
              focus:outline-none bg-transparent"
            />
          </div>

          <div className="mb-10">
            <label className="block text-white text-sm font-bold">
              توضیحات
            </label>
            <textarea
              className="w-full p-1 border-b-[1px] border-white text-white 
            focus:outline-none bg-transparent"
            ></textarea>
          </div>

          <div className="mb-10">
            <label className="block text-white text-sm font-bold">تصویر</label>
            <input
              type="file"
              className="w-full p-1 border-b-[1px] border-white text-white 
              focus:outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center mb-10">
            <label className="block text-white text-sm font-bold">
              وضعیت فعال
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 mx-1 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="ml-2 text-sm font-medium text-white">فعال</span>
            </label>
          </div>

          <div className="flex justify-center mb-10">
            <button
              className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-10 
            rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]"
            >
              ذخیره
            </button>
          </div>
        </form>

        {/* Footer */}
        <div
          className="fixed w-full z-10 flex justify-end items-center bottom-0 h-20 p-6 shadow-md shadow-gray-400 rounded-t-xl "
        >
          <button
            className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-10 
            rounded-lg focus:outline-none focus:ring focus:border-red-600"
          >
            انصراف
          </button>
        </div>
      </div>
    </ModalContent>
  );
};

export default AddCategory;
