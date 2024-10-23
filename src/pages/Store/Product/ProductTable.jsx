import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { PiSubsetProperOf } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AddProduct from "./AddProduct";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import ModalBtn from "../../../component/Modal/ModalBtn";
import { useParams } from "react-router-dom";

const ProductTable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false); // باز و بستن مدال

  const handleGetCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInData rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

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
        additionalElement={<ModalBtn onClick={() => setshowModal(true)} />} // باز و بستن مدال
      />

      {/* باز و بستن مدال */}
      {showModal && (
        <AddProduct>
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddProduct>
      )}
    </>
  );
};

export default ProductTable;
