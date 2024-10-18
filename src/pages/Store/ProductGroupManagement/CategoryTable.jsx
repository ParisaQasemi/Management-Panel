import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { getCategoriesService } from "../../../services/category";
import Actions from "./tableAdditons/Actions";
import ShowInData from "./tableAdditons/showInData";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { convertDateToJalali } from "../../../utils/convertDate";

const CategoryTable = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0)
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
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
      <Outlet />
      {data.length ? (
        <PaginationTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          searchParams={searchParams}
          numOfPage={5}
          setForceRender={setForceRender}
        />
      ) : (
        <h3 className="text-center text-red-600 font-bold mt-5">
          هیچ دسته بندی یافت نشد
        </h3>
      )}
    </>
  );
};

export default CategoryTable;
