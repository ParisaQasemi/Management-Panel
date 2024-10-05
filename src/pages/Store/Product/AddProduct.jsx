import React from "react";
import ModalContent from "../../../component/Modal/ModalContent";

const AddProduct = () => {
  return (
    <ModalContent>
      {/* Form Inputs */}
      <form className="w-3/5 mt-20 mx-auto ">
        <div className="mb-10">
          <label className="block text-white text-sm font-bold">دسته</label>
          <select className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent">
            <option>انتخاب دسته محصول</option>
            <option>دسته 1</option>
            <option>دسته 2</option>
          </select>
          <span className="text-red-500 ml-2">×</span>
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">
            عنوان محصول
          </label>
          <input
            type="text"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="عنوان محصول را وارد کنید"
          />
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">قیمت</label>
          <input
            type="number"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="قیمت را وارد کنید"
          />
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">
            وزن محصول (کیلوگرم)
          </label>
          <input
            type="number"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="وزن را وارد کنید"
          />
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">برند</label>
          <input
            type="text"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="نام برند را وارد کنید"
          />
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">رنگ</label>
          <input
            type="text"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="نام رنگ را وارد کنید"
          />
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">گارانتی</label>
          <input
            type="text"
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="نام گارانتی را وارد کنید"
          />
          <span className="text-red-500 ml-2">×</span>
        </div>

        <div className="mb-10">
          <label className="block text-white text-sm font-bold">توضیحات</label>
          <textarea
            className="w-full p-1 border-b-[1px] border-white text-white focus:outline-none bg-transparent"
            placeholder="توضیحات را وارد کنید"
          />
        </div>

        <div className="flex justify-center mb-24">
          <button className="text-white bg-[#0075ff] hover:bg-blue-600 font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring focus:border-[#0075ff]">
            ذخیره
          </button>
        </div>
      </form>
    </ModalContent>
  );
};

export default AddProduct;
