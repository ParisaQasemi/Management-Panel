import React from "react";
import { FaEdit, FaPlus, FaShareAlt, FaTrashAlt } from "react-icons/fa";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import PaginationTable from "../../../component/Pagination/PaginationTable";

const ProductTable = () => {
  const data = [
    {
      id: '1',
      category: "دسته شماره فلان",
      title: "محصول شماره 1",
      price: "20.000 تومان",
      status: "فعال",
      stock: "10",
      likes: "30",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "category", title: "دسته " },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "status", title: "وضعیت" },
    { field: "stock", title: "موجودی" },
    { field: "likes", title: "لایک ها" },

  ];

  const additinalElements = (itemId) => {
    return (
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
    );
  };

  const additinalField = {
    title: 'عملیات',
    elements: (itemId)=> additinalElements(itemId)
  }

  return (
    <div className="w-full my-3 bg-gradient-custom backdrop-blur-[100px] p-2 lg:p-6 rounded-xl shadow-lg overflow-x-auto">
      {/* جدول */}
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additinalField={additinalField}
      />

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          <GrFormNextLink />
        </button>
        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          1
        </button>
        <button className="px-3 py-1 mx-1 bg-[#0075ff] text-white rounded-lg">
          2
        </button>
        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          3
        </button>

        <button className="px-3 py-1 mx-1 bg-[#bbd9fc] hover:bg-[#0075ff] rounded-lg">
          <GrFormPreviousLink />
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
