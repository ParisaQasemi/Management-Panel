import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Actions from "./tableAddition/Actions";
import ModalBtn from "../../../component/Modal/ModalBtn";
import PaginatiedDataTable from "../../../component/Pagination/PaginatiedDataTable";
import { deleteUserService, getAllPaginatedUsersService } from "../../../services/users";
import { Alert, Confirm } from "../../../utils/alert";

const UsersTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "user_name", title: "نام کاربری" },
    {
      field: null,
      title: "نام",
      elements: (rowData) =>
        `${rowData.first_name || ""} ${rowData.last_name || ""}`,
    },
    { field: "phone", title: "شماره تلفن" },
    { field: "email", title: "ایمیل" },
    {
      field: null,
      title: "جنسیت",
      elements: (rowData) => (rowData.gender == 1 ? "آقا" : "خانم"),
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions rowData={rowData} handleDeleteUser={handleDeleteUser} />
      ),
    },
  ];
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از شماره تماس یا ایمیل را وارد کنید",
  };

  const handleGetUsers = async (page, count, char) => {
    setLoading(true);
    const res = await getAllPaginatedUsersService(page, count, char);
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data.data);
      setPageCount(res.data.last_page);
    }
  };

  const handleSearch = (char) => {
    setSearchChar(char);
    handleGetUsers(1, countOnPage, char);
  };

  const handleDeleteUser = async (user)=>{
    if (await Confirm("حذف کاربر",`آیا از حذف ${user.user_name} اطمینان دارید؟`)) {
      const res = await deleteUserService(user.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        handleGetUsers(currentPage, countOnPage, searchChar)
      }
    }
  }

  useEffect(() => {
    handleGetUsers(currentPage, countOnPage, searchChar);
  }, [currentPage]);

  const handleOpenModal = () => {
    navigate("add-user");
  };

  return (
    <>
      <PaginatiedDataTable
        tableData={data}
        dataInfo={dataInfo}
        searchParams={searchParams}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        handleSearch={handleSearch}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />
      <Outlet context={{ setData }} />
    </>
  );
};

export default UsersTable;
