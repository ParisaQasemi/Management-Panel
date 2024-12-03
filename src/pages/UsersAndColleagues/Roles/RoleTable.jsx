import React, { useEffect, useState } from "react";
import Actions from "./tableAddition/Actions";
import { Outlet, useNavigate } from "react-router-dom";
import ModalBtn from "../../../component/Modal/ModalBtn";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import { Alert, Confirm } from "../../../utils/alert";
import { deleteRoleService, getAllRolesService } from "../../../services/users";

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
    const res = await getAllRolesService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteRole = async (role) => {
    if(await Confirm(role.title, 'آیا از حذف این نقش اطمینان دارید؟')){
        const res = await deleteRoleService(role.id)
        if(res.status === 200){
            Alert('انجام شد', res.data.message, 'success')
            setData(old=>old.filter(d=>d.id != role.id))
        }
    }
  };

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
