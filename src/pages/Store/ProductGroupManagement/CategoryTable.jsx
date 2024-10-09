import React from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { PiSubsetProperOf } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CategoryTable = () => {
  const data = [
    {
      id: "1",
      category: "frontEnd",
      title: "React",
      price: "$ 500",
      stock: "5",
      like: "2",
      status: "1",
    },
    {
      id: "2",
      category: "frontEnd",
      title: "JavaScript",
      price: "$ 330",
      stock: "6",
      like: "7",
      status: "2",
    },
    {
      id: "3",
      category: "frontEnd",
      title: "TypeScript",
      price: "$ 330",
      stock: "6",
      like: "7",
      status: "2",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElements(itemId),
  };

  const additionalElements = (itemId) => {
    return (
      <>
        <button className="mx-1 cursor-pointer text-blue-500" title="زیرمجموعه">
          <PiSubsetProperOf />
        </button>

        <button className="mx-1 cursor-pointer text-yellow-500" title="ویرایش">
          <FaEdit />
        </button>

        <button className="mx-1 cursor-pointer text-green-500" title="افزودن">
          <IoMdAdd />
        </button>

        <button className="mx-1 cursor-pointer text-red-500" title="حذف">
          <MdDelete />
        </button>
      </>
    );
  };

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={2}
      />
    </>
  );
};

export default CategoryTable;
