import React from "react";
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from "react-icons/fa";

const ProductTable = () => {
  const data = [
    {
      id: 1,
      category: "دسته شماره فلان",
      title: "محصول شماره 1",
      price: "20.000 تومان",
      status: "فعال",
      stock: "10",
      likes: "30",
    },
  ];
  
  return (
    <div className="w-full my-3 bg-gradient-custom backdrop-blur-[100px] p-2 lg:p-6 rounded-xl shadow-lg overflow-x-auto">
      {/* جدول */}
      <table className="min-w-full table-auto whitespace-nowrap">
        <thead>
          <tr className="font-bold text-right">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">دسته</th>
            <th className="p-3 border-b">عنوان</th>
            <th className="p-3 border-b">قیمت</th>
            <th className="p-3 border-b">موجودی</th>
            <th className="p-3 border-b">تعداد لایک</th>
            <th className="p-3 border-b">وضعیت</th>
            <th className="p-3 border-b">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-[#5d88b8] text-sm whitespace-nowrap">
              <td className="p-3 border-b text-start">{item.id}</td>
              <td className="p-3 border-b text-start">{item.category}</td>
              <td className="p-3 border-b text-start">{item.title}</td>
              <td className="p-3 border-b text-start">{item.price}</td>
              <td className="p-3 border-b text-start">{item.stock}</td>
              <td className="p-3 border-b text-start">{item.likes}</td>
              <td className="p-3 border-b text-start">{item.status}</td>
              <td className="p-3 border-b text-start">
                <button className="text-red-500 hover:text-red-600 mx-1">
                  <FaTrashAlt />
                </button>
                <button className="text-green-500 hover:text-green-600 mx-1">
                  <FaPlus />
                </button>
                <button className="text-yellow-500 hover:text-yellow-600 mx-1">
                  <FaEdit />
                </button>
                <button className="text-blue-500 hover:text-blue-600 mx-1">
                  <FaShareAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          1
        </button>
        <button className="px-3 py-1 mx-1 bg-[#0075ff] text-white rounded-lg">
          2
        </button>
        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          3
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
