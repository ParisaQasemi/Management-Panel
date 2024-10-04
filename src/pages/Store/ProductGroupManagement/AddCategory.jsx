import React from "react";
import ModalContent from "../../../component/Modal/ModalContent";
import ModalContentHeader from "../../../component/Modal/ModalContentHeader";
import ModalContentFooter from "../../../component/Modal/ModalContentFooter";

const AddCategory = () => {
  return (
    <ModalContent>
      <div>
        {/* Header */}
          <ModalContentHeader />

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

          <div className="flex justify-center items-center mb-10">
            <label className="block text-white text-sm font-bold">
              وضعیت فعال
            </label>
            <label className="flex cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-8 h-5 mx-1 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-center mb-24 ">
            <button
              className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-10 
            rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]"
            >
              ذخیره
            </button>
          </div>
        </form>

        {/* Footer */}
          <ModalContentFooter />

      </div>
    </ModalContent>
  );
};

export default AddCategory;
