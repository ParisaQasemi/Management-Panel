import React from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { PiSubsetProperOf } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const ProductTable = () => {
  const data = [
    {
      id: "1",
      category: "laptop",
      title: "LapTop - asus",
      price: "$ 2000",
      stock: "5",
      like: "2",
      status: "1",
    },
    {
      id: "2",
      category: "laptop",
      title: "Mobail",
      price: "$ 330",
      stock: "6",
      like: "7",
      status: "2",
    },
    {
      id: "3",
      category: "laptop",
      title: "tablet",
      price: "$ 330",
      stock: "6",
      like: "7",
      status: "2",
    },
    {
      id: "4",
      category: "laptop",
      title: "phone",
      price: "$ 330",
      stock: "6",
      like: "7",
      status: "2",
    },
    {
      id: "5",
      category: "laptop",
      title: "phone",
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

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
      />
    </>
  );
};

export default ProductTable;
