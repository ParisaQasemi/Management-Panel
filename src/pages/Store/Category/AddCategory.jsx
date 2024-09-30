import React, { useState } from "react";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      file,
      status,
    });
  };

  return (
    <div className="min-h-screen ">
      <h2 className="text-xl p-2 text-start font-bold mb-12 text-white">
        افزودن دسته محصولات
      </h2>

      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit}>
          {/* دسته والد */}
          <div className=" mb-6">
            <label className="inline-block text-white">دسته والد</label>
            <input
              type="text"
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="بدون والد"
            />
          </div>
          {/* عنوان دسته */}
          <div className=" mb-6">
            <label className="inline-block text-white ">عنوان دسته</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="عنوان"
            />
          </div>
          {/* توضیحات */}
          <div className=" mb-6">
            <label className="inline-block text-white">توضیحات</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="توضیحات"
            ></textarea>
          </div>
          {/* تصویر */}
          <div className=" mb-6">
            <label className="inline-block text-white ">تصویر</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent"
            />
          </div>
          {/* وضعیت */}
          <div className=" mb-6 items-center">
            <label className="text-white ml-2 text-sm">وضعیت فعال</label>
            <input
              type="checkbox"
              checked={status}
              onChange={() => setStatus(!status)}
              className="toggle-checkbox"
            />
          </div>
          {/* دکمه ذخیره */}
          <button
            type="submit"
            className="w-full bg-[#0075ff] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-5"
          >
            ذخیره
          </button>
          <button
            type="submit"
            className="w-full bg-red-600 text-white px-4 py-2 my-2 rounded-lg hover:bg-red-700 transition"
          >
            انصراف
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
