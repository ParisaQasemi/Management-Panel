import { useState } from "react";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [warranty, setWarranty] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-xl p-2 text-start font-bold mb-12 text-white">
        افزودن محصول جدید
      </h2>

      <div className="flex items-center justify-center min-h-full ">
        <form onSubmit={handleSubmit}>
          {/* دسته */}
          <div className=" mb-6">
            <label className="inline-block text-white">دسته</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
            >
              <option value="">انتخاب دسته محصول</option>
              <option value="category1">دسته فلان</option>
            </select>
          </div>
          {/* عنوان دسته */}
          <div className=" mb-6">
            <label className="inline-block text-white ">عنوان دسته</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="عنوان محصول"
            />
          </div>
          {/* قیمت */}
          <div className="mb-6">
            <label className="inline-block text-white ">قیمت</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="عنوان محصول"
            />
          </div>
          {/* وزن */}
          <div className="mb-6">
            <label className="inline-block text-white">وزن</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="وزن محصول (کیلوگرم)"
            />
          </div>
          {/* برند */}
          <div className="mb-6">
            <label className="inline-block text-white">برند</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="نام برند را وارد کنید"
            />
          </div>
          {/* رنگ */}
          <div className="mb-6">
            <label className="inline-block text-white">رنگ</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="نام رنگ را وارد کنید"
            />
          </div>
          {/* گارانتی */}
          <div className="mb-6">
            <label className="inline-block text-white">گارانتی</label>
            <input
              type="text"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
              className="w-full p-2 border-b-[1px] border-gray-500 focus:outline-none bg-transparent text-sm"
              placeholder="نام گارانتی را وارد کنید"
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
          {/* دکمه ذخیره */}
          <button
            type="submit"
            className="w-full bg-[#0075ff] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-5"
          >
            ذخیره
          </button>
          <button
            type="submit"
            className="w-full my-2 bg-red-600 text-white px-4 py-2 my rounded-lg hover:bg-red-700 transition"
          >
            انصراف
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
