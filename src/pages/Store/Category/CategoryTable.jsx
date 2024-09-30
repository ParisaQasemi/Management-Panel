import React from "react";
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from "react-icons/fa";

const CategoryTable = () => {
  const data = [
    { id: 1, title: "دسته شماره فلان", status: "فعال" },
    { id: 2, title: "دسته شماره فلان", status: "فعال" },
    { id: 3, title: "دسته شماره فلان", status: "فعال" },
    { id: 4, title: "دسته شماره فلان", status: "فعال" },
  ];

  return (
    <div className="w-full my-3 bg-gradient-custom backdrop-blur-[100px] p-2 lg:p-6 rounded-xl shadow-lg">
      {/* جدول */}
      <table className="w-full table-auto">
        <thead>
          <tr className="font-bold text-right">
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">عنوان</th>
            <th className="p-3 border-b">وضعیت</th>
            <th className="p-3 border-b">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-[#5d88b8] text-sm">
              <td className="p-3 border-b text-start">{item.id}</td>
              <td className="p-3 border-b text-start">{item.title}</td>
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

export default CategoryTable;
