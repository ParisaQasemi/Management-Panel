import React, { useContext, useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import AddBrands from "./AddBrands";
import { apiPath } from "../../../services/httpService";
import Actions from "./tableAdditional/Actions";
import { getAllBrandsService } from "../../../services/Brands";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { CategoryContext } from "../../../context/CategoryContext";

const BrandsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const { setEditId } = useContext(CategoryContext);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },
  ];

  const additionField = [
    {
      title: "لوگو",
      elements: (rowData) =>
        rowData.logo ? (
          <img src={apiPath + "/" + rowData.logo} width="40" />
        ) : null,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
  };

  const handleGetAllBrands = async () => {
    setLoading(true);
    const res = await getAllBrandsService();
    console.log(res);
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  useEffect(() => {
    handleGetAllBrands();
  }, []);

  const handleOpenModal = () => {
    setEditId(null);
    setshowModal(true);
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={5}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />

      {showModal && (
        <AddBrands setData={setData}>
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn  />
          </button>
        </AddBrands>
      )}

    </>
  );
};

export default BrandsTable;
