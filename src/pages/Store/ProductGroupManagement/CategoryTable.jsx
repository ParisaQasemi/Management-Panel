import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { getCategoriesService } from "../../../services/category";
import { Alert } from "../../../utils/alert";
import Actions from "./tableAdditons/Actions";
import ShowInData from "./tableAdditons/showInData";

const CategoryTable = () => {
  const [data, setData] = useState([]);
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status == 200) {
        console.log(res.data);
        setData(res.data.data)
      } else {
        Alert("مشکل !", res.data.message, "error");
      }
    } catch (error) {
      Alert("مشکل !", "مشکلی از سمت سرور رخ داده" , "error");
    }
  };

  useEffect(()=> {
    handleGetCategories()
  }, [])

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد"},
    { field: "created_at", title: "تاریخ"},
  ];

  const additionField = [
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInData rowData={rowData}/>,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData}/>,
    }
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
        numOfPage={5}
      />
    </>
  );
};

export default CategoryTable;
