import { elements } from "chart.js";
import React, { useEffect, useState } from "react";
import Actions from "./tableAddition/Actions";
import { Outlet, useNavigate } from "react-router-dom";
import ModalBtn from "../../../component/Modal/ModalBtn";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { getAllProductTitlesService } from "../../../services/products";

const RoleTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "description", title: "توضیحات" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions rowData={rowData} handleDeleteRole={handleDeleteRole} />
      ),
    },
  ];

  const searchParams = {
    title: "",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllRoles = async () => {
    setLoading(true);
    const res = await getAllProductTitlesService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteRole = async () => {};

  useEffect(() => {
    handleGetAllRoles();
  }, []);

  const handleOpenModal = () => {
    navigate("add-role");
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        numOfPage={8}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />
      <Outlet context={{ setData }} />
    </>
  );
};

export default RoleTable;
