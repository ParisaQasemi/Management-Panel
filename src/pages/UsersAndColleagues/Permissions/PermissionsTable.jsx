import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { getAllPermissionsService } from "../../../services/users";

const PermissionsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const dataInfo = [
      { field: "id", title: "#" },
      { field: "title", title: "عنوان" },
      { field: "description", title: "توضیحات" },
      { field: "category", title: "عنوان دسته" }      
    ];
  
    const searchParams = {
      title: "عنوان",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchField: "description",
    };
  
    const handleGetAllPermissions = async ()=>{
      setLoading(true)
      const res = await getAllPermissionsService();
      res && setLoading(false)
      if (res.status === 200) {
          setData(res.data.data);
      }
    }
  
    useEffect(()=>{
        handleGetAllPermissions()
    },[])

  return (
    <PaginationTable
    data={data}
    dataInfo={dataInfo}
    numOfPAge={8}
    searchParams={searchParams}
    loading={loading}
    />
  );
};

export default PermissionsTable;
