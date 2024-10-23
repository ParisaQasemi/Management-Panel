import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { deleteCategoryService, getCategoriesService } from "../../../services/category";
import Actions from "./tableAdditons/Actions";
import ShowInData from "./tableAdditons/showInData";
import { Outlet, useParams } from "react-router-dom";
import { convertDateToJalali } from "../../../utils/convertDate";
import ModalBtn from "../../../component/Modal/ModalBtn";
import AddCategory from "./AddCategory";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { Alert, Confirm } from "../../../utils/alert";

const CategoryTable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);

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

  const handleDeleteCategory = async (rowData)=> {
    if(await Confirm('حذف دسته بندی' ,`آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
      try {
        const res = await deleteCategoryService(rowData.id)
        if(res.status == 200) {
          setData(data.filter(d=>d.id != rowData.id))
          Alert('انجام شد', res.data.message, 'success')
        }
      } catch (error) {

      }
    }
  }

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
      elements: (rowData) => <Actions rowData={rowData} handleDeleteCategory={handleDeleteCategory}/>,
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
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={5}
        setForceRender={setForceRender}
        loading={loading}
        additionalElement={<ModalBtn onClick={() => setshowModal(true)} />}  // باز و بستن مدال
      />

      {showModal && (
        <AddCategory>
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddCategory>
      )}
    </>
  );
};

export default CategoryTable;
