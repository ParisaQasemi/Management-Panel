import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PaginationTable from "../../../../component/Pagination/PaginationTable";
import PrevPageButton from "../../../../component/authForm/PrevPageButton";
import {
  deleteCategoryAttrService,
  getCategoryAttrsService,
} from "../../../../services/categoryAttr";
import { Alert, Confirm } from "../../../../utils/alert";
import AddAtrrs from "./AddAtrrs";

const Attributes = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attrToEdit, setAttrToEdit] = useState(null)
  const [reInitValues, setReInitValues] = useState(null)


  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
    {
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <AttrAction rowData={rowData}
      attrToEdit={attrToEdit} setAttrToEdit={setAttrToEdit}
      handleDeleteCategoryAttr={handleDeleteCategoryAttr} />,
    },
  ];

  // const additionField = [
  //   {
  //     title: "نمایش در فیلتر",
  //     elements: (rowData) => <ShowInFilter rowData={rowData} />,
  //   },
  //   {
  //     title: "عملیات",
  //     elements: (rowData) => <AttrAction rowData={rowData}
  //     attrToEdit={attrToEdit} setAttrToEdit={setAttrToEdit}
  //     handleDeleteCategoryAttr={handleDeleteCategoryAttr} />,
  //   },
  // ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(location.state.categoryData.id);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);

  useEffect(()=> {
    if(attrToEdit) setReInitValues({
      title: attrToEdit.title,
      unit: attrToEdit.unit,
      in_filter: attrToEdit.in_filter ? true : false
    })
    else setReInitValues(null)
  }, [attrToEdit])


  const handleDeleteCategoryAttr = async (attr)=>{
    if( await Confirm(`حذف ${attr.title}`, 'آیا از حذف رکورد اطمینان دارید؟')) {
      try {
        const res = await deleteCategoryAttrService(attr.id)
        if(res.status == 200) {
          Alert('انجام شد', res.data.message, 'success')
          setData(lastData=>[...lastData].filter(d=>d.id != attr.id))
        }
      }
      catch (error){

      }
    }
  }



  return (
    <>
      <h3 className="font-bold text-xl text-center">
        مدیریت ویژگی های دسته بندی
      </h3>
      <h6 className="text-center my-3">
         ویژگی : 
        <span className="text-blue-400">
         { location.state.categoryData.title } 
        </span>
      </h6>

      <div className="p-6 ">

        {/* <!-- بخش بالای حدول --> */}
        <AddAtrrs 
        reInitValues={reInitValues}
        location={location}
        setData={setData}
        attrToEdit={attrToEdit}
        setAttrToEdit={setAttrToEdit} 
        />

        <div className="flex justify-end">
          <PrevPageButton />
        </div>

        {/* <!-- جدول --> */}
        <PaginationTable
          data={data}
          dataInfo={dataInfo}
          // additionField={additionField}
          numOfPage={5}
          searchParams={searchParams}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Attributes;
